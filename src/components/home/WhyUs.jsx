import {
  Gauge,
  ShieldCheck,
  Settings2,
  Lightbulb,
} from "lucide-react";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";

const items = [
  {
    icon: Gauge,
    title: "Performance",
    description:
      "Solutions engineered to improve production efficiency and reliability.",
  },

  {
    icon: ShieldCheck,
    title: "Reliability",
    description:
      "Industrial-grade solutions designed for demanding operating environments.",
  },

  {
    icon: Settings2,
    title: "Engineering",
    description:
      "Practical engineering focused on integration, usability and long-term performance.",
  },

  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Modern technology helping manufacturers adapt to evolving production needs.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-[#efefeb] py-24 lg:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why Us"
            title="More than equipment. A technology partner."
          />
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title}>
                <div className="h-full bg-[#efefeb] p-8">
                  <Icon className="text-[#f15a24]" size={35} />

                  <h3 className="mt-8 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-black/55">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}