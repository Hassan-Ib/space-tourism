import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <main className="bg-home px-6  py-16 nav-space  flex flex-col gap-28 md:gap-36 items-center lg:flex-row lg:h-screen lg:justify-around lg:gap-0">
      <article className="text-center max-w-md lg:text-left ">
        {/* sub-heading */}
        <h5 className="">so, you want to travel</h5>
        <h1>space</h1>
        <p className="text-body">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </article>
      {/* action bgn */}
      <div className=" lg:pt-16">
        <button className="relative text-dark z-10 w-[150px] h-[150px] md:w-[242px] md:h-[242px] lg:w-[264px] lg:h-[264px] bg-white rounded-full uppercase btn-effect ">
          <h4 className="w-full h-full bg-inherit rounded-full flex items-center justify-center">
            Explore
          </h4>
        </button>
      </div>
    </main>
  );
};

export default Home;
