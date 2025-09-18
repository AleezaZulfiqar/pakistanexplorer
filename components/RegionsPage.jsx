"use client"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation";
export default function RegionsPage() {
     const router = useRouter();
  return (
   
    <div className="min-h-screen bg-white pt-16">
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Pakistan's Regions</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Explore the diverse geographical and cultural regions that make Pakistan a unique destination
          </p>
        </div>
      </section> */}

      {/* Detailed Regions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Northern Areas */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/images/gilgit.jpg?height=400&width=600"
                  alt="Northern Areas"
                  className="rounded-lg shadow-lg w-full h-80 object-cover"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Northern Areas (Gilgit-Baltistan)</h2>
                <p className="text-gray-600 mb-6">
                  Home to some of the world's highest peaks including K2, Nanga Parbat, and Gasherbrum. This region is a
                  paradise for mountaineers, trekkers, and nature lovers. The area features stunning valleys like Hunza,
                  Skardu, and Chitral, each offering unique landscapes and cultures.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Major Cities</h4>
                    <p className="text-gray-600 text-sm">Gilgit, Skardu, Hunza</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Famous For</h4>
                    <p className="text-gray-600 text-sm">K2, Trekking, Glaciers</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Languages</h4>
                    <p className="text-gray-600 text-sm">Urdu, Balti, Shina</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Climate</h4>
                    <p className="text-gray-600 text-sm">Alpine, Cold</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">15 Destinations</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Adventure Tourism</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Mountain Culture</span>
                </div>
              </div>
            </div>
          </div>

          {/* Punjab */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <img
                  src="/images/lahore.jpg?height=400&width=600"
                  alt="Punjab"
                  className="rounded-lg shadow-lg w-full h-80 object-cover"
                />
              </div>
              <div className="md:order-1">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Punjab</h2>
                <p className="text-gray-600 mb-6">
                  The most populous province of Pakistan, Punjab is known as the "Land of Five Rivers." It's the
                  cultural and economic heart of Pakistan, featuring historic cities like Lahore, agricultural
                  landscapes, and rich Mughal heritage. The region is famous for its vibrant culture, delicious cuisine,
                  and warm hospitality.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Major Cities</h4>
                    <p className="text-gray-600 text-sm">Lahore, Faisalabad, Multan</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Famous For</h4>
                    <p className="text-gray-600 text-sm">Mughal Architecture, Food</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Languages</h4>
                    <p className="text-gray-600 text-sm">Punjabi, Urdu</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Climate</h4>
                    <p className="text-gray-600 text-sm">Continental</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">12 Destinations</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Cultural Heritage</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Food Tourism</span>
                </div>
              </div>
            </div>
          </div>

          {/* Continue with other regions... */}
          {/* I'll add the remaining regions (Sindh, Balochistan, KPK) in similar format */}
        </div>
      </section>
    </div>
  )
}
