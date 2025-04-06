import { clsx } from "clsx";

interface TxtProps {
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
  | "text-black";

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

export default function Txt({
  children,
  className,
  color = "text-black",
  fontSize = "text-base",
  fontWeight = "font-normal",
}: TxtProps) {
  return (
    <span className={clsx(color, fontSize, fontWeight, className)}>
      {children}
    </span>
  );
}
