export const industries = [
  {
    id: 1,
    slug: "automotive",
    name: "Automotive",
    image: "/images/industries/automotive.jpg",
    description:
      "Precision manufacturing and automation solutions for the automotive industry.",
  },

  {
    id: 2,
    slug: "medical",
    name: "Medical",
    image: "/images/industries/medical.jpg",
    description:
      "Reliable and precise solutions for medical manufacturing applications.",
  },

  {
    id: 3,
    slug: "packaging",
    name: "Packaging",
    image: "/images/industries/packaging.jpg",
    description:
      "High-performance solutions for modern packaging production.",
  },

  {
    id: 4,
    slug: "electronics",
    name: "Electronics",
    image: "/images/industries/electronics.jpg",
    description:
      "Advanced manufacturing solutions for electronics production.",
  },

  {
    id: 5,
    slug: "consumer-products",
    name: "Consumer Products",
    image: "/images/industries/consumer.jpg",
    description:
      "Flexible solutions for high-quality consumer product manufacturing.",
  },

  {
    id: 6,
    slug: "plastics",
    name: "Plastics",
    image: "/images/industries/plastics.jpg",
    description:
      "Complete technology solutions for plastics processing.",
  },
];

export function getIndustryBySlug(slug) {
  return industries.find((industry) => industry.slug === slug);
}