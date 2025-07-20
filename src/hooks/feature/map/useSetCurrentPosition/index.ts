/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";

interface CircleOptions {
  radius?: number;
  fillColor?: string;
  fillOpacity?: number;
  strokeColor?: string;
}

interface UseSetCircleProps {
  map: any;
  position: {
    latitude: number;
    longitude: number;
  };
  option?: CircleOptions;
  enable?: boolean;
  zoom?: number;
}

const useSetCircle = ({
  map,
  position: { latitude, longitude },
  option = {
    fillColor: "#FF0000",
    fillOpacity: 0.9,
    strokeColor: "#FF0000",
  },
  zoom,
  enable = true,
}: UseSetCircleProps) => {
  const { radius, fillColor, fillOpacity, strokeColor } = option;
  useEffect(() => {
    if (!map) return;
    if (!enable) return;

    new naver.maps.Circle({
      map: map,
      center: new naver.maps.LatLng(latitude, longitude),
      radius: radius ? radius : zoom ? zoom * 10 : 10,
      fillColor,
      fillOpacity,
      strokeColor,
    });
  }, [
    latitude,
    longitude,
    map,
    fillColor,
    fillOpacity,
    radius,
    strokeColor,
    enable,
    zoom,
  ]);
};

export default useSetCircle;
