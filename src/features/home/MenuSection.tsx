import {
  SignatureBrew,
  ColdBrew,
  CaramelLatte,
  VietnameseDrip,
} from "@public/image";
import Image from "next/image";
import Button from "@/components/button";
import Reveal from "@/components/motion/Reveal";

const menus = [
  {
    name: "Alovi Signature Brew",
    description:
      "Our signature drip coffee, slow-brewed in small batches every morning.",
    price: "Rp 25.000",
    image: SignatureBrew,
  },
  {
    name: "Cold Brew Bottled",
    description:
      "Smooth 18-hour cold brew, bottled fresh and ready to take anywhere.",
    price: "Rp 35.000",
    image: ColdBrew,
  },
  {
    name: "Caramel Latte",
    description:
      "Espresso layered with steamed milk and rich homemade caramel.",
    price: "Rp 32.000",
    image: CaramelLatte,
  },
  {
    name: "Vietnamese Drip",
    description:
      "Bold robusta brewed the traditional way with sweet condensed milk.",
    price: "Rp 28.000",
    image: VietnameseDrip,
  },
];

const MenuSection = () => {
  return (
    <section className="bg-[#F8F6F2] py-20">
      <div className="mx-auto w-full max-w-7xl px-5">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div className="flex flex-col gap-3">
            <span className="uppercase tracking-widest text-sm text-[#8A5A3B]">
              Our Menu
            </span>
            <h2 className="text-4xl md:text-5xl text-[#1B1B1D] font-bold leading-tight">
              Freshly Brewed, <br className="hidden md:block" />
              Always Delicious
            </h2>
          </div>
          <Button
            label="View Full Menu"
            className="!bg-[#1B1B1D] !border-none !text-white"
            shape="round"
          />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menus.map((menu, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-64">
                <Image
                  src={menu.image}
                  alt={menu.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-xl text-[#1B1B1D] font-semibold">
                  {menu.name}
                </h3>
                <p className="text-[#5A5A5E] text-sm leading-relaxed">
                  {menu.description}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-lg text-[#8A5A3B] font-semibold">
                    {menu.price}
                  </span>
                  <span className="text-sm text-[#1B1B1D] underline uppercase">
                    Order
                  </span>
                </div>
              </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
