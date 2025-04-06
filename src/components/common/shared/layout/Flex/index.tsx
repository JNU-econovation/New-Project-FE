import { cn } from "@/utils/cn";

interface FlexProps {
  children: React.ReactNode;
  className?: string;
  flexDirection: FlexDirectionType;
  justifyContent?: JustifyContentType;
  alignItems?: AlignItemsType;
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
  className,
}: FlexProps) {
  return (
    <div
      className={cn(
        flexDirection,
        justifyContent,
        alignItems,
        className,
        "flex"
      )}
    >
      {children}
    </div>
  );
}
