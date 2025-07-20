"use client";

import MAP from "@/constants/map";
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
  const selectedTagId = searchParams.get("tag") || MAP.BASE.facilityName;

  const mapHeaderTags = useMemo(() => {
    return [...Object.keys(MAP.BASE_AND_FACILITY)].map((id) => ({
      id,
      text: MAP.BASE_AND_FACILITY[id as keyof typeof MAP.BASE_AND_FACILITY]
        .facilityName,
    }));
  }, []);

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
