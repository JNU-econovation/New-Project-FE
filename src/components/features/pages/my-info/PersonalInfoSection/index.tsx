"use client";

import Spacing from "@shared/layout/Spacing";
import Text from "@shared/ui/Text";
import TextField from "@shared/ui/TextField";
import { usePersonalInfo } from "@hooks/feature/info/usePersonalInfo";
import Image from "next/image";
import Cancel from "@/icons/Cancel.svg";
import useRouteChangePasswordBridge from "@/hooks/bridge/useRouteChangePasswordBridge";

export default function PersonalInfoSection() {
  const { personalInfo, onChangePersonalInfo, onClearPersonalInfo } =
    usePersonalInfo();

  const goToChangePassword = useRouteChangePasswordBridge();

  return (
    <section>
      <Text
        fontSize="text-xl"
        fontWeight="font-semibold"
        color="text-main-green"
      >
        내 정보 관리
      </Text>
      <Spacing size={8} />
      <TextField
        label="이름"
        placeholder="이주희"
        color="white"
        value={personalInfo.name}
        onChange={(e) => onChangePersonalInfo("name", e.target.value)}
        right={
          <button onClick={() => onClearPersonalInfo("name")}>
            <Image src={Cancel} alt="입력 취소" width={24} height={24} />
          </button>
        }
      />
      <Spacing size={8} />
      <TextField
        label="전화번호"
        placeholder="010-0000-0000"
        color="white"
        value={personalInfo.phone}
        onChange={(e) => onChangePersonalInfo("phone", e.target.value)}
        right={
          <button onClick={() => onClearPersonalInfo("phone")}>
            <Image src={Cancel} alt="입력 취소" width={24} height={24} />
          </button>
        }
      />
      <Spacing size={8} />
      <TextField
        label="이메일"
        type="email"
        placeholder="test@naver.com"
        color="white"
        value={personalInfo.email}
        onChange={(e) => onChangePersonalInfo("email", e.target.value)}
        right={
          <button onClick={() => onClearPersonalInfo("email")}>
            <Image src={Cancel} alt="입력 취소" width={24} height={24} />
          </button>
        }
      />
      <Spacing size={8} />
      <TextField
        label="비밀번호"
        type="password"
        placeholder="****"
        color="white"
        value={personalInfo.password}
        onChange={(e) => onChangePersonalInfo("password", e.target.value)}
        right={
          <button onClick={() => onClearPersonalInfo("password")}>
            <Image src={Cancel} alt="입력 취소" width={24} height={24} />
          </button>
        }
      />
      <Spacing size={8} />
      <div className="flex justify-end w-full">
        <button
          onClick={goToChangePassword}
          className="bg-main-green text-white px-4 py-2 rounded-xl font-bold text-lg"
        >
          비밀번호 변경
        </button>
      </div>
    </section>
  );
}
