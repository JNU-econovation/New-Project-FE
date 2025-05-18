import { useBridge } from "@/hooks/common/useBridge";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const useSendToken = () => {
  const searchParams = useSearchParams();
  const { request } = useBridge();

  const accessToken = searchParams.get("access_token");
  const refreshToken = searchParams.get("refresh_token");

  useEffect(() => {
    if (!accessToken && !refreshToken) {
      request({
        requestMessage: {
          name: "put-token",
          method: "POST",
          body: {
            accessToken,
            refreshToken,
          },
        },
        responseCallback: () => {},
      });
    }
  }, [accessToken, refreshToken, request]);
};

export default useSendToken;
