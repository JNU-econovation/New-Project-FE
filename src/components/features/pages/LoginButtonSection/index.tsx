import Image from "next/image";

import Kakao_Logo from "@/Kakao_Logo.svg";
import Apple_Logo from "@/Apple_Logo.svg";

import Flex from "@/components/common/shared/layout/Flex";
import Text from "@/components/common/shared/ui/Text";
import Button from "@/components/common/shared/ui/Button";
import Spacing from "@/components/common/shared/layout/Spacing";

export default function LoginButtonSection() {
  return (
    <>
      <Button color="kakaoYellow" size="lg">
        <Flex
          flexDirection="flex-row"
          alignItems="items-center"
          justifyContent="justify-center"
          gap={3}
        >
          <Image src={Kakao_Logo} alt="카카오 로고" />
          <Text fontWeight="font-semibold" fontSize="text-sm">
            카카오톡으로 3초만에 시작하기
          </Text>
        </Flex>
      </Button>
      <Spacing size={4} />
      <Button color="black" size="lg">
        <Flex
          flexDirection="flex-row"
          alignItems="items-center"
          justifyContent="justify-center"
          gap={3}
        >
          <Image src={Apple_Logo} alt="애플 로고" />
          <Text
            color="text-white"
            fontSize="text-sm"
            fontWeight="font-semibold"
          >
            Apple로 계속하기
          </Text>
        </Flex>
      </Button>
    </>
  );
}
