import { cn } from "@/utils/cn";
import Image, { StaticImageData } from "next/image";

interface CommonImageProps {
  src: string;
  defaultSrc: StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function CommonImage({
  src,
  defaultSrc,
  alt,
  width,
  height,
  className,
}: CommonImageProps) {
  return (
    <Image
      src={src || defaultSrc}
      alt={alt}
      width={width}
      height={height}
      className={cn(className)}
    />
  );
}
