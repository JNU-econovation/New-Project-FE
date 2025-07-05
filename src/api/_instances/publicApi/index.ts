import axios, { AxiosResponse } from "axios";

const publicApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`?.replace(/\/$/, ""),
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
});

publicApi.interceptors.response.use(
  (response: AxiosResponse) => {
    response.data = response.data.data || {};
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export default publicApi;
