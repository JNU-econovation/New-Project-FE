import { ErrorResponse } from "@/types/api";
import axios, { AxiosError, AxiosResponse } from "axios";

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
  async (error: AxiosError<ErrorResponse>) => {
    const apiError: ErrorResponse = {
      status: "error",
      errorCode: error.response?.data.errorCode || "UNKNOWN_ERROR",
      message:
        error.response?.data?.message || "알 수 없는 오류가 발생했습니다.",
    };
    return Promise.reject(apiError);
  }
);

export default publicApi;
