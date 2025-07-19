"use client";

import { useDrawPath } from "@/hooks/feature/map/useDrawPath";
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

export interface CourseData {
  name: string;
  content: [number, number][];
}

const defaultPosition = { latitude: 35.122769, longitude: 126.996822 };

export default function MapWithCurrentPositionMark() {
  const [path, setPath] = useState<CourseData[]>();

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/course");
      const data = await response.json();
      setPath(data);
    })();
  }, []);

  const { mapId, map } = useNaverMap(defaultPosition);
  useDrawPath(map, path);

  useSetMarker(map, defaultPosition);

  return <div id={mapId} className="h-screen w-screen" />;
}
