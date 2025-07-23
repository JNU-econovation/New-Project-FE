"use client";

import MAP from "@/constants/map";
import useBasesQuery from "@/hooks/feature/query/useBasesQuery";
import useFacilitiesQuery from "@/hooks/feature/query/useFacilitiesQuery";
import type { Markers } from "@/types/map";
import { getFacilitiesByFacilityType } from "@/utils/map";
import { Suspense } from "@suspensive/react";
import dynamic from "next/dynamic";
import { useParams, useSearchParams } from "next/navigation";
import { useMemo } from "react";

const MapWithCurrentPositionMark = dynamic(
  () => import("@/components/features/widgets/map/MapWithCurrentPositionMark"),
  { ssr: false }
);

export default Suspense.with(
  {
    fallback: <div className="w-full h-full bg-gray-30" />,
    name: "CourseDetailMapSection",
  },
  () => {
    const params = useParams<{
      mountainId: string;
      courseId: string;
    }>();
    const searchParams = useSearchParams();

    const { mountainId } = params;
    const selectedTagId =
      (searchParams.get("tag") as keyof typeof MAP.BASE_AND_FACILITY) ||
      MAP.BASE.facilityName;

    const { data: facilitiesData } = useFacilitiesQuery({ mountainId });
    const { data: basesData } = useBasesQuery({ mountainId });

    const { facilities } = facilitiesData;
    const { bases } = basesData;

    const markers: Markers[] = useMemo(() => {
      if (selectedTagId === MAP.BASE.id) {
        return bases.map(({ baseId, coordinate, name }) => ({
          id: baseId,
          name: name,
          coordinate,
        }));
      }
      return getFacilitiesByFacilityType(facilities, selectedTagId).map(
        ({ coordinate, facilityId, facilityName }) => ({
          id: facilityId,
          name: facilityName,
          coordinate,
        })
      );
    }, [facilities, bases, selectedTagId]);

    return (
      <div className="absolute top-0 left-0 w-full h-full">
        <MapWithCurrentPositionMark
          // path={data?.path}
          markers={markers}
          currentPositionIcon={true}
          zoom={13}
        />
      </div>
    );
  }
);
