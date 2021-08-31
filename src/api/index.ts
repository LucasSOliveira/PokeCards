import axios from 'axios'

const baseURL = 'https://api.pokemontcg.io/v2/';
const responseType = 'json';
const instance = axios.create({ baseURL, responseType });

export default instance;
