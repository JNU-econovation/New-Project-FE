import Text from "@/components/common/shared/ui/Text";
import ROUTE from "@/constants/route";
import Image from "next/image";
import Link from "next/link";
import Black_Right_Arrow from "@/icons/Black_Right_Arrow.svg";
import Default_Profile_Image from "@/images/Default_Profile_Image.png";
import CommonImage from "@/components/common/shared/ui/Image";

export default function MyInfoSection() {
  return (
    <div className="p-5">
      <div className="w-full border-b border-gray-30 flex flex-col items-center">
        <Text fontSize="text-2xl" className="pb-3">
          마이 페이지
        </Text>
      </div>
      <div className="flex flex-col items-center mt-5 gap-4">
        <CommonImage
          src={""}
          defaultSrc={Default_Profile_Image}
          alt="나의 프로필"
          width={100}
          height={100}
          className="rounded-full border border-gray-30"
        />
        <Link href={ROUTE.MY_INFO} className="flex flex-row items-center gap-2">
          <Text fontSize="text-3xl" fontWeight="font-bold">
            {"사용자 이름"}
          </Text>
          <Image
            src={Black_Right_Arrow}
            alt="화살표 아이콘"
            width={10}
            height={10}
          />
        </Link>
        <Text fontSize="text-xl" color="text-main-green">
          {"test@naver.com"}
        </Text>
        <div className="flex flex-row items-center gap-10">
          <Link href={ROUTE.HIKING_LOG}>
            <Text
              fontSize="text-xl"
              fontWeight="font-semibold"
              color="text-main-green"
            >
              산행 기록
            </Text>
          </Link>
          <Link href={ROUTE.COURSE_BOOKMARK}>
            <Text
              fontSize="text-xl"
              fontWeight="font-semibold"
              color="text-main-green"
            >
              코스 북마크
            </Text>
          </Link>
        </div>
      </div>
    </div>
  );
}
