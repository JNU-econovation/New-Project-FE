"use client";

import useRouteBackBridge from "@hooks/feature/bridge/useRouteBackBridge";
import useShowToastBridge from "@hooks/feature/bridge/useShowToastBridge";
import useKakaoLoginQuery from "@hooks/feature/query/query/useKakaoLoginQuery";
import Spinner from "@shared/ui/Spinner";
import { ErrorBoundary, Suspense } from "@suspensive/react";

export default ErrorBoundary.with(
  {
    onError: function ErrorHandler() {
      const goBack = useRouteBackBridge();
      const showToast = useShowToastBridge();
      showToast({
        type: "error",
        text1: "카카오 로그인 실패",
        text2: "로그인에 실패했습니다. 잠시 후 다시 시도해주세요.",
      });
      goBack();
    },
    fallback: function ErrorFallback() {
      return (
        <div className="w-screen h-screen flex items-center justify-center">
          <span className="ml-4 text-gray-700 text-2xl">
            로그인에 실패했습니다... 🥲
          </span>
        </div>
      );
    },
  },
  Suspense.with(
    {
      fallback: (
        <div className="w-screen h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full border-b-2 border-r-2 border-main-green" />
          <Spinner size={"sm"} />
          <span className="ml-4 text-gray-20 text-xl">
            카카오 로그인 페이지로 이동중...
          </span>
        </div>
      ),
      clientOnly: true,
      name: "KakaoLoginSection",
    },
    () => {
      const { data } = useKakaoLoginQuery();
      if (data && data.uri) {
        const { uri } = data;
        window.location.href = uri;
        return null;
      }
      return null;
    }
  )
);
