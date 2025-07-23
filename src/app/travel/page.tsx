import MapWithHeaderSection from "@/components/features/widgets/map/MapWithHeaderSection";
import MapHeaderNavbar from "@entities/MapHeaderNavbar";
import TravelMonitorSection from "@pages/travel/TravelMonitorSection";
import PositionBottom from "@shared/layout/PositionBottom";
import Spacing from "@shared/layout/Spacing";
import { Suspense } from "@suspensive/react";

export default function TravelPage() {
  return (
    <div className="px-6 relative w-screen h-screen">
      <div className="z-10 fixed">
        <Spacing size={8} />
        <Suspense>
          <MapHeaderNavbar />
        </Suspense>
      </div>
      <MapWithHeaderSection />
      <PositionBottom padding={4}>
        <TravelMonitorSection />
      </PositionBottom>
    </div>
  );
}
