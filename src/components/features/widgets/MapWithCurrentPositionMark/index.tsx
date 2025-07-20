"use client";

import useDrawMarkers from "@/hooks/feature/map/useDrawMarkers";
import { useDrawPath } from "@/hooks/feature/map/useDrawPath";
import useSetCircle from "@/hooks/feature/map/useSetCurrentPosition";
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
  }, [getCurrentPosition]);

  const { mapId, map } = useNaverMap({
    latitude: currentPosition.latitude,
    longitude: currentPosition.longitude,
    zoom,
  });

  const logBridge = useLogBridge();
  useDrawPath(map, path as [number, number][]);

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
