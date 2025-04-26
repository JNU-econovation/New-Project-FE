import Spacing from "@/components/common/shared/layout/Spacing";
import LoginButtonSection from "@/components/features/pages/LoginButtonSection";
import LoginTitleSection from "@/components/features/pages/LoginTitleSection";

export default function LoginPage() {
  return (
    <>
      <div className="px-4 pt-24">
        <LoginTitleSection />
        <Spacing size={16} />
        <LoginButtonSection />
      </div>
    </>
  );
}
