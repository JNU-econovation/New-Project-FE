"use client";

import Spacing from "@/components/common/shared/layout/Spacing";
import ROUTE from "@/constants/route";
import useRouteCourseDetail from "@/hooks/bridge/useRouteCourseDetail";
import Clock from "@/icons/Clock.svg";
import Position_Pointer from "@/icons/Position_Pointer.svg";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { useParams, useRouter, useSearchParams } from "next/navigation";

const tabTitleList = [
  { title: "내 맞춤형", sort: "my" },
  { title: "인기순", sort: "popular" },
  { title: "거리순", sort: "distance" },
  { title: "난이도순", sort: "difficulty" },
] as const;

export default function CourseTabSection() {
  const router = useRouter();
  const { mountainName } = useParams<{ mountainName: string }>();
  const searchParams = useSearchParams();
  const sortBy = searchParams.get("sort");
  const routeCourseDetail = useRouteCourseDetail();

  // TODO: 서버에서 데이터 받아오기
  const courseList = new Array(10).fill(0);

  return (
    <section className="flex flex-col flex-1 overflow-hidden">
      <div className="flex justify-between items-center px-6">
        {tabTitleList.map(({ title: tabTitle, sort }, index) => (
          <button
            key={`${index}-${tabTitle}`}
            onClick={() => {
              router.replace(
                `${ROUTE.COURSE_SEARCH_RESULT({
                  mountainName,
                  sort,
                })}`
              );
            }}
          >
            <div
              className={cn("px-3 py-1 text-white rounded-full text-sm", {
                "bg-gray-400": sort !== sortBy,
                "bg-main-green": sort === sortBy,
              })}
            >
              {tabTitle}
            </div>
          </button>
        ))}
      </div>
      <Spacing size={4} />
      <ul className="flex flex-col gap-4 bg-gray-200 p-6 overflow-y-auto flex-1">
        {courseList.map((_, index) => (
          <li
            className="flex gap-4 justify-between bg-white rounded-lg p-3"
            key={index} //TODO: key 수정 필요
          >
            <div
              className="flex flex-col justify-between grow"
              onClick={routeCourseDetail}
              typeof="button"
            >
              <span className="text-lg font-semibold">
                증심사 - 중머리재 - 원효분소
              </span>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <Image src={Position_Pointer} alt="거리" />
                  <span className="text-gray-20 text-sm">{"41"}km</span>
                </div>
                <div className="flex items-center gap-1">
                  <Image src={Clock} alt="소요시간" />
                  <span className="text-gray-20 text-sm">{"4"}시간</span>
                </div>
                <div className="rounded-xl border-gray-200 border px-4 text-yellow-500 text-sm">
                  보통
                </div>
              </div>
            </div>
            <div className="w-24 h-24 bg-slate-100 rounded-xl" />
          </li>
        ))}
      </ul>
    </section>
  );
}
