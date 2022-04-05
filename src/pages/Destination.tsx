import React from "react";
import { destination as destinationData } from "../data/data";

type Props = {};

const Destination = (props: Props) => {
  const [destination, setDestination] = React.useState(destinationData[0]);

  const changeDestination = (id: number) => {
    setDestination(destinationData[id]);
  };
  console.log(destination.images.png);
  return (
    <div className="bg-destination nav-space px-6 flex flex-col gap-10 items-center ">
      {/* suheading */}
      <section className="border-2 border-red-500">
        <h5>01 pick a destination</h5>

        <div>
          <img src={destination.images.png} alt={destination.name} />
        </div>
      </section>
      <section className="flex flex-col gap-8 border-2 border-red-500 text-center max-w-md">
        <TabList
          list={destinationData.map((el) => el.name)}
          current={destination.name}
          renderTab={(state) => <Tab onClick={changeDestination} {...state} />}
        />
        <article>
          <h2>{destination.name}</h2>
          <p className="text-body">{destination.description}</p>
        </article>
      </section>
    </div>
  );
};

type TabListProp = {
  list: string[];
  current: string;
  renderTab: (state: Omit<TabProps, "onClick">) => React.ReactNode;
};
const TabList = ({ renderTab, current, list }: TabListProp) => {
  return (
    <ul className="flex gap-3  sm:gap-6 justify-center">
      {list.map((el, index) => (
        <>
          {renderTab({
            name: el,
            id: index,
            isActive: (value) => value === current,
          })}
          {/* <Tab name={el} id={index} isActive={(value) => value === current} /> */}
        </>
      ))}
    </ul>
  );
};

type TabProps = {
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
      className={`relative flex gap-4 tracking-[4px] uppercase text-[14px] md:text-base md:px-0 py-4 group ${
        !isActive(name) ? "text-white/90" : ""
      } ${className ?? ""} `}>
      {name}
      <span
        className={`absolute h-[3px] w-full left-0 top-[96%] transition-all duration-300 ${
          isActive(name) ? "bg-white " : "group-hover:bg-in-between"
        }`}></span>
    </button>
  );
};
export default Destination;
