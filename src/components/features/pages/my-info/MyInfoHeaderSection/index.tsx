"use client";

import Text from "@shared/ui/Text";
import useRouteBackBridge from "@/hooks/bridge/useRouteBackBridge";
import LeftChevronIcon from "@/components/common/shared/ui/icons/LeftChevronIcon";

export default function MyInfoHeaderSection() {
  const goBack = useRouteBackBridge();

  return (
    <header className="border-b border-gray-30 flex flex-col items-center relative pb-3">
      <button onClick={goBack} className="absolute left-5">
        <LeftChevronIcon />
      </button>
      <Text fontSize="text-base">내 정보</Text>
    </header>
  );
}
