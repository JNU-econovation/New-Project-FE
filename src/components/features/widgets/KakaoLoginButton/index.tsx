"use client";

import useKakaoLogin from "@/hooks/login/useKakaoLogin";
import KakaoLogoIcon from "@icons/KakaoLogoIcon";
import Flex from "@shared/layout/Flex";
import Button from "@shared/ui/Button";
import Text from "@shared/ui/Text";

export default function KakaoLoginButton() {
  const { onKakaoLogin } = useKakaoLogin();

  return (
    <Button
      color="kakaoYellow"
      size="lg"
      fullWidth={true}
      onClick={onKakaoLogin}
    >
      <Flex
        flexDirection="flex-row"
        alignItems="items-center"
        justifyContent="justify-center"
        gap={3}
      >
        <KakaoLogoIcon />
        <Text fontWeight="font-semibold" fontSize="text-sm">
          카카오톡으로 3초만에 시작하기
        </Text>
      </Flex>
    </Button>
  );
}
