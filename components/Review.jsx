















"use client";

import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const demoReviews = [
  { id: 1, userName: "Ali Khan", message: "TrekTrips made my adventure unforgettable! Every destination was perfectly planned, and the guides were knowledgeable and friendly. From breathtaking landscapes to seamless logistics, it was an amazing experience.", rating: 5 },
  { id: 2, userName: "Sara Ahmed", message: "Traveling with TrekTrips was effortless and exciting. The tours are well-organized, the accommodations comfortable, and every day offered a new adventure. I can’t wait to book my next journey with them!", rating: 4 },
  { id: 3, userName: "Omar Malik", message: "TrekTrips turned my dream vacation into reality. Stunning scenery, engaging activities, and attentive guides made every moment memorable. Highly recommended for anyone seeking a perfect travel experience.", rating: 5 },
];

export default function ReviewsSection() {
  const [reviews, setReviews] = useState(demoReviews);
  const [formData, setFormData] = useState({ userName: "", email: "", message: "", rating: 5 });
  const [loading, setLoading] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/reviews");
        setReviews([...demoReviews, ...res.data]);
      } catch (err) {
        console.error("Failed to fetch reviews:", err);
      }
    };
    fetchReviews();
  }, []);

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const cardWidth = 400; // fixed width
        if (carouselRef.current.scrollLeft + carouselRef.current.offsetWidth >= carouselRef.current.scrollWidth) {
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          carouselRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
        }
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleRating = (value) => setFormData({ ...formData, rating: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/reviews", formData);
      setReviews([res.data, ...reviews]);
      setFormData({ userName: "", email: "", message: "", rating: 5 });
    } catch (err) {
      console.error("Failed to submit review:", err);
      alert("Failed to submit review. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-20 px-4">
      <h2 className="text-4xl font-bold text-center text-[#0d4544] mb-12">
        What Our Travelers Say
      </h2>

      {/* Carousel */}
      <div
        ref={carouselRef}
        className="flex gap-8 overflow-x-auto py-4 px-2 scroll-smooth hide-scrollbar"
      >
        {reviews.map((rev) => (
          <motion.div
            key={rev._id || rev.id}
            className="w-[400px] h-[250px] bg-white p-6 shadow-xl border-2 rounded-xl hover:border-[#0d4544] hover:shadow-2xl transition transform hover:-translate-y-4 cursor-pointer flex-shrink-0 relative coupon-card"
            whileHover={{ scale: 1.05 }}
          >
            {/* Decorative Ribbon */}
            <div className="absolute top-0 left-0 bg-[#0d4544] text-white px-4 py-1 rounded-br-lg font-semibold text-sm z-10">
              Top Review
            </div>

            {/* Inner soft shadow */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/30 rounded-xl pointer-events-none"></div>

            {/* Perforation circle */}
            <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-dashed border-[#0d4544] rounded-bl-full"></div>

            <div className="flex items-center justify-between mt-5 relative z-10">
              <h3 className="font-semibold text-3xl text-[#0d4544]">{rev.userName}</h3>
              <div className="flex text-yellow-400">
                {Array.from({ length: rev.rating }).map((_, i) => <span key={i}>★</span>)}
                {Array.from({ length: 5 - rev.rating }).map((_, i) => <span key={i} className="text-gray-300">★</span>)}
              </div>
            </div>
            <p className="text-gray-700 text-md relative z-10 break-words overflow-auto h-[150px]">
              {rev.message}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Review Form */}
      <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-3xl mx-auto mt-16">
        <h3 className="text-2xl font-semibold text-[#0d4544] mb-6 text-center">
          Share Your Review
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="userName" value={formData.userName} onChange={handleChange} placeholder="Your Name" className="w-full p-3 border rounded-xl text-sm" required />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="w-full p-3 border rounded-xl text-sm" required />
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Write your review" className="w-full p-3 border rounded-xl text-sm" required />

          <div className="flex space-x-1 justify-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                onClick={() => handleRating(star)}
                xmlns="http://www.w3.org/2000/svg"
                fill={star <= formData.rating ? "yellow" : "none"}
                viewBox="0 0 24 24"
                stroke={star <= formData.rating ? "yellow" : "gray"}
                className="w-6 h-6 cursor-pointer hover:scale-125 transition-transform"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>

          <button type="submit" disabled={loading} className="w-full bg-[#0d4544] text-white py-3 rounded-xl font-semibold hover:bg-[#126162] transition text-sm">
            {loading ? "Submitting..." : "Submit Review"}
          </button>
        </form>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .coupon-card {
          border-radius: 1.5rem;
          overflow: hidden;
          position: relative;
          clip-path: polygon(
            0 0,
            100% 0,
            100% 100%,
            50px 100%, /* bottom-left semicircle */
            0 calc(100% - 50px)
          );
        }
      `}</style>
    </div>
  );
}
