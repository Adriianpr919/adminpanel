import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://194.195.211.139:5000/'
});