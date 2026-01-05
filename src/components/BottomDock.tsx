import Link from "next/link";
import { Home, Scissors, ImageIcon, MapPin, MessageCircle } from "lucide-react";
import siteContent from "../data/site-content.json";

const { brand } = siteContent;

function waLink(msg: string) {
  return `https://wa.me/${brand.phoneE164}?text=${encodeURIComponent(msg)}`;
}

export default function BottomDock() {
  return (
    <nav className="fixed bottom-3 left-1/2 z-50 w-[min(520px,calc(100%-24px))] -translate-x-1/2 md:hidden">
      <div className="rounded-2xl border border-slate-200 bg-white/85 p-2 shadow-lg backdrop-blur">
        <div className="grid grid-cols-5 text-xs text-slate-600">
          <Link className="flex flex-col items-center gap-1 py-2" href="/">
            <Home className="h-5 w-5" />
            Inicio
          </Link>
          <Link className="flex flex-col items-center gap-1 py-2" href="/servicios">
            <Scissors className="h-5 w-5" />
            Servicios
          </Link>
          <Link className="flex flex-col items-center gap-1 py-2" href="/galeria">
            <ImageIcon className="h-5 w-5" />
            Galería
          </Link>
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
          <Link className="flex flex-col items-center gap-1 py-2" href="/contacto">
            <MapPin className="h-5 w-5" />
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
}
