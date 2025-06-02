import Spacing from "@shared/layout/Spacing";
import EmergencyPersonalInfoSection from "@pages/my-info/EmergencyPersonalInfoSection";
import MyInfoHeaderSection from "@pages/my-info/MyInfoHeaderSection";
import PersonalInfoSection from "@pages/my-info/PersonalInfoSection";

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
