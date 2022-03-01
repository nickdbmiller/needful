import { useState, useEffect } from "react";

import { getAllProducts } from "../services/products"
import { getUserFavorites } from "../services/favorites";

import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";

export default function FavoritesScreen(props) {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        let favorites = []
        const fetchFavorites = async () => {
            const res = await getUserFavorites(props.currentUser?.id)
            favorites = res.map((fav) => {
                return fav.product_id
            })
        }

        const fetchProducts = async () => {
            const res = await getAllProducts()
            // Once we have all products we want to filter it by the favorites
            const filteredProducts = res.filter((prod) => favorites.includes(prod.id))
            setProducts(filteredProducts)
        }

        fetchFavorites()
        fetchProducts()
    }, [props.currentUser?.id])

    return (
        <div>
            <div
                className="font-noto-display text-2xl text-rose-100 bg-rose-700 p-2 rounded-2xl mx-6 my-3"
            >
                <Hero
                    text = "Need anything? Add it here."
                />
            </div>
            <div
                className="font-noto-display text-2xl text-rose-1000 bg-rose-300 p-2 my-3"
            >
                <h3>Favorites</h3>
                {
                    products.map((product) => {
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
                }
            </div>
        </div>
    )
}
