
"use client";

import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      {/* =========================================================
          STICKY NAVBAR
      ========================================================= */}
      <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8 lg:px-12">
          <nav className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              onClick={closeMenu}
              className="text-xl font-bold tracking-tight text-black"
            >
              {siteConfig.company.shortName}
              <span className="text-[#f15a24]">.</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 lg:flex">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group relative text-sm font-medium text-black/65 transition-colors duration-200 hover:text-black"
                >
                  {item.name}

                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#f15a24] transition-all duration-200 group-hover:w-full" />
                </Link>
              ))}

              {/* Contact */}
              <Link
                href="/contact"
                className="group flex items-center gap-2 rounded-full bg-[#f15a24] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#d94716]"
              >
                Contact

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-black/10 text-black transition-colors hover:bg-black/5 lg:hidden"
            >
              <Menu size={21} />
            </button>
          </nav>
        </div>
      </header>

      {/* =========================================================
          MOBILE FULL SCREEN DRAWER
      ========================================================= */}
      <AnimatePresence>
        {open && (
          <>
            {/* Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMenu}
              className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm lg:hidden"
            />

            {/* Full Screen Drawer */}
            <motion.div
              initial={{
                y: "100%",
              }}
              animate={{
                y: 0,
              }}
              exit={{
                y: "100%",
              }}
              transition={{
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="fixed inset-0 z-[70] flex min-h-screen flex-col bg-white text-black lg:hidden"
            >
              {/* Drawer Header */}
              <div className="flex h-16 shrink-0 items-center justify-between border-b border-black/10 px-4 sm:px-8">
                {/* Logo */}
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="text-xl font-bold tracking-tight"
                >
                  {siteConfig.company.shortName}
                  <span className="text-[#f15a24]">.</span>
                </Link>

                {/* Close Button */}
                <button
                  onClick={closeMenu}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 transition-colors hover:bg-black/5"
                >
                  <X size={21} />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex flex-1 flex-col justify-between overflow-y-auto px-6 py-8 sm:px-10">
                {/* Navigation */}
                <div className="flex flex-col">
                  {siteConfig.navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{
                        opacity: 0,
                        x: -30,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: 0.08 * index + 0.15,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="group flex items-center justify-between border-b border-black/10 py-5"
                      >
                        <span className="text-3xl font-medium tracking-tight transition-colors duration-200 group-hover:text-[#f15a24] sm:text-4xl">
                          {item.name}
                        </span>

                        <ArrowUpRight
                          size={24}
                          className="text-black/25 transition-all duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#f15a24]"
                        />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom Section */}
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
                    duration: 0.5,
                    delay: 0.45,
                  }}
                  className="pt-10"
                >
                  {/* Contact */}
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="group flex w-full items-center justify-between rounded-full bg-[#f15a24] px-6 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-[#d94716]"
                  >
                    <span>Talk to an Expert</span>

                    <ArrowUpRight
                      size={20}
                      className="transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </Link>

                  {/* Footer */}
                  <div className="mt-6 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-black/30">
                    <span>Industrial Technology</span>

                    <span className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#f15a24]" />
                      {siteConfig.company.shortName}
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
