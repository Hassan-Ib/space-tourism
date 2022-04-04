import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <main className="bg-screen px-4 py-10 flex flex-col gap-16 items-center">
      <article className="text-center max-w-xs">
        {/* sub-heading */}
        <h5 className="">so you want to travel</h5>
        <h1>space</h1>
        <p className="text-body">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </article>
      {/* action bgn */}
      <button className="border-2 border-white text-[20px] text-dark  w-[150px]  h-[150px] tracking-widest bg-white rounded-full uppercase">
        Explore
      </button>
    </main>
  );
};

export default Home;
