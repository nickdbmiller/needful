import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";
import { getAllProducts } from "../services/products";

export default function SearchScreen(props) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await getAllProducts()
            // Once we have all products we want to filter it by queried term.
            const filteredProducts = res.filter((prod) => props.query === prod.title || props.query === prod.price.toString() || props.query === prod.category)
            setProducts(filteredProducts)
        }

        fetchProducts()
    }, [props.query])

    return (
        <div>
            <section
                className="flex flex-col items-center font-noto-display"
            >
                <h3
                    className="text-4xl my-2"
                >
                    Searched Term
                </h3>
                
                {
                    products.length > 0 ?
                        products?.map((product) => {
                            return (
                                <ProductCard
                                    key = {product.id}
                                    id = {product.id}
                                    title = {product.title}
                                    price = {product.price}
                                    imgSrc = {product.image_url}
                                    imgAlt = {product.img_alt}
                                />
                            )
                        })
                    :
                        <h3
                            className="bg-rose-1000 text-rose-100"
                        >
                            No products match search term.
                        </h3>
            }
            </section>

            {/* Carousel Section */}
            <div
                className="font-noto-display text-2xl text-rose-1000 bg-rose-300 p-2 my-3"
            >
                <h3>Other Products</h3>
                <Carousel />
            </div>
        </div>
    )
}
