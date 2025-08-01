"use client";

import useGetCurrentPositionBridge, {
  Position,
} from "@hooks/feature/bridge/useGetCurrentPositionBridge";
import useLogBridge from "@hooks/feature/bridge/useLogBridge";
import useDrawPath from "@hooks/feature/map/useDrawPath";
import useNaverMap from "@hooks/feature/map/useNaverMap";
import useSetCircle from "@hooks/feature/map/useSetCircle";
import useSetMarker from "@hooks/feature/map/useSetMarker";
import { useEffect, useState } from "react";

const DEFAULT_POSITION = { latitude: 36.122769, longitude: 126.996822 };

interface MapWWithCurrentPositionMarkProps {
  defaultCurrentPointPosition?: { latitude: number; longitude: number };
  path?: [number, number][];
  marker?: { latitude: number; longitude: number };
  // markers?: Markers[];
  currentPositionIcon?: boolean;
  zoom?: number;
  initPosition?: { latitude: number; longitude: number };
  children?: (props: { map: any }) => React.ReactNode;
}
/**
 * 대부분의 맵 사용시 해당 컴포넌트를 사용하면 됩니다.
 * 해당 컴포넌트는 entity 컴포넌트이므로, 이를 확장하여 widget 컴포넌트를 만들어 사용하세요
 */

export default function Map({
  path,
  defaultCurrentPointPosition = DEFAULT_POSITION,
  marker,
  // markers, // 마커들을 표시할 떄 사용한다
  currentPositionIcon = true, // 최근 위치를 점으로 보여준다
  zoom = 18,
  initPosition,
  children,
}: MapWWithCurrentPositionMarkProps) {
  // const { currentPosition: webCurrentPosition } = useGetCurrentPosition(); //for web
  const [currentPosition, setCurrentPosition] = useState<{
    latitude: number;
    longitude: number;
  }>(defaultCurrentPointPosition);

  const getCurrentPosition = useGetCurrentPositionBridge();

  const onResponse = ({ coords }: Position) => {
    const { latitude, longitude } = coords;
    setCurrentPosition({ latitude, longitude });
    return { latitude, longitude };
  };

  useEffect(() => {
    getCurrentPosition(onResponse);
    // 무한 루프 방지를 위해 빈 배열을 의존성으로 설정합니다.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { mapId, map } = useNaverMap({
    latitude: initPosition?.latitude || currentPosition.latitude,
    longitude: initPosition?.longitude || currentPosition.longitude,
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
    option: {
      radius: zoom * 10,
      fillColor: "#FF0000",
      fillOpacity: 0.3,
      strokeColor: "#FF0000",
    },
  });

  useSetMarker({
    map,
    position: currentPosition ?? defaultCurrentPointPosition,
    enable: marker !== undefined,
  });

  logBridge(currentPosition);

  return (
    <div id={mapId} className="h-screen w-screen transform-gpu">
      {children && children({ map })}
    </div>
  );
}
