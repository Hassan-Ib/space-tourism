import React from "react";
import PageIntro from "../components/PageInfo";
import Container from "../components/Container";
type Props = {};

const Home = (props: Props) => {
  return (
    <main className="bg-home px-6 nav-space h-screen lg:h-screen lg:flex lg:items-end xl:items-center">
      <Container>
        <div className="flex flex-col gap-28 md:gap-36 items-center lg:flex-row lg:justify-around lg:gap-0">
          <article className="text-center max-w-md lg:text-left ">
            <PageIntro description="so, you want to travel" />
            {/* sub-heading */}
            <h1>space</h1>
            <p className="text-body">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </article>
          {/* action bgn */}
          <div className=" lg:pt-14">
            <button className="relative text-dark z-10 w-[150px] h-[150px] md:w-[242px] md:h-[242px] lg:w-[264px] lg:h-[264px] bg-white rounded-full uppercase btn-effect text-[20px] md:text-[32px] font-bellefair tracking-[1.25px] md:tracking-[2px] ">
              <span className="w-full h-full bg-inherit rounded-full flex items-center justify-center">
                Explore
              </span>
            </button>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Home;
