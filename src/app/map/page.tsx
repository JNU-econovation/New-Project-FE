import CourseDetailMapSection from "@pages/map/CourseDetailMapSection";
import MapTadHeaderSection from "@pages/map/MapTadHeaderSection";
import Spacing from "@shared/layout/Spacing";
import BackButton from "@widgets/BackButton";

export default function MapPage() {
  return (
    <div className="relative w-screen h-screen px-6">
      <div className="z-10 fixed">
        <Spacing size={4} />
        <div className="z-10">
          <BackButton />
        </div>
        <Spacing size={3} />
        <MapTadHeaderSection />
      </div>
      <CourseDetailMapSection />
    </div>
  );
}
