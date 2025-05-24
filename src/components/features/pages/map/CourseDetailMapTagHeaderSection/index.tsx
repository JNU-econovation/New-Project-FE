"use client";

import MapHeaderTag from "@/components/common/shared/ui/MapHeaderTag";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";

export default function CourseDetailMapTagHeaderSection() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedTagId = searchParams.get("tag") || "base";

  //TODO: 서버와 통신할 때 id 값을 맞추기
  const mapHeaderTags = useMemo(
    () => [
      { text: "거점", id: "base" },
      { text: "쉼터", id: "rest" },
      { text: "화장실", id: "toilet" },
      { text: "응급키트", id: "emergency-kit" },
      { text: "매장 위치", id: "market" },
      { text: "대여서비스", id: "rental" },
    ],
    []
  );

  return (
    <section className="flex max-w-full overflow-x-scroll gap-4 hide-scrollbar">
      {mapHeaderTags.map(({ id, text }) => (
        <MapHeaderTag
          key={text}
          text={text}
          isSelected={id === selectedTagId}
          onClickHandler={() => {
            router.replace(`/map/course-detail?tag=${id}`);
          }}
        />
      ))}
    </section>
  );
}
