import { useBridge } from "@/hooks/common/useBridge";
import { useCallback } from "react";

type RouteBridgePath =
  | "change-password"
  | "check-terms"
  | "course-bookmark"
  | "course-detail"
  | "course-search"
  | "faq"
  | "hiking-log"
  | "inquiry"
  | "manual-detail"
  | "mountain-course"
  | "my-info"
  | "notification-setting"
  | "start-travel";

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
