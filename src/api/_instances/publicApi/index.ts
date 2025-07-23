import axios, { AxiosResponse } from "axios";

const publicApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`?.replace(/\/$/, ""),
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

publicApi.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export default publicApi;
