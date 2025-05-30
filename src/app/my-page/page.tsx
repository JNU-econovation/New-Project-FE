import CustomerSection from "@/components/features/pages/my-page/CustomerCenterSection";
import MyInfoSection from "@/components/features/pages/my-page/MyInfoSection";

export default function MyPage() {
  return (
    <>
      <MyInfoSection />
      <div className="h-3 bg-gray-100" />
      <div className="p-5">
        <CustomerSection />
      </div>
    </>
  );
}
