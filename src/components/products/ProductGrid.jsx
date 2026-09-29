import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import ProductShowcase from "@/components/home/ProductShowcase";
import IndustriesSection from "@/components/home/IndustriesSection";
import Stats from "@/components/home/Stats";
import WhyUs from "@/components/home/WhyUs";
import Process from "@/components/home/Process";
import HomeCTA from "@/components/home/HomeCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <ProductShowcase />
      <IndustriesSection />
      <Stats />
      <WhyUs />
      <Process />
      <HomeCTA />
    </>
  );
}