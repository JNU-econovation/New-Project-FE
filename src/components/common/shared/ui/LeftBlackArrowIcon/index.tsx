import Left_Chevron from "@/icons/Left_Chevron.svg";
import Image from "next/image";

interface LeftBlackArrowIconProps {
  width?: number;
  height?: number;
}

export default function LeftBlackArrowIcon({
  width,
  height,
}: LeftBlackArrowIconProps) {
  return (
    <Image
      src={Left_Chevron}
      alt="왼쪽 검은색 화살표 아이콘"
      width={width}
      height={height}
    />
  );
}
