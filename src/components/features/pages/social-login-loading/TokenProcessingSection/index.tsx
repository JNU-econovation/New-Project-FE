"use client";

import Flex from "@/components/common/shared/layout/Flex";
// import Spinner from "@/components/common/shared/ui/Spinner";
import useSaveToken from "@/hooks/social-login-loading/useSaveToken";
import useSendToken from "@/hooks/useSendToken";

export default function TokenProcessingSection() {
  useSaveToken();
  useSendToken();

  return (
    <section className="h-screen">
      <Flex
        flexDirection="flex-row"
        justifyContent="justify-center"
        alignItems="items-center"
        height="full"
      >
        {/* <Spinner size={"md"} /> */}
        <div />
      </Flex>
    </section>
  );
}
