"use client";

import { motion } from "framer-motion";
import { MapPin, Users, Briefcase, Target, CheckCircle } from "lucide-react";
import { caseStudiesContent } from "@/data/content";

export function CaseStudies() {
  return (
    <section id="cases" className="py-16 md:py-32 bg-[#1a1a2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="section-heading text-2xl md:text-4xl lg:text-5xl">{caseStudiesContent.headline}</h2>
        </motion.div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {caseStudiesContent.cases.map((caseItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group"
            >
              {/* Type Badge */}
              <div className="inline-block px-3 py-1 rounded-full bg-[#c9a227]/10 text-[#c9a227] text-xs font-medium mb-4">
                {caseItem.type}
              </div>

              {/* Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm">
                  <Briefcase className="w-4 h-4 text-[#a0a0b0]" />
                  <span className="text-white">{caseItem.industry}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Users className="w-4 h-4 text-[#a0a0b0]" />
                  <span className="text-white">{caseItem.participants}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-[#a0a0b0]" />
                  <span className="text-white">{caseItem.location}</span>
                </div>
              </div>

              {/* Scope */}
              <div className="mb-4">
                <div className="text-xs text-[#a0a0b0] uppercase tracking-wider mb-1">Zakres</div>
                <div className="text-white text-sm">{caseItem.scope}</div>
              </div>

              {/* Challenge */}
              <div className="mb-4">
                <div className="flex items-center gap-2 text-xs text-[#a0a0b0] uppercase tracking-wider mb-1">
                  <Target className="w-3 h-3" />
                  Wyzwanie
                </div>
                <div className="text-white text-sm">{caseItem.challenge}</div>
              </div>

              {/* Result */}
              <div className="pt-4 border-t border-[#2a2a3e]">
                <div className="flex items-center gap-2 text-xs text-green-500 uppercase tracking-wider mb-1">
                  <CheckCircle className="w-3 h-3" />
                  Efekt
                </div>
                <div className="text-white text-sm font-medium">{caseItem.result}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

