import { api } from './apiConfig'

// READ All Favorites for Single User (Auth Req)
export const getUserFavorites = async (user_id) => {
    const res = await api.get(`/users/${user_id}/favorites`)
    return res.data
}

// CREATE Favorite (Auth Req)
export const addFavorite = async (product_id, user_id) => {
    const res = await api.post(`/users/${user_id}/favorites`, {product_id, user_id})
    return res.data
}

// DELETE Favorite (Auth Req)
export const deleteFavorite = async (user_id, favorite_id) => {
    const res = await api.delete(`/users/${user_id}/favorites/${favorite_id}`)
    return res.data
}
