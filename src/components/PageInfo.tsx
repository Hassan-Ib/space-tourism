const PageIntro = ({
  index,
  description,
}: {
  index?: number;
  description: string;
}) => (
  <h5 className="text-center md:text-left">
    {index ? <span className="opacity-50"> 0{index} </span> : null}{" "}
    {description}
  </h5>
);

export default PageIntro;
