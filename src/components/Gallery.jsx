import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { photos } from "../data";

const cats = ["All", ...new Set(photos.map((p) => p.category))];

export default function Gallery() {
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState(null);
  const list = photos.filter((p) => cat === "All" || p.category === cat);

  useEffect(() => {
    if (open === null) return;
    const k = (e) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((o) => (o + 1) % list.length);
      if (e.key === "ArrowLeft") setOpen((o) => (o - 1 + list.length) % list.length);
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open, list.length]);

  return (
    <section id="gallery" className="bg-[#0a0a0a] text-white py-24 px-6 md:px-12 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#FFC107] uppercase tracking-[5px] font-bold text-sm">My Work</p>
          <h2 className="text-4xl md:text-6xl font-black mt-4">Featured Gallery</h2>
          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">A selection of moments, faces and stories I've had the privilege to capture.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-6 py-2.5 rounded-full border font-semibold transition ${
                cat === c
                  ? "bg-[#FFC107] border-[#FFC107] text-black"
                  : "border-gray-700 text-gray-300 hover:border-[#FFC107] hover:text-[#FFC107]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
          {list.map((p, n) => (
            <button key={p.src} onClick={() => setOpen(n)} className="relative block w-full mb-5 break-inside-avoid overflow-hidden rounded-2xl group border border-gray-800 hover:border-[#FFC107] transition">
              <img src={p.src} alt={p.title} loading="lazy" className="w-full transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-5 text-left">
                <div>
                  <p className="text-[#FFC107] text-xs uppercase tracking-widest">{p.category}</p>
                  <h3 className="text-xl font-bold">{p.title}</h3>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && list[open] && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(null)} className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4">
            <button className="absolute top-5 right-6 text-4xl text-white hover:text-[#FFC107]" aria-label="Close">×</button>
            <button onClick={(e) => { e.stopPropagation(); setOpen((open - 1 + list.length) % list.length); }} className="absolute left-4 text-5xl text-white/70 hover:text-[#FFC107]" aria-label="Previous">‹</button>
            <img onClick={(e) => e.stopPropagation()} src={list[open].src} alt={list[open].title} className="max-h-[88vh] max-w-full rounded-xl object-contain" />
            <button onClick={(e) => { e.stopPropagation(); setOpen((open + 1) % list.length); }} className="absolute right-4 text-5xl text-white/70 hover:text-[#FFC107]" aria-label="Next">›</button>
            <p className="absolute bottom-5 text-white/80 font-semibold">{list[open].title}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}