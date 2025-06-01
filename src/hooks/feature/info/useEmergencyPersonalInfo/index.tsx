import { useState } from "react";

export const useEmergencyPersonalInfo = () => {
  const [emergencyPersonalInfo, setEmergencyPersonalInfo] = useState({
    weight: "",
    height: "",
    bloodType: "",
  });

  const onChangePersonalInfo = (
    key: keyof typeof emergencyPersonalInfo,
    value: string
  ) => {
    setEmergencyPersonalInfo((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const onClearPersonalInfo = (key: keyof typeof emergencyPersonalInfo) => {
    setEmergencyPersonalInfo((prev) => ({
      ...prev,
      [key]: "",
    }));
  };

  return {
    emergencyPersonalInfo,
    onChangePersonalInfo,
    onClearPersonalInfo,
  };
};
