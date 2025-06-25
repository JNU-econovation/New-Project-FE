import Left_Chevron from "@/icons/Left_Chevron.svg";
import Image from "next/image";
import { ComponentProps } from "react";

const DEFAULT_ALT = "왼쪽 화살표";

interface LeftChevronIconProps
  extends Omit<
    ComponentProps<typeof Image>,
    "src" | "width" | "height" | "alt"
  > {
  alt?: string;
  width?: number;
  height?: number;
}

export default function LeftChevronIcon({
  alt = DEFAULT_ALT,
  width,
  height,
  ...props
}: LeftChevronIconProps) {
  return (
    <Image
      src={Left_Chevron}
      alt={alt}
      width={width}
      height={height}
      {...props}
    />
  );
}
