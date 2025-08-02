"use client";
import React, { useState, useEffect } from "react";
import { Search, MapPin, Home, DollarSign, Calendar, Play } from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchData, setSearchData] = useState({
    location: "",
    type: "",
    budget: "",
    purpose: "",
  });

  const slides = [
    {
      image: "https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg",
      title: "Karachi's Premier Properties",
    },
    {
      image:
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
      title: "Luxury Living Redefined",
    },
    {
      image:
        "https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg",
      title: "Commercial Excellence",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c2625]/90 via-[#0c2625]/70 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Your Gateway to
              <span className="block bg-gradient-to-r from-[#d4af37] to-[#f4d03f] bg-clip-text text-transparent">
                Smarter Property
              </span>
              Decisions
            </h1>

            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Discover premium real estate opportunities in Karachi with
              Pakistan's most trusted property consultancy. We turn your
              property dreams into reality.
            </p>

            {/* Floating Search Bar */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <MapPin
                    className="absolute left-3 top-3 text-[#d4af37]"
                    size={20}
                  />
                  <select
                    value={searchData.location}
                    onChange={(e) =>
                      setSearchData({ ...searchData, location: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-[#d4af37]"
                  >
                    <option value="">Select Location</option>
                    <option value="clifton">Clifton</option>
                    <option value="dha">DHA</option>
                    <option value="gulshan">Gulshan-e-Iqbal</option>
                    <option value="north-nazimabad">North Nazimabad</option>
                  </select>
                </div>

                <div className="relative">
                  <Home
                    className="absolute left-3 top-3 text-[#d4af37]"
                    size={20}
                  />
                  <select
                    value={searchData.type}
                    onChange={(e) =>
                      setSearchData({ ...searchData, type: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-[#d4af37]"
                  >
                    <option value="">Property Type</option>
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                    <option value="commercial">Commercial</option>
                    <option value="plot">Plot</option>
                  </select>
                </div>

                <div className="relative">
                  <DollarSign
                    className="absolute left-3 top-3 text-[#d4af37]"
                    size={20}
                  />
                  <select
                    value={searchData.budget}
                    onChange={(e) =>
                      setSearchData({ ...searchData, budget: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-[#d4af37]"
                  >
                    <option value="">Budget Range</option>
                    <option value="0-50">0-50 Lakh</option>
                    <option value="50-100">50L-1 Crore</option>
                    <option value="100+">1+ Crore</option>
                  </select>
                </div>

                <button className="bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-[#0c2625] font-semibold py-3 px-6 rounded-lg hover:from-[#b8941f] hover:to-[#d4af37] transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <Search size={20} />
                  <span>Search</span>
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-[#d4af37] text-[#0c2625] font-semibold px-8 py-4 rounded-lg hover:bg-[#b8941f] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#d4af37]/25">
                Speak to an Advisor
              </button>

              <button className="group flex items-center space-x-3 text-white border border-white/30 px-8 py-4 rounded-lg hover:border-[#d4af37] transition-all duration-300">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-[#d4af37]/20 transition-colors">
                  <Play size={16} className="text-[#d4af37] ml-1" />
                </div>
                <span>Watch Our Story</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-[#d4af37] w-8" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
