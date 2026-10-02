"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export default function Hero() {
  const imageUrl =
    "https://images.pexels.com/photos/18471536/pexels-photo-18471536.jpeg";

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">

      {/* =========================================================
          BACKGROUND
      ========================================================= */}
      <div className="absolute inset-0">

        {/* Background Image */}
        <motion.img
          src={imageUrl}
          alt="Industrial technology and engineering"
          initial={{
            opacity: 0,
            scale: 1.12,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            opacity: {
              duration: 1.4,
              ease: "easeOut",
            },
            scale: {
              duration: 2.5,
              ease: [0.16, 1, 0.3, 1],
            },
          }}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Cinematic Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black" />

        {/* Center Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.25)_40%,rgba(0,0,0,0.8)_100%)]" />

        {/* Orange Glow */}
        <motion.div
          animate={{
            opacity: [0.08, 0.18, 0.08],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f15a24]/20 blur-[150px]"
        />
      </div>

      {/* =========================================================
          TOP LINE
      ========================================================= */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 100, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.3,
        }}
        className="absolute left-1/2 top-24 h-px -translate-x-1/2 bg-[#f15a24]"
      />

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1500px] items-center justify-center px-5 py-32 sm:px-8 lg:px-12">

        <div className="flex max-w-6xl flex-col items-center text-center">

          {/* Eyebrow */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#f15a24] sm:text-sm"
          >
            <span className="h-px w-8 bg-[#f15a24]" />

            <span>
              Industrial Technology • Automation • Engineering
            </span>

            <span className="h-px w-8 bg-[#f15a24]" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 60,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.55,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-5xl font-bold leading-[0.9] tracking-[-0.05em] sm:text-7xl md:text-8xl lg:text-[110px]"
          >
            Engineering

            <br />

            <motion.span
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.9,
              }}
              className="relative inline-block text-[#f15a24]"
            >
              what's next.

              {/* Underline */}
              <motion.span
                initial={{
                  width: 0,
                }}
                animate={{
                  width: "100%",
                }}
                transition={{
                  duration: 1,
                  delay: 1.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute -bottom-2 left-0 h-[3px] bg-[#f15a24] sm:-bottom-3"
              />
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1,
            }}
            className="mt-9 max-w-2xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8"
          >
            {siteConfig.company.description}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1.2,
            }}
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row"
          >

            {/* Primary Button */}
            <Link
              href="/products"
              className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-[#f15a24] px-7 py-4 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(241,90,36,0.4)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />

              <span className="relative">
                Explore Products
              </span>

              <ArrowUpRight
                size={18}
                className="relative transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            {/* Secondary Button */}
            <Link
              href="/contact"
              className="group flex items-center gap-3 rounded-full border border-white/30 bg-white/5 px-7 py-4 font-semibold backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black"
            >
              Talk to an Expert

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

          </motion.div>

          {/* Bottom Keywords */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1.45,
            }}
            className="mt-14 flex items-center gap-5 text-[10px] uppercase tracking-[0.25em] text-white/40 sm:gap-8 sm:text-xs"
          >
            <span>Innovation</span>

            <span className="h-1 w-1 rounded-full bg-[#f15a24]" />

            <span>Precision</span>

            <span className="h-1 w-1 rounded-full bg-[#f15a24]" />

            <span>Performance</span>
          </motion.div>

        </div>
      </div>

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================= */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.8,
          duration: 1,
        }}
        className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">
            Scroll
          </span>

          <div className="flex h-9 w-6 items-start justify-center rounded-full border border-white/25 p-1.5">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-1.5 w-1.5 rounded-full bg-[#f15a24]"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* =========================================================
          RIGHT DECORATION
      ========================================================= */}
      <motion.div
        initial={{
          scaleY: 0,
        }}
        animate={{
          scaleY: 1,
        }}
        transition={{
          duration: 1,
          delay: 0.6,
        }}
        className="absolute right-8 top-1/2 hidden h-28 w-px origin-top bg-gradient-to-b from-transparent via-[#f15a24]/70 to-transparent lg:block"
      />

      {/* =========================================================
          LEFT DECORATION
      ========================================================= */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
        }}
        className="absolute bottom-10 left-8 hidden items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/30 lg:flex"
      >
        <ArrowDown size={13} />

        <span>Explore</span>
      </motion.div>

    </section>
  );
}

