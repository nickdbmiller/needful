import { api } from './apiConfig'

// READ All Products
export const getAllProducts = async () => {
    const resp = await api.get('/products')
    return resp.data
}

// READ Single Product
export const getOneProduct = async (product_id) => {
    const resp = await api.get(`/products/${product_id}`)
    return resp.data
}

// CREATE Product (Admin Only)
export const createProduct = async (productData) => {
    const resp = await api.post('/products', {product: productData})
    return resp.data
}

// UPDATE Product (Admin Only)
export const updateProduct = async (product_id, productData) => {
    const resp = await api.put(`/products/${product_id}`, {product: productData})
    return resp.data
}

// DELETE Product (Admin Only)
export const deleteProduct = async (product_id) => {
    const resp = await api.delete(`/products/${product_id}`)
    return resp.data
}
