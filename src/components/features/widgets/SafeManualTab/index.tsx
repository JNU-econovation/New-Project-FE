"use client";

import {
  SAFE_MANUAL_CONTENTS,
  SAFE_MANUAL_TITLES,
} from "@/constants/safeManual";
import Tabs from "@entities/Tabs";
import Spacing from "@shared/layout/Spacing";

export default function SafeManualTab() {
  return (
    <div className="flex flex-col h-full">
      <Tabs>
        <div className="px-6 border-b border-gray-30">
          <Tabs.TabList>
            {SAFE_MANUAL_TITLES.map((title, index) => (
              <Tabs.Tab
                key={index}
                label={title}
                defaultSelected={index === 0}
              />
            ))}
          </Tabs.TabList>
        </div>
        <Tabs.Content<keyof typeof SAFE_MANUAL_CONTENTS>>
          {({ selectedTab }) => {
            const selectedContent =
              SAFE_MANUAL_CONTENTS[
                selectedTab ? selectedTab : SAFE_MANUAL_TITLES[0]
              ];
            return (
              <div className="px-6 grow h-full overflow-y-scroll hide-scrollbar">
                <Spacing size={12} />
                <p className="font-bold text-3xl text-main-green">
                  {selectedContent.title}
                </p>
                <Spacing size={2} />
                <p>{selectedContent.content}</p>
                <Spacing size={11} />
                <ul className="flex flex-col gap-4">
                  {selectedContent.cases.map(({ Icon, symptom }, index) => {
                    return (
                      <li
                        key={index}
                        className="shadow-sm p-6 rounded-2xl flex items-center gap-4"
                      >
                        {<Icon />}
                        <p className="font-semibold">{symptom}</p>
                      </li>
                    );
                  })}
                </ul>
                <Spacing size={40} />
              </div>
            );
          }}
        </Tabs.Content>
      </Tabs>
    </div>
  );
}
