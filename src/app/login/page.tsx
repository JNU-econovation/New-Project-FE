import Flex from "@/components/common/shared/layout/Flex";
import LoginButtonSection from "@/components/features/pages/LoginButtonSection";
import LoginTitleSection from "@/components/features/pages/LoginTitleSection";

export default function LoginPage() {
  return (
    <Flex flexDirection="flex-col" alignItems="items-center" gap={12}>
      <LoginTitleSection />
      <LoginButtonSection />
    </Flex>
  );
}
