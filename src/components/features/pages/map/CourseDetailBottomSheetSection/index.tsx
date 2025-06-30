"use client";

import BottomSheet from "@entities/BottomSheet";
import Carousel from "@entities/Carousel";
import CourseBaseTab from "@entities/CourseBaseTab";
import CourseImageInfoSection from "@pages/map/CourseImageInfoSection";
import CourseWeatherClothesInfoSection from "@pages/map/CourseWeatherClothesInfoSection";
import Spacing from "@shared/layout/Spacing";
import CourseMetaDataUi from "@shared/ui/CourseMetaDataUi";

export default function CourseDetailBottomSheetSection() {
  const courseList = ["증심사", "중머리재", "원효분소"];

  return (
    <section>
      <BottomSheet>
        <CourseBaseTab courseList={courseList} />
        <Spacing size={2} />
        <CourseMetaDataUi difficulty="easy" distance={123} time={23} />
        <Spacing size={2} />

        <Carousel
          items={[
            <CourseWeatherClothesInfoSection key={1} />,
            <CourseImageInfoSection key={2} />,
          ]}
        />
        <Spacing size={1} />
      </BottomSheet>
    </section>
  );
}
