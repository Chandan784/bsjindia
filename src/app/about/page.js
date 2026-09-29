import Image from "next/image";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";
import Stats from "@/components/home/Stats";
import HomeCTA from "@/components/home/HomeCTA";

export const metadata = {
  title: "About | BSJ India",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="bg-black py-28 text-white lg:py-36">
        <Container>
          <SectionHeading
            eyebrow="About Us"
            title="Engineering solutions for a changing industrial world."
            description="We combine engineering expertise, technology and application knowledge to help manufacturers improve their operations."
          />
        </Container>
      </section>

      <section className="py-24 lg:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="relative aspect-square overflow-hidden rounded-3xl">
                <Image
                  src="/images/about/company.jpg"
                  alt="Industrial manufacturing"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f15a24]">
                  Our Story
                </p>

                <h2 className="mt-5 text-4xl font-bold">
                  Technology backed by experience.
                </h2>

                <p className="mt-6 leading-8 text-black/60">
                  Our focus is to provide practical industrial solutions that
                  help customers improve productivity, reliability and
                  efficiency.
                </p>

                <p className="mt-5 leading-8 text-black/60">
                  Through application knowledge and engineering support, we
                  work with manufacturers across different industries and
                  production environments.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <Stats />

      <section className="bg-[#efefeb] py-24 lg:py-32">
        <Container>
          <div className="grid gap-12 md:grid-cols-2">
            <Reveal>
              <div className="rounded-3xl bg-white p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f15a24]">
                  Mission
                </p>

                <h2 className="mt-5 text-3xl font-bold">
                  Make industrial technology more accessible.
                </h2>

                <p className="mt-5 leading-7 text-black/55">
                  We aim to help manufacturers adopt technology that creates
                  measurable improvements in production.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-3xl bg-black p-10 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f15a24]">
                  Vision
                </p>

                <h2 className="mt-5 text-3xl font-bold">
                  Build the future of manufacturing.
                </h2>

                <p className="mt-5 leading-7 text-white/55">
                  We believe intelligent automation and engineering will
                  continue transforming how industries manufacture products.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <HomeCTA />
    </div>
  );
}