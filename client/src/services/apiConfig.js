import axios from 'axios'

// Different URL's for development and deployed app.
const apiBases = {
    development: 'http://localhost:3000',
    production: 'https://needfulapi.herokuapp.com'
}

const baseUrl = window.location.hostname === 'localhost' ? apiBases.development : apiBases.production

export const api = axios.create({
    baseURL: baseUrl
})
