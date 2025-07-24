"use client";

import useDrawMarkers from "@/hooks/feature/map/useDrawMarkers";
import { useDrawPath } from "@/hooks/feature/map/useDrawPath";
import useSetCircle from "@/hooks/feature/map/useSetCircle";
import type { Markers } from "@/types/map";
import useGetCurrentPositionBridge, {
  Position,
} from "@hooks/feature/bridge/useGetCurrentPositionBridge";
import useLogBridge from "@hooks/feature/bridge/useLogBridge";
import useNaverMap from "@hooks/feature/map/useNaverMap";
// import useSetMarker from "@hooks/feature/map/useSetMarker";
import { useEffect, useState } from "react";

const DEFAULT_POSITION = { latitude: 35.122769, longitude: 126.996822 };

interface MapWWithCurrentPositionMarkProps {
  defaultPosition?: { latitude: number; longitude: number };
  path?: [number, number][];
  markers?: Markers[];
  currentPositionIcon?: boolean;
  zoom?: number;
}
/**
 * 
 * 최근 위치를 점으로 보여주는 컴포넌트입니다. 
 * 
 * 대부분의 맵 사용시 해당 컴포넌트를 사용하면 됩니다. 
 * 
 * 가져오실 때 아래처럼 사용하세요
 * ```tsx
 * const MapWithCurrentPositionMark = dynamic(
    () => import("@/components/features/widgets/map/MapWithCurrentPositionMark"),
    { ssr: false }
  );
  ```
 */

export default function MapWithCurrentPositionMark({
  path,
  defaultPosition = DEFAULT_POSITION,
  markers,
  currentPositionIcon = true,
  zoom = 18,
}: MapWWithCurrentPositionMarkProps) {
  // const { currentPosition } = useGetCurrentPosition(); //for web
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

  const { mapId, map } = useNaverMap({
    latitude: currentPosition.latitude,
    longitude: currentPosition.longitude,
    zoom,
  });

  const logBridge = useLogBridge();
  useDrawPath({
    map,
    path: path as [number, number][],
    enable: !!path,
  });

  useSetCircle({
    map,
    position: currentPosition,
    zoom,
    enable: currentPositionIcon,
  });

  useDrawMarkers({
    map,
    markers: markers ?? [],
    enable: (markers ?? []).length > 0,
  });

  // useSetMarker(map, currentPosition ?? defaultPosition);
  logBridge(currentPosition);

  return <div id={mapId} className="h-screen w-screen" />;
}
