"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    ReactNativeWebView?: {
      postMessage(message: string): void;
    };
  }
  interface Document {
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

type Flag = 0 | 1;

interface WebviewHandshake {
  name: "webview-handshake";
  flag: {
    syn: Flag;
    ack: Flag;
  };
}

const TIMEOUT = 1000;

function postMessage<Data>(
  message: MessageEventResponseData<Data> | WebviewHandshake
) {
  window.ReactNativeWebView?.postMessage(JSON.stringify(message));
  document.ReactNativeWebView?.postMessage(JSON.stringify(message));
}

const Bridge = ({ onRequest }: BridgeProps) => {
  useEffect(() => {
    const handleMessage = ({ data }: MessageEvent) => {
      try {
        const requestMessage =
          typeof data === "string" ? JSON.parse(data) : data;

        if (requestMessage && requestMessage.method && requestMessage.name) {
          const responseMessage = onRequest(
            requestMessage as MessageEventRequestData
          );
          postMessage(responseMessage);
        }
      } catch (error) {
        console.error("메시지 처리 중 오류 발생:", error);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => window.removeEventListener("message", handleMessage);
  }, [onRequest]);

  useEffect(() => {
    const webviewReady = (syn: Flag, ack: Flag) => {
      postMessage({ name: "webview-handshake", flag: { syn, ack } });
      postMessage({ name: "webview-handshake", flag: { syn, ack } });
    };
    webviewReady(1, 0);

    const timeoutId = setTimeout(() => {
      webviewReady(1, 0);
    }, TIMEOUT);

    const handleMessage = (event: MessageEvent) => {
      event.stopPropagation();
      try {
        const {
          name,
          flag: { syn, ack },
        } =
          typeof event.data === "string" ? JSON.parse(event.data) : event.data;

        if (name === "webview-handshake" && syn === 1 && ack === 1) {
          webviewReady(0, 1);

          if (timeoutId) clearTimeout(timeoutId);

          window.removeEventListener("message", handleMessage);
        }
      } catch (error) {
        console.error("handshake 중 에러 발생:", error);
      }
    };

    window.addEventListener("message", handleMessage);
  }, []);

  return null;
};

export default Bridge;
