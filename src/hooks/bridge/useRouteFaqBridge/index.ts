import { useBridge } from "@/hooks/common/useBridge";
import { useCallback } from "react";

const useRouteFaqBridge = () => {
  const { request } = useBridge();

  return useCallback(() => {
    request({
      requestMessage: {
        method: "POST",
        name: "route-faq",
      },
    });
  }, [request]);
};

export default useRouteFaqBridge;
