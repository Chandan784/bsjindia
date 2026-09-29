import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";

import { industries } from "@/data/industries";

export default function IndustriesSection() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Industries"
            title="Solutions across industries."
            description="Technology designed around the specific demands of modern manufacturing."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Link
              href={`/industries/${industry.slug}`}
              key={industry.id}
              className="group relative aspect-[4/3] overflow-hidden rounded-3xl"
            >
              <Image
                src={industry.image}
                alt={industry.name}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/45 transition group-hover:bg-black/55" />

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                <div>
                  <h3 className="text-2xl font-bold">{industry.name}</h3>
                  <p className="mt-2 max-w-xs text-sm text-white/70">
                    {industry.description}
                  </p>
                </div>

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-black transition group-hover:rotate-45">
                  <ArrowUpRight size={19} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}