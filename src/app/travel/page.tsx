import MapHeaderNavbar from "@entities/MapHeaderNavbar";
import TravelMonitorSection from "@pages/travel/TravelMonitorSection";
import PositionBottom from "@shared/layout/PositionBottom";
import Spacing from "@shared/layout/Spacing";
import MapWithHeaderSection from "@widgets/map/MapWithHeaderSection";

export default function TravelPage() {
  return (
    <div className="px-6 relative w-screen h-screen">
      <div className="z-10 fixed">
        <Spacing size={8} />
        <MapHeaderNavbar />
      </div>
      <MapWithHeaderSection />
      <PositionBottom padding={4} bottom={0}>
        <TravelMonitorSection />
      </PositionBottom>
    </div>
  );
}
