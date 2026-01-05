import Link from "next/link";
import { Instagram, MapPin, MessageCircle } from "lucide-react";
import siteContent from "../data/site-content.json";

const { brand, nav } = siteContent;

function waLink(msg: string) {
  return `https://wa.me/${brand.phoneE164}?text=${encodeURIComponent(msg)}`;
}

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/70 bg-white/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 md:flex-row md:items-start md:justify-between">
        <div className="space-y-4">
          <div className="text-2xl" style={{ fontFamily: "var(--font-script)" }}>
            {brand.name}
          </div>
          <p className="max-w-xs text-sm text-slate-600">
            Belleza con intención. Diseñamos looks memorables para cada ocasión.
          </p>
          <div className="flex gap-3">
            <a
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700"
              href={waLink("Hola! Quiero reservar cita.")}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700"
              href={brand.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <div className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              Navegación
            </div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-slate-900">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              Visítanos
            </div>
            <div className="mt-3 space-y-2 text-sm text-slate-600">
              <div>{brand.address}</div>
              <a href={brand.maps} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Abrir en Maps
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200/70 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {brand.name}. Diseñado con amor.
      </div>
    </footer>
  );
}
