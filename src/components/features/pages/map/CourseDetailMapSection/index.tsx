"use client";

import dynamic from "next/dynamic";

const MapWithCurrentPositionMark = dynamic(
  () => import("@widgets/MapWithCurrentPositionMark"),
  { ssr: false }
);

export default function CourseDetailMapSection() {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <MapWithCurrentPositionMark />
    </div>
  );
}
