import { axiosInstance } from "@/apis/instances";

// Todo: 카카오 로그인 API 경로 변경

const postKakaoLogin = async () => {
  await axiosInstance.post("auth/users/signup", {});
};

export default postKakaoLogin;
