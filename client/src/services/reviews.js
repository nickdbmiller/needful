import { api } from './apiConfig'

// READ All Reviews for Single Product
export const getProductReviews = async (product_id) => {
    const res = await api.get(`/products/${product_id}/reviews`)
    return res.data
}

// CREATE Review for Single Product (Auth Req)
export const createReview = async (product_id, reviewData) => {
    const res = await api.post(`/products/${product_id}/reviews`, {review: reviewData})
    return res.data
}

// UPDATE Review (Auth Req)
export const updateReview = async (product_id, review_id, reviewData) => {
    const res = await api.put(`/products/${product_id}/reviews/${review_id}`, { review: reviewData })
    return res.data
}

// DELETE Review (Auth Req)
export const deleteReview = async (product_id, review_id) => {
    const res = await api.delete(`/products/${product_id}/reviews/${review_id}`)
    return res.data
}
