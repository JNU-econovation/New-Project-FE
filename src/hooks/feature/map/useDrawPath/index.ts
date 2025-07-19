import { CourseData } from "@/components/features/widgets/MapWithCurrentPositionMark";
import { useEffect } from "react";

// type LatLongPath = [number, number][];

// 경로 표시 : [위도, 경도] 의 배열
export const useDrawPath = (map: any, path: CourseData[]) => {
  useEffect(() => {
    if (!map || !path || path.length === 0) return;

    const bounds = new naver.maps.LatLngBounds();
    const markers: any[] = [];

    // 10가지 색상 배열
    const colors = [
      "#FF0000", // 빨강
      "#0000FF", // 파랑
      "#00AA00", // 초록
      "#FF8800", // 주황
      "#AA00AA", // 보라
      "#00AAAA", // 청록
      "#AA0000", // 진한 빨강
      "#0066FF", // 하늘색
      "#AAAA00", // 노랑
      "#FF00AA", // 핑크
    ];

    path.forEach(({ content, name }: CourseData, index: number) => {
      const color = colors[index % colors.length];

      // Polyline 생성
      new naver.maps.Polyline({
        map,
        path: content,
        strokeWeight: 5,
        strokeColor: color,
        strokeOpacity: 0.8,
        strokeStyle: "solid",
        strokeLineCap: "round",
        strokeLineJoin: "round",
      });

      // 경로의 모든 점을 bounds에 추가
      content.forEach(([lng, lat]: [number, number]) => {
        bounds.extend(new naver.maps.LatLng(lat, lng));
      });

      // 시작점에 마커와 InfoWindow 생성
      const startPosition = new naver.maps.LatLng(
        content[0][1] + index * 0.000005, // 위도에 약간의 오프셋 추가
        content[0][0] + index * 0.000005 // 경도에 약간의 오프셋 추가
      );

      const marker = new naver.maps.Marker({
        position: startPosition,
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

      markers.push({ marker });
    });

    // 모든 경로가 보이도록 지도 범위 조정
    if (bounds.getMinLat && bounds.getMaxLat) {
      map.fitBounds(bounds, {
        padding: { top: 50, right: 50, bottom: 50, left: 50 },
      });
    }

    // cleanup function
    return () => {
      markers.forEach(({ marker }) => {
        if (marker) {
          marker.setMap(null);
        }
      });
    };
  }, [map, path]);
};
