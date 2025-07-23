import MapHeaderNavbar from "@entities/MapHeaderNavbar";
import CourseDetailBottomSheetSection from "@pages/mountain/CourseDetailBottomSheetSection";
import PositionBottom from "@shared/layout/PositionBottom";
import Spacing from "@shared/layout/Spacing";
import { Suspense } from "@suspensive/react";
import MapWithHeaderSection from "@widgets/map/MapWithHeaderSection";
import TravelStartButton from "@widgets/route/TravelStartButton";

export default function CourseDetailPage() {
  return (
    <div className="relative w-screen h-screen">
      <div className="px-6 z-10 fixed w-full">
        <Spacing size={8} />
        <Suspense>
          <MapHeaderNavbar />
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
      <MapWithHeaderSection />
    </div>
  );
}
