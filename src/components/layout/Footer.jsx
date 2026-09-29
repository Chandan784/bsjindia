import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="text-3xl font-bold">
              {siteConfig.company.shortName}
              <span className="text-[#f15a24]">.</span>
            </Link>

            <p className="mt-6 max-w-md leading-7 text-white/55">
              {siteConfig.company.description}
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#f15a24] px-6 py-3 font-semibold"
            >
              Start a Conversation
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <div>
            <h3 className="mb-5 font-semibold">Navigation</h3>

            <div className="flex flex-col gap-3 text-white/55">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="transition hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 font-semibold">Contact</h3>

            <div className="space-y-3 text-white/55">
              <p>{siteConfig.contact.address}</p>
              <p>{siteConfig.contact.phone}</p>
              <p>{siteConfig.contact.email}</p>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-6 text-sm text-white/40">
          © {new Date().getFullYear()} {siteConfig.company.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}