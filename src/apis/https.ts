import axios from "axios";

export const https = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
  headers: {
    "Content-Type": "application/json",
  },
});

https.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
  }

  return config;
});

https.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // Todo: 토큰 갱신 로직 추가
    }

    return Promise.reject(error);
  }
);
