import Spinner from "@/components/common/shared/ui/Spinner";
import TokenProcessingSection from "@/components/features/pages/social-login-loading/TokenProcessingSection";
import { Suspense } from "react";

export default function SocialLoginLoadingPage() {
  return (
    <Suspense fallback={<Spinner size={"md"} />}>
      <TokenProcessingSection />
    </Suspense>
  );
}
