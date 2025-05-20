import CourseSearchBarSection from "@pages/course/CourseSearchNarSection";
import CourseTabSection from "@pages/course/CourseTabBarSection";
import Spacing from "@shared/layout/Spacing";
import BackButton from "@/components/features/widgets/BackButton";

export default function MountainCoursePage() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="px-6 pt-12 flex flex-col">
        <BackButton />
        <Spacing size={8} />
        <CourseSearchBarSection />
        <Spacing size={4} />
      </div>
      <CourseTabSection />
    </div>
  );
}
