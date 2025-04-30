import postKakaoLogin, { KAKAO_LOGIN_URI } from "@/apis/login/postKakaoLogin";
import { useMutation } from "@tanstack/react-query";

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

const useKakaoLoginMutate = () => {
  return useMutation({
    mutationKey: [KAKAO_LOGIN_URI],
    mutationFn: postKakaoLogin,
  });
};

export default useKakaoLogin;
