import axios from 'axios';

const api = axios.create({
  baseURL: "https://api.neutron-robotics.com", 
  headers: {
    timeout : 1000,
  }
});

export default api;