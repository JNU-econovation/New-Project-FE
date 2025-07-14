import { useBridge } from "@/service/bridge/hooks/useBridge";
import { useCallback } from "react";
import type {
  MessageEventRequestData,
  MessageEventResponseData,
} from "@/types/bridge";

const useLogBridge = () => {
  const { request } = useBridge<
    MessageEventRequestData,
    MessageEventResponseData
  >();

  return useCallback(
    (message: unknown) => {
      request({
        requestMessage: {
          name: "log-message",
          method: "POST",
          body: message,
        },
      });
    },
    [request]
  );
};

export default useLogBridge;
