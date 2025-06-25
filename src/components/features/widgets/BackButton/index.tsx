"use client";

import useRouteBackBridge from "@hooks/bridge/useRouteBackBridge";
import LeftChevronIcon from "@icons/LeftChevronIcon";

export default function BackButton() {
  const goBack = useRouteBackBridge();

  return (
    <button onClick={goBack}>
      <LeftChevronIcon alt="뒤로 가기" />
    </button>
  );
}
