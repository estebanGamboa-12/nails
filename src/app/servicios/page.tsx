"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import siteContent from "../../data/site-content.json";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import BottomDock from "../../components/BottomDock";
import AnimatedSection from "../../components/AnimatedSection";

const { brand, services, prices, steps } = siteContent;

function waLink(msg: string) {
  return `https://wa.me/${brand.phoneE164}?text=${encodeURIComponent(msg)}`;
}

export default function ServiciosPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [clientName, setClientName] = useState("");
  const [availability, setAvailability] = useState("");
  const [notes, setNotes] = useState("");

  const canSubmit = selectedServices.length > 0;

  const selectionLabel = useMemo(() => {
    if (selectedServices.length === 0) {
      return "Elige al menos un servicio";
    }
    return selectedServices.join(", ");
  }, [selectedServices]);

  const handleToggleService = (title: string) => {
    setSelectedServices((prev) =>
      prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title]
    );
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSubmit) {
      return;
    }
    const message = [
      "Hola! Quiero reservar.",
      `Servicios: ${selectedServices.join(", ")}.`,
      clientName ? `Nombre: ${clientName}.` : null,
      availability ? `Disponibilidad: ${availability}.` : null,
      notes ? `Notas: ${notes}.` : null
    ]
      .filter(Boolean)
      .join(" ");
    window.open(waLink(message), "_blank");
  };

  return (
    <main className="min-h-screen">
      <SiteHeader />

      <section className="border-b border-slate-200/70 bg-white/70">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-[1.1fr,0.9fr]">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Servicios diseñados para brillar
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-lg text-slate-600"
            >
              Elige tu vibe: desde trenzas creativas hasta uñas con acabado editorial.
            </motion.p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg"
                style={{ backgroundColor: "rgb(var(--brand))" }}
                href={waLink("Hola! Me interesa un servicio. ¿Podemos agendar?")}
                target="_blank"
                rel="noreferrer"
              >
                Reservar cita <ArrowRight className="h-4 w-4" />
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700"
                href={waLink("Hola! Quiero precios y disponibilidad.")}
                target="_blank"
                rel="noreferrer"
              >
                Consultar <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="glass-panel rounded-[32px] p-6 shadow-xl">
            <div className="rounded-3xl border border-slate-200 bg-white/90 p-6">
              <div className="text-sm uppercase tracking-[0.2em] text-slate-500">Cómo funciona</div>
              <div className="mt-6 space-y-4">
                {steps.map((step, index) => (
                  <div key={step.title} className="rounded-3xl border border-slate-200 bg-white px-4 py-3">
                    <div className="text-xs text-rose-500">Paso {index + 1}</div>
                    <div className="font-semibold">{step.title}</div>
                    <div className="text-sm text-slate-600">{step.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl md:text-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
          Catálogo completo
        </h2>
        <p className="mt-2 text-slate-600">
          Todo está pensado para verse espectacular en persona y en cámara.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
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

      <AnimatedSection className="border-t border-slate-200/70 bg-white/60 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.05fr,0.95fr]">
          <div>
            <h2 className="text-3xl md:text-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Reserva por WhatsApp
            </h2>
            <p className="mt-3 text-slate-600">
              Selecciona todos los servicios que quieras y envía tu solicitud en segundos.
            </p>
            <div className="mt-6 rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Servicios seleccionados
              </div>
              <div className="mt-3 text-lg font-semibold text-slate-800">{selectionLabel}</div>
              <p className="mt-2 text-sm text-slate-500">
                Puedes combinar varios tratamientos en una sola cita.
              </p>
            </div>
          </div>

          <form
            className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm"
            onSubmit={handleSubmit}
          >
            <div className="text-sm uppercase tracking-[0.2em] text-slate-500">
              Completa tu solicitud
            </div>
            <div className="mt-6 space-y-4">
              <div className="space-y-3">
                <div className="text-sm font-semibold text-slate-700">Selecciona servicios</div>
                <div className="grid gap-3">
                  {services.map((service) => (
                    <label
                      key={service.title}
                      className="flex cursor-pointer items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm transition hover:border-rose-200"
                    >
                      <input
                        type="checkbox"
                        className="mt-1 h-4 w-4 accent-rose-500"
                        checked={selectedServices.includes(service.title)}
                        onChange={() => handleToggleService(service.title)}
                      />
                      <span>
                        <span className="font-semibold">{service.title}</span>
                        <span className="mt-1 block text-xs text-slate-500">
                          {service.description}
                        </span>
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-700" htmlFor="clientName">
                  Nombre (opcional)
                </label>
                <input
                  id="clientName"
                  type="text"
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-rose-300 focus:outline-none"
                  placeholder="Tu nombre"
                  value={clientName}
                  onChange={(event) => setClientName(event.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-700" htmlFor="availability">
                  Disponibilidad
                </label>
                <input
                  id="availability"
                  type="text"
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-rose-300 focus:outline-none"
                  placeholder="Ej. Viernes por la tarde"
                  value={availability}
                  onChange={(event) => setAvailability(event.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-700" htmlFor="notes">
                  Notas adicionales
                </label>
                <textarea
                  id="notes"
                  className="mt-2 min-h-[120px] w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-rose-300 focus:outline-none"
                  placeholder="Comparte detalles, referencias o dudas"
                  value={notes}
                  onChange={(event) => setNotes(event.target.value)}
                />
              </div>
            </div>
            <button
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg transition disabled:cursor-not-allowed disabled:opacity-60"
              style={{ backgroundColor: "rgb(var(--brand))" }}
              type="submit"
              disabled={!canSubmit}
            >
              Enviar por WhatsApp <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </AnimatedSection>

      <AnimatedSection className="border-t border-slate-200/70 bg-white/60 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
            Precios orientativos
          </h2>
          <p className="mt-2 text-slate-600">
            Transparencia total, puedes ajustar cada detalle según el servicio.
          </p>
          <div className="mt-8 rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="divide-y divide-slate-200">
              {prices.map((price) => (
                <div key={price.name} className="flex items-center justify-between py-4">
                  <div className="text-slate-800">{price.name}</div>
                  <div className="text-sm font-semibold text-slate-700">{price.from}</div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm"
                style={{ backgroundColor: "rgb(var(--brand))" }}
                href={waLink("Hola! Quiero reservar. Servicio: ___. Día/hora: ___.")}
                target="_blank"
                rel="noreferrer"
              >
                Reservar cita <ArrowRight className="h-4 w-4" />
              </a>
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
