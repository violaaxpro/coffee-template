export const PageHero = ({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) => {
  return (
    <section className="bg-[#EEEFF1] py-16 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-5 flex flex-col items-center gap-4 text-center">
        <span className="uppercase tracking-widest text-sm text-[#8A5A3B]">
          {eyebrow}
        </span>
        <h1 className="text-4xl md:text-6xl text-[#1B1B1D] font-bold leading-tight">
          {title}
        </h1>
        <p className="text-[#5A5A5E] max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
};

export default PageHero;