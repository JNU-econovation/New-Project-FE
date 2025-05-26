import { useBridge } from "@/hooks/common/useBridge";
import { useCallback } from "react";

const useStartTravelBridge = () => {
  const { request } = useBridge();

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
