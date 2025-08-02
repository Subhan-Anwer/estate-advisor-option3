"use client";
import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section className="py-20 bg-[#0c2625] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/20 via-transparent to-[#d4af37]/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Get in <span className="text-[#d4af37]">Touch</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Ready to start your property journey? Our expert advisors are here to help you make informed decisions. Reach out to us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#d4af37]/30 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#d4af37] to-[#b8941f] rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#0c2625]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Call Us</h3>
                    <p className="text-[#d4af37]">+92 321 123 4567</p>
                    <p className="text-white/60 text-sm">Mon-Sat 9AM-8PM</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#d4af37]/30 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">WhatsApp</h3>
                    <p className="text-[#25D366]">+92 321 123 4567</p>
                    <p className="text-white/60 text-sm">Quick responses</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#d4af37]/30 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#3b82f6] to-[#1d4ed8] rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <p className="text-[#3b82f6]">info@estateadvisor.pk</p>
                    <p className="text-white/60 text-sm">24-48 hour response</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#d4af37]/30 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#f59e0b] to-[#d97706] rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Visit Us</h3>
                    <p className="text-[#f59e0b]">DHA Phase 6</p>
                    <p className="text-white/60 text-sm">Karachi, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-[#d4af37]" />
                <h3 className="text-white font-semibold">Office Hours</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/60">Monday - Friday</span>
                  <span className="text-white">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Saturday</span>
                  <span className="text-white">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Sunday</span>
                  <span className="text-[#d4af37]">By Appointment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Book a Free Consultation
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-colors"
                      placeholder="+92 XXX XXX XXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="buying">Property Buying</option>
                      <option value="selling">Property Selling</option>
                      <option value="investment">Investment Consulting</option>
                      <option value="management">Property Management</option>
                      <option value="legal">Legal Services</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white/70 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-colors resize-none"
                    placeholder="Tell us about your property requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-[#0c2625] font-semibold py-4 px-6 rounded-lg hover:from-[#b8941f] hover:to-[#d4af37] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#d4af37]/25 flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>

              <div className="mt-6 p-4 bg-[#d4af37]/10 border border-[#d4af37]/20 rounded-lg">
                <p className="text-[#d4af37] text-sm text-center">
                  ⚡ Get a response within 2 hours during business hours
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Visit Our Office
            </h3>
            <div className="bg-white/10 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-[#d4af37] mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">
                  Estate Advisor Office
                </h4>
                <p className="text-white/60">
                  Interactive map with custom markers would be displayed here
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;