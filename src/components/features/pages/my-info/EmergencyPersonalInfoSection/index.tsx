"use client";

import Spacing from "@/components/common/shared/layout/Spacing";
import Text from "@/components/common/shared/ui/Text";
import TextField from "@/components/common/shared/ui/TextField";
import Image from "next/image";
import Cancel from "@/icons/Cancel.svg";
import { useEmergencyPersonalInfo } from "@/hooks/feature/info/useEmergencyPersonalInfo";
import { useModal } from "@/hooks/common/useModal";
import WithdrawMemberModal from "@/components/common/entities/WithdrawMemberModal";

export default function EmergencyPersonalInfoSection() {
  const {
    emergencyPersonalInfo,
    onChangeEmergencyPersonalInfo,
    onClearEmergencyPersonalInfo,
  } = useEmergencyPersonalInfo();

  const { closeModal, isOpen, openModal } = useModal();

  return (
    <section>
      <Text
        fontSize="text-xl"
        fontWeight="font-semibold"
        color="text-main-green"
      >
        위급 시 개인 정보
      </Text>
      <Spacing size={8} />
      <TextField
        label="몸무게"
        placeholder="100"
        color="white"
        value={emergencyPersonalInfo.weight}
        onChange={(e) =>
          onChangeEmergencyPersonalInfo("weight", e.target.value)
        }
        right={
          <div className="flex items-center gap-2">
            <Text fontSize="text-2xl" color="text-sub-gray">
              kg
            </Text>
            <button onClick={() => onClearEmergencyPersonalInfo("weight")}>
              <Image src={Cancel} alt="입력 취소" width={24} height={24} />
            </button>
          </div>
        }
      />
      <Spacing size={8} />
      <TextField
        label="키"
        placeholder="100"
        color="white"
        value={emergencyPersonalInfo.height}
        onChange={(e) =>
          onChangeEmergencyPersonalInfo("height", e.target.value)
        }
        right={
          <div className="flex items-center gap-2">
            <Text fontSize="text-2xl" color="text-sub-gray">
              cm
            </Text>
            <button onClick={() => onClearEmergencyPersonalInfo("height")}>
              <Image src={Cancel} alt="입력 취소" width={24} height={24} />
            </button>
          </div>
        }
      />
      <Spacing size={8} />
      <TextField
        label="혈액형"
        placeholder="B"
        color="white"
        value={emergencyPersonalInfo.bloodType}
        onChange={(e) =>
          onChangeEmergencyPersonalInfo("bloodType", e.target.value)
        }
        right={
          <div className="flex items-center gap-2">
            <Text fontSize="text-2xl" color="text-sub-gray">
              형
            </Text>
            <button onClick={() => onClearEmergencyPersonalInfo("bloodType")}>
              <Image src={Cancel} alt="입력 취소" width={24} height={24} />
            </button>
          </div>
        }
      />
      <Spacing size={8} />
      <button onClick={openModal} className="flex justify-center w-full">
        <Text className="text-center" color="text-sub-gray">
          회원 탈퇴
        </Text>
      </button>
      {isOpen && (
        <WithdrawMemberModal closeModal={closeModal} openModal={openModal} />
      )}
    </section>
  );
}
