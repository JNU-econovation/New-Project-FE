import { useBridge } from "@/service/bridge/hooks/useBridge";
import { useCallback } from "react";
import type {
  MessageEventRequestData,
  MessageEventResponseData,
} from "@/types/bridge";

const useRouteMountainCourseBridge = () => {
  const { request } = useBridge<
    MessageEventRequestData<{ mountainName: string }>,
    MessageEventResponseData
  >();

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
