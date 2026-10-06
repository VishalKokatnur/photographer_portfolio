import { site } from "../data";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const contactInfo = { name: site.fullName, email: site.email, phone: site.phone, location: site.location, instagram: site.instagram, whatsapp: site.whatsapp };

const Contact = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* Background Text */}
      <motion.div
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex justify-center items-start overflow-hidden pointer-events-none z-0 pt-16"
      >
        <h1
          className="text-[22vw] leading-[0.75] font-black text-white/10 uppercase tracking-tighter select-none scale-y-[1.5]"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </h1>
      </motion.div>

      {/* Contact Card */}
      <div className="relative z-10 w-full flex justify-end items-end">
        <div
          data-aos="fade-up"
          className="bg-gradient-to-br from-[#FFD54F] via-[#FFC107] to-[#FFA000] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 text-black"
        >
          <p className="text-xs font-bold tracking-[0.25em] mb-5 uppercase opacity-90">
            Contact Me
          </p>

          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            Let's Create Something Beautiful Together
          </h2>

          <p className="text-black/80 max-w-2xl mb-10 leading-relaxed">
            Planning a wedding, portrait session, event or brand shoot? Share
            your date and idea and I'll get back to you within 24 hours.
          </p>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-black/10 border border-black/20 rounded-2xl p-5 backdrop-blur-md">
              <p className="text-black/60 text-sm mb-1">Name</p>
              <h3 className="text-xl font-bold">{contactInfo.name}</h3>
            </div>

            <div className="bg-black/10 border border-black/20 rounded-2xl p-5 backdrop-blur-md">
              <p className="text-black/60 text-sm mb-1">Location</p>
              <h3 className="text-xl font-bold">{contactInfo.location}</h3>
            </div>

            <a
              href={`mailto:${contactInfo.email}`}
              className="bg-black/10 border border-black/20 rounded-2xl p-5 backdrop-blur-md hover:bg-white hover:text-black transition"
            >
              <p className="text-black/60 text-sm mb-1">Email</p>
              <h3 className="text-lg md:text-xl font-bold break-all">
                {contactInfo.email}
              </h3>
            </a>

            <a
              href={`tel:${contactInfo.phone}`}
              className="bg-black/10 border border-black/20 rounded-2xl p-5 backdrop-blur-md hover:bg-white hover:text-black transition"
            >
              <p className="text-black/60 text-sm mb-1">Phone</p>
              <h3 className="text-xl font-bold">{contactInfo.phone}</h3>
            </a>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={contactInfo.instagram}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 rounded-full bg-black text-white font-bold hover:bg-white hover:text-black transition text-center"
            >
              Instagram
            </a>

            <a
              href={contactInfo.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 rounded-full border border-black text-black font-bold hover:bg-black hover:text-white transition text-center"
            >
              WhatsApp
            </a>

            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contactInfo.email}&su=Photoshoot Enquiry&body=Hi, I saw your portfolio and would like to book a shoot.`}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 rounded-full border border-black text-black font-bold hover:bg-black hover:text-white transition text-center"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;