import { cn } from "@/utils/cn";

interface TextProps {
  children: React.ReactNode;
  className?: string;
  color?: ColorType;
  fontSize?: SizeType;
  fontWeight?: WeightType;
}

type ColorType =
  | "text-main-green"
  | "text-sub-gray"
  | "text-white"
  | "text-black"
  | "text-error-message";

type SizeType =
  | "text-xs"
  | "text-sm"
  | "text-base"
  | "text-xl"
  | "text-xl"
  | "text-2xl"
  | "text-3xl"
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

export default function Text({
  children,
  className,
  color = "text-black",
  fontSize = "text-base",
  fontWeight = "font-normal",
}: TextProps) {
  return (
    <span className={cn(color, fontSize, fontWeight, className)}>
      {children}
    </span>
  );
}
