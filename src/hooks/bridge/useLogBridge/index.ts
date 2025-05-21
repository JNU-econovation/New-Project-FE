import { useBridge } from "@hooks/common/useBridge";
import { useCallback } from "react";

const useLogBridge = () => {
  const { request } = useBridge();

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
