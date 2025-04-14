import { postKakaoLogin } from "@/apis/login";
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
    mutationKey: ["kakaoLogin"],
    mutationFn: postKakaoLogin,
  });
};

export default useKakaoLogin;
