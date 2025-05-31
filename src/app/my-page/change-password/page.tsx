import Spacing from "@/components/common/shared/layout/Spacing";
import ChangePasswordHeaderSection from "@/components/features/pages/change-password/ChangePasswordHeaderSection";
import PasswordInfoSection from "@/components/features/pages/change-password/PasswordInfoSection";

export default function ChangePasswordPage() {
  return (
    <div className="p-5">
      <ChangePasswordHeaderSection />
      <Spacing size={12} />
      <PasswordInfoSection />
    </div>
  );
}
