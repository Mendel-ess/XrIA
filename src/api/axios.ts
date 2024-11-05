import axios from 'axios';

export const apiInstance = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 10000,
    withCredentials: false, // Importante para CORS
    headers: {
         'Accept': '*/*',
    }
});

