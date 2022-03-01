import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus, faHeart } from '@fortawesome/free-solid-svg-icons';

import { getOneProduct } from '../services/products';
import { getProductReviews } from '../services/reviews';
import { getUserFavorites, addFavorite, deleteFavorite } from '../services/favorites';

import Carousel from "../components/Carousel"
import ProductCard from '../components/ProductCard';
import ReviewCard from '../components/ReviewCard';
import ReviewForm from '../components/ReviewForm';

export default function ProductDetailScreen(props) {
    const [product, setProduct] = useState({})
    const [reviews, setReviews] = useState([])
    const [favorite, setFavorite ] = useState([])
    const [reviewToggle, setReviewToggle] = useState(true)
    const [favToggle, setFavToggle] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        const fetchProduct = async () => {
            const res = await getOneProduct(id)
            console.log("Product", res.id)
            setProduct(res)
        }

        const fetchReviews = async () => {
            const res = await getProductReviews(id)
            console.log("Reviews", res)
            setReviews(res)
        }

        const fetchFavorites = async () => {
            const res = await getUserFavorites(props.currentUser.id)
            console.log("Favs", res)
            const filteredFavs = res.filter((fav) => fav.product_id === product.id) 
            if (filteredFavs.length > 0) {
                setFavorite(filteredFavs)
                setFavToggle(true)
            }
        }

        fetchProduct()
        fetchReviews()

        if (props.currentUser) fetchFavorites()
    }, [id, props.currentUser, favToggle])

    const handleFavToggle = () => {
        if (favToggle) {
            console.log(favorite)
            deleteFavorite(props.currentUser.id, favorite[0].id)
        } else {
            console.log(parseInt(id), props.currentUser.id)
            addFavorite(parseInt(id), props.currentUser.id)
        }
        setFavToggle(!favToggle)
    }

    return (
        <div
            className="font-noto-display"
        >
            {/* Product Title */}
            <h2
                className="text-4xl mb-2"
            >
                {product.title} Details
            </h2>
            <div
                className='bg-rose-700 p-6 rounded-2xl m-6'
            >
                <ProductCard
                    key = {product.id}
                    id = {product.id}
                    title = {product.title}
                    price = {product.price}
                    imgSrc = {product.image_url}
                    imgAlt = {product.img_alt}
                />
            </div>

            {/* Favorites Button */}
            {
                props.currentUser ?
                    favToggle ?
                        <button
                            className='flex items-center text-rose-700'
                            onClick={() => handleFavToggle()}
                        >
                            <FontAwesomeIcon className="text-2xl" icon={faHeart} />
                        </button>
                    :
                        <button
                            className='flex items-center text-rose-1000'
                            onClick={() => handleFavToggle()}
                        >
                            <FontAwesomeIcon className="text-2xl" icon={faHeart} />
                        </button>
                :
                    null

            }

            {/* Add to Cart Button */}
            <button
                className="bg-rose-1000 text-rose-700 hover:text-rose-100
                hover:-translate-y-0.5 transform transition
                focus:outline-none focus:ring focus:ring-offset-2 focus:ring-rose-900 focus:ring-opacity-50
                active:text-rose-200 rounded-2xl py-2 px-6 my-6"
                onClick={() => alert("Cart feature coming soon!")}
            >
                Add to Cart
            </button>

            {/* Product Description */}
            <p
                className="font-noto-display text-md text-rose-1000 bg-rose-300 p-2 my-3"
            >
                {product.description}
            </p>

            {/* Add to Cart Button */}
            <button
                className="bg-rose-1000 text-rose-700 hover:text-rose-100
                hover:-translate-y-0.5 transform transition
                focus:outline-none focus:ring focus:ring-offset-2 focus:ring-rose-900 focus:ring-opacity-50
                active:text-rose-200 rounded-2xl py-2 px-6 my-6"
                onClick={() => alert("Cart feature coming soon!")}
            >
                Add to Cart
            </button>

            {/* Review Section */}
            <section
                className="font-noto-display text-2xl text-rose-1000 bg-rose-500 p-2 my-3"
            >
                <div
                    className='flex justify-between'
                >
                    <h3>Reviews</h3>
                    {/* Conditionally renders new review button */}
                    {
                        props.currentUser && reviewToggle ?
                            <button
                                className='flex items-center'
                                onClick={() => setReviewToggle(!reviewToggle)}
                            >
                                <FontAwesomeIcon className="text-2xl" icon={faSquarePlus} />
                                <h6>new</h6>
                            </button>
                        :
                            null
                    }
                </div>

                {/* Conditionally renders reviews if there are any. */}
                {
                    reviews.length === 0 || reviews == null ?
                        <h4
                            className='bg-rose-100 rounded-2xl p-3'
                        >
                            No Reviews yet!</h4>
                    :
                        reviewToggle ?
                            reviews?.map((review) => {
                                return (
                                    <ReviewCard
                                        key = {review.id}
                                        reviewToggle = {reviewToggle}
                                        setReviewToggle = {setReviewToggle}
                                        currentUser = {props.currentUser}
                                        reviewId = {review.id}
                                        productId = {review.product_id}
                                        userId = {review.user_id}
                                        title = {review.title}
                                        stars = {review.stars}
                                        content = {review.content}
                                    />
                                )
                            })
                        :
                            <ReviewForm />
                }
            </section>

            {/* Add to Cart Button */}
            <button
                className="bg-rose-1000 text-rose-700 hover:text-rose-100
                hover:-translate-y-0.5 transform transition
                focus:outline-none focus:ring focus:ring-offset-2 focus:ring-rose-900 focus:ring-opacity-50
                active:text-rose-200 rounded-2xl py-2 px-6 my-6"
                onClick={() => alert("Cart feature coming soon!")}
            >
                Add to Cart
            </button>

            <div
                className="font-noto-display text-2xl text-rose-1000 bg-rose-300 p-2 my-3"
            >
                <h3>Other Products</h3>
                <Carousel />
            </div>
        </div>
    )
}
