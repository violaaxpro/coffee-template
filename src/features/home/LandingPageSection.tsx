import { CoffeMockup, HeroBg } from "@public/image";
import Image from "next/image";
import Button from "@/components/button";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { LuCoffee, LuStar } from "react-icons/lu";

const LandingPageSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <Image
        src={HeroBg}
        alt="alovi-coffee-hero"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1B1B1D]/95 via-[#1B1B1D]/75 to-[#1B1B1D]/40" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#1B1B1D] to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl p-5 py-20 grid md:grid-cols-[1.1fr_1fr] gap-12 items-center">
        <div className="flex flex-col gap-6">
          <Reveal direction="left">
            <span className="inline-flex items-center gap-2 text-[#E8C99B] uppercase tracking-widest text-xs font-semibold bg-white/10 border border-white/15 px-4 py-2 rounded-full">
              <LuCoffee />
              Handcrafted Since 2019
            </span>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <h1 className="text-5xl md:text-7xl text-white font-bold leading-tight">
              Alovi Delicious{" "}
              <span className="text-[#E8C99B]">Coffee</span>
            </h1>
          </Reveal>

          <Reveal direction="left" delay={0.2}>
            <p className="text-[#E5E5E5] text-lg leading-relaxed max-w-xl">
              Choose from our handcrafted bottled drinks, or grab a cup of
              freshly brewed coffee made just for you.
            </p>
          </Reveal>

          <Reveal direction="left" delay={0.3}>
            <div className="flex items-center gap-4 flex-wrap">
              <Button
                label="Download App"
                className="!bg-white !border-none !text-[#1B1B1D] !font-semibold"
                shape="round"
              />
              <Link
                href="/menus"
                className="uppercase text-white underline text-sm"
              >
                Shop Coffee
              </Link>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.4}>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex gap-1 text-[#E8C99B]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <LuStar key={i} />
                ))}
              </div>
              <span className="text-white/80 text-sm">
                Rated 4.9 by 40,000+ coffee lovers
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal direction="right" delay={0.3} className="hidden md:block">
          <div className="relative max-w-md ml-auto">
            <Image
              src={CoffeMockup}
              alt="coffee-bottle-mockup"
              className="rounded-3xl w-full object-cover shadow-2xl ring-1 ring-white/20"
            />
            <div className="absolute -bottom-5 -left-6 bg-white rounded-2xl px-5 py-3 shadow-xl">
              <p className="text-2xl text-[#1B1B1D] font-bold">40+</p>
              <p className="text-xs text-[#5A5A5E] uppercase tracking-wide">
                Stores Nationwide
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default LandingPageSection;
