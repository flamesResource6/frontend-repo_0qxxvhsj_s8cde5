import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Tooth, Smile, ShieldCheck } from 'lucide-react';

const services = [
  { icon: Tooth, title: 'Comprehensive Exams', desc: 'Thorough checkups with digital x-rays and 3D scanning.' },
  { icon: Smile, title: 'Cosmetic Dentistry', desc: 'Whitening, veneers, and smile design tailored to you.' },
  { icon: ShieldCheck, title: 'Preventive Care', desc: 'Cleanings, fluoride, and sealants to keep cavities away.' },
  { icon: Sparkles, title: 'Invisalign & Aligners', desc: 'Discreet teeth straightening with modern aligner tech.' },
];

const Services = () => {
  return (
    <section id="services" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Services</h2>
          <p className="mt-3 text-sky-100/80">Everything you need for a healthy, confident smile.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 * i }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <s.icon className="mb-4 h-8 w-8 text-sky-400" />
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-sky-100/80">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
