import Clock from "@/icons/Clock.svg";
import Position_Pointer from "@/icons/Position_Pointer.svg";
import Image from "next/image";
import DifficultyTag from "../DifficultyTag";
import type { CourseDifficulty } from "@/types/course";

interface CourseMetaDataUiProps {
  distance: number;
  time: number;
  difficulty: CourseDifficulty;
}

export default function CourseMetaDataUi({
  difficulty,
  distance,
  time,
}: CourseMetaDataUiProps) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-1">
        <Image src={Position_Pointer} alt="거리" />
        <span className="text-gray-20 text-sm">{distance}km</span>
      </div>
      <div className="flex items-center gap-1">
        <Image src={Clock} alt="소요시간" />
        <span className="text-gray-20 text-sm">{time}시간</span>
      </div>
      <DifficultyTag difficulty={difficulty} />
    </div>
  );
}
