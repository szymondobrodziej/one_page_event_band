"use client";

import Image from "next/image";
import { FileText, Globe, FileCheck, Award, Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { heroContent } from "@/data/content";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileText,
  Globe,
  FileCheck,
  Award,
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Live band performing on stage"
          fill
          priority
          className="object-cover object-center"
          quality={85}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f1a]/70 via-[#0f0f1a]/85 to-[#0f0f1a]" />
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c9a227]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#e63946]/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 md:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Proof Pills - hidden on very small screens, 2 columns on mobile */}
          <div className="hidden sm:flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8">
            {heroContent.proofPills.map((pill, index) => {
              const Icon = iconMap[pill.icon];
              return (
                <motion.div
                  key={pill.text}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="proof-pill text-xs md:text-sm"
                >
                  {Icon && <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#c9a227]" />}
                  <span>{pill.text}</span>
                </motion.div>
              );
            })}
          </div>

          {/* H1 - smaller on mobile */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight px-2">
            <span className="text-gradient-gold">Premium live band</span>
            <br />
            <span className="text-white text-[0.85em]">— bezpieczny wybór, mocny efekt.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#a0a0b0] max-w-3xl mx-auto mb-8 md:mb-10 px-4">
            {heroContent.subtitle}
          </p>

          {/* CTAs - stack on mobile with full width */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 px-4 sm:px-0">
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              {heroContent.ctaPrimary}
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => document.getElementById("showreel")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Play className="w-5 h-5" />
              {heroContent.ctaSecondary}
            </Button>
          </div>
        </motion.div>

        {/* Scroll indicator - hidden on mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-[#c9a227] rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

