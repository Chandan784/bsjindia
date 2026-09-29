import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We understand your production requirements, challenges and goals.",
  },

  {
    number: "02",
    title: "Engineer",
    description:
      "Our team develops a solution aligned with your technical requirements.",
  },

  {
    number: "03",
    title: "Implement",
    description:
      "The solution is integrated into your production environment.",
  },

  {
    number: "04",
    title: "Support",
    description:
      "We continue supporting your equipment and processes after implementation.",
  },
];

export default function Process() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Our Approach"
            title="From challenge to solution."
          />
        </Reveal>

        <div className="mt-16">
          {process.map((item) => (
            <Reveal key={item.number}>
              <div className="grid gap-5 border-t border-black/10 py-8 md:grid-cols-[100px_250px_1fr] md:items-center">
                <span className="text-sm font-bold text-[#f15a24]">
                  {item.number}
                </span>

                <h3 className="text-2xl font-bold">{item.title}</h3>

                <p className="max-w-xl text-black/55">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}