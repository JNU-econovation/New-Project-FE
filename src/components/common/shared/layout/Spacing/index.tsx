import { cn } from "@/utils/cn";

interface SpacingProps {
  children?: React.ReactNode;
  className?: string;
  size: number;
}

export default function Spacing({ children, size, className }: SpacingProps) {
  return <div className={cn(`mt-${size}`, className)}>{children}</div>;
}
