import Mock_Mountain from "@/images/Mock_Mountain.png";
import Mock_Mountain2 from "@/images/Mock_Mountain2.png";
import Image from "next/image";

export default function CourseImageInfoSection() {
  return (
    <div className="grid grid-cols-2 bg-green-10 rounded-2xl p-2">
      <div className="flex items-center justify-center w-full h-full">
        <Image src={Mock_Mountain} alt="코스 상세 사진" />
      </div>
      <div className="flex items-center justify-center">
        <Image src={Mock_Mountain2} alt="코스 상세 사진" />
      </div>
    </div>
  );
}
