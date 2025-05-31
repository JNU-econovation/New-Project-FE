"use client";

import LogoutModal from "@/components/common/entities/LogoutModal";
import Text from "@/components/common/shared/ui/Text";
import { useModal } from "@/hooks/common/useModal";

export default function LogoutButton() {
  const { closeModal, isOpen, openModal } = useModal();

  return (
    <>
      <button onClick={openModal}>
        <Text fontSize="text-xl" color="text-main-green">
          로그아웃
        </Text>
      </button>
      {isOpen && <LogoutModal closeModal={closeModal} openModal={openModal} />}
    </>
  );
}
