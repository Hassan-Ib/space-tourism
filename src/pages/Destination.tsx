import React from "react";
import { destination as destinationData } from "../data/data";
import TabList from "../components/TabList";
import Tab from "../components/Tab";
import PageIntro from "../components/PageInfo";
import Info from "../components/Info";

type Props = {};

const Destination = (props: Props) => {
  const [destination, setDestination] = React.useState(destinationData[0]);

  const changeDestination = (id: number) => {
    setDestination(destinationData[id]);
  };
  console.log(destination.images.png);
  return (
    <div className="bg-destination pt-32 md:pt-40 px-6 flex flex-col gap-10 items-center lg:flex-row lg:justify-around">
      {/* suheading */}
      <section className="text-center md:text-left flex flex-col gap-8 md:gap-16 lg:gap-24 items-center md:items-stretch ">
        <PageIntro index={1} description="pick a destination" />
        <div>
          <img src={destination.images.png} alt={destination.name} />
        </div>
      </section>
      <section className="flex flex-col gap-8 text-center max-w-lg lg:items-stretch lg:text-left lg:pt-28 ">
        <TabList
          list={destinationData.map((el) => el.name)}
          current={destination.name}
          renderTab={(state) => <Tab onClick={changeDestination} {...state} />}
        />
        <article>
          <h2>{destination.name}</h2>
          <p className="text-body">{destination.description}</p>
        </article>
        {/* <hr className="h-[1px] w-full bg-in-between/70 text-in-between/70" /> */}

        <div className="flex flex-col gap-14 md:flex-row justify-around lg:justify-start py-10 border-t border-white/50">
          <Info title="AVG. DISTANCE" detail={destination.distance} />
          <Info title="Est. travel time" detail={destination.travel} />
        </div>
      </section>
    </div>
  );
};

export default Destination;
