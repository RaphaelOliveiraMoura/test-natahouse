import axios from 'axios';

const api = axios.create({
  baseURL: process.env.START_WARS_API_URL,
});

export default api;
