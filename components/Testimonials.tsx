"use client";
import React, { useState } from "react";
import { Star, Quote, Play, X } from "lucide-react";

const TestimonialsSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  const testimonials = [
    {
      id: 1,
      name: "Ahmed Hassan",
      role: "Business Owner",
      location: "DHA Phase 6",
      rating: 5,
      text: "Estate Advisor helped me find the perfect commercial space for my business. Their market knowledge and negotiation skills saved me both time and money. Highly recommended!",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      videoThumbnail:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      property: "Commercial Plaza in Gulshan",
    },
    {
      id: 2,
      name: "Fatima Khan",
      role: "Software Engineer",
      location: "Clifton",
      rating: 5,
      text: "As a first-time buyer, I was overwhelmed by the process. The team at Estate Advisor guided me through every step and helped me secure my dream apartment in Clifton.",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      videoThumbnail:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      property: "Sea View Apartment",
    },
    {
      id: 3,
      name: "Syed Ali Raza",
      role: "Investor",
      location: "Multiple Locations",
      rating: 5,
      text: "I've been investing in Karachi real estate for 10 years, but Estate Advisor's insights have taken my portfolio to the next level. Their market analysis is unparalleled.",
      image:
        "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg",
      videoThumbnail:
        "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg",
      property: "Investment Portfolio",
    },
    {
      id: 4,
      name: "Maria Gonzalez",
      role: "Expatriate",
      location: "DHA Phase 8",
      rating: 5,
      text: "Moving to Karachi from abroad was daunting, but Estate Advisor made finding a home effortless. Their professionalism and local expertise are exceptional.",
      image:
        "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
      videoThumbnail:
        "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
      property: "Luxury Villa",
    },
  ];

  const openVideoModal = (testimonialId: number) => {
    setSelectedVideo(testimonialId);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#0f2d2b] to-[#0c2625] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            What Our <span className="text-[#d4af37]">Clients Say</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Don't just take our word for it. Hear directly from our satisfied
            clients about their experiences with Estate Advisor.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#d4af37]/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#d4af37]/10"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-[#d4af37]/20 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-[#d4af37]" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-[#d4af37] fill-current"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#d4af37]/30"
                    />
                    {/* Video Play Button Overlay */}
                    <button
                      onClick={() => openVideoModal(testimonial.id)}
                      className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70"
                    >
                      <Play className="w-4 h-4 text-[#d4af37] ml-0.5" />
                    </button>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-white/60 text-sm">{testimonial.role}</p>
                    <p className="text-[#d4af37] text-xs">
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                {/* Property Info */}
                <div className="text-right">
                  <p className="text-white/40 text-xs">Property:</p>
                  <p className="text-white/60 text-sm">
                    {testimonial.property}
                  </p>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#d4af37]/0 via-[#d4af37]/5 to-[#d4af37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative bg-[#0c2625] border border-[#d4af37]/30 rounded-2xl p-8 max-w-2xl w-full">
              <button
                onClick={closeVideoModal}
                className="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Video Testimonial
                </h3>
                <div className="bg-white/10 rounded-xl h-64 flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Play className="w-16 h-16 text-[#d4af37] mx-auto mb-4" />
                    <p className="text-white/60">
                      Video testimonial would play here
                    </p>
                  </div>
                </div>
                <p className="text-white/70">
                  {testimonials.find((t) => t.id === selectedVideo)?.name}'s
                  experience with Estate Advisor
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-white/10">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#d4af37] mb-2">4.9/5</div>
            <p className="text-white/60">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#d4af37] mb-2">98%</div>
            <p className="text-white/60">Client Satisfaction</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#d4af37] mb-2">500+</div>
            <p className="text-white/60">5-Star Reviews</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#d4af37] mb-2">24/7</div>
            <p className="text-white/60">Support Available</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
