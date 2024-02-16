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
axios.defaults.baseURL = 'http://localhost:3000/api';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

export default axios