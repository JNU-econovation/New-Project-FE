import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/utils/cn";

export const SpinnerVariants = cva(
  `rounded-full border-4 border-t-transparent animate-spin`,
  {
    variants: {
      size: {
        sm: "w-4 h-4",
        md: "w-8 h-8",
        lg: "w-12 h-12",
        xl: "w-16 h-16",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  }
);

export default function Spinner({
  size,
}: VariantProps<typeof SpinnerVariants>) {
  return <div className={cn(SpinnerVariants({ size }))} />;
}
