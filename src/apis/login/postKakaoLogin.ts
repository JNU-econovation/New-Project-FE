import { instance } from "@/apis/instances";

// Todo: 카카오 로그인 API 경로 변경

export const KAKAO_LOGIN_URI = `${process.env.NEXT_PUBLIC_BASE_URL}auth/users/signup`;

const postKakaoLogin = async () => {
  await instance.post(KAKAO_LOGIN_URI, {});
};

export default postKakaoLogin;
