"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <input
          required
          type="text"
          placeholder="Your Name"
          className="w-full rounded-2xl border border-black/10 bg-white px-5 py-4 outline-none transition focus:border-[#f15a24]"
        />

        <input
          required
          type="email"
          placeholder="Email Address"
          className="w-full rounded-2xl border border-black/10 bg-white px-5 py-4 outline-none transition focus:border-[#f15a24]"
        />
      </div>

      <input
        required
        type="tel"
        placeholder="Phone Number"
        className="w-full rounded-2xl border border-black/10 bg-white px-5 py-4 outline-none transition focus:border-[#f15a24]"
      />

      <input
        type="text"
        placeholder="Company"
        className="w-full rounded-2xl border border-black/10 bg-white px-5 py-4 outline-none transition focus:border-[#f15a24]"
      />

      <select className="w-full rounded-2xl border border-black/10 bg-white px-5 py-4 outline-none">
        <option>Product / Solution</option>
        <option>Hot Runner Systems</option>
        <option>Temperature Controllers</option>
        <option>Industrial Robots</option>
        <option>Auxiliary Equipment</option>
        <option>Other</option>
      </select>

      <textarea
        required
        rows="6"
        placeholder="Tell us about your requirement..."
        className="w-full resize-none rounded-2xl border border-black/10 bg-white px-5 py-4 outline-none transition focus:border-[#f15a24]"
      />

      <button
        type="submit"
        className="rounded-full bg-[#f15a24] px-7 py-4 font-semibold text-white transition hover:bg-[#d94716]"
      >
        Send Enquiry
      </button>

      {submitted && (
        <p className="rounded-xl bg-green-50 p-4 text-sm text-green-700">
          Thank you. Your enquiry has been received.
        </p>
      )}
    </form>
  );
}