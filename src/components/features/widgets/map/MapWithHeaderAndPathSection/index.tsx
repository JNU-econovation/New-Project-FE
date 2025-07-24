"use client";

import Spinner from "@/components/common/shared/ui/Spinner";
import MAP from "@/constants/map";
import useBasesQuery from "@/hooks/feature/query/useBasesQuery";
import useCoursePathwayQuery from "@/hooks/feature/query/useCoursePathwayQuery";
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
    fallback: (
      <div className="w-full h-full relative flex justify-center items-center">
        <div className="absolute inset-0 bg-main-green opacity-5 animate-ping w-full h-full" />
        <Spinner size="md" />
      </div>
    ),
    name: "MapWithHeaderAndPathSection",
    clientOnly: true,
  },
  () => {
    const params = useParams<{
      mountainId: string;
      courseId: string;
    }>();
    const searchParams = useSearchParams();

    const { mountainId, courseId } = params;
    const selectedTagId =
      (searchParams.get("tag") as keyof typeof MAP.BASE_AND_FACILITY) ||
      MAP.BASE.facilityName;

    const { data: facilitiesData } = useFacilitiesQuery({ mountainId });
    const { data: basesData } = useBasesQuery({ mountainId });
    const { data: pathway } = useCoursePathwayQuery({ courseId });

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

    const { pathways } = pathway;
    // console.log(pathways);

    const combinedPath = pathways.flatMap(({ coordinates }) => coordinates) as [
      number,
      number
    ][];

    return (
      <div className="absolute top-0 left-0 w-full h-full">
        <MapWithCurrentPositionMark
          path={combinedPath}
          markers={markers}
          currentPositionIcon={true}
          zoom={13}
        />
      </div>
    );
  }
);
