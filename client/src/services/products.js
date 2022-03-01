import { api } from './apiConfig'

// READ All Products
export const getAllProducts = async () => {
    const res = await api.get('/products')
    return res.data
}

// READ Single Product
export const getOneProduct = async (product_id) => {
    const res = await api.get(`/products/${product_id}`)
    return res.data
}

// CREATE Product (Admin Only)
export const createProduct = async (productData) => {
    const res = await api.post('/products', {product: productData})
    return res.data
}

// UPDATE Product (Admin Only)
export const updateProduct = async (product_id, productData) => {
    const res = await api.put(`/products/${product_id}`, {product: productData})
    return res.data
}

// DELETE Product (Admin Only)
export const deleteProduct = async (product_id) => {
    const res = await api.delete(`/products/${product_id}`)
    return res.data
}
