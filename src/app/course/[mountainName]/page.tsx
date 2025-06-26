import CourseSearchBarSection from "@pages/course/CourseSearchNarSection";
import CourseTabSection from "@pages/course/CourseTabBarSection";
import Spacing from "@shared/layout/Spacing";
import BackButton from "@/components/features/widgets/BackButton";
import Flex from "@/components/common/shared/layout/Flex";
import { Suspense } from "react";

export default function MountainCoursePage() {
  return (
    <Flex flexDirection="flex-col" height={"screen"}>
      <Flex flexDirection="flex-col">
        <div className="px-6 pt-12">
          <BackButton />
          <Spacing size={8} />
          <CourseSearchBarSection />
          <Spacing size={4} />
        </div>
      </Flex>
      <Suspense>
        <CourseTabSection />
      </Suspense>
    </Flex>
  );
}
