import { LuClock, LuMapPin, LuPhone } from "react-icons/lu";
import Button from "@/components/button";
import Reveal from "@/components/motion/Reveal";

const locations = [
  {
    name: "Alovi Coffee – Sudirman",
    address: "Jl. Jend. Sudirman No. 45, Jakarta Pusat",
    hours: "Mon – Sun, 07.00 – 22.00",
    phone: "+62 812 3456 7890",
  },
  {
    name: "Alovi Coffee – Kemang",
    address: "Jl. Kemang Raya No. 12, Jakarta Selatan",
    hours: "Mon – Sun, 08.00 – 23.00",
    phone: "+62 812 3456 7891",
  },
];

const FindUsSection = () => {
  return (
    <section className="bg-[#EEEFF1] py-20">
      <div className="mx-auto w-full max-w-7xl px-5">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div className="flex flex-col gap-3">
            <span className="uppercase tracking-widest text-sm text-[#8A5A3B]">
              Find Us
            </span>
            <h2 className="text-4xl md:text-5xl text-[#1B1B1D] font-bold leading-tight">
              Visit Our Stores
            </h2>
          </div>
          <Button
            label="See All Locations"
            className="!bg-[#1B1B1D] !border-none !text-white"
            shape="round"
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {locations.map((location, index) => (
            <Reveal key={index} delay={index * 0.15}>
              <div className="bg-white rounded-3xl p-8 flex flex-col gap-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-2xl text-[#1B1B1D] font-semibold">
                  {location.name}
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3 text-[#5A5A5E]">
                    <LuMapPin className="text-[#8A5A3B] mt-1 shrink-0" />
                    <span>{location.address}</span>
                  </div>
                  <div className="flex items-start gap-3 text-[#5A5A5E]">
                    <LuClock className="text-[#8A5A3B] mt-1 shrink-0" />
                    <span>{location.hours}</span>
                  </div>
                  <div className="flex items-start gap-3 text-[#5A5A5E]">
                    <LuPhone className="text-[#8A5A3B] mt-1 shrink-0" />
                    <span>{location.phone}</span>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="uppercase text-[#1B1B1D] underline text-sm">
                    Get Directions
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FindUsSection;
