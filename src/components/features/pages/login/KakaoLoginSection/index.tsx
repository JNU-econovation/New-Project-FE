"use client";

import useLogBridge from "@hooks/bridge/useLogBridge";
import useRouteBackBridge from "@hooks/bridge/useRouteBackBridge";
import useKakaoLoginQuery from "@hooks/query/useKakaoLoginQuery";
import { useRouter } from "next/navigation";

export default function KakaoLoginSection() {
  const router = useRouter();
  const { data: kakaoLoginUrl, error, isLoading } = useKakaoLoginQuery();
  const log = useLogBridge();
  const routeBack = useRouteBackBridge();

  if (isLoading) return null;

  if (!kakaoLoginUrl || error) {
    console.error("카카오 로그인 URL이 없습니다.");
    console.error("오류 내용:", error);
    log(error);

    routeBack();
    return null;
  }

  if (
    !kakaoLoginUrl.uri.startsWith("https://kauth.kakao.com/oauth/authorize")
  ) {
    console.error("유효하지 않은 카카오 로그인 URL입니다.");
    console.error("카카오 로그인 URL:", kakaoLoginUrl.uri);
    log("유효하지 않은 카카오 로그인 URL입니다.");
    log(kakaoLoginUrl.uri);
    routeBack();
    return null;
  }

  router.replace(kakaoLoginUrl.uri);

  return null;
}
