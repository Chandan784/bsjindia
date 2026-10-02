
import Container from "@/components/common/Container";
import Reveal from "@/components/common/Reveal";
import Button from "@/components/common/Button";

export default function Intro() {
  return (
    <section className="relative overflow-hidden bg-[#F7F7F5] py-24 lg:py-36">
      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-full w-px bg-[#111111]/[0.06]" />
        <div className="absolute left-0 top-1/2 h-px w-full bg-[#111111]/[0.06]" />
      </div>

      <Container>
        <div className="relative">
          {/* =====================================================
              TOP LABEL
          ===================================================== */}
          <Reveal>
            <div className="mb-16 flex items-center justify-between border-b border-[#111111]/10 pb-5">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#F15A24]" />

                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#111111]">
                  Who We Are
                </span>
              </div>

              <span className="hidden text-xs font-medium uppercase tracking-[0.18em] text-[#6B7280] sm:block">
                Engineering • Technology • Industry
              </span>
            </div>
          </Reveal>

          {/* =====================================================
              MAIN CONTENT
          ===================================================== */}
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
            {/* LEFT */}
            <div className="lg:col-span-8">
              <Reveal>
                <div className="relative">
                  {/* Large Background Number */}
                  <span className="pointer-events-none absolute -left-3 -top-14 select-none text-[120px] font-black leading-none tracking-[-0.08em] text-[#111111]/[0.045] sm:text-[180px] lg:-left-8 lg:-top-20 lg:text-[220px]">
                    01
                  </span>

                  <div className="relative">
                    <p className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-[#F15A24]">
                      Industrial Technology
                    </p>

                    <h2 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-[-0.045em] text-[#111111] sm:text-6xl lg:text-7xl xl:text-[86px]">
                      Technology that
                      <br />
                      <span className="text-[#4B5563]">
                        moves industry
                      </span>
                      <br />
                      forward.
                    </h2>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* RIGHT */}
            <div className="flex items-end lg:col-span-4">
              <Reveal>
                <div className="max-w-md lg:pb-2">
                  {/* Accent Line */}
                  <div className="mb-8 flex items-center gap-3">
                    <span className="h-1 w-12 rounded-full bg-[#F15A24]" />
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#6B7280]">
                      Our Approach
                    </span>
                  </div>

                  <p className="text-lg font-medium leading-8 text-[#374151]">
                    We provide advanced industrial technology and automation
                    solutions designed around productivity, precision, and
                    long-term performance.
                  </p>

                  <p className="mt-6 text-base leading-7 text-[#6B7280]">
                    From individual equipment to complete industrial
                    solutions, our approach combines engineering expertise
                    with practical manufacturing requirements.
                  </p>

                  <Button href="/about" className="mt-9">
                    Discover Our Story
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>

          {/* =====================================================
              BOTTOM INFORMATION
          ===================================================== */}
          <Reveal>
            <div className="mt-24 grid overflow-hidden rounded-2xl border border-[#111111]/10 bg-white lg:mt-32 lg:grid-cols-12">
              {/* Statement */}
              <div className="border-b border-[#111111]/10 p-8 sm:p-10 lg:col-span-7 lg:border-b-0 lg:border-r lg:p-12">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F15A24]">
                  Our Philosophy
                </span>

                <p className="mt-5 max-w-xl text-2xl font-semibold leading-9 tracking-tight text-[#111111] sm:text-3xl">
                  Built for industries where{" "}
                  <span className="text-[#F15A24]">
                    precision, reliability,
                  </span>{" "}
                  and performance matter.
                </p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 lg:col-span-5">
                <div className="border-r border-[#111111]/10 p-8 sm:p-10">
                  <div className="flex items-start justify-between">
                    <span className="text-4xl font-bold tracking-tight text-[#111111]">
                      01
                    </span>

                    <span className="h-2 w-2 rounded-full bg-[#F15A24]" />
                  </div>

                  <p className="mt-10 text-sm font-bold uppercase tracking-[0.15em] text-[#374151]">
                    Engineering
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                    Practical solutions built with technical expertise.
                  </p>
                </div>

                <div className="p-8 sm:p-10">
                  <div className="flex items-start justify-between">
                    <span className="text-4xl font-bold tracking-tight text-[#111111]">
                      02
                    </span>

                    <span className="h-2 w-2 rounded-full bg-[#F15A24]" />
                  </div>

                  <p className="mt-10 text-sm font-bold uppercase tracking-[0.15em] text-[#374151]">
                    Innovation
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                    Technology focused on better industrial performance.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* =====================================================
              FOOTER ACCENT
          ===================================================== */}
          <Reveal>
            <div className="mt-8 flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#6B7280]">
                Built for industry
              </span>

              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#F15A24]" />
                <span className="h-px w-16 bg-[#111111]/20 sm:w-28" />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
