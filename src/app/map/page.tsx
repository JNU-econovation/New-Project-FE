import MapHeaderNavbar from "@entities/MapHeaderNavbar";
import Spacing from "@shared/layout/Spacing";
import MapWithHeaderSection from "@widgets/map/MapWithHeaderSection";

export default function MapPage() {
  return (
    <div className="relative w-screen h-screen px-6">
      <div className="z-10 fixed">
        <Spacing size={8} />
        <MapHeaderNavbar />
      </div>
      <MapWithHeaderSection />
    </div>
  );
}
