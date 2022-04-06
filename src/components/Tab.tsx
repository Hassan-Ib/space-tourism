import React from "react";

export type TabProps = {
  name: string;
  id: number;
  children?: React.ReactNode;
  isActive: (value: string) => boolean;
  onClick: (id: number) => void;
  className?: string;
};

const Tab = ({ onClick, name, id, isActive, className }: TabProps) => {
  const buttonClick = () => {
    onClick(id);
  };

  return (
    <button
      onClick={buttonClick}
      className={`relative flex gap-4 text-[14px] md:text-base tracking-[2.36px] md:tracking-[2.7px] uppercase py-4 md:px-0 group ${
        !isActive(name) ? "text-primary" : ""
      } ${className ?? ""} `}>
      {name}
      <span
        className={`absolute h-[3px] w-full left-0 top-[96%] transition-all duration-300 ${
          isActive(name) ? "bg-white " : "group-hover:bg-in-between"
        }`}></span>
    </button>
  );
};

export default Tab;

export const EmptyTab = ({ isActive, id, onClick, name = "" }: TabProps) => {
  return (
    <button
      aria-label={`crew member ${name}`}
      onClick={() => onClick(id)}
      className={`w-[10px] h-[10px] lg:w-[15px] lg:h-[15px] rounded-full bg-white ${
        !isActive(name) ? "bg-in-between hover:bg-in-between/90" : null
      }`}></button>
  );
};
