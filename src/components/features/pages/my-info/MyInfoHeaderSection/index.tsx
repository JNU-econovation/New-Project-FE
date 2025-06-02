"use client";

import Text from "@shared/ui/Text";
import useRouteBackBridge from "@/hooks/bridge/useRouteBackBridge";
import LeftBlackArrowIcon from "@shared/ui/LeftBlackArrowIcon";

export default function MyInfoHeaderSection() {
  const goBack = useRouteBackBridge();

  return (
    <header className="border-b border-gray-30 flex flex-col items-center relative pb-3">
      <button onClick={goBack} className="absolute left-5">
        <LeftBlackArrowIcon width={35} height={35} />
      </button>
      <Text fontSize="text-2xl">내 정보</Text>
    </header>
  );
}
