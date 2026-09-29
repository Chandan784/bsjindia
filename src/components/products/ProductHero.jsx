import Image from "next/image";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";

export default function ProductHero({ product }) {
  return (
    <section className="bg-black py-28 text-white lg:py-36">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f15a24]">
              {product.category}
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">
              {product.name}
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">
              {product.description}
            </p>

            <Button href="/contact" className="mt-8">
              Enquire Now
            </Button>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}