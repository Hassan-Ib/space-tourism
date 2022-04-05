const PageIntro = ({
  index,
  description,
}: {
  index: number;
  description: string;
}) => (
  <h5>
    {" "}
    <span className="opacity-50"> 0{index} </span> {description}
  </h5>
);

export default PageIntro;
