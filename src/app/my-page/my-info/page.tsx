import Spacing from "@/components/common/shared/layout/Spacing";
import MyInfoHeaderSection from "@/components/features/pages/my-info/MyInfoHeaderSection";
import PersonalInfoSection from "@/components/features/pages/my-info/PersonalInfoSection";

export default function MyInfoPage() {
  return (
    <div className="p-5">
      <MyInfoHeaderSection />
      <Spacing size={4} />
      <PersonalInfoSection />
    </div>
  );
}
