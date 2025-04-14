import { InputHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/utils/cn";

export const InputVariants = cva(`rounded-lg`, {
  variants: {
    color: {
      primary: "bg-input-gray",
    },
    size: {
      primary: "w-full p-4",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "primary",
  },
});

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "color" | "size">,
    VariantProps<typeof InputVariants> {
  type: string;
  placeholder: string;
  className?: string;
}

export function Input({
  type,
  placeholder,
  className,
  size,
  color,
}: InputProps) {
  return (
    <input
      className={cn(InputVariants({ className, size, color }))}
      type={type}
      placeholder={placeholder}
    />
  );
}

export default Input;
