"use client";

import Bridge from "../..";
import BRIDGE from "../../constants";

interface RequestProps<ReqBody = unknown, ResBody = unknown> {
  requestMessage: ReqBody;
  responseCallback?: (resMessage: ResBody) => void;
  onErrorCallback?: (error: Error) => void;
}

export const useBridge = <ReqBody = unknown, ResBody = unknown>() => {
  const request = ({
    requestMessage,
    responseCallback,
    onErrorCallback,
  }: RequestProps<ReqBody, ResBody>) => {
    try {
      if (typeof window === "undefined") return;

      Bridge.createMessage({
        ack: BRIDGE.BLANK,
        body: requestMessage,
      }).send<ResBody>(({ body }) => {
        try {
          if (responseCallback && body) return responseCallback(body);
        } catch (error) {
          if (onErrorCallback) onErrorCallback(error as Error);
        }
      });
    } catch (error) {
      console.error("Error in useBridge request", error);
    }
  };

  return { request };
};
