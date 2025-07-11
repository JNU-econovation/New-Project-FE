"use client";

import dynamic from "next/dynamic";

const Bridge = dynamic(
  () => import("@/service/bridge/components/BridgeRequestListener"),
  {
    ssr: false,
  }
);

export default function BridgeTester() {
  return (
    <>
      <Bridge />
    </>
  );
}
