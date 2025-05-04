import { instance } from "@/apis/instances";

export const KAKAO_LOGIN_URI = `v1/oauth/kakao`;

const postKakaoLogin = async () => {
  await instance.get(KAKAO_LOGIN_URI, {});
};

export default postKakaoLogin;
