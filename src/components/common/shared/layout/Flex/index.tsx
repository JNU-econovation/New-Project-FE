import { cn } from "@/utils/cn";

interface FlexProps {
  children: React.ReactNode;
  className?: string;
  flexDirection: FlexDirectionType;
  justifyContent?: JustifyContentType;
  alignItems?: AlignItemsType;
  gap?: number;
}

type FlexDirectionType =
  | "flex-row"
  | "flex-row-reverse"
  | "flex-col"
  | "flex-col-reverse";

type JustifyContentType =
  | "justify-start"
  | "justify-end"
  | "justify-center"
  | "justify-between"
  | "justify-around"
  | "justify-evenly"
  | "justify-normal";

type AlignItemsType =
  | "items-start"
  | "items-end"
  | "items-center"
  | "items-baseline"
  | "items-stretch";

export default function Flex({
  children,
  alignItems = "items-stretch",
  flexDirection,
  justifyContent = "justify-start",
  gap,
  className,
}: FlexProps) {
  return (
    <div
      className={cn(
        "flex",
        flexDirection,
        justifyContent,
        alignItems,
        `gap-[${gap}px]`,
        className
      )}
    >
      {children}
    </div>
  );
}
