import { useBridge } from "@/hooks/common/useBridge";
import { useCallback } from "react";

const useRouteHikingLogBridge = () => {
  const { request } = useBridge();

  return useCallback(() => {
    request({
      requestMessage: {
        method: "POST",
        name: "route-hiking-log",
      },
    });
  }, [request]);
};

export default useRouteHikingLogBridge;
