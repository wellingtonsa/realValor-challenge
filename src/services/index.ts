import { create } from 'apisauce';

const api = create({
    baseURL: 'https://api.coindesk.com/v1/bpi'
})

export default api;