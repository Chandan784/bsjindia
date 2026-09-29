"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function Reveal({ children, className = "" }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}