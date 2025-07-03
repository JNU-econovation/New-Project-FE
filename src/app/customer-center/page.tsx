import CustomerCenterTab from "@widgets/CustomerCenterTab";
import { Suspense } from "react";

export default function CustomerCenterPage() {
  return (
    <div className="px-6">
      <Suspense>
        <CustomerCenterTab />
      </Suspense>
    </div>
  );
}
