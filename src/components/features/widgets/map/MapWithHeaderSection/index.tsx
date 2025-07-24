"use client";

import Spinner from "@/components/common/shared/ui/Spinner";
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

// 대부분의 지도에서 사용하는 기능이 모두 있는 컴포넌트입니다.
// 현재 위치 마크, 마커 표시
// 만약 추가적인 기능이 필요하다면 해당 컴포넌트를 확장해서 사용하는 것을 추천합니다.
// 추가가능 기능: path 표시, 마커 클릭시 상세 정보 표시 등

// interface MapWithHeaderSectionProps {
//   path?: [number, number][];
// }

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
          markers={markers}
          currentPositionIcon={true}
          zoom={13}
        />
      </div>
    );
  }
);
