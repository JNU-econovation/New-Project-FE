import Spacing from "@shared/layout/Spacing";
import ChangePasswordHeaderSection from "@pages/change-password/ChangePasswordHeaderSection";
import PasswordInfoSection from "@pages/change-password/PasswordInfoSection";

export default function ChangePasswordPage() {
  return (
    <div className="p-5">
      <ChangePasswordHeaderSection />
      <Spacing size={12} />
      <PasswordInfoSection />
    </div>
  );
}
