"use client"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation";
import Link from 'next/link';
  
import {
  Star,
  Calendar,
  Users,
  Camera,
  Mountain,
  Plane,
  Car,
  Hotel,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react"

export default function HomePage() {
     const router = useRouter();
  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/bg.png')",

            // backgroundBlendMode: "overlay",
          }}
        >
          <div className="absolute inset-0 "></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Plane className="h-8 w-8 text-white" />
          </div>
          <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-[#809c13] rounded-full flex items-center justify-center backdrop-blur-sm">
            <Car className="h-10 w-10 text-white" />
          </div>
          <div className="absolute bottom-1/3 left-1/3 w-14 h-14 bg-[#809c13] rounded-full flex items-center justify-center backdrop-blur-sm">
            <Mountain className="h-7 w-7 text-white" />
          </div>
          <div className="absolute bottom-1/4 right-1/4 w-18 h-18 bg-[#809c13] rounded-lg flex items-center justify-center backdrop-blur-sm">
            <Hotel className="h-8 w-8 text-white" />
          </div>
        </div>

        <div className="relative z-10 text-center text-black px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover the Beauty of
            <span className="block text-black">Pakistan</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-black max-w-2xl mx-auto">
            From the mighty peaks of K2 to the serene beaches of Karachi, explore Pakistan's diverse landscapes and rich
            culture
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
  href="https://wa.me/923274755837"  // 👈 Replace this with your number
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 transition duration-300"
>
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M12.004 2.003c-5.523 0-9.997 4.473-9.997 9.997 0 1.76.463 3.471 1.342 4.977l-1.45 5.3 5.43-1.428a9.953 9.953 0 0 0 4.675 1.15c5.523 0 9.997-4.474 9.997-9.997 0-5.524-4.474-9.999-9.997-9.999zm0 18.229c-1.451 0-2.874-.375-4.126-1.088l-.295-.167-3.222.847.852-3.172-.192-.312a8.226 8.226 0 0 1-1.31-4.483c0-4.553 3.704-8.257 8.257-8.257 4.554 0 8.259 3.704 8.259 8.257 0 4.553-3.705 8.258-8.259 8.258zm4.657-6.199c-.254-.127-1.502-.741-1.735-.826-.232-.086-.401-.127-.57.127-.168.254-.654.825-.803.996-.149.168-.296.19-.55.063-.254-.127-1.071-.394-2.04-1.255-.754-.673-1.262-1.504-1.41-1.758-.148-.254-.016-.392.112-.518.116-.115.26-.3.391-.449.129-.15.17-.254.254-.423.084-.168.042-.317-.021-.444-.064-.127-.57-1.374-.781-1.884-.206-.495-.417-.427-.57-.435l-.487-.008c-.17 0-.445.063-.678.296-.232.232-.89.867-.89 2.112s.911 2.451 1.037 2.621c.127.169 1.791 2.732 4.347 3.827.608.262 1.082.418 1.45.535.609.194 1.163.167 1.6.102.488-.072 1.502-.611 1.715-1.202.211-.59.211-1.096.148-1.202-.064-.105-.232-.169-.486-.296z" />\n  </svg>
  <span className="font-medium">Chat with us</span>
</a>
            <Link href="/package">
  <button className="bg-[#FFE3BB] text-black hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
    View Packages
  </button>
</Link>
          </div>
        </div>
      </section>

      {/* Quick Destinations Preview */}
      <section id="destinations" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
            <p className="text-xl text-gray-600">Explore Pakistan's most breathtaking locations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Hunza Valley",
                description: "Majestic mountains and ancient culture",
                image: "/images/hunza.png?height=300&width=400",
              },
              {
                name: "Skardu",
                description: "Gateway to K2 and Karakoram Range",
                image: "/images/skardu.png?height=300&width=400",
              },
              {
                name: "Swat Valley",
                description: "Switzerland of Pakistan",
                image: "/images/swat.png?height=300&width=400",
              },
            ].map((destination, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
                    <p className="text-sm text-gray-200">{destination.description}</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-white text-sm ml-1">4.8</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
             onClick={() => router.push("destinations")}
              className="bg-[#809c13] hover:bg-black text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              View All Destinations
            </button>
          </div>
        </div>
      </section>

      {/* Regions Section */}
      <section id="regions" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore by Region</h2>
            <p className="text-xl text-gray-600">Discover Pakistan's diverse geographical regions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Northern Areas", count: "15 destinations", icon: Mountain },
              { name: "Punjab", count: "12 destinations", icon: MapPin },
              { name: "Sindh", count: "8 destinations", icon: Camera },
              { name: "Balochistan", count: "10 destinations", icon: Users },
            ].map((region, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"

              >
                <div className="flex items-center justify-center w-12 h-12 bg-teal-100 rounded-lg mb-4">
                  <region.icon className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{region.name}</h3>
                <p className="text-gray-600">{region.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Complete travel solutions for your Pakistan adventure</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Tour Packages", description: "Customized tour packages for all budgets", icon: Calendar },
              { title: "Hotel Booking", description: "Best accommodations across Pakistan", icon: Hotel },
              { title: "Transportation", description: "Reliable transport services", icon: Car },
              { title: "Adventure Tours", description: "Trekking, climbing, and outdoor activities", icon: Mountain },
              { title: "Cultural Tours", description: "Explore Pakistan's rich heritage", icon: Camera },
              { title: "Group Travel", description: "Special packages for groups", icon: Users },
            ].map((service, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all cursor-pointer"
               
              >
                <div className="flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Travel Blog</h2>
            <p className="text-xl text-gray-600">Latest stories and travel tips from Pakistan</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Best Time to Visit Northern Pakistan",
                date: "March 15, 2024",
                image: "/images/nt.webp?height=200&width=300",
              },
              {
                title: "Hidden Gems of Balochistan",
                date: "March 10, 2024",
                image: "/images/blochi.webp?height=200&width=300",
              },
              {
                title: "Food Guide: Must-Try Pakistani Dishes",
                date: "March 5, 2024",
                image: "/images/food.jpg?height=200&width=300",
              },
            ].map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
    
              >
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                  <button className="text-teal-600 hover:text-teal-700 font-medium">Read More →</button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigateToPage("blog")}
              className="bg-[#809c13] hover:bg-teal-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              View All Articles
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Mountain className="h-8 w-8 text-teal-400" />
                <span className="ml-2 text-xl font-bold">Pakistan Explorer</span>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted partner for exploring the beauty and culture of Pakistan.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-teal-700">
                  <Facebook className="h-4 w-4" />
                </div>
                <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-teal-700">
                  <Twitter className="h-4 w-4" />
                </div>
                <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-teal-700">
                  <Instagram className="h-4 w-4" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button onClick={() => navigateToPage("home")} className="hover:text-white transition-colors">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateToPage("about")} className="hover:text-white transition-colors">
                    About
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateToPage("destinations")} className="hover:text-white transition-colors">
                    Destinations
                  </button>
                </li>
                <li>
                  <button onClick={() => navigateToPage("services")} className="hover:text-white transition-colors">
                    Services
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Destinations</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Hunza Valley
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Skardu
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Swat Valley
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Lahore
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+92 300 123 4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>info@pakistanexplorer.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Islamabad, Pakistan</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Pakistan Explorer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
