import Head_Damage from "@/icons/Head_Damage.svg";
import Image from "next/image";
import { ComponentProps } from "react";

const DEFAULT_ALT = "머리 손상";

interface HeadDamageIconProps
  extends Omit<
    ComponentProps<typeof Image>,
    "src" | "width" | "height" | "alt"
  > {
  alt?: string;
  width?: number;
  height?: number;
}

export default function HeadDamageIcon({
  alt = DEFAULT_ALT,
  width,
  height,
  ...props
}: HeadDamageIconProps) {
  return (
    <Image
      src={Head_Damage}
      alt={alt}
      width={width}
      height={height}
      {...props}
    />
  );
}