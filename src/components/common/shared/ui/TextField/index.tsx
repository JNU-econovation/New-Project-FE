import Spacing from "../../layout/Spacing";
import Input from "../Input";
import Text from "../Text";

interface TextFieldProps {
  children?: React.ReactNode;
  label: string;
  type: string;
  placeholder: string;
}

export default function TextField({
  children,
  label,
  type,
  placeholder,
}: TextFieldProps) {
  return (
    <>
      <Spacing size={8} />

      <Text fontWeight="font-bold">{label}</Text>
      <Spacing size={1} />
      <div className="relative">
        <Input type={type} placeholder={placeholder} />
        {children}
      </div>
    </>
  );
}
