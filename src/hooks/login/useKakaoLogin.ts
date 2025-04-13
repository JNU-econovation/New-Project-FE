import { postKakaoLogin } from "@/apis/login";
import { MutateOptions, useMutation } from "@tanstack/react-query";

const useKakaoLogin = () => {
  const { postKakaoLogin } = useKakaoLoginMutate();

  const onKakaoLogin = () => {
    postKakaoLogin({
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
  const { mutate } = useMutation({
    mutationKey: ["kakaoLogin"],
    mutationFn: postKakaoLogin,
  });

  return {
    postKakaoLogin: (
      mutateOption?: MutateOptions<void, Error, void, unknown>
    ) => {
      mutate(undefined, {
        ...mutateOption,
      });
    },
  };
};

export default useKakaoLogin;
