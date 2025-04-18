import Flex from "@/components/common/shared/layout/Flex";
import Kakao_Logo from "@/Kakao_Logo.svg";

import Apple_Logo from "@/Apple_Logo.svg";
import Image from "next/image";
import Text from "@/components/common/shared/ui/Text";

export default function LoginButtonSection() {
  return (
    <Flex flexDirection="flex-col" justifyContent="justify-normal" gap={4}>
      <button className="pb-4 pt-4 bg-kakao-yellow rounded-lg">
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
      </button>
      <button className="pb-4 pt-4 bg-black rounded-lg">
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
      </button>
    </Flex>
  );
}
