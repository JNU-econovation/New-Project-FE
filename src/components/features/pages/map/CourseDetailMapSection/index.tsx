"use client";

import dynamic from "next/dynamic";

const MapWithCurrentPositionMark = dynamic(
  () => import("@widgets/MapWithCurrentPositionMark"),
  { ssr: false }
);

export default function CourseDetailMapSection() {
  return <MapWithCurrentPositionMark />;
}
