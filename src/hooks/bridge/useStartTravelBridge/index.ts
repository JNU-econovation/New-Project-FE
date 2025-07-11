import { useBridge } from "@/service/bridge/hooks/useBridge";
import { useCallback } from "react";
import type {
  MessageEventRequestData,
  MessageEventResponseData,
} from "@/types/bridge";

const useStartTravelBridge = () => {
  const { request } = useBridge<
    MessageEventRequestData,
    MessageEventResponseData
  >();

  return useCallback(() => {
    request({
      requestMessage: {
        name: "start-travel",
        method: "POST",
      },
    });
  }, [request]);
};

export default useStartTravelBridge;
