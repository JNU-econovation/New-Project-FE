import Clothes from "@/icons/Clothes.svg";
import Image from "next/image";
import { ComponentProps } from "react";

const DEFAULT_ALT = "옷";

interface ClothesIconProps
  extends Omit<
    ComponentProps<typeof Image>,
    "src" | "width" | "height" | "alt"
  > {
  alt?: string;
  width?: number;
  height?: number;
}

export default function ClothesIcon({
  alt = DEFAULT_ALT,
  ...props
}: ClothesIconProps) {
  return <Image src={Clothes} alt={alt} {...props} />;
}
