import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import HomeCTA from "@/components/home/HomeCTA";

const jobs = [
  {
    title: "Application Engineer",
    location: "Bengaluru",
    type: "Full Time",
  },
  {
    title: "Automation Engineer",
    location: "Bengaluru",
    type: "Full Time",
  },
  {
    title: "Sales Engineer",
    location: "India",
    type: "Full Time",
  },
];

export const metadata = {
  title: "Careers | BSJ India",
};

export default function CareersPage() {
  return (
    <div className="pt-20">
      <section className="bg-black py-28 text-white lg:py-36">
        <Container>
          <SectionHeading
            eyebrow="Careers"
            title="Build the future of industry with us."
            description="Join a team working at the intersection of engineering, technology and manufacturing."
          />
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <h2 className="text-3xl font-bold">
            Open Positions
          </h2>

          <div className="mt-10 divide-y divide-black/10 border-t border-black/10">
            {jobs.map((job) => (
              <div
                key={job.title}
                className="grid gap-5 py-7 md:grid-cols-[1fr_200px_150px_auto] md:items-center"
              >
                <h3 className="text-xl font-bold">{job.title}</h3>

                <span className="text-black/50">
                  {job.location}
                </span>

                <span className="text-black/50">
                  {job.type}
                </span>

                <a
                  href="mailto:info@example.com"
                  className="rounded-full border border-black/20 px-5 py-2.5 text-center text-sm font-semibold transition hover:bg-black hover:text-white"
                >
                  Apply
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <HomeCTA />
    </div>
  );
}