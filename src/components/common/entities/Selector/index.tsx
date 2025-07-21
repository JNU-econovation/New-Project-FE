import { cn } from "@/utils/cn";
import Spacing from "@shared/layout/Spacing";
import { useState } from "react";

interface SelectorProps {
  options: {
    text: string;
    value: string;
  }[];
  onSelect?: (optionValue: string) => void;
  value?: string;
}

export default function Selector({ options, onSelect, value }: SelectorProps) {
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [selectedOptionValue, setSelectedOptionValue] = useState<string | null>(
    value || null
  );

  return (
    <div
      className="relative w-full"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setOptionsOpen(!optionsOpen);
        }
      }}
    >
      <div
        className="border-2 border-main-green rounded-2xl font-semibold text-base text-center text-black"
        onClick={(e) => {
          if (e.target == e.currentTarget) {
            setOptionsOpen(!optionsOpen);
            return;
          }
          setOptionsOpen(false);
        }}
      >
        {options.find(({ value }) => `${value}` === `${selectedOptionValue}`)
          ?.text ?? "Select an option"}
      </div>

      <div className="absolute max-h-32 overflow-y-auto w-full bg-white rounded-b-2xl shadow-lg">
        <Spacing size={2} />
        {optionsOpen &&
          options.map(({ text, value }, index) => (
            <div
              key={index}
              className={cn("p-1 cursor-pointer text-center", {
                "bg-gray-30": `${value}` === `${selectedOptionValue}`,
                visible: optionsOpen,
                invisible: !optionsOpen,
              })}
              onClick={() => {
                if (value === selectedOptionValue) return;

                onSelect?.(value);
                setSelectedOptionValue(value);

                setOptionsOpen(false);
              }}
            >
              {text}
            </div>
          ))}
      </div>
    </div>
  );
}
