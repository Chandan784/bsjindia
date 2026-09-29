"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{
            backgroundImage:
              "url('/images/hero/industrial.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 pb-16 pt-40 sm:px-8 lg:px-12 lg:pb-24">
        <div className="max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#f15a24]"
          >
            Industrial Technology • Automation • Engineering
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-[100px]"
          >
            Engineering
            <br />
            <span className="text-[#f15a24]">what's next.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 max-w-xl text-base leading-7 text-white/65 sm:text-lg"
          >
            {siteConfig.company.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              href="/products"
              className="group flex items-center gap-3 rounded-full bg-[#f15a24] px-7 py-4 font-semibold"
            >
              Explore Products
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-white/30 px-7 py-4 font-semibold transition hover:bg-white hover:text-black"
            >
              Talk to an Expert
            </Link>
          </motion.div>
        </div>

        <div className="mt-20 flex items-center gap-3 text-sm text-white/50">
          <ArrowDown size={17} />
          Scroll to explore
        </div>
      </div>
    </section>
  );
}