import { API_URL } from "@/constants";
import axios, { type AxiosResponse } from "axios";

const axiosInterceptors = axios.create({
  baseURL: API_URL, // Replace with your backend URL and port
  timeout: 10000, // Optional: specify request timeout in milliseconds
  headers: {
    Authorization: `Bearer ${localStorage.getItem("authToken") || ""}`, // Optional: set authorization token
  },
});

export const setAuthTokenOnAxiosInterceptor = (authToken: string) => {
  axiosInterceptors.defaults.headers["Authorization"] = `Bearer ${authToken}`;
};

axiosInterceptors.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data } = response;
    return {
      ...response,
      data: data?.data || data,
    };
  }
  // Optional: handle errors
  // (error: AxiosError) => {
  //   Logger.logError(error);
  //   return Promise.reject(error);
  // }
);

export default axiosInterceptors;
