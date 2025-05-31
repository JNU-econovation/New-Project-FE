import Spacing from "@/components/common/shared/layout/Spacing";
import EmergencyPersonalInfoSection from "@/components/features/pages/my-info/EmergencyPersonalInfoSection";
import MyInfoHeaderSection from "@/components/features/pages/my-info/MyInfoHeaderSection";
import PersonalInfoSection from "@/components/features/pages/my-info/PersonalInfoSection";

export default function MyInfoPage() {
  return (
    <div className="p-5">
      <MyInfoHeaderSection />
      <Spacing size={4} />
      <PersonalInfoSection />
      <Spacing size={4} />
      <EmergencyPersonalInfoSection />
    </div>
  );
}
