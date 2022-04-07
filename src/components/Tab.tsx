import React from "react";

export type TabProps = {
  name: string;
  id: number;
  children?: React.ReactNode;
  isActive: boolean;
  onClick: (id: number) => void;
  className?: string;
};

const Tab = ({ onClick, name, id, isActive, className }: TabProps) => {
  const buttonClick = () => {
    onClick(id);
  };

  console.log("from tab", isActive);
  return (
    <button
      onClick={buttonClick}
      className={`relative flex gap-4 text-[14px] md:text-base tracking-[2.36px] md:tracking-[2.7px] uppercase py-4 md:px-0 group ${
        !isActive ? "text-primary" : ""
      } ${className ?? ""} `}>
      {name}
      <span
        className={`absolute h-[3px] w-full left-0 top-[96%] transition-all duration-300 ${
          isActive ? "bg-white " : "group-hover:bg-in-between"
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
      className={`w-[15px] h-[15px] rounded-full bg-white ${
        !isActive ? "bg-in-between hover:bg-in-between/90" : null
      }`}></button>
  );
};

export const RoundTab = ({ isActive, onClick, name, id }: TabProps) => {
  return (
    <button
      onClick={() => onClick(id)}
      aria-label={`${name} tab`}
      className={` font-bellefair rounded-full w-[40px] h-[40px] md:w-[60px] md:h-[60px]  md:text-2xl  border border-in-between text-dark bg-white ${
        !isActive ? "hover:border-white bg-transparent text-white" : null
      }`}>
      {name}
    </button>
  );
};
