import { isInStackFrame } from "@/service/StackLink";
import axios, { AxiosResponse } from "axios";

const authenticatedApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, ""),
  timeout: 5000,
  headers:
    process.env.NODE_ENV === "development"
      ? {
          "ngrok-skip-browser-warning": "true",
          "Content-Type": "application/json",
          Accept: "*/*",
        }
      : {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
});

authenticatedApi.interceptors.request.use(
  async (config) => {
    if (isInStackFrame()) {
      await new Promise((resolve) => setTimeout(resolve, 99999));
    }

    const token = localStorage.getItem("accessToken");

    // if (!token) {
    //   throw new Error("No access token found in local storage");
    // }

    if (token) config.headers["Authorization"] = `Bearer ${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authenticatedApi.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export default authenticatedApi;
