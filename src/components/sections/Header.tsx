"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/content";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "O nas", href: "#trust" },
  { label: "Showreel", href: "#showreel" },
  { label: "Oferta", href: "#formats" },
  { label: "Realizacje", href: "#cases" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled || isMobileMenuOpen
            ? "bg-[#0f0f1a]/95 backdrop-blur-lg border-b border-[#2a2a3e]"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <span className="text-xl md:text-2xl font-bold text-white">
                <span className="text-[#c9a227]">Premium</span> Live Band
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-[#c9a227] transition-colors text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Button variant="primary" size="sm" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                Sprawdź termin
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2 -mr-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Full Screen Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0f0f1a] md:hidden pt-16">
          <nav className="flex flex-col h-full px-6 py-8">
            <div className="flex-1 flex flex-col justify-center gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white text-2xl font-medium py-4 border-b border-[#2a2a3e] hover:text-[#c9a227] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pb-8">
              <Button
                variant="primary"
                size="lg"
                className="w-full"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Sprawdź termin
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

