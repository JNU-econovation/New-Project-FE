import Spacing from "@/components/common/shared/layout/Spacing";
import CustomerCenterSection from "@/components/features/pages/my-page/CustomerCenterSection";
import EnvironmentSection from "@/components/features/pages/my-page/EnvironmentSection";
import MyInfoSection from "@/components/features/pages/my-page/MyInfoSection";
import LogoutButton from "@/components/features/widgets/LogoutButton";

export default function MyPage() {
  return (
    <>
      <MyInfoSection />
      <div className="h-3 bg-gray-100" />
      <div className="p-5">
        <CustomerCenterSection />
        <EnvironmentSection />
        <Spacing size={4} />
        <LogoutButton />
      </div>
    </>
  );
}
