import { sendMessageAsync } from "@/service/bridge";
import {
  MessageEventRequestData,
  MessageEventResponseData,
} from "@/types/bridge";
import axios, { AxiosResponse } from "axios";

const authenticatedApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`?.replace(/\/$/, ""),
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
});

interface Token {
  accessToken: string;
  refreshToken: string;
  accessTokenExpiredTime: number;
}

authenticatedApi.interceptors.request.use(
  async (config) => {
    // const token = localStorage.getItem("authToken");
    // const token = await sendMessageAsync<
    //   MessageEventRequestData,
    //   MessageEventResponseData<Token>
    // >({
    //   method: "GET",
    //   name: "get-token",
    // }).then((response) => response);

    // console.log("Token:", token);

    const token = "asdfasdfasdf"; // Temporary hardcoded token for testing

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
