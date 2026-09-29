import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Button({
  children,
  href = "#",
  variant = "primary",
  className = "",
}) {
  const styles =
    variant === "primary"
      ? "bg-[#f15a24] text-white hover:bg-[#d94716]"
      : "border border-black/20 text-black hover:bg-black hover:text-white";

  return (
    <Link
      href={href}
      className={`
        group inline-flex items-center gap-3
        rounded-full px-6 py-3.5
        text-sm font-semibold
        transition-all duration-300
        ${styles}
        ${className}
      `}
    >
      {children}

      <ArrowUpRight
        size={17}
        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </Link>
  );
}