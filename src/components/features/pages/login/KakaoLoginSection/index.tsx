"use client";

import useRouteBackBridge from "@/hooks/feature/bridge/useRouteBackBridge";
import useShowToastBridge from "@/hooks/feature/bridge/useShowToastBridge";
import useKakaoLoginQuery from "@/hooks/feature/query/query/useKakaoLoginQuery";
// import { useRouter } from "next/navigation";

export default function KakaoLoginSection() {
  const { data, isLoading, error } = useKakaoLoginQuery();
  // const route = useRouter();
  const goBack = useRouteBackBridge();
  const showToast = useShowToastBridge();

  if (error) {
    showToast({
      type: "error",
      text1: "카카오 로그인 실패",
      text2: "로그인에 실패했습니다. 잠시 후 다시 시도해주세요.",
    });
    // alert("카카오 로그인에 실패했습니다. 잠시 후 다시 시도해주세요.");
    goBack();
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <span className="ml-4 text-gray-700 text-2xl">
          로그인에 실패했습니다... 🥲
        </span>
      </div>
    );
  }

  if (!isLoading && data && data.uri) {
    const { uri } = data;
    // alert(uri);
    window.location.href = uri;
    return null;
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full border-b-2 border-r-2 border-main-green" />
      <span className="ml-4 text-gray-700 text-2xl">로그인 중...</span>
    </div>
  );
}
