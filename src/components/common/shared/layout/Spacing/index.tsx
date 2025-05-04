import { SizeNumberType } from "@/type/css/height";
import { cn } from "@/utils/cn";

interface SpacingProps {
  size: SizeNumberType;
}

export default function Spacing({ size }: SpacingProps) {
  return <div className={cn(`mt-${size}`)}></div>;
}
