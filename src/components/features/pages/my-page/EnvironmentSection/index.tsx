"use client";

import Spacing from "@shared/layout/Spacing";
import Text from "@shared/ui/Text";
import useRouteNotificationSettingsBridge from "@/hooks/bridge/useRouteNotificationSettingsBridge";
import GrayRightArrowIcon from "@shared/ui/GrayRightArrowIcon";

export default function EnvironmentSection() {
  const goToNotificationSettings = useRouteNotificationSettingsBridge();

  return (
    <section className="border-b border-gray-30">
      <Spacing size={4} />
      <Text fontSize="text-sm" color="text-main-green">
        환경
      </Text>
      <Spacing size={2} />
      <button
        onClick={goToNotificationSettings}
        className="flex items-center justify-between h-10 w-full"
      >
        <Text fontSize="text-base" fontWeight="font-medium">
          알림 설정
        </Text>
        <GrayRightArrowIcon width={6} height={10} />
      </button>
      <Spacing size={2} />
      <div className="flex items-center justify-between h-10">
        <Text
          fontSize="text-base"
          fontWeight="font-medium"
          color="text-main-green"
          opacity={"opacity-50"}
        >
          버전 정보
        </Text>
        <Text
          fontSize="text-base"
          fontWeight="font-medium"
          color="text-main-green"
          opacity={"opacity-50"}
        >
          {"2.0.0"}
        </Text>
      </div>
    </section>
  );
}
