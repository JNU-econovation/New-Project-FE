import KakaoLoginButton from "@/components/features/widgets/KakaoLoginButton";
import AppleLoginButton from "@/components/features/widgets/AppleLoginButton";
import Spacing from "@/components/common/shared/layout/Spacing";

export default function LoginButtonSection() {
  return (
    <section className="w-full">
      <KakaoLoginButton />
      <Spacing size={4} />
      <AppleLoginButton />
    </section>
  );
}
