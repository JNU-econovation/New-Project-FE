import { cn } from "@/utils/cn";

interface SpacingProps {
  size: number;
}

export default function Spacing({ size }: SpacingProps) {
  return <div className={cn(`mt-${size}`)}></div>;
}
