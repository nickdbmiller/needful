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
        <div>
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
