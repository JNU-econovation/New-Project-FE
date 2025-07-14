"use client";

import useGetCurrentPositionBridge from "@/hooks/bridge/useGetCurrentPositionBridge";
import { Position } from "@/hooks/bridge/useGetCurrentPositionBridge";
import useLogBridge from "@/hooks/bridge/useLogBridge";
// import { useDrawPath } from "@/hooks/feature/map/useDrawPath";
import { useNaverMap } from "@/hooks/feature/map/useNaverMap";
import { useSetMarker } from "@/hooks/feature/map/useSetMarker";
import { useEffect, useState } from "react";

// CHECK: 여기 수정
// const path = [
// [126.95589685, 35.13408406],
// [126.95744761, 35.13354734],
// [126.95768452, 35.13345813],
// [126.9577291, 35.13344179],
// ...
// ];

const defaultPosition = { latitude: 35.122769, longitude: 126.996822 };

export default function MapWithCurrentPositionMark() {
  // const { currentPosition } = useGetCurrentPosition();
  const [currentPosition, setCurrentPosition] = useState<{
    latitude: number;
    longitude: number;
  }>(defaultPosition);

  const getCurrentPosition = useGetCurrentPositionBridge();

  const onResponse = ({ coords }: Position) => {
    try {
      const { latitude, longitude } = coords;
      setCurrentPosition({ latitude, longitude });
      return { latitude, longitude };
    } catch (error) {
      console.error("Error in getCurrentPosition:", error);
      return null;
    }
  };

  useEffect(() => {
    getCurrentPosition(onResponse);
  }, []);

  const { mapId, map } = useNaverMap(currentPosition);
  const logBridge = useLogBridge();
  // useDrawPath(map, path as [number, number][]);

  useSetMarker(map, currentPosition ?? defaultPosition);
  logBridge(currentPosition);

  return <div id={mapId} className="h-screen w-screen" />;
}
