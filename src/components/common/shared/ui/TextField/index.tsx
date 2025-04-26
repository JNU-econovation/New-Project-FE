import { JSX } from "react";

import Spacing from "../../layout/Spacing";
import Input from "../Input";
import Text from "../Text";

interface TextFieldProps {
  label: string;
  type: string;
  placeholder: string;
  right?: JSX.Element;
}

export default function TextField({
  label,
  type,
  placeholder,
  right,
}: TextFieldProps) {
  return (
    <>
      <Text fontWeight="font-bold">{label}</Text>
      <Spacing size={1} />
      <div className="relative">
        <Input type={type} placeholder={placeholder} />
        {right && (
          <div className="absolute right-5 top-1/2 -translate-y-1/2">
            {right}
          </div>
        )}
      </div>
    </>
  );
}
