import { useBridge } from "@/hooks/common/useBridge";
import { useCallback } from "react";

interface Coords {
  accuracy: number;
  altitude: number | null;
  altitudeAccuracy: number | null;
  heading: number | null;
  latitude: number;
  longitude: number;
  speed: number | null;
}

export interface Position {
  coords: Coords;
  timestamp: number;
}

type OnResponse = (position: Position) => void;

const useGetCurrentPositionBridge = () => {
  const { request } = useBridge();

  return useCallback(
    (onResponse: OnResponse) => {
      request<null, Position>({
        requestMessage: {
          name: "get-current-position",
          method: "GET",
        },
        responseCallback: ({ data }) => {
          if (!data) return;
          onResponse(data);
        },
      });
    },
    [request]
  );
};

export default useGetCurrentPositionBridge;
