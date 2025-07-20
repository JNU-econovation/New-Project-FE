/* eslint-disable @typescript-eslint/no-explicit-any */
// import type { FacilityMarker } from "@/types/map";
import type { Markers } from "@/types/map";
import { useEffect } from "react";

interface UseDrawMarkersProps {
  map: any;
  markers: Markers[];
  enable?: boolean;
}
const useDrawMarkers = ({ map, markers, enable }: UseDrawMarkersProps) => {
  useEffect(() => {
    if (!map || !markers || markers.length === 0 || !enable) return;

    const drawnMarkers: naver.maps.Marker[] = [];

    markers.forEach(({ coordinate, name }) => {
      const color = "#0000FF";

      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(coordinate[1], coordinate[0]),
        map: map,
        title: name,
        icon: {
          content: `<div style="
            background: white; 
            border: 2px solid ${color}; 
            border-radius: 20px; 
            padding: 5px 10px; 
            font-size: 12px; 
            font-weight: bold; 
            color: ${color};
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
            white-space: nowrap;
          ">${name}</div>`,
          size: new naver.maps.Size(100, 30),
          anchor: new naver.maps.Point(50, 15),
        },
      });
      drawnMarkers.push(marker);
    });

    return () => {
      drawnMarkers.forEach((marker) => {
        marker.setMap(null);
      });
    };
  }, [enable, map, markers]);
};

export default useDrawMarkers;
