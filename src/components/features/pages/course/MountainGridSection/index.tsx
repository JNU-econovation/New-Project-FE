"use client";

import useRouteMountainCourseBridge from "@/hooks/bridge/useRouteMountainCourseBridge";
import Spacing from "@shared/layout/Spacing";
import Text from "@shared/ui/Text";

export default function MountainGridSection() {
  const routeToCoursePage = useRouteMountainCourseBridge();

  return (
    <section className="flex grow gap-4">
      <div className="flex flex-col w-full h-fit gap-4">
        <button
          className="h-72 rounded-2xl flex items-center justify-center relative overflow-hidden"
          style={{
            backgroundImage: `url('/images/mudeungsan.jpg')`, //TODO: 하드 코딩 없애기 -> 정적 이미지 주소를 관리하는 방법 고안 필요
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          onClick={() => routeToCoursePage("무등산")}
        >
          <div className="absolute top-0 right-0 bg-black opacity-40 w-full h-full" />
          <div className="absolute top-6 right-4">
            <Text
              fontSize="text-4xl"
              fontWeight="font-bold"
              color="text-white"
              zIndex="z-10"
            >
              광주
            </Text>
          </div>
          <Text
            fontSize="text-4xl"
            fontWeight="font-bold"
            color="text-white"
            zIndex="z-10"
          >
            무등산
          </Text>
        </button>

        {/* TODO: 실제 산으로 변경하기 */}
        <div className="h-72 bg-amber-100 rounded-2xl" />
        <div className="h-72 bg-amber-100 rounded-2xl" />
      </div>
      <div className="flex flex-col w-full h-fit gap-4">
        <Spacing size={12} />
        <div className="h-72 bg-amber-100 rounded-2xl" />
        <div className="h-72 bg-amber-100 rounded-2xl" />
        <div className="h-72 bg-amber-100 rounded-2xl" />
      </div>
    </section>
  );
}
