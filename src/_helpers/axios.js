import axios from 'axios';

const API_KEY="592fd8fc"
const baseURL = `https://www.omdbapi.com/?apikey=${API_KEY}`;


export const axiosClient = axios.create({
    baseURL,
});