"use client";

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
        router.push("/");
      }
    }
  }, [accessToken, refreshToken, router]);
};
