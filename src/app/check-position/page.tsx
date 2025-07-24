import CheckPositionMap from "@pages/check-position/CheckPositionMap";
import { Suspense } from "@suspensive/react";

export default function CheckPositionPage() {
  return (
    <Suspense>
      <CheckPositionMap />
    </Suspense>
  );
}
