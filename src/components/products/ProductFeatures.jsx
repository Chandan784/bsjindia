import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

export default function ProductFeatures({ product }) {
  return (
    <section className="py-24">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Features"
            title="Designed around performance."
          />

          <div>
            <div className="divide-y divide-black/10">
              {product.features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-center gap-5 py-5"
                >
                  <span className="text-sm font-bold text-[#f15a24]">
                    0{index + 1}
                  </span>

                  <span className="text-lg font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}