import axios, { AxiosResponse } from "axios";

const authenticatedApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`?.replace(/\/$/, ""),
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
});

authenticatedApi.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authenticatedApi.interceptors.response.use(
  (response: AxiosResponse) => {
    response.data = response.data.data || {};
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export default authenticatedApi;
