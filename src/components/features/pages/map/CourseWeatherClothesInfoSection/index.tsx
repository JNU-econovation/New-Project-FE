import Clothes from "@/icons/Clothes.svg";
import Sunny from "@/icons/Sunny.svg";
import Image from "next/image";

export default function CourseWeatherClothesInfoSection() {
  return (
    <div className="grid grid-cols-2 bg-green-10 rounded-2xl p-2">
      <p className="font-bold text-gray-20">기상 정보</p>
      <p className="font-bold text-gray-20">산행 복장</p>
      <div className="flex items-center justify-around">
        <Image src={Sunny} alt="맑은 날씨" />
        <div>
          <p className="text-4xl font-extralight">
            {"18"}
            <span className="text-3xl">&deg;C</span>
          </p>
          <p className="text-xl">맑음</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Image src={Clothes} alt="옷" />
        <div>
          <p className="text-xl font-bold">바람막이</p>
          <p className="text-sm">긴팔 긴바지 착용 권장</p>
        </div>
      </div>
    </div>
  );
}
