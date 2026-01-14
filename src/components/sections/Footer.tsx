"use client";

import { Instagram, Youtube, Facebook, Music2, Mail, Phone, MapPin } from "lucide-react";
import { footerContent } from "@/data/content";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Instagram,
  Youtube,
  Facebook,
  Music2,
};

export function Footer() {
  return (
    <footer className="bg-[#1a1a2e] border-t border-[#2a2a3e] pb-24 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="inline-block mb-3 md:mb-4">
              <span className="text-xl md:text-2xl font-bold text-white">
                <span className="text-[#c9a227]">Premium</span> Live Band
              </span>
            </a>
            <p className="text-[#a0a0b0] mb-4 max-w-md text-sm md:text-base">
              Profesjonalny zespół live na eventy firmowe. Pełna obsługa techniczna, faktura VAT, repertuar PL/EN.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 md:gap-4">
              {footerContent.social.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-[#c9a227] hover:bg-white/10 transition-colors"
                    aria-label={social.name}
                  >
                    {Icon && <Icon className="w-4 h-4 md:w-5 md:h-5" />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Kontakt</h4>
            <div className="space-y-2 md:space-y-3">
              <a
                href={`mailto:${footerContent.contact.email}`}
                className="flex items-center gap-2 text-[#a0a0b0] hover:text-[#c9a227] transition-colors text-xs md:text-sm"
              >
                <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
                <span className="break-all">{footerContent.contact.email}</span>
              </a>
              <a
                href={`tel:${footerContent.contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-[#a0a0b0] hover:text-[#c9a227] transition-colors text-xs md:text-sm"
              >
                <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
                {footerContent.contact.phone}
              </a>
              <div className="flex items-start gap-2 text-[#a0a0b0] text-xs md:text-sm">
                <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0 mt-0.5" />
                <span>{footerContent.company.address}</span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Informacje</h4>
            <div className="space-y-2 md:space-y-3">
              {footerContent.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="block text-[#a0a0b0] hover:text-[#c9a227] transition-colors text-xs md:text-sm"
                >
                  {link.name}
                </a>
              ))}
              <p className="text-[#a0a0b0] text-xs md:text-sm">{footerContent.company.nip}</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-[#2a2a3e] text-center">
          <p className="text-[#a0a0b0] text-xs md:text-sm">
            © {new Date().getFullYear()} {footerContent.company.name}. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}

