import { useCallback, useEffect, useState } from "react";

/**
 * 현재 위치를 가져오는 hook
 * 웹상에서만 사용 가능
 */
export const useGetCurrentPosition = () => {
  //TODO: 위치 정보 타입 정의
  const [currentPosition, setCurrentPosition] = useState<any>(null); // 위치 정보 초기값

  const onSuccess = useCallback(
    (position: any) => {
      setCurrentPosition(position.coords);
    },
    [setCurrentPosition]
  );

  const onError = () => {
    // alert("위치 정보를 가져올 수 없습니다.");
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!navigator.geolocation) return;
      navigator.geolocation.watchPosition(onSuccess, onError);
    }, 500);

    return () => clearInterval(intervalId);
  });

  return {
    currentPosition,
  };
};
