"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import siteContent from "../../data/site-content.json";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import BottomDock from "../../components/BottomDock";
import AnimatedSection from "../../components/AnimatedSection";
import Marquee from "../../components/Marquee";

const { brand, gallery } = siteContent;

export default function GaleriaPage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />

      <section className="border-b border-slate-200/70 bg-white/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-16 md:flex-row md:items-end md:justify-between">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {gallery.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-lg text-slate-600"
            >
              {gallery.subtitle}
            </motion.p>
          </div>
          <a
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm"
            style={{ backgroundColor: "rgb(var(--brand))" }}
            href={brand.instagram}
            target="_blank"
            rel="noreferrer"
          >
            Ver Instagram <Instagram className="h-4 w-4" />
          </a>
        </div>
      </section>

      <AnimatedSection className="border-b border-slate-200/70 bg-white/60 py-10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="marquee-mask">
            <Marquee />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.images.map((image, index) => (
            <motion.div
              key={`${image.src}-${index}`}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <img src={image.src} alt={image.alt} className="h-56 w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="absolute bottom-3 left-3 text-sm text-white opacity-0 transition group-hover:opacity-100">
                {image.tag ?? "Look premium"}
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      <SiteFooter />
      <BottomDock />
      <div className="h-24 md:hidden" />
    </main>
  );
}
