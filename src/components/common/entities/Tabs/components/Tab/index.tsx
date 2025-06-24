import { memo, useEffect } from "react";
import useTabContext from "../../hooks/useTabContext";
import { cn } from "@/utils/cn";

interface TabProps {
  label: string;
  defaultSelected?: boolean;
}
export default memo(function Tab({ label, defaultSelected = false }: TabProps) {
  const { selectedTab, setSelectedTabHandler } = useTabContext();

  useEffect(() => {
    if (defaultSelected && selectedTab === null) {
      setSelectedTabHandler(label);
    }
  }, [defaultSelected, label, selectedTab, setSelectedTabHandler]);

  return (
    <button
      className={cn(
        "px-4 py-2 transition-all border-b-2 border-transparent shrink-0",
        {
          "!border-main-green": selectedTab === label,
        }
      )}
      onClick={() => setSelectedTabHandler(label)}
    >
      {label}
    </button>
  );
});
