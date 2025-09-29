


// "use client";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import { motion } from "framer-motion";

// const destinationPackages = [
//   {
//     id: 1,
//     name: "Karachi City Tour",
//     destination: "Karachi",
//     duration: "3 Days / 2 Nights",
//     price: "PKR 25,000",
//     image: "/images/karachi.jpg",
//     highlights: ["Clifton Beach", "Port Grand", "Mazar-e-Quaid"],
//   },
//   {
//     id: 2,
//     name: "Lahore Heritage Trip",
//     destination: "Lahore",
//     duration: "4 Days / 3 Nights",
//     price: "PKR 35,000",
//     image: "/images/lhr.jpg",
//     highlights: ["Badshahi Mosque", "Shalimar Gardens", "Anarkali Bazaar"],
//   },
//   {
//     id: 3,
//     name: "Islamabad Scenic Package",
//     destination: "Islamabad",
//     duration: "2 Days / 1 Night",
//     price: "PKR 18,000",
//     image: "/images/isla.jpg",
//     highlights: ["Faisal Mosque", "Pakistan Monument", "Daman-e-Koh"],
//   },
//   {
//     id: 4,
//     name: "Murree Hills Escape",
//     destination: "Murree",
//     duration: "3 Days / 2 Nights",
//     price: "PKR 28,000",
//     image: "/images/murree.webp",
//     highlights: ["Mall Road", "Patriata", "Kashmir Point"],
//   },
//   {
//     id: 5,
//     name: "Naran Kaghan Adventure",
//     destination: "Naran Kaghan",
//     duration: "5 Days / 4 Nights",
//     price: "PKR 50,000",
//     image: "/images/naran.jpg",
//     highlights: ["Lake Saif ul Malook", "Babusar Top", "Lulusar Lake"],
//   },
//   {
//     id: 6,
//     name: "Fairy Meadows Trek",
//     destination: "Fairy Meadows",
//     duration: "6 Days / 5 Nights",
//     price: "PKR 60,000",
//     image: "/images/fairy.webp",
//     highlights: ["Nanga Parbat View", "Reflection Lake", "Base Camp Trek"],
//   },
// ];

// const DestinationPackages = () => {
//   const router = useRouter();

//   const handleBookNow = async (destination) => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/auth/me", {
//         withCredentials: true,
//       });

//       if (res.data && res.data._id) {
//         router.push(
//           `/booking-form?destination=${encodeURIComponent(destination)}`
//         );
//       }
//     } catch (err) {
//       router.push(
//         `/login?redirect=${encodeURIComponent(
//           `/booking-form?destination=${destination}`
//         )}`
//       );
//     }
//   };

//   return (
//     <div className="py-16 px-4 sm:px-6 lg:px-20 bg-gray-50">
//       <motion.h2
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-4xl font-bold text-center text-[#0d4544] mb-12"
//       >
//         Destination Packages
//       </motion.h2>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//         {destinationPackages.map((pkg, index) => (
//           <motion.div
//             key={pkg.id}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.15 }}
//             viewport={{ once: true }}
//             className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2 duration-300 overflow-hidden"
//           >
//             <div className="relative w-full h-56">
//               <Image
//                 src={pkg.image}
//                 alt={pkg.name}
//                 fill
//                 className="rounded-t-2xl object-cover transform hover:scale-110 transition duration-500"
//               />
//             </div>
//             <div className="p-6 flex flex-col justify-between h-[320px]">
//               <div>
//                 <h3 className="text-2xl font-bold text-gray-800 mb-2">
//                   {pkg.name}
//                 </h3>
//                 <p className="text-sm text-gray-500 mb-1">
//                   <strong>Destination:</strong> {pkg.destination}
//                 </p>
//                 <p className="text-sm text-gray-500 mb-1">
//                   <strong>Duration:</strong> {pkg.duration}
//                 </p>
//                 <p className="text-sm text-gray-500 mb-4">
//                   <strong>Highlights:</strong> {pkg.highlights.join(", ")}
//                 </p>
//               </div>

//               <div className="flex justify-between items-center mt-auto">
//                 <span className="text-[#0d4544] font-bold text-lg">
//                   {pkg.price}
//                 </span>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => handleBookNow(pkg.destination)}
//                   className="bg-[#0d4544] text-white px-4 py-2 rounded-lg text-sm hover:bg-white hover:text-[#0d4544] border border-[#0d4544] transition duration-300"
//                 >
//                   Book Now
//                 </motion.button>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DestinationPackages;





// "use client";

// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import { motion } from "framer-motion";
// import { ArrowLeft } from "lucide-react";


// const destinationPackages = [
//   {
//     id: 1,
//     name: "Karachi City Discovery",
//     destination: "Karachi",
//     duration: "3 Days / 2 Nights",
//     price: "PKR 25,000",
//     image: "/images/karachi.jpg",
//     highlights: ["Clifton Beach", "Port Grand", "Mazar-e-Quaid"],
//   },
//   {
//     id: 2,
//     name: "Lahore Heritage Experience",
//     destination: "Lahore",
//     duration: "4 Days / 3 Nights",
//     price: "PKR 35,000",
//     image: "/images/lhr.jpg",
//     highlights: ["Badshahi Mosque", "Shalimar Gardens", "Anarkali Bazaar"],
//   },
//   {
//     id: 3,
//     name: "Islamabad Scenic Escape",
//     destination: "Islamabad",
//     duration: "2 Days / 1 Night",
//     price: "PKR 18,000",
//     image: "/images/isla.jpg",
//     highlights: ["Faisal Mosque", "Pakistan Monument", "Daman-e-Koh"],
//   },
//   {
//     id: 4,
//     name: "Murree Hills Retreat",
//     destination: "Murree",
//     duration: "3 Days / 2 Nights",
//     price: "PKR 28,000",
//     image: "/images/murree.webp",
//     highlights: ["Mall Road", "Patriata", "Kashmir Point"],
//   },
//   {
//     id: 5,
//     name: "Naran Kaghan Adventure",
//     destination: "Naran Kaghan",
//     duration: "5 Days / 4 Nights",
//     price: "PKR 50,000",
//     image: "/images/naran.jpg",
//     highlights: ["Lake Saif ul Malook", "Babusar Top", "Lulusar Lake"],
//   },
//   {
//     id: 6,
//     name: "Fairy Meadows Trek",
//     destination: "Fairy Meadows",
//     duration: "6 Days / 5 Nights",
//     price: "PKR 60,000",
//     image: "/images/fairy.webp",
//     highlights: ["Nanga Parbat View", "Reflection Lake", "Base Camp Trek"],
//   },
//   {
//     id: 7,
//     name: "Swat Valley Serenity",
//     destination: "Swat",
//     duration: "3 Days / 2 Nights",
//     price: "PKR 30,000",
//     image: "/images/swaat.jpg",
//     highlights: ["Malam Jabba", "Mingora Bazaar", "Fizagat Park"],
//   },
//   {
//     id: 8,
//     name: "Hunza Valley Escape",
//     destination: "Hunnnzaa",
//     duration: "4 Days / 3 Nights",
//     price: "PKR 45,000",
//     image: "/images/hunnnzaa.jpg",
//     highlights: ["Karimabad Fort", "Attabad Lake", "Eagle's Nest"],
//   },
//   {
//     id: 9,
//     name: "Skardu Adventure Trip",
//     destination: "Skardu",
//     duration: "5 Days / 4 Nights",
//     price: "PKR 55,000",
//     image: "/images/skardu.png",
//     highlights: ["Shangrila Resort", "Deosai Plains", "Satpara Lake"],
//   },
// ];

// const DestinationPackages = () => {
//   const router = useRouter();

//   const handleBookNow = async (destination) => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/auth/me", {
//         withCredentials: true,
//       });

//       if (res.data && res.data._id) {
//         router.push(
//           `/booking-form?destination=${encodeURIComponent(destination)}`
//         );
//       }
//     } catch (err) {
//       router.push(
//         `/login?redirect=${encodeURIComponent(
//           `/booking-form?destination=${destination}`
//         )}`
//       );
//     }
//   };

//   return (
    
//     <div className="py-14 px-4 sm:px-6 lg:px-20 bg-gray-50 font-sans">
//        <button
//           onClick={() => router.push("/")}
//           className="flex items-center text-teal-600 hover:text-teal-700 mb-8"
//         >
//           <ArrowLeft className="h-5 w-5 mr-2" />
//           Back to Home
//         </button>
//       {/* Elegant Heading */}
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-3xl md:text-4xl font-extrabold text-center text-[#0d4544] mb-10 tracking-tight"
//       >
//         Handpicked Travel Experiences
//       </motion.h2>

//       {/* Packages Grid */}
//       <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {destinationPackages.map((pkg, index) => (
//           <motion.div
//             key={pkg.id}
//             initial={{ opacity: 0, y: 20, scale: 0.97 }}
//             whileInView={{ opacity: 1, y: 0, scale: 1 }}
//             transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.15 }}
//             viewport={{ once: true }}
//             className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col relative"
//           >
//             {/* Image Section */}
//             <div className="relative w-full h-52 overflow-hidden">
//               <motion.div
//                 whileHover={{ scale: 1.1 }}
//                 transition={{ duration: 0.9, ease: "easeInOut" }}
//                 className="relative w-full h-full"
//               >
//                 <Image
//                   src={pkg.image}
//                   alt={pkg.name}
//                   fill
//                   className="object-cover rounded-t-2xl"
//                 />
//                 {/* Light gradient overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-t-2xl"></div>
//               </motion.div>
//             </div>

//             {/* Content Section */}
//             <div className="p-5 flex flex-col flex-1">
//               <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-1">
//                 {pkg.name}
//               </h3>
//               <p className="text-sm text-gray-500 mb-1">
//                 <strong>Destination:</strong> {pkg.destination}
//               </p>
//               <p className="text-sm text-gray-500 mb-1">
//                 <strong>Duration:</strong> {pkg.duration}
//               </p>
//               <p className="text-sm text-gray-500 mb-3">
//                 <strong>Highlights:</strong> {pkg.highlights.join(", ")}
//               </p>

//               {/* Price + Button */}
//               <div className="flex justify-between items-center mt-auto pt-3 border-t border-gray-200">
//                 <span className="text-[#0d4544] font-bold text-lg md:text-xl">
//                   {pkg.price}
//                 </span>
//                 <motion.button
//                   onClick={() => handleBookNow(pkg.destination)}
//                   whileHover={{ scale: 1.06 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="relative overflow-hidden bg-[#0d4544] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white hover:text-[#0d4544] border border-[#0d4544] transition duration-300"
//                 >
//                   Book Now
//                 </motion.button>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DestinationPackages;









// "use client";

// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import { motion } from "framer-motion";
// import { ArrowLeft } from "lucide-react";
// import { useState } from "react";

// const destinationPackages = [
//   {
//     id: 1,
//     name: "Karachi City Discovery",
//     destination: "Karachi",
//     duration: "3 Days / 2 Nights",
//     price: "PKR 25,000",
//     image: "/images/karachi.jpg",
//     highlights: ["Clifton Beach", "Port Grand", "Mazar-e-Quaid"],
//   },
//   {
//     id: 2,
//     name: "Lahore Heritage Experience",
//     destination: "Lahore",
//     duration: "4 Days / 3 Nights",
//     price: "PKR 35,000",
//     image: "/images/lhr.jpg",
//     highlights: ["Badshahi Mosque", "Shalimar Gardens", "Anarkali Bazaar"],
//   },
//   {
//     id: 3,
//     name: "Islamabad Scenic Escape",
//     destination: "Islamabad",
//     duration: "2 Days / 1 Night",
//     price: "PKR 18,000",
//     image: "/images/isla.jpg",
//     highlights: ["Faisal Mosque", "Pakistan Monument", "Daman-e-Koh"],
//   },
//   {
//     id: 4,
//     name: "Murree Hills Retreat",
//     destination: "Murree",
//     duration: "3 Days / 2 Nights",
//     price: "PKR 28,000",
//     image: "/images/murree.webp",
//     highlights: ["Mall Road", "Patriata", "Kashmir Point"],
//   },
//   {
//     id: 5,
//     name: "Naran Kaghan Adventure",
//     destination: "Naran Kaghan",
//     duration: "5 Days / 4 Nights",
//     price: "PKR 50,000",
//     image: "/images/naran.jpg",
//     highlights: ["Lake Saif ul Malook", "Babusar Top", "Lulusar Lake"],
//   },
// ];

// const DestinationPackages = () => {
//   const router = useRouter();
//   const [showLoginModal, setShowLoginModal] = useState(false);

//   const handleBookNow = async (destination) => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/auth/me", {
//         withCredentials: true,
//       });

//       if (res.data && res.data.user) {
//         router.push(
//           `/booking-form?destination=${encodeURIComponent(destination)}`
//         );
//       } else {
//         setShowLoginModal(true);
//       }
//     } catch (err) {
//       setShowLoginModal(true);
//     }
//   };

//   return (
//     <div className="py-14 px-4 sm:px-6 lg:px-20 bg-gray-50 font-sans relative">
//       <button
//         onClick={() => router.push("/")}
//         className="flex items-center text-teal-600 hover:text-teal-700 mb-8"
//       >
//         <ArrowLeft className="h-5 w-5 mr-2" />
//         Back to Home
//       </button>

//       {/* Elegant Heading */}
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-3xl md:text-4xl font-extrabold text-center text-[#0d4544] mb-10 tracking-tight"
//       >
//         Handpicked Travel Experiences
//       </motion.h2>

//       {/* Packages Grid */}
//       <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {destinationPackages.map((pkg, index) => (
//           <motion.div
//             key={pkg.id}
//             initial={{ opacity: 0, y: 20, scale: 0.97 }}
//             whileInView={{ opacity: 1, y: 0, scale: 1 }}
//             transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.15 }}
//             viewport={{ once: true }}
//             className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col relative"
//           >
//             {/* Image Section */}
//             <div className="relative w-full h-52 overflow-hidden">
//               <motion.div
//                 whileHover={{ scale: 1.1 }}
//                 transition={{ duration: 0.9, ease: "easeInOut" }}
//                 className="relative w-full h-full"
//               >
//                 <Image
//                   src={pkg.image}
//                   alt={pkg.name}
//                   fill
//                   className="object-cover rounded-t-2xl"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-t-2xl"></div>
//               </motion.div>
//             </div>

//             {/* Content Section */}
//             <div className="p-5 flex flex-col flex-1">
//               <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-1">
//                 {pkg.name}
//               </h3>
//               <p className="text-sm text-gray-500 mb-1">
//                 <strong>Destination:</strong> {pkg.destination}
//               </p>
//               <p className="text-sm text-gray-500 mb-1">
//                 <strong>Duration:</strong> {pkg.duration}
//               </p>
//               <p className="text-sm text-gray-500 mb-3">
//                 <strong>Highlights:</strong> {pkg.highlights.join(", ")}
//               </p>

//               {/* Price + Button */}
//               <div className="flex justify-between items-center mt-auto pt-3 border-t border-gray-200">
//                 <span className="text-[#0d4544] font-bold text-lg md:text-xl">
//                   {pkg.price}
//                 </span>
//                 <motion.button
//                   onClick={() => handleBookNow(pkg.destination)}
//                   whileHover={{ scale: 1.06 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="relative overflow-hidden bg-[#0d4544] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white hover:text-[#0d4544] border border-[#0d4544] transition duration-300"
//                 >
//                   Book Now
//                 </motion.button>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Login Modal */}
//       {showLoginModal && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-xl p-8 max-w-md w-full relative">
//             <h2 className="text-2xl font-semibold mb-4 text-gray-800">Login Required</h2>
//             <p className="text-gray-600 mb-6">
//               Please login first to book this package.
//             </p>
//             <button
//               onClick={() => router.push("/login")}
//               className="w-full bg-[#0d4544] text-white py-2 rounded-lg hover:bg-[#0b3837] transition mb-3"
//             >
//               Go to Login
//             </button>
//             <button
//               onClick={() => setShowLoginModal(false)}
//               className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DestinationPackages;




















// "use client";

// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import { motion } from "framer-motion";
// import { ArrowLeft } from "lucide-react";
// import { useState } from "react";

// const destinationPackages = [
//   {
//     id: 1,
//     name: "Karachi City Discovery",
//     destination: "Karachi",
//     duration: "3 Days / 2 Nights",
//     price: "PKR 25,000",
//     image: "/images/karachi.jpg",
//     highlights: ["Clifton Beach", "Port Grand", "Mazar-e-Quaid"],
//   },
//   {
//     id: 2,
//     name: "Lahore Heritage Experience",
//     destination: "Lahore",
//     duration: "4 Days / 3 Nights",
//     price: "PKR 35,000",
//     image: "/images/lhr.jpg",
//     highlights: ["Badshahi Mosque", "Shalimar Gardens", "Anarkali Bazaar"],
//   },
//   {
//     id: 3,
//     name: "Islamabad Scenic Escape",
//     destination: "Islamabad",
//     duration: "2 Days / 1 Night",
//     price: "PKR 18,000",
//     image: "/images/isla.jpg",
//     highlights: ["Faisal Mosque", "Pakistan Monument", "Daman-e-Koh"],
//   },
//   {
//     id: 4,
//     name: "Murree Hills Retreat",
//     destination: "Murree",
//     duration: "3 Days / 2 Nights",
//     price: "PKR 28,000",
//     image: "/images/murree.webp",
//     highlights: ["Mall Road", "Patriata", "Kashmir Point"],
//   },
//   {
//     id: 5,
//     name: "Naran Kaghan Adventure",
//     destination: "Naran Kaghan",
//     duration: "5 Days / 4 Nights",
//     price: "PKR 50,000",
//     image: "/images/naran.jpg",
//     highlights: ["Lake Saif ul Malook", "Babusar Top", "Lulusar Lake"],
//   },
// ];

// const DestinationPackages = () => {
//   const router = useRouter();
//   const [showLoginModal, setShowLoginModal] = useState(false);

//   const handleBookNow = async (destination) => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/auth/me", {
//         withCredentials: true,
//       });

//       if (res.data && res.data.user) {
//         router.push(
//           `/booking-form?destination=${encodeURIComponent(destination)}`
//         );
//       } else {
//         setShowLoginModal(true);
//       }
//     } catch (err) {
//       setShowLoginModal(true);
//     }
//   };

//   return (
//     <div className="py-14 px-4 sm:px-6 lg:px-20 bg-gray-50 font-sans relative">
//       <button
//         onClick={() => router.push("/")}
//         className="flex items-center text-teal-600 hover:text-teal-700 mb-8"
//       >
//         <ArrowLeft className="h-5 w-5 mr-2" />
//         Back to Home
//       </button>

//       {/* Elegant Heading */}
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-3xl md:text-4xl font-extrabold text-center text-[#0d4544] mb-10 tracking-tight"
//       >
//         Handpicked Travel Experiences
//       </motion.h2>

//       {/* Packages Grid */}
//       <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {destinationPackages.map((pkg, index) => (
//           <motion.div
//             key={pkg.id}
//             initial={{ opacity: 0, y: 20, scale: 0.97 }}
//             whileInView={{ opacity: 1, y: 0, scale: 1 }}
//             transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.15 }}
//             viewport={{ once: true }}
//             className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col relative"
//           >
//             {/* Image Section */}
//             <div className="relative w-full h-52 overflow-hidden">
//               <motion.div
//                 whileHover={{ scale: 1.1 }}
//                 transition={{ duration: 0.9, ease: "easeInOut" }}
//                 className="relative w-full h-full"
//               >
//                 <Image
//                   src={pkg.image}
//                   alt={pkg.name}
//                   fill
//                   className="object-cover rounded-t-2xl"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-t-2xl"></div>
//               </motion.div>
//             </div>

//             {/* Content Section */}
//             <div className="p-5 flex flex-col flex-1">
//               <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-1">
//                 {pkg.name}
//               </h3>
//               <p className="text-sm text-gray-500 mb-1">
//                 <strong>Destination:</strong> {pkg.destination}
//               </p>
//               <p className="text-sm text-gray-500 mb-1">
//                 <strong>Duration:</strong> {pkg.duration}
//               </p>
//               <p className="text-sm text-gray-500 mb-3">
//                 <strong>Highlights:</strong> {pkg.highlights.join(", ")}
//               </p>

//               {/* Price + Button */}
//               <div className="flex justify-between items-center mt-auto pt-3 border-t border-gray-200">
//                 <span className="text-[#0d4544] font-bold text-lg md:text-xl">
//                   {pkg.price}
//                 </span>
//                 <motion.button
//                   onClick={() => handleBookNow(pkg.destination)}
//                   whileHover={{ scale: 1.06 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="relative overflow-hidden bg-[#0d4544] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white hover:text-[#0d4544] border border-[#0d4544] transition duration-300"
//                 >
//                   Book Now
//                 </motion.button>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Login Modal */}
//       {showLoginModal && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           {/* Background blur */}
//           <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

//           {/* Modal box */}
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.3 }}
//             className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center z-10"
//           >
//             <h2 className="text-2xl font-bold text-gray-800 mb-3">
//               Login First
//             </h2>
//             <p className="text-gray-600 mb-6">
//               You need to log in before booking a package.
//             </p>
//             <button
//               onClick={() => router.push("/login")}
//               className="w-full bg-[#0d4544] text-white py-2 rounded-lg hover:bg-[#0b3837] transition mb-3"
//             >
//               Go to Login
//             </button>
//             <button
//               onClick={() => setShowLoginModal(false)}
//               className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition"
//             >
//               Cancel
//             </button>
//           </motion.div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DestinationPackages;



















"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { useAuth } from "../app/context/AuthContext"; // ✅ Import AuthContext

const destinationPackages = [
  {
    id: 1,
    name: "Karachi City Discovery",
    destination: "Karachi",
    duration: "3 Days / 2 Nights",
    price: "PKR 25,000",
    image: "/images/karachi.jpg",
    highlights: ["Clifton Beach", "Port Grand", "Mazar-e-Quaid"],
  },
  {
    id: 2,
    name: "Lahore Heritage Experience",
    destination: "Lahore",
    duration: "4 Days / 3 Nights",
    price: "PKR 35,000",
    image: "/images/lhr.jpg",
    highlights: ["Badshahi Mosque", "Shalimar Gardens", "Anarkali Bazaar"],
  },
  {
    id: 3,
    name: "Islamabad Scenic Escape",
    destination: "Islamabad",
    duration: "2 Days / 1 Night",
    price: "PKR 18,000",
    image: "/images/isla.jpg",
    highlights: ["Faisal Mosque", "Pakistan Monument", "Daman-e-Koh"],
  },
  {
    id: 4,
    name: "Murree Hills Retreat",
    destination: "Murree",
    duration: "3 Days / 2 Nights",
    price: "PKR 28,000",
    image: "/images/murree.webp",
    highlights: ["Mall Road", "Patriata", "Kashmir Point"],
  },
  {
    id: 5,
    name: "Naran Kaghan Adventure",
    destination: "Naran Kaghan",
    duration: "5 Days / 4 Nights",
    price: "PKR 50,000",
    image: "/images/naran.jpg",
    highlights: ["Lake Saif ul Malook", "Babusar Top", "Lulusar Lake"],
  },
];

const DestinationPackages = () => {
  const router = useRouter();
  const { isAuthenticated } = useAuth(); // ✅ AuthContext se status
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleBookNow = (destination) => {
    if (isAuthenticated) {
      router.push(`/booking-form?destination=${encodeURIComponent(destination)}`);
    } else {
      setShowLoginModal(true);
    }
  };

  return (
    <div className="py-14 px-4 sm:px-6 lg:px-20 bg-gray-50 font-sans relative">
      <button
        onClick={() => router.push("/")}
        className="flex items-center text-teal-600 hover:text-teal-700 mb-8"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Home
      </button>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-extrabold text-center text-[#0d4544] mb-10 tracking-tight"
      >
        Handpicked Travel Experiences
      </motion.h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinationPackages.map((pkg, index) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.15 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col relative"
          >
            <div className="relative w-full h-52 overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className="relative w-full h-full"
              >
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  className="object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-t-2xl"></div>
              </motion.div>
            </div>

            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-1">{pkg.name}</h3>
              <p className="text-sm text-gray-500 mb-1"><strong>Destination:</strong> {pkg.destination}</p>
              <p className="text-sm text-gray-500 mb-1"><strong>Duration:</strong> {pkg.duration}</p>
              <p className="text-sm text-gray-500 mb-3"><strong>Highlights:</strong> {pkg.highlights.join(", ")}</p>

              <div className="flex justify-between items-center mt-auto pt-3 border-t border-gray-200">
                <span className="text-[#0d4544] font-bold text-lg md:text-xl">{pkg.price}</span>
                <motion.button
                  onClick={() => handleBookNow(pkg.destination)}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative overflow-hidden bg-[#0d4544] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white hover:text-[#0d4544] border border-[#0d4544] transition duration-300"
                >
                  Book Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {showLoginModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center z-10"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Login First</h2>
            <p className="text-gray-600 mb-6">You need to log in before booking a package.</p>
            <button
              onClick={() => router.push("/login")}
              className="w-full bg-[#0d4544] text-white py-2 rounded-lg hover:bg-[#0b3837] transition mb-3"
            >
              Go to Login
            </button>
            <button
              onClick={() => setShowLoginModal(false)}
              className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition"
            >
              Cancel
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default DestinationPackages;
