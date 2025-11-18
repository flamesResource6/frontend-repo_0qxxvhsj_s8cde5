import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_50%,rgba(59,130,246,0.35),transparent_60%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl"
          >
            Futuristic Dental Care
            <span className="block bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">with a Gentle Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-lg text-sky-100/90"
          >
            Premium cosmetic and family dentistry using modern technology. Book online, relax in our spa-like studio, and leave with a confident smile.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a href="#booking" className="rounded-xl bg-sky-500 px-6 py-3 font-semibold text-slate-900 shadow-lg shadow-sky-500/30 transition hover:brightness-110">
              Book Appointment
            </a>
            <a href="#services" className="rounded-xl border border-sky-400/40 px-6 py-3 font-semibold text-sky-100/90 backdrop-blur-sm hover:bg-white/5">
              Our Services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
