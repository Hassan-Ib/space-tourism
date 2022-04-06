import React from "react";
import PageIntro from "../components/PageInfo";
import { crew } from "../data/data";
import TabList from "../components/TabList";
type Props = {};

const Crew = (props: Props) => {
  const [crewMember, setCrewMember] = React.useState(crew[0]);

  const changeCrew = (id: number) => {
    setCrewMember(crew[id]);
  };
  return (
    <div className="bg-crew py-32 lg:pt-56 px-6 grid gap-10 md:gap-16 lg:gap-12  place-items-center lg:place-items-start lg:justify-around lg:px-28">
      <div className=" md:place-self-start">
        <PageIntro index={2} description={"meet your crew"} />
      </div>
      <div className=" md:row-start-3 lg:row-start-1 lg:row-end-3 lg:grid-cols-2 lg:col-start-2">
        <img
          src={crewMember.images.png}
          alt={crewMember.name}
          className="h-full w-full"
        />
      </div>
      <section className="grid text-center max-w-lg  lg:text-left ">
        {/* <TabList current={} /> */}
        <article className="">
          <h4 className="text-primary">{crewMember.role}</h4>
          <h3>{crewMember.name}</h3>
          <p className="text-body mt-4 max-w-md">{crewMember.bio}</p>
        </article>
        {/* <Tabs></Tabs> */}
      </section>
    </div>
  );
};

export default Crew;
