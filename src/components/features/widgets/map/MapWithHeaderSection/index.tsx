"use client";

import MAP from "@/constants/map";
import type { Markers } from "@/types/map";
import { getFacilitiesByFacilityType } from "@/utils/map";
import useBasesQuery from "@hooks/feature/query/query/useBasesQuery";
import useFacilitiesQuery from "@hooks/feature/query/query/useFacilitiesQuery";
import Spinner from "@shared/ui/Spinner";
import { Suspense } from "@suspensive/react";
import dynamic from "next/dynamic";
import { useParams, useSearchParams } from "next/navigation";
import { useMemo } from "react";

const MapWithCurrentPositionMark = dynamic(
  () => import("@widgets/map/MapWithCurrentPositionMark"),
  { ssr: false }
);

// 대부분의 지도에서 사용하는 기능이 모두 있는 컴포넌트입니다.
// 현재 위치 마크, 마커 표시
// 만약 경로와 함께 표시하고 싶다면 MapWithHeaderAndPathSection를 사용하세요.

export default Suspense.with(
  {
    fallback: (
      <div className="w-full h-full relative flex justify-center items-center">
        <div className="absolute inset-0 bg-main-green opacity-5 w-full h-full" />
        <Spinner size="md" />
      </div>
    ),
    name: "MapWithHeaderSection",
    clientOnly: true,
  },
  () => {
    const params = useParams<{
      mountainId: string;
      // courseId: string;
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
          type: MAP.BASE.id,
        }));
      }
      return getFacilitiesByFacilityType(facilities, selectedTagId).map(
        ({ coordinate, facilityId, facilityName, facilityType }) => ({
          id: facilityId,
          name: facilityName,
          coordinate,
          type: facilityType,
        })
      );
    }, [facilities, bases, selectedTagId]);

    return (
      <div className="absolute top-0 left-0 w-full h-full">
        <MapWithCurrentPositionMark
          markers={markers}
          currentPositionIcon={true}
          zoom={13}
        />
      </div>
    );
  }
);
