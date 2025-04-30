import { useKakaoLoginMutate } from "@/hooks/query/login/useKakaoLoginMutate";

const useKakaoLogin = () => {
  const { mutate } = useKakaoLoginMutate();

  const onKakaoLogin = () => {
    mutate(undefined, {
      onError: () => {
        alert("카카오 로그인에 실패했습니다.");
      },
    });
  };
  return {
    onKakaoLogin,
  };
};

export default useKakaoLogin;
