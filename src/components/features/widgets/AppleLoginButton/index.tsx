import Flex from "@/components/common/shared/layout/Flex";
import Text from "@/components/common/shared/ui/Text";
import Image from "next/image";
import Apple_Logo from "@/Apple_Logo.svg";

export default function AppleLoginButton() {
  return (
    <button className="pb-4 pt-4 bg-black rounded-lg">
      <Flex
        flexDirection="flex-row"
        alignItems="items-center"
        justifyContent="justify-center"
        gap={3}
      >
        <Image src={Apple_Logo} alt="애플 로고" />
        <Text color="text-white" fontSize="text-sm" fontWeight="font-semibold">
          Apple로 계속하기
        </Text>
      </Flex>
    </button>
  );
}
