import { useRef } from "react";

import Spacing from "@shared/layout/Spacing";
import Button from "@shared/ui/Button";
import Dimmed from "@shared/ui/Dimmed";
import Text from "@shared/ui/Text";
import { useModalContext } from "@/service/modal";

export default function LogoutModal() {
  const modalRef = useRef<HTMLDivElement>(null!);

  const { closeModalAsync } = useModalContext();

  return (
    <Dimmed
      typeof="button"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModalAsync();
      }}
    >
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <div ref={modalRef} className="bg-white rounded-lg shadow-lg p-0 w-72">
          <div className="flex flex-col items-center p-4">
            <Spacing size={10} />
            <Text fontSize="text-base">로그아웃 하시겠습니까?</Text>
            <Spacing size={10} />
            <div className="flex justify-center gap-4 w-full">
              <Button
                color={"gray"}
                onClick={closeModalAsync}
                size={"md"}
                className="grow text-white"
              >
                취소
              </Button>
              <Button size={"md"} className="grow">
                로그아웃
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Dimmed>
  );
}
