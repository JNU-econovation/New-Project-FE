"use client";

import Text from "@shared/ui/Text";
import Left_Chevron from "@/icons/Left_Chevron.svg";
import Image from "next/image";
import useRouteBackBridge from "@/hooks/bridge/useRouteBackBridge";

export default function ChangePasswordHeaderSection() {
  const goBack = useRouteBackBridge();

  return (
    <header className="border-b border-gray-30 flex flex-col items-center relative">
      <button onClick={goBack} className="absolute left-5">
        <Image src={Left_Chevron} alt="화살표 아이콘" width={35} height={35} />
      </button>
      <Text fontSize="text-2xl" className="pb-3">
        비밀번호 변경
      </Text>
    </header>
  );
}
