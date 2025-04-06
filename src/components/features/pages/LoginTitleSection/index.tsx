import Flex from "@/components/common/shared/layout/Flex";

import Star from "@/Star.svg";
import Login_Logo from "@/Login_Logo.svg";

import Image from "next/image";
import Txt from "@/components/common/shared/ui/Txt";

export default function LoginTitleSection() {
  return (
    <Flex
      flexDirection="flex-col"
      alignItems="items-center"
      className="gap-[50px]"
    >
      <Flex flexDirection="flex-row" alignItems="items-end">
        <Flex flexDirection="flex-col">
          <Txt fontWeight="font-bold" className="text-[30px]">
            그럼,
          </Txt>
          <Txt fontWeight="font-bold" className="text-[30px]">
            모험을 시작해볼까요?
          </Txt>
        </Flex>
        <Image src={Star} alt="별" />
      </Flex>
      <Image src={Login_Logo} alt="로그인 페이지 로고" />
    </Flex>
  );
}
