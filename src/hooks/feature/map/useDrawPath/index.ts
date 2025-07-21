import { useEffect } from "react";

type LatLongPath = [number, number][];

interface UseDrawPathProps {
  map: any;
  path: LatLongPath;
  enable?: boolean;
}

// 경로 표시 : [위도, 경도] 의 배열
export const useDrawPath = ({
  map,
  path,
  enable = false,
}: UseDrawPathProps) => {
  useEffect(() => {
    (async () => {
      if (!enable) return;

      new naver.maps.Polyline({
        map,
        path,
        strokeWeight: 5,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeStyle: "solid",
        strokeLineCap: "round",
        strokeLineJoin: "round",
      });
    })();
  }, [map]);
};
