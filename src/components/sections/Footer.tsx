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
    <footer className="bg-[#1a1a2e] border-t border-[#2a2a3e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="inline-block mb-4">
              <span className="text-2xl font-bold text-white">
                <span className="text-[#c9a227]">Premium</span> Live Band
              </span>
            </a>
            <p className="text-[#a0a0b0] mb-4 max-w-md">
              Profesjonalny zespół live na eventy firmowe. Pełna obsługa techniczna, faktura VAT, repertuar PL/EN.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {footerContent.social.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-[#c9a227] hover:bg-white/10 transition-colors"
                    aria-label={social.name}
                  >
                    {Icon && <Icon className="w-5 h-5" />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3">
              <a
                href={`mailto:${footerContent.contact.email}`}
                className="flex items-center gap-2 text-[#a0a0b0] hover:text-[#c9a227] transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                {footerContent.contact.email}
              </a>
              <a
                href={`tel:${footerContent.contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-[#a0a0b0] hover:text-[#c9a227] transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                {footerContent.contact.phone}
              </a>
              <div className="flex items-center gap-2 text-[#a0a0b0] text-sm">
                <MapPin className="w-4 h-4" />
                {footerContent.company.address}
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Informacje</h4>
            <div className="space-y-3">
              {footerContent.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="block text-[#a0a0b0] hover:text-[#c9a227] transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
              <p className="text-[#a0a0b0] text-sm">{footerContent.company.nip}</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[#2a2a3e] text-center">
          <p className="text-[#a0a0b0] text-sm">
            © {new Date().getFullYear()} {footerContent.company.name}. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}

