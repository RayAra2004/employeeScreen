import axios from 'axios';

const api = axios.create({
  // @ts-expect-error error import env
  baseURL: import.meta.env.VITE_API_URL,
});

export default api;
