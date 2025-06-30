"use client";

import useRouteCourseBookmarkBridge from "@hooks/bridge/useRouteCourseBookmarkBridge";
import useRouteHikingLogBridge from "@hooks/bridge/useRouteHikingLogBridge";
import useRouteMyInfoBridge from "@hooks/bridge/useRouteMyInfoBridge";
import Spacing from "@shared/layout/Spacing";
import BlackRightArrowIcon from "@shared/ui/BlackRightArrowIcon";
import Text from "@shared/ui/Text";
import MyProfileImage from "@widgets/MyProfileImage";

export default function MyInfoSection() {
  const goToMyInfo = useRouteMyInfoBridge();
  const goToHikingLog = useRouteHikingLogBridge();
  const goToCourseBookmark = useRouteCourseBookmarkBridge();

  return (
    <section>
      <div className="px-6">
        <Text fontSize="text-xl" align="text-center">
          마이 페이지
        </Text>
        <hr className="w-full mx-auto text-gray-30" />
      </div>
      <Spacing size={5} />
      <div className="flex flex-col items-center">
        <MyProfileImage src={""} width={89} height={89} />
        <Spacing size={4} />
        <button
          onClick={goToMyInfo}
          className="flex flex-row items-center gap-2"
        >
          <Text fontSize="text-2xl" fontWeight="font-bold">
            {"홍길동"}
          </Text>
          <BlackRightArrowIcon width={10} height={10} />
        </button>
        <Text fontSize="text-base" color="text-main-green">
          {"test@naver.com"}
        </Text>
        <Spacing size={4} />
        <div className="flex flex-row items-center gap-22">
          <button onClick={goToHikingLog}>
            <Text
              fontSize="text-base"
              fontWeight="font-semibold"
              color="text-main-green"
            >
              산행 기록
            </Text>
          </button>
          <button onClick={goToCourseBookmark}>
            <Text
              fontSize="text-base"
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
