import { useBridge } from "@/hooks/common/useBridge";
import { useCallback } from "react";

const useRouteBackBridge = () => {
  const { request } = useBridge();

  return useCallback(() => {
    request({
      requestMessage: {
        method: "POST",
        name: "route-back",
      },
    });
  }, [request]);
};

export default useRouteBackBridge;
