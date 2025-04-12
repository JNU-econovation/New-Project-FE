import Flex from "@/components/common/shared/layout/Flex";
import Text from "@/components/common/shared/ui/Text";
import Image from "next/image";
import Kakao_Logo from "@/Kakao_Logo.svg";

export default function KakaoLoginButton() {
  return (
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
  );
}
