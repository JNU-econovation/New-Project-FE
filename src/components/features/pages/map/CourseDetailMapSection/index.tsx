"use client";

import MAP from "@/constants/map";
import useFacilitiesQuery from "@/hooks/feature/query/useFacilitiesQuery";
import { getFacilitiesByFacilityType } from "@/utils/map";
import { Suspense } from "@suspensive/react";
import dynamic from "next/dynamic";
import { useParams, useSearchParams } from "next/navigation";

const MapWithCurrentPositionMark = dynamic(
  () => import("@widgets/MapWithCurrentPositionMark"),
  { ssr: false }
);

export default Suspense.with(
  {
    fallback: <div className="w-full h-full bg-gray-30" />,
    name: "CourseDetailMapSection",
  },
  function CourseDetailMapSection() {
    const params = useParams<{
      mountainId: string;
      courseId: string;
    }>();
    const searchParams = useSearchParams();

    const { mountainId } = params;
    const selectedTagId =
      (searchParams.get("tag") as keyof typeof MAP.BASE_AND_FACILITY) ||
      MAP.BASE.facilityName;

    const { data } = useFacilitiesQuery({ mountainId });

    const { facilities } = data;

    return (
      <div className="absolute top-0 left-0 w-full h-full">
        <MapWithCurrentPositionMark
          // path={data?.path}
          markers={getFacilitiesByFacilityType(facilities, selectedTagId)}
          currentPositionIcon={true}
          zoom={13}
        />
      </div>
    );
  }
);
