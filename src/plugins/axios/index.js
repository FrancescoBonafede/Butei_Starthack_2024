import axios from 'axios';
let axiosInstance = axios.create({});

axiosInstance.interceptors.response.use(
  (response) => { 
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { axios, axiosInstance };
