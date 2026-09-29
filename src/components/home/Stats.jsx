"use client";

import { motion } from "framer-motion";

import Container from "@/components/common/Container";

const stats = [
  {
    number: "25+",
    label: "Years of Experience",
  },
  {
    number: "500+",
    label: "Installations",
  },
  {
    number: "30+",
    label: "Industrial Applications",
  },
  {
    number: "15+",
    label: "Markets Served",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#f15a24] py-20 text-white">
      <Container>
        <div className="grid grid-cols-2 gap-y-12 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl font-bold sm:text-6xl">
                {stat.number}
              </div>

              <p className="mt-3 text-sm text-white/75">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}