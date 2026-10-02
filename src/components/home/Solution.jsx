"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import Reveal from "@/components/common/Reveal";

const solutions = [
  {
    number: "01",
    title: "Electronics",
    image:
      "https://images.pexels.com/photos/9242896/pexels-photo-9242896.jpeg",
    description:
      "Hot runner systems for electronics manufacturing, supporting precision components such as mobile phone cases, frames, holders, and other high-quality molded parts.",
  },
  {
    number: "02",
    title: "Automotive",
    image:
      "https://images.pexels.com/photos/11157437/pexels-photo-11157437.jpeg",
    description:
      "Advanced hot runner solutions designed for automotive injection molding, helping manufacturers achieve consistent quality, efficient material flow, and reliable production.",
  },
  {
    number: "03",
    title: "Medical",
    image:
      "https://images.pexels.com/photos/6129679/pexels-photo-6129679.jpeg",
    description:
      "Precision molding solutions for medical applications where complex geometries, reduced component weight, accuracy, and consistent production quality are essential.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Solutions() {
  return (
    <section className="relative overflow-hidden bg-[#111111] py-24 text-white lg:py-36">
      <Container>
        {/* =====================================================
            HEADER
        ===================================================== */}
        <Reveal>
          <div className="mb-16 border-b border-white/15 pb-8 lg:mb-20">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              {/* Heading */}
              <div className="max-w-4xl">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F15A24]" />

                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/70">
                    Our Solutions
                  </span>
                </div>

                <h2 className="text-5xl font-bold leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                  Technology built
                  <br />
                  for{" "}
                  <span className="text-[#F15A24]">
                    real industries.
                  </span>
                </h2>
              </div>

              {/* Description */}
              <div className="max-w-sm lg:pb-1">
                <p className="text-base leading-7 text-white/65">
                  Precision-driven hot runner solutions engineered to improve
                  molding quality, production efficiency, and long-term
                  performance across demanding industries.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* =====================================================
            SOLUTION GRID
        ===================================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="grid gap-6 lg:grid-cols-3"
        >
          {solutions.map((solution) => (
            <motion.article
              key={solution.number}
              variants={cardVariants}
              className="group"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#222222]">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Number */}
                <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/30 backdrop-blur-sm">
                  <span className="text-xs font-bold text-white">
                    {solution.number}
                  </span>
                </div>

                {/* Arrow */}
                <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#F15A24] text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                  <ArrowUpRight size={19} />
                </div>

                {/* Image Title */}
                <div className="absolute bottom-5 left-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                    Industry
                  </p>

                  <h3 className="mt-1 text-2xl font-bold tracking-tight text-white">
                    {solution.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="border-b border-white/15 py-7">
                <p className="text-[15px] leading-7 text-white/65">
                  {solution.description}
                </p>

                {/* Bottom Line */}
                <div className="mt-7 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#F15A24] transition-all duration-300 group-hover:w-14" />

                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/50 transition-colors group-hover:text-white">
                    Explore solution
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* =====================================================
            BOTTOM STATEMENT
        ===================================================== */}
        <Reveal>
          <div className="mt-20 flex flex-col justify-between gap-8 border-t border-white/15 pt-8 sm:flex-row sm:items-center">
            <p className="max-w-2xl text-xl font-medium leading-8 tracking-tight text-white/85 sm:text-2xl">
              Engineered to deliver{" "}
              <span className="text-[#F15A24]">
                precision, consistency, and performance
              </span>{" "}
              at every stage of production.
            </p>

            <div className="shrink-0">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                Precision / Performance / Reliability
              </span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

