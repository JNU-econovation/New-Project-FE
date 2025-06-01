import { useBridge } from "@/hooks/common/useBridge";
import { useCallback } from "react";

const useRouteChangePasswordBridge = () => {
  const { request } = useBridge();

  return useCallback(() => {
    request({
      requestMessage: {
        method: "POST",
        name: "route-change-password",
      },
    });
  }, [request]);
};

export default useRouteChangePasswordBridge;
