import CourseDetailMapSection from "@pages/map/CourseDetailMapSection";
import Spacing from "@shared/layout/Spacing";
import Button from "@shared/ui/Button";
import BackButton from "@widgets/BackButton";

export default function CourseSearchPage() {
  return (
    <div className="relative w-screen h-screen">
      <div className="px-6 z-10 fixed w-full">
        <Spacing size={4} />
        <BackButton />
        <Spacing size={3} />

        <input
          type="text"
          placeholder="출발지 입력"
          className="w-full px-4 py-2 bg-white rounded-xl shadow-sm"
        />
        <Spacing size={4} />
        <input
          type="text"
          placeholder="경유지 입력"
          className="w-full px-4 py-2 bg-white rounded-xl shadow-sm"
        />
        <Spacing size={4} />
        <input
          type="text"
          placeholder="도착지 입력"
          className="w-full px-4 py-2 bg-white rounded-xl shadow-sm"
        />

        <Spacing size={4} />
        <Button fullWidth>검색하기</Button>
      </div>

      <CourseDetailMapSection />
    </div>
  );
}
