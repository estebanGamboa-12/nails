"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star, Instagram } from "lucide-react";
import siteContent from "../data/site-content.json";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import AnimatedSection from "../components/AnimatedSection";
import Marquee from "../components/Marquee";
import BottomDock from "../components/BottomDock";

const { brand, hero, stats, services, steps, testimonials, gallery } = siteContent;

function waLink(msg: string) {
  return `https://wa.me/${brand.phoneE164}?text=${encodeURIComponent(msg)}`;
}

const glowVariants = {
  animate: {
    y: [0, -12, 0],
    x: [0, 10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function Page() {
  return (
    <main className="min-h-screen">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-slate-200/70">
        <div className="absolute inset-0 gradient-grid opacity-90" />
        <motion.div
          variants={glowVariants}
          animate="animate"
          className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-[rgba(216,155,160,0.35)] blur-3xl"
        />
        <motion.div
          variants={glowVariants}
          animate="animate"
          className="absolute right-10 top-32 h-40 w-40 rounded-full bg-[rgba(0,0,0,0.08)] blur-3xl"
        />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 md:grid-cols-[1.1fr,0.9fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-[0.32em] text-slate-500"
            >
              {hero.eyebrow}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-4 text-4xl leading-tight md:text-6xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {hero.title} <br />
              <span className="text-slate-800">{hero.highlight}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg text-slate-600"
            >
              {hero.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <a
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-200/40 transition hover:-translate-y-0.5"
                style={{ backgroundColor: "rgb(var(--brand))" }}
                href={waLink("Hola! Quiero reservar cita. Mi disponibilidad es: ___")}
                target="_blank"
                rel="noreferrer"
              >
                {hero.ctaPrimary} <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:shadow"
                href="/servicios"
              >
                {hero.ctaSecondary}
              </Link>
            </motion.div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-600">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-slate-900">{stat.value}</span>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="glass-panel rounded-[32px] p-6 shadow-xl">
              <div className="rounded-3xl border border-slate-200 bg-white/90 p-6">
                <div className="text-sm text-slate-500">{brand.handle}</div>
                <div
                  className="mt-3 text-3xl"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Portfolio en movimiento.
                </div>
                <div className="mt-6 space-y-3 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    Transiciones fluidas en cada sección.
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    Galería infinita con auto-scroll.
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    CTA rápido directo a WhatsApp.
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 h-20 w-20 rounded-full bg-[rgba(216,155,160,0.4)] blur-2xl" />
          </motion.div>
        </div>
      </section>

      <AnimatedSection className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Servicios icónicos
            </h2>
            <p className="mt-2 text-slate-600">
              Cada servicio está pensado para destacar tu estilo con precisión.
            </p>
          </div>
          <Link
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:shadow"
            href="/servicios"
          >
            Explorar catálogo
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(15,23,42,0.08)" }}
            >
              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold">{service.title}</div>
                <span className="rounded-full bg-rose-100 px-3 py-1 text-xs text-rose-700">
                  {service.tag}
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="border-y border-slate-200/70 bg-white/70 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
                {gallery.title}
              </h2>
              <p className="mt-2 text-slate-600">{gallery.subtitle}</p>
            </div>
            <a
              className="hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-white shadow-sm"
              style={{ backgroundColor: "rgb(var(--brand))" }}
              href={brand.instagram}
              target="_blank"
              rel="noreferrer"
            >
              Ver Instagram <Instagram className="h-4 w-4" />
            </a>
          </div>

          <div className="marquee-mask mt-8">
            <Marquee />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Ritual creativo en 3 pasos
            </h2>
            <p className="text-slate-600">
              Desde la inspiración hasta el resultado final: todo fluye sin fricciones.
            </p>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  className="glass-panel rounded-3xl p-5"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-sm uppercase tracking-[0.2em] text-rose-500">
                    Paso {index + 1}
                  </div>
                  <div className="mt-2 text-lg font-semibold">{step.title}</div>
                  <div className="mt-1 text-sm text-slate-600">{step.description}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm uppercase tracking-[0.2em] text-slate-500">Clientes felices</div>
            <div className="mt-4 space-y-4">
              {testimonials.map((item, index) => (
                <motion.div
                  key={item.name}
                  className="rounded-3xl border border-slate-200 bg-white/90 p-4"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold">{item.name}</div>
                    <div className="flex gap-0.5 text-rose-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-3 w-3" />
                      ))}
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">“{item.quote}”</p>
                  <div className="mt-2 text-xs text-slate-500">{item.service}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-lg">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
                Lista para tu próximo cambio
              </h2>
              <p className="mt-2 text-slate-600">
                {brand.address} · {brand.phonePretty}
              </p>
            </div>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg"
              style={{ backgroundColor: "rgb(var(--brand))" }}
              href={waLink("Hola! Quiero reservar mi próxima cita.")}
              target="_blank"
              rel="noreferrer"
            >
              Reservar ahora <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </AnimatedSection>

      <SiteFooter />
      <BottomDock />
      <div className="h-24 md:hidden" />
    </main>
  );
}
