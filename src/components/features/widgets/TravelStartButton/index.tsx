"use client";

import useStartTravelBridge from "@/hooks/feature/bridge/useStartTravelBridge";
import Button from "@shared/ui/Button";

export default function TravelStartButton() {
  const startTravel = useStartTravelBridge();

  return (
    <Button fullWidth onClick={startTravel}>
      산행 시작
    </Button>
  );
}
