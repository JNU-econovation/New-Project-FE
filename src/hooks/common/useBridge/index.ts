"use client";

import type {
  MessageEventRequestData,
  MessageEventResponseData,
} from "@/types/bridge";
import { useEffect } from "react";

type EventHandler = (event: MessageEvent) => void;

interface RequestProps<ReqBody = unknown, ResBody = unknown> {
  requestMessage: MessageEventRequestData<ReqBody>;
  responseCallback?: (resMessage: MessageEventResponseData<ResBody>) => void;
  onErrorCallback?: (error: Error) => void;
}

// key : bridge name
// value : event handler
const RcvBuffer: {
  [name: string]: EventHandler;
}[] = [];

export const useBridge = () => {
  useEffect(() => {
    return () => {
      RcvBuffer.map((item) => Object.values(item)[0]).forEach((handler) => {
        window.removeEventListener("message", handler);
      });
      RcvBuffer.length = 0;
    };
  }, []);

  const request = <ReqBody = unknown, ResBody = unknown>({
    requestMessage,
    responseCallback,
    onErrorCallback,
  }: RequestProps<ReqBody, ResBody>) => {
    try {
      if (typeof window === "undefined") return;

      window.ReactNativeWebView?.postMessage(JSON.stringify(requestMessage));
      document.ReactNativeWebView?.postMessage(JSON.stringify(requestMessage));

      const handler = (event: MessageEvent) => {
        try {
          const rsvMessage = JSON.parse(
            event.data
          ) as MessageEventResponseData<ResBody>;
          RcvBuffer.map((item) => Object.keys(item)[0]).forEach(
            (name, index) => {
              if (name === rsvMessage.name) {
                window.removeEventListener("message", RcvBuffer[index][name]);
                RcvBuffer.splice(index, 1);

                if (!responseCallback) return;
                responseCallback(rsvMessage);
              }
            }
          );
        } catch (error) {
          if (onErrorCallback) return onErrorCallback(error as Error);
          console.error("Error in useBridge response", error);
          console.error("Error in useBridge response", event.data);
        }
      };

      RcvBuffer.push({
        [requestMessage.name]: handler,
      });

      window.addEventListener("message", handler);
    } catch (error) {
      console.error("Error in useBridge request", error);
    }
  };

  return { request };
};
