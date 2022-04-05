type InfoProps = {
  title: string;
  detail: string;
};

const Info = ({ title, detail }: InfoProps) => {
  return (
    <section className="flex flex-col gap-2 uppercase tracking-widest">
      <p className="text-[14px] font-barlow-condensed ">{title}</p>
      <p className="text-[28px] font-bellefair">{detail}</p>
    </section>
  );
};

export default Info;
