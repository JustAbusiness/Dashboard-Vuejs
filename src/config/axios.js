import axios from 'axios';

axios.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        return Promise.reject(error);
    }        
    
);

axios.defaults.withCredentials = true;         // INFO ABOUT COOKIES
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';

export default axios