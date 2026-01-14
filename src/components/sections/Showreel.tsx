"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { showreelContent } from "@/data/content";

export function Showreel() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="showreel" className="py-16 md:py-32 bg-[#1a1a2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="section-heading text-2xl md:text-4xl lg:text-5xl">{showreelContent.headline}</h2>
          <p className="section-subheading mx-auto text-base md:text-xl">{showreelContent.description}</p>
        </motion.div>

        {/* Video Thumbnail */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative aspect-video max-w-5xl mx-auto rounded-2xl overflow-hidden cursor-pointer group"
          onClick={() => setIsVideoOpen(true)}
        >
          {/* Video thumbnail background */}
          <Image
            src="/images/showreel-poster.jpg"
            alt="Live band showreel"
            fill
            className="object-cover object-center"
            quality={80}
          />
          
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#c9a227] flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
              <Play className="w-8 h-8 md:w-10 md:h-10 text-[#1a1a2e] ml-1" fill="currentColor" />
            </div>
          </div>
        </motion.div>

        {/* Clip thumbnails */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-6 md:mt-8 max-w-5xl mx-auto"
        >
          {showreelContent.clips.map((clip, index) => (
            <div
              key={index}
              className="aspect-video rounded-lg overflow-hidden bg-[#242438] relative group cursor-pointer"
            >
              <Image
                src={clip.thumbnail}
                alt={clip.title}
                fill
                className="object-cover object-center"
                quality={75}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex flex-col items-center justify-center">
                <Play className="w-6 h-6 md:w-8 md:h-8 text-white mb-1 md:mb-2 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                <span className="text-white text-xs md:text-sm font-medium">{clip.title}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-[#c9a227] transition-colors"
            onClick={() => setIsVideoOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
          <div
            className="w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`${showreelContent.videoUrl}?autoplay=1`}
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}

