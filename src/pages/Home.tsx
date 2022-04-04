import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <main className="bg-home px-6 pt-44 md:pt-36 py-16 flex flex-col gap-36 items-center">
      <article className="text-center max-w-md">
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
      <button className="relative text-[20px]  text-dark z-10  w-[160px]  h-[160px] tracking-widest bg-white rounded-full uppercase btn-effect">
        <div className="w-full h-full bg-inherit rounded-full flex items-center justify-center">
          Explore
        </div>
      </button>
    </main>
  );
};

export default Home;
