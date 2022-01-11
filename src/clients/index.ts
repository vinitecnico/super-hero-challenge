import axios, { AxiosResponse } from 'axios';
import { ISuperHeroGetByName } from '../types';

const api = axios.create({
    baseURL: 'https://www.superheroapi.com/api.php/4912091048841931'
});

const getByName = async (name: string): Promise<AxiosResponse<ISuperHeroGetByName>> => {
    return api.get(`/search/${encodeURIComponent(name)}`);
}

// const getByProductId = async (productId) => {
//     return api.get(`/items/${encodeURIComponent(productId)}`);
// }

export {
    getByName
}