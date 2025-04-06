import Flex from "@/components/common/shared/layout/Flex";
import Kakao_Logo from "@/Kakao_Logo.svg";

import Apple_Logo from "@/Apple_Logo.svg";
import Image from "next/image";
import Txt from "@/components/common/shared/ui/Txt";

export default function LoginButtonSection() {
  return (
    <Flex
      flexDirection="flex-col"
      justifyContent="justify-normal"
      className="gap-[15px] w-full"
    >
      <button className="h-[57px] bg-yellow rounded-lg">
        <Flex
          flexDirection="flex-row"
          alignItems="items-center"
          justifyContent="justify-center"
          className="gap-[10px]"
        >
          <Image src={Kakao_Logo} alt="카카오 로고" />
          <Txt fontWeight="font-semibold" fontSize="text-sm">
            카카오톡으로 3초만에 시작하기
          </Txt>
        </Flex>
      </button>
      <button className="h-[57px] bg-black rounded-lg">
        <Flex
          flexDirection="flex-row"
          alignItems="items-center"
          justifyContent="justify-center"
          className="gap-[10px]"
        >
          <Image src={Apple_Logo} alt="애플 로고" />
          <Txt color="text-white" fontSize="text-sm" fontWeight="font-semibold">
            Apple로 계속하기
          </Txt>
        </Flex>
      </button>
    </Flex>
  );
}
