"use client";
import React, { useState, useEffect } from "react";
import { Search, MapPin, Home, DollarSign } from "lucide-react";

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
            <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/90 via-[#111111]/70 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mt-12 mx-auto px-6 w-full">
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
              Plots • Apartments • Bungalows • Commercial Spaces
            </p>

            {/* Floating Search Bar */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-black">
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
                    <option value="">Location</option>
                    <option className="text-black" value="clifton">
                      Clifton
                    </option>
                    <option className="text-black" value="dha">
                      DHA
                    </option>
                    <option className="text-black" value="gulshan">
                      Gulshan-e-Iqbal
                    </option>
                    <option className="text-black" value="north-nazimabad">
                      Bahria Town
                    </option>
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
                    <option value="">Property</option>
                    <option className="text-black" value="house">House</option>
                    <option className="text-black" value="apartment">Apartment</option>
                    <option className="text-black" value="commercial">Commercial</option>
                    <option className="text-black" value="plot">Plot</option>
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
                    <option value="">Size</option>
                    <option className="text-black" value="400-500">400-500 Yards</option>
                    <option className="text-black" value="500-600">500-600 Yards</option>
                    <option className="text-black" value="600-700">600-700 Yards</option>
                    <option className="text-black" value="700-800">700-800 Yards</option>
                    <option className="text-black" value="800-900">800-900 Yards</option>
                    <option className="text-black" value="1000+">1000+ Yards</option>
                  </select>
                </div>

                <button className="bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-[#0c2625] font-semibold py-3 px-6 rounded-lg hover:from-[#b8941f] hover:to-[#d4af37] transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <Search size={20} />
                  <span>Search</span>
                </button>
              </div>
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
