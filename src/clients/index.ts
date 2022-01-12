import axios, { AxiosResponse } from 'axios';
import { ISuperHeroGetByName, Result } from '../types';

const api = axios.create({
    baseURL: 'https://www.superheroapi.com/api.php/4912091048841931'
});

const getByName = async (name: string): Promise<AxiosResponse<ISuperHeroGetByName>> => {
    return api.get(`/search/${encodeURIComponent(name)}`);
}

const getByHeroId = async (id: string): Promise<AxiosResponse<Result>> => {
    return api.get(`/${encodeURIComponent(id)}`);
}

export {
    getByName,
    getByHeroId
}