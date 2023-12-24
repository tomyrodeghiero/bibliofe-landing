import {
  FAQ,
  Featured,
  FinancialFuture,
  FinancilaFreedom,
  HeroSection,
} from "@/components";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Featured />
      <FinancilaFreedom />
      <FinancialFuture />
      <FAQ />
    </main>
  );
}
