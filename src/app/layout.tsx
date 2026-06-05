import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-ubuntu",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Inishowen Trails — Ireland's best-kept secret",
  description:
    "80km of traffic-free walking and cycling trails across the Inishowen peninsula, County Donegal, Ireland.",
  openGraph: {
    title: "Inishowen Trails",
    description: "80km of traffic-free trails across Inishowen, County Donegal.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ubuntu.variable}>
      <body>
        <Nav />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
