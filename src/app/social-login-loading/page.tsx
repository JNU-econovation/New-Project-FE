import Spinner from "@shared/ui/Spinner";
import TokenProcessingSection from "@pages/social-login-loading/TokenProcessingSection";
import { Suspense } from "react";

export default function SocialLoginLoadingPage() {
  return (
    <Suspense fallback={<Spinner size={"md"} />}>
      <TokenProcessingSection />
    </Suspense>
  );
}
