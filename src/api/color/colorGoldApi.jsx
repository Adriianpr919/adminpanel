import axios from 'axios';

export const colorGoldApi = axios.create({
  baseURL: '/api/colorsgolds'
});