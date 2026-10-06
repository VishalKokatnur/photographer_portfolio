import { site, profilePhoto } from "../data";

export default function About() {
  return (
    <section id="about" className="bg-[#FFC107] pt-24 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans scroll-mt-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        {/* Hanging photo badge, like a camera strap */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black -translate-x-1/2 shadow-inner z-0"></div>
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 -rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800">
                <img src={profilePhoto} alt={site.fullName} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-black mt-8 md:mt-0 relative z-20">
          <p className="text-black font-bold uppercase tracking-[4px] mb-3">About Me</p>
          <h2 className="text-4xl md:text-6xl font-black text-black mb-6">Hello, I'm {site.firstName}</h2>
          <div className="space-y-5 text-base md:text-lg leading-relaxed font-medium max-w-3xl">
            {site.about.map((t, n) => <p key={n}>{t}</p>)}
          </div>
          <div className="flex flex-wrap gap-6 mt-10">
            {site.stats.map((s) => (
              <div key={s.label} className="bg-white/20 backdrop-blur-md rounded-2xl px-8 py-5 hover:scale-110 transition text-center">
                <div className="text-3xl md:text-4xl font-black text-black">{s.value}</div>
                <div className="text-sm font-semibold uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}
