"use client";

import useShowToastBridge from "@hooks/feature/bridge/useShowToastBridge";
import Spacing from "@shared/layout/Spacing";
import { useEffect } from "react";

export default function TravelMonitorSection() {
  const showToast = useShowToastBridge();

  useEffect(() => {
    const timer = setTimeout(() => {
      showToast({
        type: "error",
        text1: "올바른 위치에서 다시 시도해주세요!",
        text2: "현재 위치에서는 사용할 수 없는 기능입니다.",
      });
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [showToast]);
  return (
    <section className="bg-white rounded-xl z-50 px-4">
      <div className="flex justify-center items-center gap-6 -translate-y-1/2">
        <button className="bg-main-green rounded-full w-16 h-16 flex justify-center items-center gap-2  active:scale-95 transition-transform duration-200 ease-in-out">
          <div className="h-8 w-1.5 bg-white rounded-xs" />
          <div className="h-8 w-1.5 bg-white rounded-xs" />
        </button>
        <button className="bg-main-green rounded-full w-16 h-16 flex justify-center items-center active:scale-95 transition-transform duration-200 ease-in-out">
          <div className="bg-white w-5 h-5 rounded-xs" />
        </button>
      </div>
      <p className="text-3xl font-semibold text-center">00:00:00</p>
      <span className="text-center text-gray-20">산행 시간</span>

      <Spacing size={4} />

      <div className="bg-green-20 rounded-xl p-4 flex justify-between items-center ">
        <div className="flex gap-2 translate-y-2">
          <span>🏃‍♂️‍➡️</span>
          <div>
            <p className="font-semibold text-base">0.00</p>
            <p className="text-sm text-end">km</p>
          </div>
        </div>
        <div className="h-10 border border-gray-20 opacity-50" />
        <div className="flex gap-2">
          <span>🔥</span>
          <p className="font-semibold text-base">03:24</p>
        </div>
        <div className="h-10 border border-gray-20 opacity-50" />
        <div className="flex gap-2">
          <p>⛰️</p>
          <p className="font-semibold text-base">01:20</p>
        </div>
      </div>

      <Spacing size={4} />
    </section>
  );
}
