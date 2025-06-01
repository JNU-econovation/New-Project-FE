import { useBridge } from "@/hooks/common/useBridge";
import { useCallback } from "react";

const useRouteNotificationSettingsBridge = () => {
  const { request } = useBridge();

  return useCallback(() => {
    request({
      requestMessage: {
        method: "POST",
        name: "route-notification-settings",
      },
    });
  }, [request]);
};

export default useRouteNotificationSettingsBridge;
