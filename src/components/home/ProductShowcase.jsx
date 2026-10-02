"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import Container from "@/components/common/Container";
import Reveal from "@/components/common/Reveal";

const products = [
  {
    id: 1,
    number: "01",
    name: "Hot Runners",
    image:
      "/hotrunner.jpg",
    description:
      "High-performance hot runner systems designed for precise, efficient, and consistent plastic injection molding.",
    features: [
      "Precision Melt Flow",
      "Reduced Material Waste",
      "Consistent Molding",
      "Production Efficiency",
    ],
    href: "/our-product-automotive/",
  },
  {
    id: 2,
    number: "02",
    name: "Auxiliary Equipment",
    image:
      "https://i0.wp.com/bsjindia.com/wp-content/uploads/2024/12/automatives-1.jpg?fit=451%2C266&ssl=1",
    description:
      "Reliable auxiliary equipment designed to support efficient material handling, processing, and production operations.",
    features: [
      "Production Support",
      "Process Efficiency",
      "Reliable Operation",
      "Industrial Performance",
    ],
    href: "/auxiliary-equipments/",
  },
  {
    id: 3,
    number: "03",
    name: "Robot Systems",
    image:
      "https://i0.wp.com/bsjindia.com/wp-content/uploads/2024/11/syringe.jpg?fit=451%2C266&ssl=1",
    description:
      "Industrial robot systems designed to improve automation, repeatability, handling, and overall production efficiency.",
    features: [
      "Industrial Automation",
      "High Repeatability",
      "Efficient Handling",
      "Production Optimization",
    ],
    href: "/robot-systems/",
  },
];

export default function ProductShowcase() {
  return (
    <section className="relative overflow-hidden bg-[#F7F7F5] py-24 lg:py-36">
      <Container>
        {/* =====================================================
            HEADER
        ===================================================== */}
        <Reveal>
          <div className="mb-16 border-b border-black/10 pb-8 lg:mb-20">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              {/* Heading */}
              <div className="max-w-3xl">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F15A24]" />

                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#4B5563]">
                    Our Products
                  </span>
                </div>

                <h2 className="text-5xl font-bold leading-[0.95] tracking-[-0.045em] text-[#111111] sm:text-6xl lg:text-7xl">
                  Industrial technology
                  <br />
                  <span className="text-[#F15A24]">
                    built to perform.
                  </span>
                </h2>
              </div>

              {/* Description */}
              <div className="max-w-sm lg:pb-1">
                <p className="text-base leading-7 text-[#6B7280]">
                  We deliver reliable industrial products and automation
                  technologies designed to improve production efficiency,
                  precision, and performance.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* =====================================================
            PRODUCT LIST
        ===================================================== */}
        <div className="space-y-6">
          {products.map((product, index) => (
            <Reveal key={product.id}>
              <motion.article
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group overflow-hidden rounded-2xl border border-black/10 bg-white"
              >
                <div className="grid lg:grid-cols-2">
                  {/* =================================================
                      IMAGE
                  ================================================= */}
                  <div className="relative min-h-[320px] overflow-hidden bg-[#E8E8E4] lg:min-h-[460px]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    {/* Number */}
                    <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-black/30 backdrop-blur-md">
                      <span className="text-xs font-bold text-white">
                        {product.number}
                      </span>
                    </div>

                    {/* Product Label */}
                    <div className="absolute bottom-6 left-6">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                        Industrial Product
                      </p>

                      <h3 className="mt-1 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        {product.name}
                      </h3>
                    </div>

                    {/* Arrow */}
                    <div className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#F15A24] text-white transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================= */}
                  <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
                    <div>
                      {/* Category */}
                      <div className="mb-7 flex items-center gap-3">
                        <span className="h-px w-10 bg-[#F15A24]" />

                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#6B7280]">
                          {product.number} / Product
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-3xl font-bold tracking-[-0.03em] text-[#111111] sm:text-4xl lg:text-5xl">
                        {product.name}
                      </h3>

                      {/* Description */}
                      <p className="mt-6 max-w-xl text-base leading-7 text-[#6B7280]">
                        {product.description}
                      </p>

                      {/* Features */}
                      <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        {product.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-3"
                          >
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F15A24]/10">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#F15A24]" />
                            </span>

                            <span className="text-sm font-semibold text-[#374151]">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-10 border-t border-black/10 pt-6">
                      <Link
                        href={product.href}
                        className="group/link inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.15em] text-[#111111]"
                      >
                        Explore {product.name}

                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/15 transition-all duration-300 group-hover/link:border-[#F15A24] group-hover/link:bg-[#F15A24] group-hover/link:text-white">
                          <ArrowUpRight size={16} />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}
        <Reveal>
          <div className="mt-16 flex flex-col justify-between gap-6 border-t border-black/10 pt-8 sm:flex-row sm:items-center">
            <div>
              <p className="text-lg font-semibold tracking-tight text-[#111111]">
                Need the right equipment for your production?
              </p>

              <p className="mt-1 text-sm text-[#6B7280]">
                Speak with our team about your industrial requirements.
              </p>
            </div>

            <Link
              href="/contact"
              className="group flex items-center gap-3 rounded-full bg-[#F15A24] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#D94716]"
            >
              Talk to an Expert

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

