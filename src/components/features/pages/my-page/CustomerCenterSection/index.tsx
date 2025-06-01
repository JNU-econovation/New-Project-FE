"use client";

import Spacing from "@shared/layout/Spacing";
import Text from "@shared/ui/Text";
import Gray_Right_Arrow from "@/icons/Gray_Right_Arrow.svg";
import Image from "next/image";
import useRouteFaqBridge from "@/hooks/bridge/useRouteFaqBridge";
import useRouteInquiryBridge from "@/hooks/bridge/useRouteInquiryBridge";
import useRouteCheckTermsBridge from "@/hooks/bridge/useRouteCheckTermsBridge";

export default function CustomerCenterSection() {
  const goToFaq = useRouteFaqBridge();
  const goToInquiry = useRouteInquiryBridge();
  const goToCheckTerms = useRouteCheckTermsBridge();

  return (
    <section className="border-b border-gray-30">
      <Text fontSize="text-xl" color="text-main-green">
        고객 센터
      </Text>
      <Spacing size={2} />
      <button
        onClick={goToFaq}
        className="flex items-center justify-between h-10 w-full"
      >
        <Text fontSize="text-xl" fontWeight="font-medium">
          자주 묻는 질문
        </Text>
        <Image
          src={Gray_Right_Arrow}
          alt="화살표 아이콘"
          width={10}
          height={10}
        />
      </button>
      <button
        onClick={goToInquiry}
        className="flex items-center justify-between h-10 w-full"
      >
        <Text fontSize="text-xl" fontWeight="font-medium">
          문의하기
        </Text>
        <Image
          src={Gray_Right_Arrow}
          alt="화살표 아이콘"
          width={10}
          height={10}
        />
      </button>
      <button
        onClick={goToCheckTerms}
        className="flex items-center justify-between h-10 w-full"
      >
        <Text fontSize="text-xl" fontWeight="font-medium">
          약관 확인
        </Text>
        <Image
          src={Gray_Right_Arrow}
          alt="화살표 아이콘"
          width={10}
          height={10}
        />
      </button>
      <Spacing size={2} />
    </section>
  );
}
