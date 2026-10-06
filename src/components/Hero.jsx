import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { site, heroImage } from "../data";

export default function Hero() {
  useEffect(() => { AOS.init({ duration: 1000, once: true }); }, []);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-[#050505] scroll-mt-24">
      <motion.img
        src={heroImage}
        alt={site.fullName}
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover object-[center_45%] z-10"
      />
      <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/85 via-black/40 to-transparent"></div>
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>

      <div className="relative z-30 flex items-center h-full px-6 md:px-16">
        <div className="max-w-2xl">
          <p className="mb-4 text-[#FFC107] font-semibold tracking-[4px] uppercase text-sm">Photography Portfolio</p>
          <h1 data-aos="fade-up" className="text-white text-4xl md:text-7xl font-bold leading-tight">
            Hi, I'm {site.fullName}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC107] to-orange-400">{site.role}</span>
          </h1>
          <p data-aos="fade-up" data-aos-delay="200" className="mt-6 text-white/90 text-lg md:text-xl leading-relaxed">{site.intro}</p>
          <div data-aos="fade-up" data-aos-delay="400" className="flex flex-wrap gap-4 mt-8">
            <a href="#gallery" className="px-7 py-3 rounded-full bg-[#FFC107] text-black font-semibold hover:bg-[#FFD54F] transition">View Gallery</a>
            <a href="#contact" className="px-7 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition">Book a Shoot</a>
            <a href={site.instagram} target="_blank" rel="noreferrer" className="px-7 py-3 rounded-full border border-white/40 text-white hover:bg-white hover:text-black transition">Instagram</a>
          </div>
        </div>
      </div>
    </section>
  );
}