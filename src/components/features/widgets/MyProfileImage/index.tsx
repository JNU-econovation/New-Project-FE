import Image, { StaticImageData } from "next/image";
import Default_Profile_Image from "@/images/Default_Profile_Image.png";

interface CommonImageProps {
  src: StaticImageData | string;
  alt: string;
  width?: number;
  height?: number;
}

export default function MyProfileImage({
  src,
  width,
  height,
}: CommonImageProps) {
  return (
    <Image
      src={src || Default_Profile_Image}
      alt="나의 프로필 이미지"
      width={width}
      height={height}
      className="rounded-full border border-gray-30"
    />
  );
}
