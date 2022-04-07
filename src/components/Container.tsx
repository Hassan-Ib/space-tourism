import React from "react";

type Props = {
  children: React.ReactNode;
};

const Container = (props: Props) => {
  return <div className="w-full  container mx-auto ">{props.children}</div>;
};

export default Container;
