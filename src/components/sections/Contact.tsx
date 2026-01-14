"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, CheckCircle } from "lucide-react";
import { contactContent, siteConfig } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { DatePicker } from "@/components/ui/DatePicker";

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    eventType: "",
    participants: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your form backend
    console.log("Form submitted:", { ...formData, date: selectedDate });
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#0f0f1a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">{contactContent.headline}</h2>
          <p className="section-subheading mx-auto">{contactContent.description}</p>
        </motion.div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card text-center py-12"
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">{contactContent.successMessage}</h3>
            <p className="text-[#a0a0b0]">Sprawdź swoją skrzynkę email.</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="card"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">Imię i nazwisko *</label>
                <input type="text" name="name" required className="form-input" placeholder="Jan Kowalski" value={formData.name} onChange={handleChange} />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">Email *</label>
                <input type="email" name="email" required className="form-input" placeholder="jan@firma.pl" value={formData.email} onChange={handleChange} />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">Telefon</label>
                <input type="tel" name="phone" className="form-input" placeholder="+48 XXX XXX XXX" value={formData.phone} onChange={handleChange} />
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">Data eventu *</label>
                <DatePicker
                  selected={selectedDate}
                  onChange={setSelectedDate}
                  placeholderText="Wybierz datę eventu"
                  minDate={new Date()}
                  required
                />
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">Miasto *</label>
                <input type="text" name="city" required className="form-input" placeholder="Warszawa" value={formData.city} onChange={handleChange} />
              </div>

              {/* Event Type */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">Typ eventu *</label>
                <select name="eventType" required className="form-input" value={formData.eventType} onChange={handleChange}>
                  <option value="">Wybierz...</option>
                  {contactContent.eventTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Participants */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-white mb-2">Liczba uczestników</label>
                <select name="participants" className="form-input" value={formData.participants} onChange={handleChange}>
                  <option value="">Wybierz...</option>
                  {contactContent.participantRanges.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-white mb-2">Dodatkowe informacje</label>
                <textarea name="message" rows={4} className="form-input resize-none" placeholder="Opisz krótko swój event..." value={formData.message} onChange={handleChange} />
              </div>
            </div>

            {/* Submit */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-[#a0a0b0]">{contactContent.microcopy}</p>
              <Button type="submit" variant="primary" size="lg">
                Wyślij zapytanie
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </motion.form>
        )}

        {/* Phone CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 text-[#c9a227] hover:text-[#d4af37] transition-colors">
            <Phone className="w-5 h-5" />
            <span className="font-medium">{siteConfig.phone}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

