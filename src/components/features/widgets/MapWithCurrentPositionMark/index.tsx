"use client";

import useGetCurrentPositionBridge from "@/hooks/bridge/useGetCurrentPositionBridge";
import { Position } from "@/hooks/bridge/useGetCurrentPositionBridge";
import useLogBridge from "@/hooks/bridge/useLogBridge";
import { useNaverMap } from "@/hooks/feature/map/useNaverMap";
import { useSetMarker } from "@/hooks/feature/map/useSetMarker";
import { useEffect, useState } from "react";

const defaultPosition = { latitude: 35.9789064, longitude: 126.9079232 };

export default function MapWithCurrentPositionMark() {
  // const { currentPosition } = useGetCurrentPosition();
  const [currentPosition, setCurrentPosition] = useState<{
    latitude: number;
    longitude: number;
  }>(defaultPosition);

  const getCurrentPosition = useGetCurrentPositionBridge();

  const onResponse = ({ coords }: Position) => {
    const { latitude, longitude } = coords;
    setCurrentPosition({ latitude, longitude });
  };

  useEffect(() => {
    getCurrentPosition(onResponse);
  }, [getCurrentPosition]);

  const { mapId, map } = useNaverMap(currentPosition);
  const logBridge = useLogBridge();

  useSetMarker(map, currentPosition ?? defaultPosition);
  logBridge(currentPosition);

  return <div id={mapId} className="h-screen w-screen" />;
}
