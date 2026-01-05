import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import siteContent from "../data/site-content.json";

const { brand, nav } = siteContent;

function waLink(msg: string) {
  return `https://wa.me/${brand.phoneE164}?text=${encodeURIComponent(msg)}`;
}

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <div className="leading-tight">
            <div
              className="text-2xl md:text-3xl"
              style={{ fontFamily: "var(--font-script)" }}
            >
              {brand.name}
            </div>
            <div className="text-xs text-slate-500 -mt-1">{brand.subtitle}</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-slate-900">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm hover:shadow transition"
            href={waLink("Hola! Quiero reservar cita. ¿Tenéis hueco esta semana?")}
            target="_blank"
            rel="noreferrer"
          >
            <Phone className="h-4 w-4" />
            {brand.phonePretty}
          </a>

          <a
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white shadow-sm hover:shadow transition"
            style={{ backgroundColor: "rgb(var(--brand))" }}
            href={waLink("Hola! Quiero reservar cita. ¿Tenéis hueco esta semana?")}
            target="_blank"
            rel="noreferrer"
          >
            Reservar cita <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
