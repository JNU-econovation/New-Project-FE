import { useBridge } from "@/service/bridge/hooks/useBridge";
import { useCallback } from "react";
import type {
  MessageEventRequestData,
  MessageEventResponseData,
} from "@/types/bridge";

const useRouteCourseDetail = () => {
  const { request } = useBridge<
    MessageEventRequestData,
    MessageEventResponseData
  >();

  return useCallback(() => {
    request({
      requestMessage: {
        name: "route-course-detail",
        method: "POST",
      },
    });
  }, [request]);
};

export default useRouteCourseDetail;
