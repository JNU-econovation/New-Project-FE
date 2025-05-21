import { useBridge } from "@/hooks/common/useBridge";
import { useCallback } from "react";

const useRouteCourseDetail = () => {
  const { request } = useBridge();

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
