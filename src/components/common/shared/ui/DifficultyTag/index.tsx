import type { CourseDifficulty } from "@/types/course";
import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";

export const DifficultyTagVariants = cva(
  "rounded-xl border-gray-200 border px-4 text-yellow-500 text-sm",
  {
    variants: {
      difficulty: {
        easy: "text-green-500",
        normal: "text-yellow-500",
        hard: "text-red-500",
      },
    },
  }
);

const difficultyTag = {
  easy: "쉬움",
  normal: "보통",
  hard: "어려움",
} as const;

interface DifficultyTagProps {
  difficulty: CourseDifficulty;
}

export default function DifficultyTag({ difficulty }: DifficultyTagProps) {
  return (
    <div className={cn(DifficultyTagVariants({ difficulty }))}>
      {difficultyTag[difficulty]}
    </div>
  );
}
