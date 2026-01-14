"use client";

import { motion } from "framer-motion";
import { ClipboardList, FileText, Music, CheckCircle } from "lucide-react";
import { processContent } from "@/data/content";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ClipboardList,
  FileText,
  Music,
  CheckCircle,
};

export function Process() {
  return (
    <section className="py-16 md:py-32 bg-[#0f0f1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="section-heading text-2xl md:text-4xl lg:text-5xl">{processContent.headline}</h2>
        </motion.div>

        {/* Steps - horizontal scroll on mobile, grid on desktop */}
        <div className="flex md:grid md:grid-cols-4 gap-6 md:gap-8 overflow-x-auto pb-4 md:pb-0 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {processContent.steps.map((step, index) => {
            const Icon = iconMap[step.icon];
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex-shrink-0 w-[70vw] sm:w-auto snap-start"
              >
                {/* Connector line */}
                {index < processContent.steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#c9a227] to-[#2a2a3e]" />
                )}

                <div className="relative z-10 text-center bg-[#1a1a2e] md:bg-transparent rounded-xl p-6 md:p-0">
                  {/* Step number */}
                  <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-full bg-[#c9a227] flex items-center justify-center">
                    {Icon && <Icon className="w-6 h-6 md:w-7 md:h-7 text-[#1a1a2e]" />}
                  </div>

                  {/* Step number badge */}
                  <div className="absolute top-6 md:top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#1a1a2e] border-2 border-[#c9a227] flex items-center justify-center">
                    <span className="text-[10px] md:text-xs font-bold text-[#c9a227]">{step.number}</span>
                  </div>

                  {/* Content */}
                  <h3 className="text-base md:text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-[#a0a0b0] text-xs md:text-sm">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

