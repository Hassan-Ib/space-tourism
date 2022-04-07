import React from "react";

import PageIntro from "../components/PageInfo";
import TabList from "../components/TabList";
import { RoundTab } from "../components/Tab";
import { technology } from "../data/data";

const Technology = () => {
  const [tech, setTech] = React.useState(technology[0]);

  const changeTech = (index: number) => {
    setTech(technology[index]);
  };
  console.log(technology);
  return (
    <main className="bg-technology py-24 pt-28 md:pt-44 ">
      {/* <Container> */}

      {/*------------- page intro --------------- */}

      <div className="md:pl-10 lg:pl-32">
        <PageIntro index={3} description={"space launch 101"} />
      </div>

      <section
        className="flex flex-col lg:flex-row justify-center  mt-12 gap-10 lg:gap-20 
        items-center">
        {/*----------------- tech image ------------------- */}

        <div className="w-full lg:w-auto lg:order-3 text-right ">
          <picture className="">
            <source
              className=""
              media="(max-width: 1020px)"
              srcSet={tech.images.landscape}
            />
            <source
              className=""
              media="(min-width: 1020px)"
              srcSet={tech.images.portrait}
            />

            <img className="" alt={tech.name} src={`${tech.images.portrait}`} />
          </picture>
        </div>

        {/*--------------------- article and tab ---------------------- */}

        <section className="lg:pl-32 flex flex-col gap-10 lg:flex-1 lg:flex-row lg:gap-12 items-center justify-center">
          {/*---------------------- tab -------------------*/}

          <TabList
            className="lg:flex-col lg:gap-8"
            current={tech.name}
            list={technology.map((el) => el.name)}
            renderNamedTab={(state) => {
              console.log(state.name, tech.name, state.name === tech.name);
              return (
                <RoundTab
                  name={`${state.id + 1}`}
                  id={state.id}
                  isActive={state.isActive(state.name)}
                  onClick={changeTech}
                />
              );
            }}
          />

          {/*--------------------- article --------------------------- */}

          <article className="text-center lg:text-left max-w-lg">
            <p className="sub-heading-2 md:text-base">the terminology</p>
            <h3>{tech.name}</h3>
            <p className="text-body">{tech.description}</p>
          </article>
        </section>
      </section>
      {/* </Container> */}
    </main>
  );
};

export default Technology;
