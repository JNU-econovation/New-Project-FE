import { useBridge } from "@/hooks/common/useBridge";
import { useCallback } from "react";

const useRouteMyInfoBridge = () => {
  const { request } = useBridge();

  return useCallback(() => {
    request({
      requestMessage: {
        method: "POST",
        name: "route-my-info",
      },
    });
  }, [request]);
};

export default useRouteMyInfoBridge;
