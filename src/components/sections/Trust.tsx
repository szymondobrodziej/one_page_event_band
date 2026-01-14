"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { trustContent } from "@/data/content";

export function Trust() {
  return (
    <section id="trust" className="py-20 md:py-32 bg-[#0f0f1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">{trustContent.headline}</h2>
          <p className="section-subheading mx-auto">{trustContent.description}</p>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 gap-8 mb-16"
        >
          {trustContent.metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-gold mb-2">
                {metric.value}
              </div>
              <div className="text-[#a0a0b0] text-sm md:text-base">{metric.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="card max-w-4xl mx-auto mb-16"
        >
          <Quote className="w-10 h-10 text-[#c9a227] mb-4" />
          <blockquote className="text-xl md:text-2xl text-white mb-6 leading-relaxed">
            &ldquo;{trustContent.testimonial.quote}&rdquo;
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#c9a227]/20 flex items-center justify-center">
              <span className="text-[#c9a227] font-bold">
                {trustContent.testimonial.author.charAt(0)}
              </span>
            </div>
            <div>
              <div className="text-white font-semibold">{trustContent.testimonial.author}</div>
              <div className="text-[#a0a0b0] text-sm">
                {trustContent.testimonial.role}, {trustContent.testimonial.company}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Logo Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-center text-[#a0a0b0] text-sm mb-8">Zaufali nam m.in.:</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center opacity-50">
            {trustContent.logos.map((logo, index) => (
              <div
                key={index}
                className="w-24 h-12 bg-white/10 rounded-lg flex items-center justify-center"
              >
                <span className="text-white/50 text-xs">{logo.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

