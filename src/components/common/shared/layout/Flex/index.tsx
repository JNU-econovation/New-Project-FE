import { cn } from "@/utils/cn";

interface FlexProps {
  children: React.ReactNode;
  flexDirection: FlexDirectionType;
  justifyContent?: JustifyContentType;
  alignItems?: AlignItemsType;
  maxWidth?: string;
  gap?: number;
  height?: number | "h-full" | "h-screen" | "h-min" | "h-max" | "h-fit";
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
  maxWidth,
  gap,
  height,
}: FlexProps) {
  let heightClass;

  if (height) {
    heightClass = typeof height === "number" ? `h-${height}` : height;
  }

  return (
    <div
      className={cn(
        "flex",
        "w-full",
        maxWidth,
        gap ? `gap-${gap}` : "",
        heightClass,
        flexDirection,
        justifyContent,
        alignItems
      )}
    >
      {children}
    </div>
  );
}
