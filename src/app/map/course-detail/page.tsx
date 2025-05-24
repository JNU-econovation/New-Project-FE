import CourseDetailMapTagHeaderSection from "@pages/map/CourseDetailMapTagHeaderSection";
import TravelStartButton from "@widgets/TravelStartButton";
import CourseDetailBottomSheetSection from "@pages/map/CourseDetailBottomSheetSection";
import CourseDetailMapSection from "@pages/map/CourseDetailMapSection";
import PositionBottom from "@shared/layout/PositionBottom";
import Spacing from "@shared/layout/Spacing";
import BackButton from "@widgets/BackButton";

export default function CourseDetailPage() {
  return (
    <div className="relative w-screen h-screen">
      <div className="px-6 z-10 fixed">
        <Spacing size={4} />
        <BackButton />
        <Spacing size={3} />
        <CourseDetailMapTagHeaderSection />
      </div>
      <PositionBottom bottom={72}>
        <div className="px-6">
          <CourseDetailBottomSheetSection />
        </div>
      </PositionBottom>

      <PositionBottom>
        <div className="px-6">
          <TravelStartButton />
        </div>
      </PositionBottom>
      {/* </div> */}
      <CourseDetailMapSection />
    </div>
  );
}
