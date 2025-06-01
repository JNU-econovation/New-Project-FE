import Text from "@/components/common/shared/ui/Text";
import ROUTE from "@/constants/route";
import Link from "next/link";
import Left_Chevron from "@/icons/Left_Chevron.svg";
import Image from "next/image";

export default function ChangePasswordHeaderSection() {
  return (
    <header className="border-b border-gray-30 flex flex-col items-center relative">
      <Link href={ROUTE.MY_INFO} className="absolute left-5">
        <Image src={Left_Chevron} alt="화살표 아이콘" width={35} height={35} />
      </Link>
      <Text fontSize="text-2xl" className="pb-3">
        비밀번호 변경
      </Text>
    </header>
  );
}
