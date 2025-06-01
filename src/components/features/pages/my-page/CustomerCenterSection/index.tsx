import Spacing from "@/components/common/shared/layout/Spacing";
import Text from "@/components/common/shared/ui/Text";
import ROUTE from "@/constants/route";
import Link from "next/link";
import Gray_Right_Arrow from "@/icons/Gray_Right_Arrow.svg";
import Image from "next/image";

export default function CustomerCenterSection() {
  return (
    <div className="border-b border-gray-30">
      <Text fontSize="text-xl" color="text-main-green">
        고객 센터
      </Text>
      <Spacing size={2} />
      <Link href={ROUTE.FAQ} className="flex items-center justify-between h-10">
        <Text fontSize="text-xl" fontWeight="font-medium">
          자주 묻는 질문
        </Text>
        <Image
          src={Gray_Right_Arrow}
          alt="화살표 아이콘"
          width={10}
          height={10}
        />
      </Link>
      <Link
        href={ROUTE.INQUIRY}
        className="flex items-center justify-between h-10"
      >
        <Text fontSize="text-xl" fontWeight="font-medium">
          문의하기
        </Text>
        <Image
          src={Gray_Right_Arrow}
          alt="화살표 아이콘"
          width={10}
          height={10}
        />
      </Link>
      <Link
        href={ROUTE.CHECK_TERMS}
        className="flex items-center justify-between h-10"
      >
        <Text fontSize="text-xl" fontWeight="font-medium">
          약관 확인
        </Text>
        <Image
          src={Gray_Right_Arrow}
          alt="화살표 아이콘"
          width={10}
          height={10}
        />
      </Link>
      <Spacing size={2} />
    </div>
  );
}
