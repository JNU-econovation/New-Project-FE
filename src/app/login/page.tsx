"use client";

import Flex from "@/components/common/shared/layout/Flex";
import LoginButtonSection from "@/components/features/pages/login/LoginButtonSection";
import LoginTitleSection from "@/components/features/pages/login/LoginTitleSection";
import KakaoLoginBridge from "@/components/features/widgets/KakaoLoginBridge";

import { useBridge } from "@/hooks/useBridge";

interface ResponseDataType {
  token: string;
}

export default function LoginPage() {
  const { request } = useBridge();

  request<ResponseDataType>({
    requestMessage: {
      method: "GET",
      name: "request-kakao",
    },
    responseCallback: (resMessage) => {
      if (resMessage.status === "success") {
        console.log("Kakao login success", resMessage.data);
      } else {
        console.error("Kakao login error", resMessage.data);
      }
    },
  });

  return (
    <Flex flexDirection="flex-col" alignItems="items-center" gap={12}>
      <LoginTitleSection />
      <LoginButtonSection />
      <KakaoLoginBridge />
    </Flex>
  );
}
