import Spacing from "@shared/layout/Spacing";
import { Suspense } from "react";
import MapWithHeaderSection from "@/components/features/widgets/map/MapWithHeaderSection";
import MapHeaderNavbar from "@entities/MapHeaderNavbar";

export default function MapPage() {
  return (
    <div className="relative w-screen h-screen px-6">
      <div className="z-10 fixed">
        <Spacing size={8} />
        <Suspense>
          <MapHeaderNavbar />
        </Suspense>
      </div>
      <MapWithHeaderSection />
    </div>
  );
}
