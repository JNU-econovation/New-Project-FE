import { useBridge } from "@/hooks/common/useBridge";
import { useCallback } from "react";

type RouteBridgePath =
  | "course-detail"
  | "start-travel"
  | "mountain-course"
  | "my-info"
  | "hiking-log"
  | "course-bookmark"
  | "faq"
  | "inquiry"
  | "check-terms"
  | "notification-setting"
  | "change-password"
  | "manual-detail";

interface RouteBridgeRequest {
  path: RouteBridgePath;
  routeType: "push" | "replace";
  params?: Record<string, string>[];
}

const useRouteBridge = ({ path, routeType, params }: RouteBridgeRequest) => {
  const { request } = useBridge();

  return useCallback(() => {
    request({
      requestMessage: {
        method: "POST",
        name: "route-to",
        body: {
          path,
          routeType,
          params,
        },
      },
    });
  }, [path, request, routeType, params]);
};

export default useRouteBridge;
