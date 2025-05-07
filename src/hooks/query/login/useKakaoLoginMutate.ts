import postKakaoLogin, { KAKAO_LOGIN_URI } from "@/apis/v1/oauth/kakao";
import { useMutation } from "@tanstack/react-query";

export const useKakaoLoginMutate = () => {
  return useMutation({
    mutationKey: [KAKAO_LOGIN_URI],
    mutationFn: postKakaoLogin,
  });
};
