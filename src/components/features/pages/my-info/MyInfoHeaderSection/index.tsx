"use client";

import Text from "@shared/ui/Text";
import Left_Chevron from "@/icons/Left_Chevron.svg";
import Image from "next/image";
import useRouteBackBridge from "@/hooks/bridge/useRouteBackBridge";

export default function MyInfoHeaderSection() {
  const goBack = useRouteBackBridge();

  return (
    <header className="border-b border-gray-30 flex flex-col items-center relative pb-3">
      <button onClick={goBack} className="absolute left-5">
        <Image src={Left_Chevron} alt="화살표 아이콘" width={35} height={35} />
      </button>
      <Text fontSize="text-2xl">내 정보</Text>
    </header>
  );
}
