import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";
import HomeCTA from "@/components/home/HomeCTA";

import { services } from "@/data/services";

export const metadata = {
  title: "Services | BSJ India",
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <section className="bg-black py-28 text-white">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Support beyond the equipment."
            description="From integration to technical support, we help customers get more from their industrial technology."
          />
        </Container>
      </section>

      <section className="py-24 lg:py-32">
        <Container>
          <div className="divide-y divide-black/10">
            {services.map((service, index) => (
              <Reveal key={service.id}>
                <div className="grid gap-6 py-10 md:grid-cols-[100px_300px_1fr] md:items-center">
                  <span className="font-bold text-[#f15a24]">
                    0{index + 1}
                  </span>

                  <h2 className="text-2xl font-bold">
                    {service.title}
                  </h2>

                  <p className="max-w-xl leading-7 text-black/55">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <HomeCTA />
    </div>
  );
}