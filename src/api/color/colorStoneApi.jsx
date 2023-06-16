import axios from 'axios';

export const colorStoneApi = axios.create({
  baseURL: '/api/colorsstones'
});