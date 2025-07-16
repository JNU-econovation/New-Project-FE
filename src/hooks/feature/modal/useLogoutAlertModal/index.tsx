import LogoutAlertModal from "@/components/features/widgets/LogoutAlertModal";
import { useModalContext } from "@/service/modal";

const useLogoutAlertModal = () => {
  const { addModalAsync } = useModalContext();

  const openLogoutAlertModal = () => {
    addModalAsync(<LogoutAlertModal />);
  };

  return { openLogoutAlertModal };
};

export default useLogoutAlertModal;
