import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block overflow-hidden rounded-3xl bg-white"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />

        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
          <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold">
            {product.category}
          </span>

          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f15a24] text-white transition-transform group-hover:rotate-45">
            <ArrowUpRight size={20} />
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold">{product.name}</h3>

        <p className="mt-3 leading-6 text-black/55">
          {product.shortDescription}
        </p>

        <span className="mt-5 inline-block text-sm font-semibold">
          View solution →
        </span>
      </div>
    </Link>
  );
}