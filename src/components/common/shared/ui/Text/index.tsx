import { cn } from "@/utils/cn";

interface TextProps {
  children: React.ReactNode;
  className?: string;
  color?: ColorType;
  fontSize?: SizeType;
  fontWeight?: WeightType;
  display?: "block" | "inline";
  align?: TextAlignType;
  opacity?: OpacityType;
  zIndex?:
    | "z-0"
    | "z-10"
    | "z-20"
    | "z-30"
    | "z-40"
    | "z-50"
    | "-z-10"
    | "-z-20"
    | "-z-30"
    | "-z-40"
    | "-z-50";
}
//TODO: text 뺴기

type ColorType =
  | "text-main-green"
  | "text-sub-gray"
  | "text-white"
  | "text-black"
  | "text-error-message";

//TODO: 숫자로 크기 다룰 수 있게 하기
type SizeType =
  | "text-xs"
  | "text-sm"
  | "text-base"
  | "text-xl"
  | "text-xl"
  | "text-2xl"
  | "text-3xl"
  | "text-4xl"
  | "text-6xl"
  | "text-7xl";

type WeightType =
  | "font-thin"
  | "font-extralight"
  | "font-light"
  | "font-normal"
  | "font-medium"
  | "font-semibold"
  | "font-bold"
  | "font-extrabold"
  | "font-black";

type TextAlignType = "text-left" | "text-center" | "text-right";

type OpacityType =
  | "opacity-0"
  | "opacity-10"
  | "opacity-20"
  | "opacity-30"
  | "opacity-40"
  | "opacity-50"
  | "opacity-60"
  | "opacity-70"
  | "opacity-80"
  | "opacity-90"
  | "opacity-100";

export default function Text({
  children,
  className,
  color = "text-black",
  fontSize = "text-base",
  fontWeight = "font-normal",
  display = "inline",
  align = "text-left",
  opacity = "opacity-100",
  zIndex,
}: TextProps) {
  return (
    <span
      className={cn(
        color,
        fontSize,
        fontWeight,
        className,
        display,
        zIndex,
        align,
        opacity
      )}
    >
      {children}
    </span>
  );
}
