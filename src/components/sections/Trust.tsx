"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { trustContent } from "@/data/content";

export function Trust() {
  return (
    <section id="trust" className="py-16 md:py-32 bg-[#0f0f1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="section-heading text-2xl md:text-4xl lg:text-5xl">{trustContent.headline}</h2>
          <p className="section-subheading mx-auto text-base md:text-xl">{trustContent.description}</p>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 gap-4 md:gap-8 mb-10 md:mb-16"
        >
          {trustContent.metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gradient-gold mb-1 md:mb-2">
                {metric.value}
              </div>
              <div className="text-[#a0a0b0] text-xs sm:text-sm md:text-base">{metric.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="card max-w-4xl mx-auto mb-10 md:mb-16 p-5 md:p-8"
        >
          <Quote className="w-8 h-8 md:w-10 md:h-10 text-[#c9a227] mb-3 md:mb-4" />
          <blockquote className="text-lg md:text-2xl text-white mb-4 md:mb-6 leading-relaxed">
            &ldquo;{trustContent.testimonial.quote}&rdquo;
          </blockquote>
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#c9a227]/20 flex items-center justify-center flex-shrink-0">
              <span className="text-[#c9a227] font-bold text-sm md:text-base">
                {trustContent.testimonial.author.charAt(0)}
              </span>
            </div>
            <div>
              <div className="text-white font-semibold text-sm md:text-base">{trustContent.testimonial.author}</div>
              <div className="text-[#a0a0b0] text-xs md:text-sm">
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
          <p className="text-center text-[#a0a0b0] text-xs md:text-sm mb-6 md:mb-8">Zaufali nam m.in.:</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-8 items-center justify-items-center">
            {trustContent.logos.map((logo, index) => (
              <div
                key={index}
                className="w-20 h-10 md:w-28 md:h-14 flex items-center justify-center opacity-50 hover:opacity-100 transition-all duration-300"
                title={logo.name}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.logo}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

