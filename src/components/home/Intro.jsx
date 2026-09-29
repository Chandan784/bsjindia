import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";
import Button from "@/components/common/Button";

export default function Intro() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="Who We Are"
              title="Technology that moves industry forward."
            />
          </Reveal>

          <Reveal>
            <div>
              <p className="text-lg leading-8 text-black/60">
                We provide advanced industrial technology and automation
                solutions designed around productivity, precision and
                long-term performance.
              </p>

              <p className="mt-5 leading-7 text-black/55">
                From individual equipment to complete industrial solutions,
                our approach combines engineering expertise with practical
                manufacturing requirements.
              </p>

              <Button href="/about" className="mt-8">
                Discover Our Story
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}