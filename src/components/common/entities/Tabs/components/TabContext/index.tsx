import useTabContext from "../../hooks/useTabContext";

import { memo } from "react";

interface TabContentChildrenProps {
  tabItems: string[];
}
interface TabContentProps {
  children: (props: TabContentChildrenProps) => React.ReactNode;
}

export default memo(function TabContent({ children }: TabContentProps) {
  const { tabItems } = useTabContext();
  return <>{children({ tabItems })}</>;
});
