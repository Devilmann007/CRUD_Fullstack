import axios from 'axios'

const ProductsApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/producto/',
})

export const getProducts = async () => ProductsApi.get()
export const getProduct = (id) => ProductsApi.get(`${id}/`)
export const createProduct = (product) => ProductsApi.post('', product)
export const updateProduct = (id, product) => ProductsApi.put(`${id}/`, product)
export const deleteProduct = (id) => ProductsApi.delete(`${id}/`)