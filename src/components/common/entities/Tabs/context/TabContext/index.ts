import { createContext } from "react";
import { TabContextType } from "../../types";

const TabContext = createContext<TabContextType>({});

export default TabContext;
