import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function IndustryCard({ industry }) {
  return (
    <Link
      href={`/industries/${industry.slug}`}
      className="group relative aspect-[4/3] overflow-hidden rounded-3xl"
    >
      <Image
        src={industry.image}
        alt={industry.name}
        fill
        className="object-cover transition duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
        <div>
          <h2 className="text-2xl font-bold">{industry.name}</h2>

          <p className="mt-2 max-w-sm text-sm text-white/70">
            {industry.description}
          </p>
        </div>

        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition group-hover:rotate-45">
          <ArrowUpRight size={19} />
        </span>
      </div>
    </Link>
  );
}