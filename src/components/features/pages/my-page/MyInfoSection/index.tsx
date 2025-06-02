"use client";

import Text from "@shared/ui/Text";
import useRouteMyInfoBridge from "@/hooks/bridge/useRouteMyInfoBridge";
import useRouteHikingLogBridge from "@/hooks/bridge/useRouteHikingLogBridge";
import useRouteCourseBookmarkBridge from "@/hooks/bridge/useRouteCourseBookmarkBridge";
import BlackRightArrowIcon from "@shared/ui/BlackRightArrowIcon";
import MyProfileImage from "@widgets/MyProfileImage";

export default function MyInfoSection() {
  const goToMyInfo = useRouteMyInfoBridge();
  const goToHikingLog = useRouteHikingLogBridge();
  const goToCourseBookmark = useRouteCourseBookmarkBridge();

  return (
    <section>
      <div className="pr-5 pl-5">
        <div className="w-full border-b border-gray-30 flex flex-col items-center pb-3">
          <Text fontSize="text-2xl">마이 페이지</Text>
        </div>
      </div>
      <div className="flex flex-col items-center mt-5 gap-4">
        <MyProfileImage src={""} alt="나의 프로필" width={100} height={100} />
        <button
          onClick={goToMyInfo}
          className="flex flex-row items-center gap-2"
        >
          <Text fontSize="text-3xl" fontWeight="font-bold">
            {"사용자 이름"}
          </Text>
          <BlackRightArrowIcon width={10} height={10} />
        </button>
        <Text fontSize="text-xl" color="text-main-green">
          {"test@naver.com"}
        </Text>
        <div className="flex flex-row items-center gap-10">
          <button onClick={goToHikingLog}>
            <Text
              fontSize="text-xl"
              fontWeight="font-semibold"
              color="text-main-green"
            >
              산행 기록
            </Text>
          </button>
          <button onClick={goToCourseBookmark}>
            <Text
              fontSize="text-xl"
              fontWeight="font-semibold"
              color="text-main-green"
            >
              코스 북마크
            </Text>
          </button>
        </div>
      </div>
    </section>
  );
}
