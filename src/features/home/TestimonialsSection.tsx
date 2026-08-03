import { LuQuote, LuStar } from "react-icons/lu";
import Reveal from "@/components/motion/Reveal";

const testimonials = [
  {
    name: "Sarah",
    role: "Loyal Customer",
    quote:
      "The cold brew bottle is my everyday companion. Smooth, strong, and always fresh. Alovi nailed it.",
  },
  {
    name: "Dimas",
    role: "Coffee Enthusiast",
    quote:
      "Best Vietnamese drip I've had outside a traditional coffee shop. You can taste the care in every batch.",
  },
  {
    name: "Maya",
    role: "Office Worker",
    quote:
      "I grab a caramel latte on my way to work every morning. Consistent, delicious, and honestly priced.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-[#F8F6F2] py-20">
      <div className="mx-auto w-full max-w-7xl px-5">
        <Reveal className="flex flex-col items-center gap-3 text-center mb-12">
          <span className="uppercase tracking-widest text-sm text-[#8A5A3B]">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl text-[#1B1B1D] font-bold leading-tight">
            Loved by Our Customers
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <Reveal key={index} delay={index * 0.15}>
              <div className="bg-white rounded-3xl p-8 flex flex-col gap-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-[#8A5A3B]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <LuStar key={i} />
                    ))}
                  </div>
                  <LuQuote className="text-[#1B1B1D] text-3xl" />
                </div>
                <p className="text-[#5A5A5E] leading-relaxed flex-1">
                  &quot;{item.quote}&quot;
                </p>
                <div>
                  <h3 className="text-[#1B1B1D] font-semibold">
                    {item.name}
                  </h3>
                  <span className="text-sm text-[#8A5A3B]">{item.role}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;