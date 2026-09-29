"use client";

import Link from "next/link";
import { Menu, ArrowUpRight } from "lucide-react";
import { useState } from "react";

import { siteConfig } from "@/config/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="mx-auto max-w-[1400px] px-4 pt-4 sm:px-8 lg:px-12">
        <nav className="flex items-center justify-between rounded-full border border-white/20 bg-black/80 px-5 py-3 text-white backdrop-blur-xl">
          <Link href="/" className="text-xl font-bold">
            {siteConfig.company.shortName}
            <span className="text-[#f15a24]">.</span>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-white/75 transition hover:text-white"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-full bg-[#f15a24] px-5 py-2.5 text-sm font-semibold transition hover:bg-[#d94716]"
            >
              Contact
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-full p-2 lg:hidden"
            aria-label="Toggle menu"
          >
            <Menu size={22} />
          </button>
        </nav>

        {open && (
          <div className="mt-2 rounded-3xl bg-black p-6 text-white lg:hidden">
            <div className="flex flex-col gap-5">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-lg"
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="rounded-full bg-[#f15a24] px-5 py-3 text-center font-semibold"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}