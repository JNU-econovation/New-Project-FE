"use client";

import LogoutModal from "@/components/common/entities/LogoutModal";
import Text from "@/components/common/shared/ui/Text";
import { useState } from "react";

export default function LogoutButton() {
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);

  const onLogoutBtnClick = () => {
    setLogoutModalOpen(true);
  };

  return (
    <>
      <button onClick={onLogoutBtnClick}>
        <Text fontSize="text-xl" color="text-main-green">
          로그아웃
        </Text>
      </button>
      {isLogoutModalOpen && <LogoutModal setState={setLogoutModalOpen} />}
    </>
  );
}
