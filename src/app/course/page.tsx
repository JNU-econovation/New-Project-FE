import Flex from "@/components/common/shared/layout/Flex";
import MountainGridSection from "@/components/features/pages/course/MountainGridSection";
import MountainSearchBarSection from "@/components/features/pages/course/MountainSearchBarSection";
import MountainSearchTitleSection from "@/components/features/pages/course/MountainSearchTitleSection";
import Spacing from "@shared/layout/Spacing";

export default function CoursePage() {
  return (
    <Flex flexDirection="flex-col" height="screen">
      <div className="px-6 pt-18 flex flex-col">
        <MountainSearchTitleSection />
        <Spacing size={8} />
        <MountainSearchBarSection />
      </div>
      <Spacing size={8} />
      <div className="px-6 overflow-auto">
        <MountainGridSection />
      </div>
    </Flex>
  );
}
