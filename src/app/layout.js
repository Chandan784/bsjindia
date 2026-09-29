import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "BSJ India | Industrial Solutions",
  description:
    "Industrial automation, plastics and manufacturing solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#f7f7f5] text-black antialiased">
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}