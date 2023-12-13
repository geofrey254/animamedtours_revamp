import Image from "next/image";
import {
  Navbar,
  Hero,
  Jumbotron,
  Us,
  Why,
  CTA,
  Social,
  About_top,
  Partner,
  Activities,
} from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Jumbotron />
      <Us />
      <Why />
      <CTA />
      <Social />
    </main>
  );
}
