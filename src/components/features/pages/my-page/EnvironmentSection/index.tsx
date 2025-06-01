import Spacing from "@shared/layout/Spacing";
import Text from "@shared/ui/Text";
import ROUTE from "@/constants/route";
import Image from "next/image";
import Link from "next/link";
import Gray_Right_Arrow from "@/icons/Gray_Right_Arrow.svg";

export default function EnvironmentSection() {
  return (
    <section className="border-b border-gray-30">
      <Spacing size={4} />
      <Text fontSize="text-xl" color="text-main-green">
        환경
      </Text>
      <Spacing size={2} />
      <Link
        href={ROUTE.NOTIFICATION_SETTINGS}
        className="flex items-center justify-between h-10"
      >
        <Text fontSize="text-xl" fontWeight="font-medium">
          알림 설정
        </Text>
        <Image
          src={Gray_Right_Arrow}
          alt="화살표 아이콘"
          width={10}
          height={10}
        />
      </Link>
      <Spacing size={2} />
      <div className="flex items-center justify-between h-10">
        <Text fontSize="text-xl" fontWeight="font-medium" color="text-sub-gray">
          버전 정보
        </Text>
        <Text fontSize="text-xl" fontWeight="font-medium" color="text-sub-gray">
          {"2.0.0"}
        </Text>
      </div>
    </section>
  );
}
