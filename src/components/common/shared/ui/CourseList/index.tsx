import type { CourseDifficulty } from "@/types/course";
import StarBlockIcon from "@icons/StarBlockIcon";
import StarWeakIcon from "@icons/StarWeakIcon";
import CourseMetaDataUi from "@shared/ui/CourseMetaDataUi";

interface CourseListProps {
  name: string;
  duration: number;
  length: number;
  difficulty: CourseDifficulty;
  bookmark: boolean;
}

export default function CourseList({
  name,
  duration,
  length,
  difficulty,
  bookmark,
}: CourseListProps) {
  return (
    <li className="flex gap-4 justify-between bg-white rounded-lg p-3">
      <div className="flex flex-col justify-between grow">
        <span className="text-lg font-semibold">{name}</span>
        <CourseMetaDataUi
          time={duration}
          distance={length}
          difficulty={difficulty}
        />
      </div>
      <div className="w-24 h-24 bg-slate-100 rounded-xl relative">
        <div className="absolute top-2 right-2">
          {bookmark ? (
            <StarBlockIcon alt="북마크된 코스" />
          ) : (
            <StarWeakIcon alt="북마크되지 않은 코스" />
          )}
        </div>
      </div>
    </li>
  );
}
