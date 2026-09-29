import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import ProductGrid from "@/components/products/ProductGrid";

import { products } from "@/data/products";

export const metadata = {
  title: "Products | BSJ India",
};

export default function ProductsPage() {
  return (
    <div className="pt-32">
      <section className="bg-black py-24 text-white lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="Products"
            title="Industrial solutions engineered for performance."
            description="Explore our technology and equipment solutions."
          />
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <ProductGrid products={products} />
        </Container>
      </section>
    </div>
  );
}