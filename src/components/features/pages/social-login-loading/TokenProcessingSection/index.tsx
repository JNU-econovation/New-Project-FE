"use client";

import useSendToken from "@hooks/common/useSendToken";
import useSaveAuthToken from "@hooks/feature/useSaveAuthToken";
import Flex from "@shared/layout/Flex";
import Spinner from "@shared/ui/Spinner";

export default function TokenProcessingSection() {
  alert("토큰을 처리하는 중입니다. 잠시만 기다려 주세요.");
  useSaveAuthToken();
  useSendToken();

  return (
    <section className="h-screen">
      <Flex
        flexDirection="flex-row"
        justifyContent="justify-center"
        alignItems="items-center"
        height="full"
      >
        <Spinner size={"md"} />
        <div />
      </Flex>
    </section>
  );
}
