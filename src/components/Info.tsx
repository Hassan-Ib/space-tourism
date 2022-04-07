type InfoProps = {
  title: string;
  detail: string;
};

const Info = ({ title, detail }: InfoProps) => {
  return (
    <section className="flex flex-col gap-2 tracking-widest">
      <p className="sub-heading-2">{title}</p>
      <p className="sub-heading-1">{detail}</p>
    </section>
  );
};

export default Info;
