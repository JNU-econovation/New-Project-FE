"use client";

import Flex from "@/components/common/shared/layout/Flex";
import Spinner from "@/components/common/shared/ui/Spinner";
import useSaveToken from "@/hooks/social-login-loading/useSaveToken";

export default function SpinnerSection() {
  useSaveToken();

  return (
    <section className="h-screen">
      <Flex
        flexDirection="flex-row"
        justifyContent="justify-center"
        alignItems="items-center"
        height="h-full"
      >
        <Spinner size={"md"} />
      </Flex>
    </section>
  );
}
