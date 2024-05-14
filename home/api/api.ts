import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_NEUTRON_API, 
  headers: {
    timeout : 1000,
  }
});

export default api;