"use client";

import { PropsWithChildren, useEffect, useState } from "react";

import Tab from "./components/Tab";
import TabContent from "./components/TabContent";
import TabList from "./components/TabLIst/index";
import TabContext from "./context/TabContext/index";
import type { TabContextType } from "./types";

// interface TabProps extends PropsWithChildren {}

export default function Tabs({ children }: PropsWithChildren) {
  const [tabItems, setTabItems] = useState<string[]>([]);
  const [selectedTab, setSelectedTab] = useState<string | null>(null);
  const [selectedTabIndex, setSelectedTabIndex] = useState<number | null>(null);

  const setTabItemsHandler = (items: string[]) => {
    setTabItems(items);
  };

  const setSelectedTabHandler = (tab: string | null) => {
    setSelectedTab(tab);
  };

  useEffect(() => {
    setSelectedTabIndex(tabItems.findIndex((item) => item === selectedTab));
  }, [selectedTab, setSelectedTabIndex, tabItems]);

  const value: TabContextType = {
    tabItems,
    selectedTab,
    selectedTabIndex,
    setTabItemsHandler,
    setSelectedTabHandler,
  };

  return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
}

Tabs.Content = TabContent;
Tabs.TabList = TabList;
Tabs.Tab = Tab;
