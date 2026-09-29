import { notFound } from "next/navigation";
import Image from "next/image";

import Container from "@/components/common/Container";
import Button from "@/components/common/Button";

import {
  industries,
  getIndustryBySlug,
} from "@/data/industries";

export function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return {
      title: "Industry Not Found",
    };
  }

  return {
    title: `${industry.name} | BSJ India`,
    description: industry.description,
  };
}

export default async function IndustryPage({ params }) {
  const { slug } = await params;

  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  return (
    <div className="pt-20">
      <section className="relative min-h-[70vh] overflow-hidden bg-black text-white">
        <Image
          src={industry.image}
          alt={industry.name}
          fill
          priority
          className="object-cover opacity-50"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/20" />

        <Container>
          <div className="relative z-10 flex min-h-[70vh] items-end pb-20">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f15a24]">
                Industry
              </p>

              <h1 className="mt-5 text-5xl font-bold sm:text-7xl">
                {industry.name}
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
                {industry.description}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f15a24]">
                Our Solutions
              </p>

              <h2 className="mt-5 text-4xl font-bold">
                Built around your application.
              </h2>
            </div>

            <div>
              <p className="leading-8 text-black/60">
                Manufacturing environments require solutions that understand
                the application, process and production requirements. Our
                industrial technologies are designed to support consistent,
                efficient and reliable operations.
              </p>

              <Button href="/contact" className="mt-8">
                Discuss Your Requirement
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}