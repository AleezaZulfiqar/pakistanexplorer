


"use client";
import { useRouter } from "next/navigation";

import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Mountain,
  Users,
  Utensils,
  BookOpen,
} from "lucide-react";

export default function BlogPage({ navigateToPage }) {
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Travel Blog</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Discover Pakistan through our stories, tips, and insider knowledge from local experts
          </p>
        </div>
      </section> */}

      {/* Featured Article */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Featured Article</h2>
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <img
                src="/images/bg.png?height=400&width=800"
                alt="Featured article"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <Calendar className="h-5 w-5 text-teal-600 mr-2" />
                  <span className="text-gray-600">March 20, 2024</span>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-gray-600">15 min read</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  The Ultimate Guide to Trekking in Northern Pakistan
                </h3>
                <p className="text-gray-600 mb-6 text-lg">
                  Northern Pakistan offers some of the world's most spectacular trekking opportunities...
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Trekking</span>
                  <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Northern Areas</span>
                  <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Adventure</span>
                  <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">K2</span>
                </div>
              
                  <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors">
                    Read Full Article
                  </button>
               
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Browse by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Adventure", count: "12 articles", icon: Mountain, color: "bg-red-100 text-red-800" },
              { name: "Culture", count: "8 articles", icon: Users, color: "bg-blue-100 text-blue-800" },
              { name: "Food", count: "6 articles", icon: Utensils, color: "bg-green-100 text-green-800" },
              { name: "Travel Tips", count: "10 articles", icon: BookOpen, color: "bg-purple-100 text-purple-800" },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg mb-4">
                  <category.icon className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-3">{category.count}</p>
                <span className={`px-3 py-1 rounded-full text-sm ${category.color}`}>Explore</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Recent Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Best Time to Visit Northern Pakistan",
                excerpt:
                  "Planning your trip to the northern areas?...",
                date: "March 15, 2024",
                readTime: "8 min read",
                category: "Travel Tips",
                image: "/images/gilgit.jpg?height=200&width=300",
                href: "/blog/best-time-north",
              },
              {
                title: "Hidden Gems of Balochistan",
                excerpt:
                  "Discover the untold beauty of Pakistan's largest province...",
                date: "March 10, 2024",
                readTime: "12 min read",
                category: "Adventure",
                image: "/images/bl.jfif?height=200&width=300",
                href: "/blog/balochistan-gems",
              },
              {
                title: "Food Guide: Must-Try Pakistani Dishes",
                excerpt:
                  "A culinary journey through Pakistan's diverse flavors...",
                date: "March 5, 2024",
                readTime: "6 min read",
                category: "Food",
                image: "/images/food.jpg?height=200&width=300",
                href: "/blog/pakistani-dishes",
              },
            ].map((article, index) => (
              <article
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              >
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded text-xs font-medium">
                      {article.category}
                    </span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-gray-500 text-sm">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{article.date}</span>
                    </div>
                    {/* <Link href={article.href}> */}
                      <button className="text-teal-600 hover:text-teal-700 font-medium text-sm">Read More →</button>
                    {/* </Link> */}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to our newsletter for the latest travel stories, tips, and exclusive offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
