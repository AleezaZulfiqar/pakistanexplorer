"use client";

import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Heart,
  Globe,
  Award,
  Users,
  Shield,
  CheckCircle,
  Clock,
} from "lucide-react";

export default function AboutPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => router.push("/")}
          className="flex items-center text-black hover:text-white mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </button>
      </div>

      {/* Your existing content remains the same below... */}


      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-l from-blue-300 to-[#809c13] text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Pakistan Explorer</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Your trusted companion in discovering the magnificent beauty, rich culture, and warm hospitality of Pakistan
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2008 by a group of passionate travelers and local guides, Pakistan Explorer was born from a
                simple yet powerful vision: to showcase Pakistan's incredible diversity and beauty to the world while
                promoting sustainable and responsible tourism.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as a small local tour company has grown into Pakistan's premier travel agency, serving
                thousands of satisfied customers from around the globe.
              </p>
              <p className="text-lg text-gray-600">
                Travel is about connecting with people and culture. We take you from Lahore’s bazaars to Hunza’s valleys
                for real experiences.
              </p>
            </div>
            <div>
              <img
                src="/Images/bg.png?height=500&width=600"
                alt="Pakistan Explorer team"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <Heart className="h-8 w-8 text-teal-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 mb-4">
                To provide exceptional travel experiences that highlight Pakistan's beauty and culture, and uplift local communities.
              </p>
              <p className="text-gray-600">
                We aim to break stereotypes and showcase the real Pakistan — a land of breathtaking landscapes and warm people.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <Globe className="h-8 w-8 text-teal-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 mb-4">
                To become the most trusted travel agency in Pakistan, known worldwide for our authentic and sustainable tours.
              </p>
              <p className="text-gray-600">
                We envision a thriving tourism economy that benefits locals and preserves heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Pakistan Explorer?</h2>
            <p className="text-xl text-gray-600">
              Here's what sets us apart from other travel companies in Pakistan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Award, title: "15+ Years Experience", desc: "Over a decade and a half of expertise in Pakistan tourism." },
              { icon: Users, title: "Local Expertise", desc: "Local guides ensure authentic experiences in every region." },
              { icon: Shield, title: "Safety First", desc: "We follow top safety standards with trusted partners." },
              { icon: CheckCircle, title: "Customized Packages", desc: "Tailored tours based on your preferences and style." },
              { icon: Clock, title: "24/7 Support", desc: "Round-the-clock help before and during your travel." },
              { icon: Heart, title: "Sustainable Tourism", desc: "We support local communities and eco-tourism." },
            ].map((item, i) => (
              <div key={i} className="text-center p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              The passionate individuals behind your unforgettable Pakistan experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Ahmed Khan", role: "Founder & CEO", experience: "20+ years in tourism" },
              { name: "Fatima Ali", role: "Head of Operations", experience: "15+ years experience" },
              { name: "Hassan Shah", role: "Senior Guide", experience: "12+ years guiding" },
              { name: "Ayesha Malik", role: "Customer Relations", experience: "8+ years in hospitality" },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=250&width=200"
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-teal-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600">Numbers that speak for our commitment and success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "2500+", label: "Happy Travelers", detail: "From 45+ countries" },
              { number: "75+", label: "Destinations Covered", detail: "Across all provinces" },
              { number: "15+", label: "Years of Excellence", detail: "Since 2008" },
              { number: "98%", label: "Customer Satisfaction", detail: "Based on reviews" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-teal-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-lg">{stat.label}</div>
                <div className="text-gray-500 text-sm mt-1">{stat.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
