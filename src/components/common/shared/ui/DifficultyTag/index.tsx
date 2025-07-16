import type { CourseDifficulty } from "@/types/course";
import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";

export const DifficultyTagVariants = cva(
  "rounded-xl border-gray-200 border px-4 text-yellow-500 text-sm",
  {
    variants: {
      difficulty: {
        쉬움: "text-green-500",
        보통: "text-yellow-500",
        어려움: "text-red-500",
      },
    },
  }
);

interface DifficultyTagProps {
  difficulty: CourseDifficulty;
}

export default function DifficultyTag({ difficulty }: DifficultyTagProps) {
  return (
    <div className={cn(DifficultyTagVariants({ difficulty }))}>
      {difficulty}
    </div>
  );
}
