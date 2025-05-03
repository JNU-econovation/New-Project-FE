"use client";

import Bridge, {
  MessageEventRequestData,
} from "@/components/common/entities/Bridge";

const requestKakaoBridge = (reqMessage: MessageEventRequestData) => {
  alert("웹이 request-kakao-bridge를 받았습니다" + reqMessage.name);
  alert(reqMessage.method);
  if (reqMessage.method === "GET") {
    // 필요한 동작을 합니다.
    alert("request-kakao_get요청 받음");

    return {
      status: "success",
      name: "request-kakao",
      data: {
        name: "kakao",
        body: {
          accessToken: "kakao-access-token",
        },
      },
    } as const;
  }
  if (reqMessage.method === "POST") {
    // 필요한 동작을 합니다.
    alert("request-kakao_post요청 받음");

    return {
      status: "success",
      name: "request-kakao",
    } as const;
  }

  return {
    status: "error",
    name: "request-kakao",
    data: null,
  } as const;
};

const defaultRequest = () => {
  // 필요한 동작을 합니다.
  alert("request-else");

  return {
    status: "error",
    name: "request-kakao",
  } as const;
};

const KakaoLoginBridge = () => {
  return (
    <Bridge
      onRequest={(reqMessage) => {
        alert(JSON.stringify(reqMessage));
        switch (reqMessage.name) {
          case "request-kakao":
            return requestKakaoBridge(reqMessage);
          default:
            return defaultRequest();
        }
      }}
    />
  );
};

export default KakaoLoginBridge;
