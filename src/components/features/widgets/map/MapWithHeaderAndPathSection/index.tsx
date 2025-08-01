"use client";

import Map from "@/components/common/entities/Map";
import MAP from "@/constants/map";
import useDrawMarkers from "@/hooks/feature/map/useDrawMarkers";
import type { Markers } from "@/types/map";
import { getFacilitiesByFacilityType } from "@/utils/map";
import useBasesQuery from "@hooks/feature/query/query/useBasesQuery";
import useCoursePathwayQuery from "@hooks/feature/query/query/useCoursePathwayQuery";
import useFacilitiesQuery from "@hooks/feature/query/query/useFacilitiesQuery";
import Spinner from "@shared/ui/Spinner";
import { Suspense } from "@suspensive/react";
import { useParams, useSearchParams } from "next/navigation";
import { useMemo } from "react";

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
          type: MAP.BASE.id,
        }));
      }
      return getFacilitiesByFacilityType(facilities, selectedTagId).map(
        ({ coordinate, facilityId, facilityName, facilityType }) => ({
          id: facilityId,
          type: facilityType,
          name: facilityName,
          coordinate,
        })
      );
    }, [facilities, bases, selectedTagId]);

    const { pathways } = pathway;

    const combinedPath = pathways.flatMap(({ coordinates }) => coordinates) as [
      number,
      number
    ][];

    return (
      <div className="absolute top-0 left-0 w-full h-full">
        <Map path={combinedPath} currentPositionIcon={true} zoom={13}>
          {({ map }) => {
            useDrawMarkers({
              map,
              markers: markers ?? [],
              enable: (markers ?? []).length > 0,
            });
            return null;
          }}
        </Map>
      </div>
    );
  }
);
