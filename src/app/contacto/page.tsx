"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import siteContent from "../../data/site-content.json";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import BottomDock from "../../components/BottomDock";
import AnimatedSection from "../../components/AnimatedSection";

const { brand, contact } = siteContent;

function waLink(msg: string) {
  return `https://wa.me/${brand.phoneE164}?text=${encodeURIComponent(msg)}`;
}

export default function ContactoPage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />

      <section className="border-b border-slate-200/70 bg-white/70">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Contáctanos y reserva al instante
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-lg text-slate-600"
          >
            Estamos listas para crear tu próximo look. Escríbenos, llama o visítanos.
          </motion.p>
        </div>
      </section>

      <AnimatedSection className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <a
            className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1"
            href={waLink("Hola! Quiero reservar una cita.")}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle className="h-6 w-6 text-rose-500" />
            <div className="mt-4 text-lg font-semibold">WhatsApp directo</div>
            <div className="mt-2 text-sm text-slate-600">{brand.phonePretty}</div>
          </a>
          <a
            className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1"
            href={`tel:+${brand.phoneE164}`}
          >
            <Phone className="h-6 w-6 text-rose-500" />
            <div className="mt-4 text-lg font-semibold">Llámanos</div>
            <div className="mt-2 text-sm text-slate-600">{brand.phonePretty}</div>
          </a>
          <a
            className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1"
            href={`mailto:${brand.email}`}
          >
            <Mail className="h-6 w-6 text-rose-500" />
            <div className="mt-4 text-lg font-semibold">Email</div>
            <div className="mt-2 text-sm text-slate-600">{brand.email}</div>
          </a>
        </div>
      </AnimatedSection>

      <AnimatedSection className="border-t border-slate-200/70 bg-white/60 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-[1fr,1fr]">
          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm uppercase tracking-[0.2em] text-slate-500">Horario</div>
            <div className="mt-4 space-y-3">
              {contact.hours.map((hour) => (
                <div key={hour.day} className="flex items-center justify-between text-sm text-slate-600">
                  <span>{hour.day}</span>
                  <span className="font-semibold text-slate-800">{hour.time}</span>
                </div>
              ))}
            </div>
            <a
              className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-white"
              style={{ backgroundColor: "rgb(var(--brand))" }}
              href={waLink("Hola! Quiero reservar.")}
              target="_blank"
              rel="noreferrer"
            >
              {contact.cta} <MessageCircle className="h-4 w-4" />
            </a>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-slate-500">
              <MapPin className="h-4 w-4" />
              Ubicación
            </div>
            <div className="mt-4 text-sm text-slate-600">{brand.address}</div>
            <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200">
              <iframe
                title="Mapa"
                src={brand.mapsEmbed}
                className="h-60 w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      <SiteFooter />
      <BottomDock />
      <div className="h-24 md:hidden" />
    </main>
  );
}
