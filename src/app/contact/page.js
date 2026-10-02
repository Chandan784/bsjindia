import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Contact | BSJ India",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="bg-black py-28 text-white lg:py-36">
        <Container>
          <SectionHeading
            eyebrow="Contact"
            title="Let's talk about your next project."
            description="Tell us about your application, production requirements or automation challenge."
          />
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f15a24]">
                Get In Touch
              </p>

              <h2 className="mt-5 text-3xl font-bold">
                Speak with our team.
              </h2>

              <div className="mt-10 space-y-7">
                <div>
                 . <p className="text-sm text-black/45">Phone</p>
                  <p className="mt-1 font-semibold">
                    {siteConfig.contact.phone}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-black/45">Email</p>
                  <p className="mt-1 font-semibold">
                    {siteConfig.contact.email}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-black/45">Address</p>
                  <p className="mt-1 max-w-xs font-semibold">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-[#efefeb] p-6 sm:p-10">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}