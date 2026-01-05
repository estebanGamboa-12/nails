import Link from "next/link";
import {
  ArrowRight,
  Phone,
  MapPin,
  Instagram,
  Sparkles,
  Scissors,
  ImageIcon,
  MessageCircle,
  Home,
} from "lucide-react";

const BRAND = {
  name: "Belleza Estilo YM",
  subtitle: "Yelle & Maria",
  handle: "Belleza.Estilo_YM",
  phonePretty: "+34 123 456 789",
  phoneE164: "34123456789", // +34 sin "+"
  instagram: "https://instagram.com/tuusuario",
  maps: "https://maps.google.com/?q=Peluquer%C3%ADa%20Belleza%20Estilo%20YM",
};

function waLink(msg: string) {
  return `https://wa.me/${BRAND.phoneE164}?text=${encodeURIComponent(msg)}`;
}

const CATEGORIES = [
  { title: "Rastas", key: "rastas" },
  { title: "Trenzas", key: "trenzas" },
  { title: "Botox Capilar", key: "botox" },
  { title: "Uñas", key: "unas" },
];

const SERVICES = [
  { title: "Peinados / Trenzas", desc: "Diseños limpios, acabados finos y cuidado del cabello.", icon: Scissors },
  { title: "Rastas", desc: "Montaje, mantenimiento y retoques con look natural.", icon: Sparkles },
  { title: "Botox Capilar", desc: "Brillo, suavidad y control del frizz con tratamiento.", icon: Sparkles },
  { title: "Uñas", desc: "Manicura, gel, diseños minimal y acabados premium.", icon: Sparkles },
];

const PRICES = [
  { name: "Uñas (Gel)", from: "Desde 25€" },
  { name: "Retoque uñas", from: "Desde 20€" },
  { name: "Trenzas", from: "Desde 30€" },
  { name: "Rastas (mantenimiento)", from: "Desde 35€" },
  { name: "Botox capilar", from: "Desde 45€" },
];

export default function Page() {
  return (
    <main id="inicio" className="min-h-screen">
      {/* TOP NAV */}
      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="#inicio" className="flex items-center gap-3">
            <div className="leading-tight">
              <div
                className="text-2xl md:text-3xl"
                style={{ fontFamily: "var(--font-script)" }}
              >
                {BRAND.name}
              </div>
              <div className="text-xs text-slate-500 -mt-1">{BRAND.subtitle}</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <a className="hover:text-slate-900" href="#inicio">Inicio</a>
            <a className="hover:text-slate-900" href="#servicios">Servicios</a>
            <a className="hover:text-slate-900" href="#galeria">Galería</a>
            <a className="hover:text-slate-900" href="#contacto">Contacto</a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              className="hidden md:inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm hover:shadow transition"
              href={waLink("Hola! Quiero reservar cita. ¿Tenéis hueco esta semana?")}
              target="_blank"
              rel="noreferrer"
            >
              <Phone className="h-4 w-4" />
              {BRAND.phonePretty}
            </a>

            <a
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white shadow-sm hover:shadow transition"
              style={{ backgroundColor: `rgb(var(--brand))` }}
              href={waLink("Hola! Quiero reservar cita. ¿Tenéis hueco esta semana?")}
              target="_blank"
              rel="noreferrer"
            >
              Reservar cita <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="soft-hero border-b border-slate-200/60">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Peluquería · Estética · Uñas
              </div>

              <h1
                className="mt-3 text-4xl leading-tight md:text-6xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Peluquería <br />
                <span className="text-slate-800">Yelle &amp; Maria</span>
              </h1>

              <p className="mt-4 text-lg text-slate-600">
                <span className="font-medium text-slate-800">{BRAND.handle}</span> — servicios claros,
                resultados visibles y reserva en 1 clic por WhatsApp.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm hover:shadow transition"
                  style={{ backgroundColor: `rgb(var(--brand))` }}
                  href={waLink("Hola! Quiero reservar cita. Mi disponibilidad es: ___")}
                  target="_blank"
                  rel="noreferrer"
                >
                  Reservar cita <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:shadow transition"
                  href="#servicios"
                >
                  Ver servicios
                </a>
              </div>

              <div className="mt-6 text-xs text-slate-500">
                Respuesta rápida · Precios orientativos · Ubicación y contacto visibles
              </div>
            </div>

            {/* “foto” elegante (sin depender de imágenes) */}
            <div className="relative">
              <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm">
                <div className="rounded-2xl border border-slate-200 bg-[rgba(0,0,0,0.02)] p-6">
                  <div className="text-sm text-slate-500">Tu salón en una portada limpia</div>
                  <div
                    className="mt-2 text-3xl md:text-4xl"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Minimal, premium y directo a la cita.
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {["Acabados finos", "Galería", "Precios claros", "WhatsApp 1 clic"].map((t) => (
                      <div
                        key={t}
                        className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
                      >
                        {t}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <div className="h-2 w-full rounded-full bg-slate-200/70" />
                    <div className="mt-2 h-2 w-4/5 rounded-full bg-slate-200/70" />
                    <div className="mt-2 h-2 w-3/5 rounded-full bg-slate-200/70" />
                  </div>
                </div>
              </div>

              <div
                className="pointer-events-none absolute -right-4 -top-6 h-28 w-28 rounded-full blur-2xl"
                style={{ background: "rgba(216,155,160,.35)" }}
              />
            </div>
          </div>

          {/* CATEGORIES CIRCLES */}
          <div className="mt-12 rounded-3xl border border-slate-200 bg-white/70 p-5 shadow-sm">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {CATEGORIES.map((c) => (
                <a
                  key={c.key}
                  href="#servicios"
                  className="group flex flex-col items-center gap-3 rounded-2xl p-3 hover:bg-white transition"
                >
                  <div className="relative">
                    <div className="h-20 w-20 rounded-full border border-slate-200 bg-white shadow-sm" />
                    <div
                      className="absolute inset-2 rounded-full"
                      style={{
                        background:
                          "radial-gradient(circle at 30% 30%, rgba(216,155,160,.35), rgba(0,0,0,.03))",
                      }}
                    />
                  </div>
                  <div className="text-sm text-slate-700 group-hover:text-slate-900">{c.title}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicios" className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Servicios
            </h2>
            <p className="mt-2 text-slate-600">
              Todo lo esencial, presentado simple y bonito (como en tu referencia).
            </p>
          </div>

          <a
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:shadow transition"
            href={waLink("Hola! Me interesa: ___. ¿Precio y disponibilidad?")}
            target="_blank"
            rel="noreferrer"
          >
            Consultar por WhatsApp <MessageCircle className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200"
                    style={{ background: "rgba(216,155,160,.12)" }}
                  >
                    <Icon className="h-5 w-5" style={{ color: "rgb(var(--brand-ink))" }} />
                  </div>
                  <div>
                    <div className="text-lg font-semibold">{s.title}</div>
                    <div className="mt-1 text-sm text-slate-600">{s.desc}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* GALLERY */}
      <section id="galeria" className="border-y border-slate-200/70 bg-white/50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
                Galería
              </h2>
              <p className="mt-2 text-slate-600">
                Aquí irían tus fotos reales (uñas, trenzas, antes/después).
              </p>
            </div>
            <a
              className="hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-white shadow-sm hover:shadow transition"
              style={{ backgroundColor: `rgb(var(--brand))` }}
              href={BRAND.instagram}
              target="_blank"
              rel="noreferrer"
            >
              Ver Instagram <Instagram className="h-4 w-4" />
            </a>
          </div>

          {/* placeholders elegantes */}
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden"
              >
                <div
                  className="h-full w-full"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 25%, rgba(216,155,160,.28), rgba(0,0,0,.04))",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICES */}
      <section id="precios" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-3xl md:text-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
          Precios orientativos
        </h2>
        <p className="mt-2 text-slate-600">
          Transparente, sin líos. (Puedes ajustar cuando quieras.)
        </p>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="divide-y divide-slate-200">
            {PRICES.map((p) => (
              <div key={p.name} className="flex items-center justify-between py-4">
                <div className="text-slate-800">{p.name}</div>
                <div className="text-sm font-semibold text-slate-700">{p.from}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm hover:shadow transition"
              style={{ backgroundColor: `rgb(var(--brand))` }}
              href={waLink("Hola! Quiero reservar. Servicio: ___. Día/hora: ___.")}
              target="_blank"
              rel="noreferrer"
            >
              Reservar cita <ArrowRight className="h-4 w-4" />
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:shadow transition"
              href="#contacto"
            >
              Ubicación y contacto
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contacto" className="border-t border-slate-200/70 bg-white/50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-3xl md:text-4xl" style={{ fontFamily: "var(--font-playfair)" }}>
            Contacto
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <a
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow transition"
              href={waLink("Hola! Quiero información / reservar cita.")}
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200"
                  style={{ background: "rgba(216,155,160,.12)" }}
                >
                  <Phone className="h-5 w-5" style={{ color: "rgb(var(--brand-ink))" }} />
                </div>
                <div>
                  <div className="font-semibold">WhatsApp</div>
                  <div className="text-sm text-slate-600">{BRAND.phonePretty}</div>
                </div>
              </div>
            </a>

            <a
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow transition"
              href={BRAND.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200"
                  style={{ background: "rgba(216,155,160,.12)" }}
                >
                  <Instagram className="h-5 w-5" style={{ color: "rgb(var(--brand-ink))" }} />
                </div>
                <div>
                  <div className="font-semibold">Instagram</div>
                  <div className="text-sm text-slate-600">@tuusuario</div>
                </div>
              </div>
            </a>

            <a
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow transition"
              href={BRAND.maps}
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200"
                  style={{ background: "rgba(216,155,160,.12)" }}
                >
                  <MapPin className="h-5 w-5" style={{ color: "rgb(var(--brand-ink))" }} />
                </div>
                <div>
                  <div className="font-semibold">Ubicación</div>
                  <div className="text-sm text-slate-600">Abrir en Maps</div>
                </div>
              </div>
            </a>
          </div>

          <footer className="mt-10 text-xs text-slate-500">
            © {new Date().getFullYear()} {BRAND.name}. Diseño minimalista.
          </footer>
        </div>
      </section>

      {/* BOTTOM NAV (móvil tipo app) */}
      <nav className="fixed bottom-3 left-1/2 z-50 w-[min(520px,calc(100%-24px))] -translate-x-1/2 md:hidden">
        <div className="rounded-2xl border border-slate-200 bg-white/85 p-2 shadow-lg backdrop-blur">
          <div className="grid grid-cols-5 text-xs text-slate-600">
            <a className="flex flex-col items-center gap-1 py-2" href="#inicio">
              <Home className="h-5 w-5" />
              Inicio
            </a>
            <a className="flex flex-col items-center gap-1 py-2" href="#servicios">
              <Scissors className="h-5 w-5" />
              Servicios
            </a>
            <a className="flex flex-col items-center gap-1 py-2" href="#galeria">
              <ImageIcon className="h-5 w-5" />
              Galería
            </a>
            <a
              className="flex flex-col items-center gap-1 py-2 font-semibold"
              style={{ color: "rgb(var(--brand-ink))" }}
              href={waLink("Hola! Quiero reservar cita.")}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="h-5 w-5" />
              Cita
            </a>
            <a className="flex flex-col items-center gap-1 py-2" href="#contacto">
              <MapPin className="h-5 w-5" />
              Contacto
            </a>
          </div>
        </div>
      </nav>

      {/* espacio para que el bottom nav no tape contenido */}
      <div className="h-24 md:hidden" />
    </main>
  );
}
