"use client";

import useLogoutModal from "@/hooks/feature/modal/useLogoutModal";
// import useLogoutModal from "@/hooks/feature/modal/useLogoutModal";
// import LogoutModal from "@/components/features/widgets/LogoutModal";
// import { useModal } from "@hooks/common/useModal";
import Text from "@shared/ui/Text";

// 기존 모달의 문제점
// 1. 모달과 상관없는 상단 컴포넌트에서 불필요하게 상태값, ui 를 알고 있어야만 한다.
// 모달이 열려있는지 여부를 상단 컴포넌트에서 관리해야 한다. (그것도 필요한 훅을 호출해서) => 그만큼 재사용성이 떨어진다.
// 2. 올바르게 모달을 사용하기 위해 필요 요소들이 많이 존재한다.
// useModal, useOutsideClick, ModalPortal 등등
// 이는 휴먼 에러로 이어질 수도 있으며, 빠르게 코드를 파악하기 힘듦. 생산성에도 영향이 간다.
// 특히나 이것들은 상하적으로 많은 의존성을 가지게 된다. 예를 들어 useOutsideClick의 경우 상위로부터 올바르게 닫는 함수에 대해 받아와야한다. 이름은 outsideClick인데도 말이다.

export default function LogoutButton() {
  // const { closeModal, isOpen, openModal } = useModal();

  // const modalContext = useContext(ModalContext)!;
  const { openLogoutModal } = useLogoutModal();

  return (
    <>
      <button onClick={openLogoutModal} className="w-full">
        <Text fontSize="text-sm" color="text-main-green">
          로그아웃
        </Text>
      </button>
      {/* <div className="w-screen h-screen bg-black absolute top-0" /> */}
      {/* {isOpen && <LogoutModal closeModal={closeModal} openModal={openModal} />} */}
    </>
  );
}
