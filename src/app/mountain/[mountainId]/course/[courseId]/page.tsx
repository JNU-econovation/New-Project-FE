import CourseDetailBottomSheetSection from "@pages/map/CourseDetailBottomSheetSection";
import CourseDetailMapSection from "@pages/map/CourseDetailMapSection";
import CourseDetailMapTagHeaderSection from "@pages/map/CourseDetailMapTagHeaderSection";
import PositionBottom from "@shared/layout/PositionBottom";
import Spacing from "@shared/layout/Spacing";
import { Suspense } from "@suspensive/react";
import TravelStartButton from "@widgets/TravelStartButton";

export default function CourseDetailPage() {
  return (
    <div className="relative w-screen h-screen">
      <div className="px-6 z-10 fixed w-full">
        <Spacing size={8} />
        <Suspense>
          <CourseDetailMapTagHeaderSection />
        </Suspense>
      </div>
      <PositionBottom bottom={88}>
        <div className="px-6">
          <CourseDetailBottomSheetSection />
        </div>
      </PositionBottom>

      <PositionBottom>
        <div className="px-6">
          <TravelStartButton />
        </div>
      </PositionBottom>
      <CourseDetailMapSection />
    </div>
  );
}
