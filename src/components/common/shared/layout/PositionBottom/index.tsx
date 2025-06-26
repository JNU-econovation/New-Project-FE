import { cn } from "@/utils/cn";
import { PropsWithChildren } from "react";

const DEFAULT_BOTTOM_SPACE = 18; // 하단 여백

interface PositionBottomProps extends PropsWithChildren {
  bottom?: number;
  zIndex?: number;
  padding?: number;
}

export default function PositionBottom({
  children,
  bottom = DEFAULT_BOTTOM_SPACE,
  padding = 0,
}: PositionBottomProps) {
  return (
    <div
      className={cn("absolute left-0 w-full")}
      style={{ bottom, zIndex: 10, padding: `${padding * 0.25}rem` }}
    >
      {children}
    </div>
  );
}
