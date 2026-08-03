import PageHero from "@/components/layout/PageHero";
import FindUsSection from "@/features/home/FindUsSection";

export default function FindUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Find Us"
        title="Visit Alovi Coffee"
        description="Stop by one of our stores for a fresh cup, or grab a bottled drink to take with you."
      />
      <FindUsSection />
    </>
  );
}