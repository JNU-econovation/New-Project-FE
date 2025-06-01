import { useBridge } from "@/hooks/common/useBridge";
import { useCallback } from "react";

const useRouteCourseBookmarkBridge = () => {
  const { request } = useBridge();

  return useCallback(() => {
    request({
      requestMessage: {
        method: "POST",
        name: "route-course-bookmark",
      },
    });
  }, [request]);
};

export default useRouteCourseBookmarkBridge;
