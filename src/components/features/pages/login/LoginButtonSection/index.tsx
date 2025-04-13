import Flex from "@/components/common/shared/layout/Flex";

import KakaoLoginButton from "@/components/features/widgets/KakaoLoginButton";
import AppleLoginButton from "@/components/features/widgets/AppleLoginButton";

export default function LoginButtonSection() {
  return (
    <section className="w-full">
      <Flex flexDirection="flex-col" justifyContent="justify-normal" gap={4}>
        <KakaoLoginButton />
        <AppleLoginButton />
      </Flex>
    </section>
  );
}
