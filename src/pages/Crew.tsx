import React from "react";
import PageIntro from "../components/PageInfo";
import { crew } from "../data/data";
import TabList from "../components/TabList";
import { EmptyTab } from "../components/Tab";
import Container from "../components/Container";

type Props = {};

const Crew = (props: Props) => {
  const [crewMember, setCrewMember] = React.useState(crew[0]);

  const changeCrew = (id: number) => {
    setCrewMember(crew[id]);
  };
  return (
    <main className="bg-crew py-32 lg:pt-56 px-6 ">
      <Container>
        <div className="grid gap-10 md:gap-16 lg:gap-12 lg:px-20 place-items-center lg:place-items-stretch lg:justify-between">
          {/*-------------------- intro ------------------*/}

          <section className=" md:place-self-start">
            <PageIntro index={2} description={"meet your crew"} />
          </section>

          {/*------------------- image --------------------*/}

          <section className="h-[233px] sm:h-[572px] lg:min-w-[300px]  md:row-start-3 lg:row-start-1 lg:row-end-3 lg:grid-cols-2 lg:col-start-2 ">
            <img
              src={crewMember.images.png}
              alt={crewMember.name}
              className=" h-full object-cover object-center"
            />
          </section>

          {/*----------------- article text --------------------*/}

          <section className="grid text-center gap-6 md:gap-10 lg:text-left">
            {/*---------- tab ----------*/}

            <section className="md:row-start-2">
              <TabList
                className="gap-8 md:gap-4"
                current={crewMember.name}
                list={crew.map((member) => member.name)}
                renderNamedTab={(state) => {
                  return (
                    <EmptyTab
                      isActive={state.isActive(state.name)}
                      id={state.id}
                      name={state.name}
                      onClick={changeCrew}
                    />
                  );
                }}
              />
            </section>

            {/*------------- actual article -------------- */}

            <article className="">
              <h4 className="text-primary">{crewMember.role}</h4>
              <h3>{crewMember.name}</h3>
              <p className="text-body mt-4 max-w-md ">{crewMember.bio}</p>
            </article>
          </section>
        </div>
      </Container>
    </main>
  );
};

export default Crew;
