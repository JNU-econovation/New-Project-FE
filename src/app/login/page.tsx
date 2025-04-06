import Flex from "@/components/common/shared/layout/Flex";
import LoginButtonSection from "@/components/features/pages/LoginButtonSection";
import LoginTitleSection from "@/components/features/pages/LoginTitleSection";

export default function LoginPage() {
  return (
    <div className="pt-[120px] pb-[120px] pl-[22px] pr-[22px]">
      <Flex
        flexDirection="flex-col"
        alignItems="items-center"
        className="gap-[50px]"
      >
        <LoginTitleSection />
        <LoginButtonSection />
      </Flex>
    </div>
  );
}
