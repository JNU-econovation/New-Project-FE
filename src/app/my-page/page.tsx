import Spacing from "@shared/layout/Spacing";
import CustomerCenterSection from "@pages/my-page/CustomerCenterSection";
import EnvironmentSection from "@pages/my-page/EnvironmentSection";
import MyInfoSection from "@pages/my-page/MyInfoSection";
import LogoutButton from "@widgets/LogoutButton";

export default function MyPage() {
  return (
    <div className="max-h-screen overflow-y-auto">
      <Spacing size={4} />
      <MyInfoSection />
      <Spacing size={5} />
      <div className="h-3 bg-gray-100" />
      <div className="p-5">
        <CustomerCenterSection />
        <EnvironmentSection />
        <Spacing size={4} />
        <LogoutButton />
      </div>
      <Spacing size={4} />
    </div>
  );
}
