export const products = [
  {
    id: 1,
    slug: "hot-runner-systems",
    name: "Hot Runner Systems",
    category: "Injection Molding",
    image: "/images/products/hot-runner.jpg",

    shortDescription:
      "Precision hot runner solutions designed for efficient and consistent injection molding.",

    description:
      "Our hot runner solutions are engineered to improve molding efficiency, reduce material waste and provide reliable production performance.",

    features: [
      "High precision temperature control",
      "Reduced material wastage",
      "Fast cycle performance",
      "Long operating life",
      "Easy maintenance",
    ],

    applications: [
      "Automotive",
      "Packaging",
      "Medical",
      "Consumer Products",
    ],

    specifications: {
      "System Type": "Hot Runner",
      "Application": "Injection Molding",
      "Control": "Digital",
      "Operation": "Automatic",
    },
  },

  {
    id: 2,
    slug: "temperature-controllers",
    name: "Temperature Controllers",
    category: "Process Control",
    image: "/images/products/controller.jpg",

    shortDescription:
      "Reliable temperature control systems for demanding industrial applications.",

    description:
      "Advanced temperature controllers provide stable and accurate process control across a wide range of manufacturing environments.",

    features: [
      "Accurate temperature control",
      "Digital monitoring",
      "Industrial-grade construction",
      "Energy efficient operation",
      "Easy interface",
    ],

    applications: [
      "Plastics",
      "Packaging",
      "Automotive",
      "Electronics",
    ],

    specifications: {
      "Control Type": "Digital",
      "Display": "LED",
      "Application": "Industrial",
      "Operation": "Automatic",
    },
  },

  {
    id: 3,
    slug: "industrial-robots",
    name: "Industrial Robots",
    category: "Automation",
    image: "/images/products/robot.jpg",

    shortDescription:
      "Robotic automation systems designed for high-speed and precision manufacturing.",

    description:
      "Our automation solutions help manufacturers improve productivity, repeatability and workplace efficiency.",

    features: [
      "High-speed operation",
      "Precision handling",
      "Flexible programming",
      "Production automation",
      "Low maintenance",
    ],

    applications: [
      "Automotive",
      "Packaging",
      "Electronics",
      "Consumer Products",
    ],

    specifications: {
      "System": "Industrial Robot",
      "Control": "Programmable",
      "Operation": "Automatic",
      "Application": "Manufacturing",
    },
  },

  {
    id: 4,
    slug: "auxiliary-equipment",
    name: "Auxiliary Equipment",
    category: "Industrial Equipment",
    image: "/images/products/auxiliary.jpg",

    shortDescription:
      "Supporting equipment for efficient and reliable manufacturing operations.",

    description:
      "A comprehensive range of auxiliary equipment designed to support modern manufacturing processes.",

    features: [
      "Reliable operation",
      "Energy efficient",
      "Compact design",
      "Easy integration",
      "Industrial durability",
    ],

    applications: [
      "Plastics",
      "Packaging",
      "Automotive",
      "General Manufacturing",
    ],

    specifications: {
      "Equipment Type": "Auxiliary",
      "Application": "Industrial",
      "Control": "Automatic",
      "Integration": "Flexible",
    },
  },
];

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug);
}