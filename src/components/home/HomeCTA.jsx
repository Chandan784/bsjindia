import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HomeCTA() {
  return (
    <section className="bg-black px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1200px] text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f15a24]">
          Let's Build Together
        </p>

        <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          Have an industrial
          <br />
          challenge?
        </h2>

        <p className="mx-auto mt-7 max-w-xl text-lg leading-8 text-white/55">
          Talk to our team about your application, equipment or automation
          requirements.
        </p>

        <Link
          href="/contact"
          className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#f15a24] px-7 py-4 font-semibold"
        >
          Start a Conversation
          <ArrowUpRight
            size={18}
            className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </Link>
      </div>
    </section>
  );
}