import CourseDetailMapSection from "@pages/map/CourseDetailMapSection";
import TravelMapTagHeaderSection from "@pages/travel/TravelMapTabHeaderSection";
import TravelMonitorSection from "@pages/travel/TravelMonitorSection";
import PositionBottom from "@shared/layout/PositionBottom";
import Spacing from "@shared/layout/Spacing";
import BackButton from "@widgets/BackButton";
import { Suspense } from "react";

export default function TravelPage() {
  return (
    <div className="px-6">
      <div className="z-10 fixed">
        <Spacing size={4} />
        <div className="z-10">
          <BackButton />
        </div>
        <Spacing size={3} />
        <Suspense>
          <TravelMapTagHeaderSection />
        </Suspense>
      </div>
      <CourseDetailMapSection />
      <PositionBottom padding={4}>
        <TravelMonitorSection />
      </PositionBottom>
    </div>
  );
}
