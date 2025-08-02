"use client";
import React, { useState } from "react";
import { MapPin, Bed, Bath, Square, Heart, Eye, Star } from "lucide-react";

const FeaturedProperties = () => {
  const [activeView, setActiveView] = useState<"grid" | "map">("grid");
  const [likedProperties, setLikedProperties] = useState<Set<number>>(
    new Set()
  );

  const properties = [
    {
      id: 1,
      title: "Luxury Villa in DHA Phase 6",
      location: "DHA Phase 6, Karachi",
      price: "8.5 Crore",
      beds: 5,
      baths: 6,
      area: "500 sq yd",
      image:
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
      featured: true,
      rating: 4.9,
    },
    {
      id: 2,
      title: "Modern Apartment in Clifton",
      location: "Clifton Block 2, Karachi",
      price: "2.8 Crore",
      beds: 3,
      baths: 3,
      area: "2100 sq ft",
      image: "https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg",
      featured: false,
      rating: 4.7,
    },
    {
      id: 3,
      title: "Commercial Plaza in Gulshan",
      location: "Gulshan-e-Iqbal, Karachi",
      price: "12 Crore",
      beds: 0,
      baths: 8,
      area: "8000 sq ft",
      image:
        "https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg",
      featured: true,
      rating: 4.8,
    },
    {
      id: 4,
      title: "Penthouse in Emaar Crescent Bay",
      location: "Emaar Crescent Bay, Karachi",
      price: "15 Crore",
      beds: 4,
      baths: 5,
      area: "4500 sq ft",
      image:
        "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
      featured: true,
      rating: 5.0,
    },
    {
      id: 5,
      title: "Family Home in North Nazimabad",
      location: "North Nazimabad, Karachi",
      price: "1.8 Crore",
      beds: 4,
      baths: 3,
      area: "240 sq yd",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
      featured: false,
      rating: 4.5,
    },
    {
      id: 6,
      title: "Sea View Apartment in Clifton",
      location: "Marine Drive, Clifton",
      price: "4.2 Crore",
      beds: 3,
      baths: 4,
      area: "2800 sq ft",
      image:
        "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg",
      featured: true,
      rating: 4.9,
    },
  ];

  const toggleLike = (propertyId: number) => {
    const newLiked = new Set(likedProperties);
    if (newLiked.has(propertyId)) {
      newLiked.delete(propertyId);
    } else {
      newLiked.add(propertyId);
    }
    setLikedProperties(newLiked);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#0c2625] to-[#0f2d2b]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Featured <span className="text-[#d4af37]">Properties</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            Discover handpicked premium properties that represent the best of
            Karachi's real estate market. Each property is carefully selected
            for quality, location, and value.
          </p>

          {/* View Toggle */}
          <div className="inline-flex bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1">
            <button
              onClick={() => setActiveView("grid")}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeView === "grid"
                  ? "bg-[#d4af37] text-[#0c2625]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Grid View
            </button>
            <button
              onClick={() => setActiveView("map")}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeView === "map"
                  ? "bg-[#d4af37] text-[#0c2625]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Map View
            </button>
          </div>
        </div>

        {activeView === "grid" ? (
          /* Properties Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <div
                key={property.id}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-[#d4af37]/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#d4af37]/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Featured Badge */}
                  {property.featured && (
                    <div className="absolute top-4 left-4 bg-[#d4af37] text-[#0c2625] px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}

                  {/* Actions */}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <button
                      onClick={() => toggleLike(property.id)}
                      className={`w-10 h-10 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 ${
                        likedProperties.has(property.id)
                          ? "bg-red-500 text-white"
                          : "bg-white/10 text-white hover:bg-red-500"
                      }`}
                    >
                      <Heart
                        size={18}
                        className={
                          likedProperties.has(property.id) ? "fill-current" : ""
                        }
                      />
                    </button>
                    <button className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[#d4af37] hover:text-[#0c2625] transition-all duration-300">
                      <Eye size={18} />
                    </button>
                  </div>

                  {/* Rating */}
                  <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                    <Star className="w-4 h-4 text-[#d4af37] fill-current" />
                    <span className="text-white text-sm font-medium">
                      {property.rating}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#d4af37] transition-colors">
                    {property.title}
                  </h3>

                  <div className="flex items-center text-white/60 mb-4">
                    <MapPin size={16} className="mr-2" />
                    <span className="text-sm">{property.location}</span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-[#d4af37]">
                      ₨ {property.price}
                    </div>
                  </div>

                  {/* Property Details */}
                  <div className="flex items-center space-x-4 text-white/60 text-sm">
                    {property.beds > 0 && (
                      <div className="flex items-center space-x-1">
                        <Bed size={16} />
                        <span>{property.beds} Beds</span>
                      </div>
                    )}
                    <div className="flex items-center space-x-1">
                      <Bath size={16} />
                      <span>{property.baths} Baths</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Square size={16} />
                      <span>{property.area}</span>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#d4af37]/0 via-[#d4af37]/20 to-[#d4af37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        ) : (
          /* Map View */
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
            <div className="bg-white/10 rounded-xl h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-[#d4af37] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  Interactive Map
                </h3>
                <p className="text-white/60">
                  Map integration would be implemented here with custom Estate
                  Advisor markers
                </p>
              </div>
            </div>
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-[#d4af37] to-[#b8941f] text-[#0c2625] font-semibold px-8 py-4 rounded-lg hover:from-[#b8941f] hover:to-[#d4af37] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#d4af37]/25">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
