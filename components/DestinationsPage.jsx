

"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function DestinationsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* <button
            onClick={() => router.push("/")}
          className="flex items-center text-teal-600 hover:text-teal-700 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </button> */}
      </div>
      {/* Hero Section */}
      {/* <section className="relative py-20 bg-gradient-to-l from-blue-300 to-[#809c13] text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Explore Pakistan's Destinations</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            From the mighty peaks of the Karakoram to the golden beaches of the Arabian Sea, discover Pakistan's diverse
            landscapes
          </p>
        </div>
      </section> */}

      {/* Featured Destinations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0d4544] mb-4">Featured Destinations</h2>
            <p className="text-xl text-gray-600">Discover the most breathtaking places Pakistan has to offer</p>
          </div>

          {/* Destinations Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Lahore",
                region: "Punjab",
                description: "Cultural capital with Mughal architecture, vibrant bazaars, and delicious cuisine.",
                highlights: ["Badshahi Mosque", "Lahore Fort", "Food Street"],
                image: "/images/lahore.jpg?height=250&width=350",
              },
              {
                name: "Karachi",
                region: "Sindh",
                description:
                  "Pakistan's largest city with beautiful beaches, modern architecture, and diverse culture.",
                highlights: ["Clifton Beach", "Quaid's Mausoleum", "Port Grand"],
                image: "/images/krch.webp?height=250&width=350",
              },
              {
                name: "Islamabad",
                region: "Capital Territory",
                description: "Modern planned capital city with beautiful architecture and the nearby Margalla Hills.",
                highlights: ["Faisal Mosque", "Margalla Hills", "Pakistan Monument"],
                image: "/images/islamabad.avif?height=250&width=350",
              },
              {
                name: "Murree",
                region: "Punjab",
                description: "Popular hill station with colonial architecture and scenic mountain views.",
                highlights: ["Mall Road", "Patriata", "Kashmir Point"],
                image: "/images/muree.jpg?height=250&width=350",
              },
              {
                name: "Naran Kaghan",
                region: "Khyber Pakhtunkhwa",
                description: "Stunning valley with pristine lakes, waterfalls, and alpine meadows.",
                highlights: ["Saif ul Malook", "Babusar Pass", "Lalazar"],
                image: "/images/naran.jpg?height=250&width=350",
              },
              {
                name: "Fairy Meadows",
                region: "Gilgit-Baltistan",
                description: "Base camp for Nanga Parbat with breathtaking mountain views and camping.",
                highlights: ["Nanga Parbat View", "Camping", "Trekking"],
                image: "/images/fairy.jpg?height=250&width=350",
              },
            ].map((destination, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{destination.name}</h3>
                    <span className="text-sm text-teal-600 font-medium">{destination.region}</span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">{destination.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {destination.highlights.map((highlight, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* <Link href={`/destinations/${destination.name.toLowerCase().replace(/\s+/g, "-")}`}> */}
                    <button className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition-colors text-sm"
                
             onClick={() =>
  router.push(`/destinations/${destination.name
    .toLowerCase()
    .replace(/\s+/g, "-")}`)
}>



                      Learn More

                    </button>
                  {/* </Link> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
