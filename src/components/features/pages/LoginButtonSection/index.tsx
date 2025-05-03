import Spacing from "@shared/layout/Spacing";
import AppleLoginButton from "../../widgets/AppleLoginButton";
import KakaoLoginButton from "../../widgets/KakaoLoginButton";

export default function LoginButtonSection() {
  return (
    <section>
      <KakaoLoginButton />

      <Spacing size={4} />

      <AppleLoginButton />
    </section>
  );
}
