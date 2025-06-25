import Heart from "@/icons/Heart.svg";
import Image from "next/image";
import { ComponentProps } from "react";

const DEFAULT_ALT = "심장";

interface HeartIconProps
  extends Omit<
    ComponentProps<typeof Image>,
    "src" | "width" | "height" | "alt"
  > {
  alt?: string;
  width?: number;
  height?: number;
}

export default function HeartIcon({
  alt = DEFAULT_ALT,
  width,
  height,
  ...props
}: HeartIconProps) {
  return (
    <Image src={Heart} alt={alt} width={width} height={height} {...props} />
  );
}