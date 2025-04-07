import Flex from "@/components/common/shared/layout/Flex";

import Star from "@/Star.svg";
import Login_Logo from "@/Login_Logo.svg";

import Image from "next/image";
import Text from "@/components/common/shared/ui/Text";

export default function LoginTitleSection() {
  return (
    <Flex flexDirection="flex-col" alignItems="items-center" gap="gap-12">
      <Flex
        flexDirection="flex-row"
        alignItems="items-end"
        gap="gap-2.5"
        maxWidth="max-w-fit"
      >
        <Flex flexDirection="flex-col" maxWidth="max-w-fit">
          <Text fontWeight="font-bold" className="text-3xl w-fit">
            그럼,
          </Text>
          <Text fontWeight="font-bold" className="text-3xl w-fit">
            모험을 시작해볼까요?
          </Text>
        </Flex>
        <Image src={Star} alt="별" />
      </Flex>
      <Image src={Login_Logo} alt="로그인 페이지 로고" />
    </Flex>
  );
}
