import { useBridge } from "@/hooks/common/useBridge";
import { useCallback } from "react";

const useRouteCheckTermsBridge = () => {
  const { request } = useBridge();

  return useCallback(() => {
    request({
      requestMessage: {
        method: "POST",
        name: "route-check-terms",
      },
    });
  }, [request]);
};

export default useRouteCheckTermsBridge;
