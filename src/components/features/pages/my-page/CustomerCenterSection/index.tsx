import Spacing from "@/components/common/shared/layout/Spacing";
import Text from "@/components/common/shared/ui/Text";
import ROUTE from "@/constants/route";
import Link from "next/link";

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
        <Text fontSize="text-xl" fontWeight="font-medium" color="text-sub-gray">
          {">"}
        </Text>
      </Link>
      <Link
        href={ROUTE.INQUIRY}
        className="flex items-center justify-between h-10"
      >
        <Text fontSize="text-xl" fontWeight="font-medium">
          문의하기
        </Text>
        <Text fontSize="text-xl" fontWeight="font-medium" color="text-sub-gray">
          {">"}
        </Text>
      </Link>
      <Link
        href={ROUTE.CHECK_TERMS}
        className="flex items-center justify-between h-10"
      >
        <Text fontSize="text-xl" fontWeight="font-medium">
          약관 확인
        </Text>
        <Text fontSize="text-xl" fontWeight="font-medium" color="text-sub-gray">
          {">"}
        </Text>
      </Link>
      <Spacing size={2} />
    </div>
  );
}
