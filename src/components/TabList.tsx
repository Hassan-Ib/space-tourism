import React from "react";
import { TabProps } from "./Tab";

type TabListProp = {
  list: string[];
  current: string;
  renderTab: (state: Omit<TabProps, "onClick">) => React.ReactNode;
};
const TabList = ({ renderTab, current, list }: TabListProp) => {
  return (
    <ul className="flex gap-4 sm:gap-6 justify-center lg:justify-start">
      {list.map((el, index) => (
        <li key={index}>
          {renderTab({
            name: el,
            id: index,
            isActive: (value) => value === current,
          })}
          {/* <Tab name={el} id={index} isActive={(value) => value === current} /> */}
        </li>
      ))}
    </ul>
  );
};
export default TabList;
