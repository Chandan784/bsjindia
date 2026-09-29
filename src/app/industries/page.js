import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import IndustryCard from "@/components/industries/IndustryCard";

import { industries } from "@/data/industries";

export const metadata = {
  title: "Industries | BSJ India",
};

export default function IndustriesPage() {
  return (
    <div className="pt-20">
      <section className="bg-black py-28 text-white">
        <Container>
          <SectionHeading
            eyebrow="Industries"
            title="Technology for every production challenge."
            description="Explore the industries where our solutions create value."
          />
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <IndustryCard
                key={industry.id}
                industry={industry}
              />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}