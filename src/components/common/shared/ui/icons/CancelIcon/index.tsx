import Cancel from "@/icons/Cancel.svg";
import Image from "next/image";
import { ComponentProps } from "react";

const DEFAULT_ALT = "입력 취소";
const DEFAULT_WIDTH = 24;
const DEFAULT_HEIGHT = 24;

interface CancelIconProps
  extends Omit<
    ComponentProps<typeof Image>,
    "src" | "width" | "height" | "alt"
  > {
  alt?: string;
  width?: number;
  height?: number;
}

export default function CancelIcon({
  alt = DEFAULT_ALT,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
  ...props
}: CancelIconProps) {
  return (
    <Image src={Cancel} alt={alt} width={width} height={height} {...props} />
  );
}
