import Spacing from "@/components/common/shared/layout/Spacing";
import LoginButtonSection from "@/components/features/pages/LoginButtonSection";
import LoginTitleSection from "@/components/features/pages/LoginTitleSection";

export default function LoginPage() {
  return (
    <>
      <LoginTitleSection />
      <Spacing size={16} />
      <LoginButtonSection />
    </>
  );
}
