"use client";

import useLogBridge from "@hooks/bridge/useLogBridge";
import useRouteBackBridge from "@hooks/bridge/useRouteBackBridge";
import useKakaoLoginQuery from "@hooks/query/useKakaoLoginQuery";

export default function KakaoLoginSection() {
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

  window.location.href = kakaoLoginUrl.uri;

  return null;
}
