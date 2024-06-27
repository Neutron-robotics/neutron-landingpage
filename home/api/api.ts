import axios from 'axios';

// I spent enough time trying to use the process.env.NEXT_PUBLIC_NEUTRON_API environment variable
// to set the baseURL, in vain. For the moment the url of the API will be hardcoded here, feel free
// to brave the nightmare of debbuging a container in prod if you want but I believe this is far to be
// the current priority, so please do not commit a change that would be undesirable here.
const api = axios.create({
  baseURL: "https://api.neutron-robotics.com", 
  headers: {
    timeout : 1000,
  }
});

export default api;