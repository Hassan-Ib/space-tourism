import React from "react";
// import { TabProps } from "./Tab";

type renderState = {
  name: string;
  id: number;
  isActive: (value: string | number) => boolean;
};

type render = (state: renderState) => React.ReactNode;

type TabListProp = {
  list: string[];
  current: string | number;
  className?: string;
  renderNamedTab?: render;
};

const TabList = ({
  className = " ",
  renderNamedTab,
  current,
  list,
}: TabListProp) => {
  return (
    <ul
      className={`flex gap-4 sm:gap-6 justify-center lg:justify-start ${className}`}>
      {list.map((name, id) => (
        <li key={id}>
          {renderNamedTab
            ? renderNamedTab({
                name,
                id,
                isActive: (value) => value === current,
              })
            : null}
        </li>
      ))}
    </ul>
  );
};
export default TabList;
