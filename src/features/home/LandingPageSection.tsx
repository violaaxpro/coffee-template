import { CoffeMockup } from "@public/image";
import Image from "next/image";
import Button from "@/components/button";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

const LandingPageSection = () => {
  return (
    <section className="min-h-[60vh] bg-[#EEEFF1] flex items-center">
      <div className="mx-auto w-full max-w-7xl p-5 grid md:grid-cols-[1fr_2fr] gap-2 items-center gap-12">
        <div className="flex flex-col gap-3">
          <Reveal direction="left">
            <h1 className="text-6xl text-gray-800 font-bold leading-tight">
              Alovi Delicious Coffee
            </h1>
          </Reveal>
          <Reveal direction="left" delay={0.15}>
            <span className="text-[#1B1B1D]">
              Choose from our handcrafted bottled drinks, or grab a cup of
              freshly brewed coffee made just for you.
            </span>
          </Reveal>

          <Reveal direction="left" delay={0.3}>
            <div className="flex items-center gap-4">
              <Button
                label="Download App"
                className="!bg-[#1B1B1D] !border-none !text-white"
                shape="round"
              />
              <Link
                className="uppercase text-[#1B1B1D] underline text-sm"
                href="#"
              >
                Shop Coffee
              </Link>
            </div>
          </Reveal>
        </div>
        <Reveal direction="right" delay={0.2}>
          <div className="">
            <Image src={CoffeMockup} alt="coffe-cup-image" />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default LandingPageSection;
