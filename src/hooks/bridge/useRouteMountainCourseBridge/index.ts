import { useBridge } from "@hooks/common/useBridge";
import { useCallback } from "react";

const useRouteMountainCourseBridge = () => {
  const { request } = useBridge();

  return useCallback(
    (mountainName: string) => {
      request({
        requestMessage: {
          method: "POST",
          name: "route-mountain-course",
          body: {
            mountainName,
          },
        },
      });
    },
    [request]
  );
};

export default useRouteMountainCourseBridge;
