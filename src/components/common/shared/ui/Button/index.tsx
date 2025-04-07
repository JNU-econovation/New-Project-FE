import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/utils/cn";

export const ButtonVariants = cva(`rounded-lg`, {
  variants: {
    color: {
      green: "bg-main-green text-white",
      yellow: "bg-yellow text-black",
      black: "bg-black text-white",
      white: "bg-white text-black",
    },
    size: {
      lg: "w-full p-4",
      md: "p-2",
      sm: "p-1",
    },
  },
  defaultVariants: {
    color: "green",
    size: "lg",
  },
});

interface ButtonProps extends VariantProps<typeof ButtonVariants> {
  className?: string;
  children?: React.ReactNode;
}

export function Button({ className, children, color, size }: ButtonProps) {
  return (
    <button className={cn(ButtonVariants({ color, size, className }))}>
      {children}
    </button>
  );
}

export default Button;
