import axios from 'axios'

const api = axios.create({
    baseURL: 'https://61b9881738f69a0017ce60ac.mockapi.io/'
})

export default api;