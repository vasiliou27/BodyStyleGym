"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function Contact() {
  const t = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert(t.contact.thankYou);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-dark via-dark-light to-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="text-white">{t.contact.title} </span>
            <span className="text-primary">{t.contact.touch}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-black text-white mb-6">
                {t.contact.sendMessage} <span className="text-primary">{t.contact.message}</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                    {t.contact.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark border border-primary/20 rounded-md text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder={t.contact.namePlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                    {t.contact.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark border border-primary/20 rounded-md text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder={t.contact.emailPlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                    {t.contact.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark border border-primary/20 rounded-md text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder={t.contact.phonePlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                    {t.contact.messageField}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-dark border border-primary/20 rounded-md text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder={t.contact.messagePlaceholder}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-primary text-dark font-bold rounded-md hover:bg-primary-light transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,0,0.5)] flex items-center justify-center space-x-2"
                >
                  <span>{t.contact.send}</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-black text-white mb-6">
                {t.contact.contactInfo} <span className="text-primary">{t.contact.information}</span>
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="p-6 bg-dark rounded-lg border border-primary/20 hover:border-primary transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">
                        {t.contact.address}
                      </h3>
                      <p className="text-gray-300">
                        {t.contact.addressLine1}<br />
                        {t.contact.addressLine2}<br />
                        {t.contact.addressLine3}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-dark rounded-lg border border-primary/20 hover:border-primary transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">
                        {t.contact.phone}
                      </h3>
                      <p className="text-gray-300 space-y-1">
                        <a href="tel:+35722253961" className="block hover:text-primary transition-colors">
                          {t.contact.phone1}
                        </a>
                        <a href="tel:+35797904681" className="block hover:text-primary transition-colors">
                          {t.contact.phone2}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-dark rounded-lg border border-primary/20 hover:border-primary transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">
                        {t.contact.email}
                      </h3>
                      <p className="text-gray-300">
                        <a href="mailto:info@bodystylegym.com" className="hover:text-primary transition-colors">
                          info@bodystylegym.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-dark rounded-lg border border-primary/20 hover:border-primary transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">
                        {t.contact.workingHours}
                      </h3>
                      <div className="text-gray-300 space-y-1">
                        <p>{t.contact.mondayFriday}</p>
                        <p>{t.contact.saturday}</p>
                        <p>{t.contact.sunday}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="bg-dark rounded-lg border border-primary/20 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3266.1234567890!2d33.1234567!3d35.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de1c40b379bde5%3A0x40bebb7cecf0fee9!2sTheodosi%20Pieridi%2051%2C%20Tseri%2C%20Nicosia%2C%20Cyprus!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

