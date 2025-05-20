import { SizeNumberType } from "@/types/css/height";
// import { cn } from "@/utils/cn";
import { memo } from "react";

interface SpacingProps {
  size: SizeNumberType;
}

export default memo(function Spacing({ size }: SpacingProps) {
  return (
    <div
      style={{
        marginTop: `${size * 0.25}rem`,
      }}
    />
  );
});
