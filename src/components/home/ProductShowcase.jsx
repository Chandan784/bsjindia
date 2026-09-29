import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";
import ProductCard from "@/components/products/ProductCard";

import { products } from "@/data/products";

export default function ProductShowcase() {
  return (
    <section className="bg-[#111] py-24 text-white lg:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Our Solutions"
            title="Built for demanding production environments."
            description="Explore our range of industrial technology and automation solutions."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {products.map((product) => (
            <Reveal key={product.id}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}