"use client";

import { motion } from "framer-motion";
import siteContent from "../data/site-content.json";

const { gallery } = siteContent;

const CARD_WIDTH = 256;
const CARD_GAP = 16;

export default function Marquee() {
  const images = [...gallery.images, ...gallery.images];
  const travel = gallery.images.length * (CARD_WIDTH + CARD_GAP);

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex w-max gap-4 py-2"
        animate={{ x: [0, -travel] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 26,
          ease: "linear"
        }}
      >
        {images.map((img, index) => (
          <div
            key={`${img.src}-${index}`}
            className="relative h-48 w-64 shrink-0 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            {img.tag ? (
              <div className="absolute bottom-3 left-3 rounded-full bg-white/80 px-3 py-1 text-xs text-slate-700 shadow-sm">
                {img.tag}
              </div>
            ) : null}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
