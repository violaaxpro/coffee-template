import PageHero from "@/components/layout/PageHero";
import AboutSection from "@/features/home/AboutSection";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Our Story"
        description="We believe great coffee should be accessible to everyone, anywhere. This is how Alovi began."
      />
      <AboutSection />
    </>
  );
}