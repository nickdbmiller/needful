import { useState, useEffect } from "react"

import { getAllProducts } from "../services/products"

import ProductCard from "./ProductCard"

export default function Carousel() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await getAllProducts()
            setProducts(res)
        }
        fetchProducts()
    }, [])

    return (
        <div
            className="md:grid md:grid-cols-4 md:p-10 2xl:grid-cols-5"
        >
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
    )
}
