import { instance } from "@/apis/_instances";

export const KAKAO_LOGIN_URI = `v1/oauth/kakao`;

const postKakaoLogin = async () => {
  await instance.get(KAKAO_LOGIN_URI, {});
};

export default postKakaoLogin;
