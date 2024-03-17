import axios from "axios";
const dotenv = require("dotenv");
dotenv.config();


const instance = axios.create({
  baseURL: process.env.SERVER_URL,
  withCredentials: true,
  timeout: 10000,
  delayed: true,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
  
  
});

instance.interceptors.request.use(
  (config) => {
    if (config.delayed) {
      return new Promise((resolve) => setTimeout(() => resolve(config), 1000));
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
