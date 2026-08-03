import { CoffeMockup } from "@public/image";
import Image from "next/image";
import Reveal from "@/components/motion/Reveal";

const features = [
  {
    title: "Fresh Ingredients",
    description:
      "Premium coffee beans roasted locally and sourced directly from small farmers.",
  },
  {
    title: "Handcrafted Process",
    description:
      "Every cup and bottle is prepared by our baristas with care and precision.",
  },
  {
    title: "Small Batch Daily",
    description:
      "We brew in small batches so you always get the freshest taste possible.",
  },
];

const AboutSection = () => {
  return (
    <section className="bg-[#EEEFF1] py-20">
      <div className="mx-auto w-full max-w-7xl px-5 grid md:grid-cols-2 gap-12 items-center">
        <Reveal direction="left">
          <div className="relative">
            <Image
              src={CoffeMockup}
              alt="about-alovi-coffee"
              className="rounded-3xl w-full object-cover"
            />
          </div>
        </Reveal>

        <div className="flex flex-col gap-8">
          <Reveal direction="right">
            <div className="flex flex-col gap-3">
              <span className="uppercase tracking-widest text-sm text-[#8A5A3B]">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl text-[#1B1B1D] font-bold leading-tight">
                The Story Behind Alovi Coffee
              </h2>
              <p className="text-[#5A5A5E] leading-relaxed">
                Alovi started with a simple belief: great coffee should be
                accessible to everyone, anywhere. From our handcrafted bottled
                drinks to freshly brewed cups, we bring honest, delicious
                coffee into your everyday moments.
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            {features.map((feature, index) => (
              <Reveal key={index} direction="right" delay={index * 0.1}>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 mt-2 rounded-full bg-[#8A5A3B]" />
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg text-[#1B1B1D] font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-[#5A5A5E] text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
