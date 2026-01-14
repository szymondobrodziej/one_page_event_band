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
    <section className="py-20 md:py-32 bg-[#0f0f1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">{processContent.headline}</h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8">
          {processContent.steps.map((step, index) => {
            const Icon = iconMap[step.icon];
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector line */}
                {index < processContent.steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#c9a227] to-[#2a2a3e]" />
                )}

                <div className="relative z-10 text-center">
                  {/* Step number */}
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#c9a227] flex items-center justify-center">
                    {Icon && <Icon className="w-7 h-7 text-[#1a1a2e]" />}
                  </div>

                  {/* Step number badge */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-6 h-6 rounded-full bg-[#1a1a2e] border-2 border-[#c9a227] flex items-center justify-center">
                    <span className="text-xs font-bold text-[#c9a227]">{step.number}</span>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-[#a0a0b0] text-sm">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

