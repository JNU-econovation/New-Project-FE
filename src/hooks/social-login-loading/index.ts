"use client";

import ROUTE from "@/constants/route";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export const useSaveToken = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const accessToken = searchParams.get("accessToken");
  const refreshToken = searchParams.get("refreshToken");

  useEffect(() => {
    if (accessToken && refreshToken) {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      const localStorageAccessToken = localStorage.getItem("accessToken");
      const localStorageRefreshToken = localStorage.getItem("refreshToken");

      if (
        localStorageAccessToken === accessToken &&
        localStorageRefreshToken === refreshToken
      ) {
        router.push(ROUTE.MAIN);
      }
    }
  }, [accessToken, refreshToken, router]);
};
