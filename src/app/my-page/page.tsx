import CustomerSection from "@/components/features/pages/my-page/CustomerCenterSection";
import EnvironmentSection from "@/components/features/pages/my-page/EnvironmentSection";
import MyInfoSection from "@/components/features/pages/my-page/MyInfoSection";

export default function MyPage() {
  return (
    <>
      <MyInfoSection />
      <div className="h-3 bg-gray-100" />
      <div className="p-5">
        <CustomerSection />
        <EnvironmentSection />
      </div>
    </>
  );
}
