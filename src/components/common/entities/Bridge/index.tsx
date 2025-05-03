"use client";

import { useLayoutEffect } from "react";

declare global {
  interface Window {
    ReactNativeWebView?: {
      postMessage(message: string): void;
    };
  }
}

export interface MessageEventResponseData<Data = unknown> {
  status: "success" | "error";
  name: string;
  data?: Data;
}

export interface MessageEventRequestData<Body = unknown> {
  method: "GET" | "POST" | "PUT" | "DELETE";
  name: string;
  body?: Body;
}

interface BridgeProps {
  onRequest: (reqMessage: MessageEventRequestData) => MessageEventResponseData;
}

const Bridge = ({ onRequest }: BridgeProps) => {
  useLayoutEffect(() => {
    const handleMessage = ({ data }: MessageEvent) => {
      const requestMessage = JSON.parse(data) as MessageEventRequestData;
      const responseMessage = onRequest(requestMessage);
      if (!responseMessage) return;
      window.ReactNativeWebView?.postMessage(JSON.stringify(responseMessage));
    };

    window.addEventListener("message", handleMessage);

    return () => window.removeEventListener("message", handleMessage);
  }, [onRequest]);

  return null;
};

export default Bridge;
