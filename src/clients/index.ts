import axios from 'axios';

const api = axios.create({
    baseURL: 'https://www.superheroapi.com/api.php/4912091048841931'
});

const getByName = async (name: string) => {
    return api.get(`/search/${encodeURIComponent(name)}`);
}

// const getByProductId = async (productId) => {
//     return api.get(`/items/${encodeURIComponent(productId)}`);
// }

export {
    getByName
}