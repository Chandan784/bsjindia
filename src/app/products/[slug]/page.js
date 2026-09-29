import { notFound } from "next/navigation";

import Container from "@/components/common/Container";
import ProductHero from "@/components/products/ProductHero";
import ProductFeatures from "@/components/products/ProductFeatures";
import RelatedProducts from "@/components/products/RelatedProducts";

import { products, getProductBySlug } from "@/data/products";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} | BSJ India`,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;

  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = products
    .filter((item) => item.id !== product.id)
    .slice(0, 2);

  return (
    <div className="pt-20">
      <ProductHero product={product} />

      <ProductFeatures product={product} />

      <section className="bg-[#efefeb] py-24">
        <Container>
          <h2 className="text-3xl font-bold">Technical Specifications</h2>

          <div className="mt-8 overflow-hidden rounded-3xl bg-white">
            {Object.entries(product.specifications).map(
              ([key, value]) => (
                <div
                  key={key}
                  className="grid grid-cols-2 border-b border-black/10 p-5 last:border-0"
                >
                  <span className="font-semibold">{key}</span>
                  <span className="text-black/55">{value}</span>
                </div>
              )
            )}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <h2 className="text-3xl font-bold">
            Related Solutions
          </h2>

          <div className="mt-10">
            <RelatedProducts products={related} />
          </div>
        </Container>
      </section>
    </div>
  );
}