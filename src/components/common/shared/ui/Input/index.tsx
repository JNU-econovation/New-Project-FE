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

interface InputProps extends VariantProps<typeof InputVariants> {
  children?: React.ReactNode;
  type: string;
  placeholder: string;
  className?: string;
}

export function Input({
  children,
  type = "text",
  placeholder = "test",
  className,
  color,
  size,
}: InputProps) {
  return (
    <input
      className={cn(InputVariants({ color, size, className }))}
      type={type}
      placeholder={placeholder}
    >
      {children}
    </input>
  );
}

export default Input;
