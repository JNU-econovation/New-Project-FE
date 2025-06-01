"use client";

import Spacing from "@/components/common/shared/layout/Spacing";
import TextField from "@/components/common/shared/ui/TextField";
import Image from "next/image";
import Cancel from "@/icons/Cancel.svg";
import { usePasswordInfo } from "@/hooks/feature/info/usePasswordInfo";
import Button from "@/components/common/shared/ui/Button";

export default function PasswordInfoSection() {
  const { onChangePasswordInfo, onClearPasswordInfo, passwordInfo } =
    usePasswordInfo();

  return (
    <section>
      <form>
        <TextField
          label="현재 비밀번호"
          type="password"
          placeholder="****"
          color="white"
          value={passwordInfo.password}
          onChange={(e) => onChangePasswordInfo("password", e.target.value)}
          right={
            <button onClick={() => onClearPasswordInfo("password")}>
              <Image src={Cancel} alt="입력 취소" width={24} height={24} />
            </button>
          }
        />
        <Spacing size={8} />
        <TextField
          label="새 비밀번호"
          type="password"
          placeholder="****"
          color="white"
          value={passwordInfo.newPassword}
          onChange={(e) => onChangePasswordInfo("newPassword", e.target.value)}
          right={
            <button onClick={() => onClearPasswordInfo("newPassword")}>
              <Image src={Cancel} alt="입력 취소" width={24} height={24} />
            </button>
          }
        />
        <Spacing size={20} />
        <Button fullWidth>변경하기</Button>
      </form>
    </section>
  );
}
