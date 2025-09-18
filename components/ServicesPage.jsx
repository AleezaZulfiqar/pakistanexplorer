"use client"

import { ArrowLeft, Calendar, Hotel, Car, Mountain, CheckCircle, Navigation, Shield, Camera } from "lucide-react"
import { useRouter } from "next/navigation";

import Link from "next/link";
export default function ServicesPage() {
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Comprehensive travel solutions designed to make your Pakistan journey unforgettable
          </p>
        </div>
      </section> */}

      {/* Detailed Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tour Packages */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Calendar className="h-12 w-12 text-teal-600 mr-4" />
                  <h2 className="text-4xl font-bold text-gray-900">Customized Tour Packages</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  We create personalized itineraries tailored to your interests, budget, and travel style. Whether
                  you're seeking adventure, culture, or relaxation, our expert team designs the perfect Pakistan
                  experience for you.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Adventure Packages</h4>
                      <p className="text-gray-600 text-sm">Trekking, mountaineering, and outdoor activities</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Cultural Tours</h4>
                      <p className="text-gray-600 text-sm">
                        Heritage sites, local traditions, and authentic experiences
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Family Packages</h4>
                      <p className="text-gray-600 text-sm">Kid-friendly activities and comfortable accommodations</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Luxury Tours</h4>
                      <p className="text-gray-600 text-sm">Premium accommodations and exclusive experiences</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="/images/tour.jpg?height=400&width=600"
                  alt="Tour Packages"
                  className="rounded-lg shadow-lg w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Additional Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <Hotel className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Hotel & Accommodation</h3>
              <p className="text-gray-600 mb-4">
                From luxury resorts to budget-friendly guesthouses, we have partnerships with the best accommodations
                across Pakistan.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Luxury hotels and resorts</li>
                <li>• Mountain lodges</li>
                <li>• Budget accommodations</li>
                <li>• Best rate guarantees</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <Car className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Transportation Services</h3>
              <p className="text-gray-600 mb-4">
                Safe, comfortable, and reliable transportation throughout Pakistan with experienced local drivers.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Private cars and SUVs</li>
                <li>• Mini buses for groups</li>
                <li>• 4WD vehicles for mountains</li>
                <li>• Airport transfers</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <Navigation className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Guides</h3>
              <p className="text-gray-600 mb-4">
                Experienced local guides who speak multiple languages and have deep knowledge of Pakistan's history.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Certified mountain guides</li>
                <li>• Cultural heritage experts</li>
                <li>• Multi-language support</li>
                <li>• Safety trained professionals</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <Shield className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Travel Insurance</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive travel insurance coverage to ensure your peace of mind during your Pakistan adventure.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Medical coverage</li>
                <li>• Trip cancellation protection</li>
                <li>• Adventure activity coverage</li>
                <li>• 24/7 emergency assistance</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <Camera className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Photography Services</h3>
              <p className="text-gray-600 mb-4">
                Professional photography services to capture your memorable moments in Pakistan's stunning landscapes.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Professional photographers</li>
                <li>• Drone photography</li>
                <li>• Digital photo packages</li>
                <li>• Custom photo albums</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <Mountain className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Adventure Tours</h3>
              <p className="text-gray-600 mb-4">
                Specialized adventure packages for thrill-seekers and outdoor enthusiasts exploring Pakistan's
                wilderness.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Trekking and hiking</li>
                <li>• Rock climbing</li>
                <li>• River rafting</li>
                <li>• Camping expeditions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
