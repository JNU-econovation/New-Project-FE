import { useBridge } from "@/hooks/common/useBridge";
import { useCallback } from "react";

type RouteBridgePath =
  | "change-password"
  | "check-terms"
  | "course-bookmark"
  | "course-detail"
  | "course-search"
  // | "faq"
  | "travel-log"
  // | "inquiry"
  | "manual-detail"
  | "mountain-course"
  | "my-info"
  | "notification-setting"
  | "start-travel"
  | "customer-center";

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
  }, [params, path, request, routeType]);
};

export default useRouteBridge;
