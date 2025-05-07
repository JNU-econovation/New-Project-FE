import Spacing from "@shared/layout/Spacing";
import LoginButtonSection from "@pages/LoginButtonSection";
import LoginTitleSection from "@pages/LoginTitleSection";

export default function LoginPage() {
  return (
    <div className="px-4 pt-24">
      <LoginTitleSection />
      <Spacing size={16} />
      <LoginButtonSection />
    </div>
  );
}
