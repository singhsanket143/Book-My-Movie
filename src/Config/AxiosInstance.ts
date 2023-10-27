import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = import.meta.env.VITE_BASE_URL;
axiosInstance.defaults.withCredentials = true;


export default axiosInstance;