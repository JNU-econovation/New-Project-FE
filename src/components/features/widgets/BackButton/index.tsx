"use client";

import useRouteBackBridge from "@hooks/bridge/useRouteBackBridge";
import Left_Chevron from "@/icons/Left_Chevron.svg";
import Image from "next/image";

export default function BackButton() {
  const goBack = useRouteBackBridge();

  return (
    <button onClick={goBack}>
      <Image src={Left_Chevron} alt="뒤로 가기" />
    </button>
  );
}
