import axios from 'axios';

export const sizeApi = axios.create({
  baseURL: '/api/sizes'
});