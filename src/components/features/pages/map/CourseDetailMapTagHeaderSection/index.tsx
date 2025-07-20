"use client";

import ROUTE from "@/constants/route";
import MapHeaderTag from "@shared/ui/MapHeaderTag";
import BackButton from "@widgets/BackButton";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";

export default function CourseDetailMapTagHeaderSection() {
  const searchParams = useSearchParams();
  const { mountainId, courseId } = useParams<{
    mountainId: string;
    courseId: string;
  }>();
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
    <section className="flex w-full overflow-hidden gap-4">
      <BackButton />
      <div className="flex-1 min-w-0">
        <ul className="flex hide-scrollbar overflow-x-scroll gap-4">
          {mapHeaderTags.map(({ id, text }) => (
            <li key={text} className="flex-shrink-0">
              <MapHeaderTag
                text={text}
                isSelected={id === selectedTagId}
                onClickHandler={() => {
                  router.replace(
                    ROUTE.MOUNTAIN_COURSE_DETAIL(mountainId, courseId) +
                      `?tag=${id}`
                  );
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
