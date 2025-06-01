import { useBridge } from "@/hooks/common/useBridge";
import { useCallback } from "react";

const useRouteInquiryBridge = () => {
  const { request } = useBridge();

  return useCallback(() => {
    request({
      requestMessage: {
        method: "POST",
        name: "route-inquiry",
      },
    });
  }, [request]);
};

export default useRouteInquiryBridge;
