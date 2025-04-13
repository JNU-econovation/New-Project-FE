import { https } from "@/apis/instances";

// Todo: 카카오 로그인 API 경로 변경

export const postKakaoLogin = async () => {
  await https.post("auth/users/signup", {});
};
