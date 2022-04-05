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
      className={`relative flex gap-4 tracking-[2px] uppercase text-[14px] md:text-base md:px-0 py-4 group ${
        !isActive(name) ? "text-white/80" : ""
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
