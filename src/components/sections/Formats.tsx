"use client";

import { motion } from "framer-motion";
import { Crown, Zap, Users, Clock, FileCheck, CheckCircle } from "lucide-react";
import { formatsContent } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const archetypeStyles = {
  ruler: {
    border: "border-[#c9a227]/30 hover:border-[#c9a227]",
    icon: Crown,
    iconColor: "text-[#c9a227]",
    badge: "bg-[#c9a227]/10 text-[#c9a227]",
  },
  mixed: {
    border: "border-[#a0a0b0]/30 hover:border-[#a0a0b0]",
    icon: Zap,
    iconColor: "text-[#a0a0b0]",
    badge: "bg-white/10 text-white",
  },
  hero: {
    border: "border-[#e63946]/30 hover:border-[#e63946]",
    icon: Zap,
    iconColor: "text-[#e63946]",
    badge: "bg-[#e63946]/10 text-[#e63946]",
  },
};

export function Formats() {
  return (
    <section id="formats" className="py-16 md:py-32 bg-[#0f0f1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="section-heading text-2xl md:text-4xl lg:text-5xl">{formatsContent.headline}</h2>
          <p className="section-subheading mx-auto text-base md:text-xl">{formatsContent.description}</p>
        </motion.div>

        {/* Format Cards */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {formatsContent.formats.map((format, index) => {
            const style = archetypeStyles[format.archetype as keyof typeof archetypeStyles];
            const Icon = style.icon;

            return (
              <motion.div
                key={format.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={cn(
                  "card border-2 transition-all duration-300",
                  style.border
                )}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className={cn("inline-block px-3 py-1 rounded-full text-xs font-medium mb-3", style.badge)}>
                      {format.vibe}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{format.title}</h3>
                  </div>
                  <Icon className={cn("w-8 h-8", style.iconColor)} />
                </div>

                {/* Description */}
                <p className="text-[#a0a0b0] mb-6">{format.copy}</p>

                {/* Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <Users className="w-4 h-4 text-[#c9a227]" />
                    <span className="text-[#a0a0b0]">Dla kogo:</span>
                    <span className="text-white">{format.forWho}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="w-4 h-4 text-[#c9a227]" />
                    <span className="text-[#a0a0b0]">Sety:</span>
                    <span className="text-white">{format.sets}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Users className="w-4 h-4 text-[#c9a227]" />
                    <span className="text-[#a0a0b0]">Skład:</span>
                    <span className="text-white">{format.crew}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <FileCheck className="w-4 h-4 text-[#c9a227]" />
                    <span className="text-[#a0a0b0]">Rider:</span>
                    <span className="text-white">{format.rider}</span>
                  </div>
                  {format.vat && (
                    <div className="flex items-center gap-3 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-green-500">Faktura VAT</span>
                    </div>
                  )}
                </div>

                {/* CTA */}
                <Button
                  variant="secondary"
                  className="w-full"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Zapytaj o ten format
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

