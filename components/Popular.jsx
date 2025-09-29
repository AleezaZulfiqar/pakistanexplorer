"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

const destinations = [
  {
    name: "Hunza Valley",
    description: "Majestic mountains and ancient culture",
    image: "/images/hunnnzaa.jpg",
    rating: 4.8,
  },
  {
    name: "Skardu",
    description: "Gateway to K2 and Karakoram Range",
    image: "/images/skardu.png",
    rating: 4.7,
  },
  {
    name: "Swat Valley",
    description: "Switzerland of Pakistan",
    image: "/images/swaat.jpg",
    rating: 4.6,
  },
  {
    name: "Murree Nathia Gali",
    description: "Lush green hills and scenic views",
    image: "/images/muree.jpg",
    rating: 4.5,
  },
  {
    name: "Naran Kaghan",
    description: "Pristine lakes and mountain trails",
    image: "/images/naran.jpg",
    rating: 4.7,
  },
  {
    name: "Azad Kashmir",
    description: "Rivers, valleys, and breathtaking scenery",
    image: "/images/kashmir.jpg",
    rating: 4.6,
  },
];

const PopularDestinations = () => {
  const router = useRouter();

  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-4xl font-extrabold text-[#0d4544] mb-4 tracking-tight">
            Explore Our Top Destinations
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Discover Pakistan's most breathtaking locations
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative group rounded-lg overflow-hidden shadow-lg cursor-pointer"
            >
              {/* Image with smooth zoom on hover */}
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="relative w-full h-64"
              >
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover rounded-lg"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg"></div>
              </motion.div>

              {/* Text Content */}
              <div className="absolute bottom-4 left-4 text-white z-10">
                <h3 className="text-xl md:text-2xl font-bold mb-1">{dest.name}</h3>
                <p className="text-sm md:text-base">{dest.description}</p>
              </div>

              {/* Rating badge */}
              <div className="absolute top-4 right-4">
                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
                  <svg
                    className="h-4 w-4 text-yellow-400 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.184c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.922-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.175 0l-3.388 2.46c-.784.57-1.838-.196-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.043 9.4c-.783-.57-.38-1.81.588-1.81h4.184a1 1 0 00.95-.69l1.286-3.974z" />
                  </svg>
                  <span className="text-white text-sm ml-1">{dest.rating}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explore Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => router.push("/destinations")}
            className="bg-[#0d4544] hover:bg-black text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
          >
            Explore All Destinations
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
