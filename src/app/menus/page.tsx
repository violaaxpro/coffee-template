import PageHero from "@/components/layout/PageHero";
import MenuSection from "@/features/home/MenuSection";

export default function MenusPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Menus"
        title="Explore Our Menu"
        description="From handcrafted bottled drinks to freshly brewed coffee, there's an Alovi for every moment of your day."
      />
      <MenuSection />
    </>
  );
}