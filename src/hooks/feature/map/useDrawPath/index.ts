import { useEffect } from "react";

// 경로 표시 : [경도, 위도] 의 배열
export const useDrawPath = (map: any, path: [number, number][]) => {
  useEffect(() => {
    if (!map || !path || path.length === 0) return;

    const bounds = new naver.maps.LatLngBounds();
    let polyline: any = null;

    // 입력받은 path를 naver.maps.LatLng 객체 배열로 변환
    const naverPath = path.map(([lng, lat]) => new naver.maps.LatLng(lat, lng));

    // Polyline 생성
    polyline = new naver.maps.Polyline({
      map,
      path: naverPath,
      strokeWeight: 5,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeStyle: "solid",
      strokeLineCap: "round",
      strokeLineJoin: "round",
    });

    // 경로의 모든 점을 bounds에 추가
    path.forEach(([lng, lat]) => {
      bounds.extend(new naver.maps.LatLng(lat, lng));
    });

    // 모든 경로가 보이도록 지도 범위 조정
    if (bounds.getMinLat && bounds.getMaxLat) {
      map.fitBounds(bounds, {
        padding: { top: 50, right: 50, bottom: 50, left: 50 },
      });
    }

    // cleanup function
    return () => {
      if (polyline) {
        polyline.setMap(null);
      }
    };
  }, [map, path]);
};
