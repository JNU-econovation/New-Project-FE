import { useBridge } from "@/service/bridge/hooks/useBridge";
import { useModalContext } from "@/service/modal";
import type {
  MessageEventRequestData,
  MessageEventResponseData,
} from "@/types/bridge";
import useLogoutAlertModal from "@hooks/feature/modal/useLogoutAlertModal";
import { useCallback } from "react";

const useLogoutBridge = () => {
  const { request } = useBridge<
    MessageEventRequestData,
    MessageEventResponseData
  >();

  const { closeModalAsync } = useModalContext();

  const { openLogoutAlertModal } = useLogoutAlertModal();

  return useCallback(() => {
    request({
      requestMessage: {
        method: "DELETE",
        name: "logout",
      },
      responseCallback: ({ status }) => {
        if (status === "success") {
          closeModalAsync();
          openLogoutAlertModal();
        }
      },
    });
  }, [closeModalAsync, openLogoutAlertModal, request]);
};

export default useLogoutBridge;
