import axios, { AxiosInstance } from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;
const axiosInstance: AxiosInstance = axios.create({
	baseURL,
});

export default axiosInstance;
