import { getKakaoLogin, KAKAO_LOGIN_URI } from "@api/v1/oauth/kakao";
import { useQuery } from "@tanstack/react-query";

const useKakaoLoginQuery = () => {
  return useQuery({
    queryKey: [KAKAO_LOGIN_URI],
    queryFn: getKakaoLogin,
  });
};

export default useKakaoLoginQuery;
