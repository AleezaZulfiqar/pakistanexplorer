// "use client";

// import { useState } from "react";
// import { Menu, X, Search, Phone, Mountain } from "lucide-react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const pathname = usePathname();

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-white
//  backdrop-blur-md shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <Link href="/" className="flex items-center cursor-pointer">
//             <Mountain className="h-8 w-8 text-[#0d4544]" />
//             <span className="ml-2 text-4xl font-bold text-[#0d4544]">Trektrips</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8 text-black hover:text-white">
//             <Link
//               href="/"
//               className={`text-lg font-medium transition-colors ${pathname === "/" ? "text-[#0d4544]" : "text-black"}`}
//             >
//               Home
//             </Link>
//             <Link
//               href="/destinations"
//               className={`text-lg font-medium transition-colors ${pathname === "/destinations" ? "text-[#0d4544]" : "text-[#0d4544] hover:text-black"}`}
//             >
//               Destinations
//             </Link>
//             <Link
//               href="/regions"
//               className={`text-lg font-medium transition-colors ${pathname === "/regions" ? "text-[#0d4544]" :  "text-[#0d4544] hover:text-black"}`}
//             >
//               Regions
//             </Link>
//             <Link
//               href="/services"
//               className={`text-lg font-medium transition-colors ${pathname === "/services" ? "text-[#0d4544]" : "text-[#0d4544] hover:text-black"}`}
//             >
//               Services
//             </Link>
//             <Link
//               href="/about"
//               className={`text-lg font-medium transition-colors ${pathname === "/about" ? "text-[#0d4544]" : "text-[#0d4544] hover:text-black"}`}
//             >
//               About
//             </Link>
//             <Link
//               href="/blog"
//               className={`text-lg font-medium transition-colors ${pathname === "/blog" ? "text-[#0d4544]" : "text-[#0d4544] hover:text-black"}`}
//             >
//               Blog
//             </Link>
//             <Link
//               href="/Bookingform"
//               className={`text-lg font-medium transition-colors ${pathname === "/bookingform" ? "text-[#0d4544]" : "text-[#0d4544] hover:text-black"}`}
//             >
//               Contact
//             </Link>
//             <Link
//               href="/login">
//                 <button className="bg-[#0d4544] px-6 rounded-md py-2 text-lg text-white">
//               Login
//               </button>
//             </Link>
//             <Link
//               href="/register">
//                 <button className="bg-[#0d4544] px-4 rounded-md py-2 text-lg text-white">
//               SignUp
//               </button>
//             </Link>

//           </nav>

//           {/* Contact Info & Search */}
          
//           {/* Mobile menu button */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="md:hidden p-2 text-black hover:text-green-800 transition-colors"
//           >
//             {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white border-t">
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             {[
//               { label: "Home", href: "/" },
//               { label: "Destinations", href: "/destinations" },
//               { label: "Regions", href: "/regions" },
//               { label: "Services", href: "/services" },
//               { label: "About", href: "/about" },
//               { label: "Blog", href: "/blog" },
//               { label: "Contact", href: "/contact" },
//             ].map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 onClick={() => setIsMenuOpen(false)}
//                 className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 w-full text-left"
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

















// "use client";

// import { useState } from "react";
// import { Menu, X, Mountain } from "lucide-react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useAuth } from "../app/context/AuthContext"; 

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const pathname = usePathname();
//   const { isAuthenticated, logoutUser } = useAuth();

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <Link href="/" className="flex items-center cursor-pointer">
//             <Mountain className="h-8 w-8 text-[#0d4544]" />
//             <span className="ml-2 text-4xl font-bold text-[#0d4544]">
//               Trektrips
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8 text-black hover:text-white">
//             <Link href="/" className={`text-lg font-medium ${pathname === "/" ? "text-[#0d4544]" : "text-black"}`}>
//               Home
//             </Link>
//             <Link href="/destinations" className={`text-lg font-medium ${pathname === "/destinations" ? "text-[#0d4544]" : "text-[#0d4544] hover:text-black"}`}>
//               Destinations
//             </Link>
//             <Link href="/regions" className={`text-lg font-medium ${pathname === "/regions" ? "text-[#0d4544]" : "text-[#0d4544] hover:text-black"}`}>
//               Regions
//             </Link>
//             <Link href="/services" className={`text-lg font-medium ${pathname === "/services" ? "text-[#0d4544]" : "text-[#0d4544] hover:text-black"}`}>
//               Services
//             </Link>
//             <Link href="/about" className={`text-lg font-medium ${pathname === "/about" ? "text-[#0d4544]" : "text-[#0d4544] hover:text-black"}`}>
//               About
//             </Link>
//             <Link href="/blog" className={`text-lg font-medium ${pathname === "/blog" ? "text-[#0d4544]" : "text-[#0d4544] hover:text-black"}`}>
//               Blog
//             </Link>
//             <Link href="/Bookingform" className={`text-lg font-medium ${pathname === "/bookingform" ? "text-[#0d4544]" : "text-[#0d4544] hover:text-black"}`}>
//               Contact
//             </Link>

//             {/* ✅ Auth-based Links */}
//             {!isAuthenticated ? (
//               <>
//                 <Link href="/login">
//                   <button className="bg-[#0d4544] px-6 rounded-md py-2 text-lg text-white">
//                     Login
//                   </button>
//                 </Link>
//                 <Link href="/register">
//                   <button className="bg-[#0d4544] px-4 rounded-md py-2 text-lg text-white">
//                     SignUp
//                   </button>
//                 </Link>
//               </>
//             ) : (
//               <>
//                 <Link href="/mybookings" className={`text-lg font-medium ${pathname === "/mybookings" ? "text-[#0d4544]" : "text-[#0d4544] hover:text-black"}`}>
//                   My Bookings
//                 </Link>
//                 <button
//                   onClick={logoutUser}
//                   className="bg-red-600 px-4 py-2 rounded-md text-lg text-white hover:bg-red-700"
//                 >
//                   Logout
//                 </button>
//               </>
//             )}
//           </nav>

//           {/* Mobile menu button */}
//           <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-black hover:text-green-800">
//             {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>
//       </div>

//       {/* ✅ Mobile Navigation */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white border-t">
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             <Link href="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600">Home</Link>
//             <Link href="/destinations" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600">Destinations</Link>
//             <Link href="/regions" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600">Regions</Link>
//             <Link href="/services" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600">Services</Link>
//             <Link href="/about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600">About</Link>
//             <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600">Blog</Link>
//             <Link href="/Bookingform" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600">Contact</Link>

//             {/* ✅ Auth Links (Mobile) */}
//             {!isAuthenticated ? (
//               <>
//                 <Link href="/login" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 bg-[#0d4544] text-white rounded-md text-center">
//                   Login
//                 </Link>
//                 <Link href="/register" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 bg-[#0d4544] text-white rounded-md text-center">
//                   SignUp
//                 </Link>
//               </>
//             ) : (
//               <>
//                 <Link href="/mybookings" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600">
//                   My Bookings
//                 </Link>
//                 <button
//                   onClick={() => {
//                     logoutUser();
//                     setIsMenuOpen(false);
//                   }}
//                   className="w-full block px-3 py-2 bg-red-600 text-white rounded-md text-center hover:bg-red-700"
//                 >
//                   Logout
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }























// "use client";

// import { useState } from "react";
// import { Menu, X, Mountain } from "lucide-react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { useAuth } from "../app/context/AuthContext"; 

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const pathname = usePathname();
//   const router = useRouter();
//   const { isAuthenticated, logoutUser } = useAuth();

//   const handleLogout = () => {
//     logoutUser();       // 1️⃣ Logout context
//     router.push("/");   // 2️⃣ Redirect to Home
//     setIsMenuOpen(false);
//   };

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <Link href="/" className="flex items-center cursor-pointer">
//             <Mountain className="h-8 w-8 text-[#0d4544]" />
//             <span className="ml-2 text-4xl font-bold text-[#0d4544]">
//               Trektrips
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8 text-black hover:text-white">
//             <Link href="/" className={`text-lg font-medium ${pathname === "/" ? "text-[#0d4544]" : "text-black"}`}>
//               Home
//             </Link>
//             <Link href="/destinations" className={`text-lg font-medium ${pathname === "/destinations" ? "text-[#0d4544]" : "text-[#0d4544] hover:text-black"}`}>
//               Destinations
//             </Link>
//             <Link href="/regions" className={`text-lg font-medium ${pathname === "/regions" ? "text-[#0d4544]" : "text-[#0d4544] hover:text-black"}`}>
//               Regions
//             </Link>
//             <Link href="/services" className={`text-lg font-medium ${pathname === "/services" ? "text-[#0d4544]" : "text-[#0d4544] hover:text-black"}`}>
//               Services
//             </Link>
//             <Link href="/about" className={`text-lg font-medium ${pathname === "/about" ? "text-[#0d4544]" : "text-[#0d4544] hover:text-black"}`}>
//               About
//             </Link>
//             <Link href="/blog" className={`text-lg font-medium ${pathname === "/blog" ? "text-[#0d4544]" : "text-[#0d4544] hover:text-black"}`}>
//               Blog
//             </Link>
//             <Link href="/Bookingform" className={`text-lg font-medium ${pathname === "/bookingform" ? "text-[#0d4544]" : "text-[#0d4544] hover:text-black"}`}>
//               Contact
//             </Link>

//             {/* Auth-based Links */}
//             {!isAuthenticated ? (
//               <>
//                 <Link href="/login">
//                   <button className="bg-[#0d4544] px-6 rounded-md py-2 text-lg text-white">
//                     Login
//                   </button>
//                 </Link>
//                 <Link href="/register">
//                   <button className="bg-[#0d4544] px-4 rounded-md py-2 text-lg text-white">
//                     SignUp
//                   </button>
//                 </Link>
//               </>
//             ) : (
//               <>
//                 <Link href="/mybookings" className={`text-lg font-medium ${pathname === "/mybookings" ? "text-[#0d4544]" : "text-[#0d4544] hover:text-black"}`}>
//                   My Bookings
//                 </Link>
//                 <button
//                   onClick={handleLogout}
//                   className="bg-red-600 px-4 py-2 rounded-md text-lg text-white hover:bg-red-700"
//                 >
//                   Logout
//                 </button>
//               </>
//             )}
//           </nav>

//           {/* Mobile menu button */}
//           <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-black hover:text-green-800">
//             {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white border-t">
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             <Link href="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600">Home</Link>
//             <Link href="/destinations" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600">Destinations</Link>
//             <Link href="/regions" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600">Regions</Link>
//             <Link href="/services" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600">Services</Link>
//             <Link href="/about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600">About</Link>
//             <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600">Blog</Link>
//             <Link href="/Bookingform" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600">Contact</Link>

//             {/* Auth Links (Mobile) */}
//             {!isAuthenticated ? (
//               <>
//                 <Link href="/login" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 bg-[#0d4544] text-white rounded-md text-center">
//                   Login
//                 </Link>
//                 <Link href="/register" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 bg-[#0d4544] text-white rounded-md text-center">
//                   SignUp
//                 </Link>
//               </>
//             ) : (
//               <>
//                 <Link href="/mybookings" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600">
//                   My Bookings
//                 </Link>
//                 <button
//                   onClick={handleLogout}
//                   className="w-full block px-3 py-2 bg-red-600 text-white rounded-md text-center hover:bg-red-700"
//                 >
//                   Logout
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }



































// "use client";

// import { useState } from "react";
// import { Menu, X, Mountain } from "lucide-react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation"; // ✅ useRouter for redirect
// import { useAuth } from "../app/context/AuthContext"; 

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const pathname = usePathname();
//   const router = useRouter();
//   const { isAuthenticated, logoutUser } = useAuth();

//   // ✅ Logout handler with redirect
//   const handleLogout = () => {
//     logoutUser();
//     router.push("/"); // redirect to home after logout
//     setIsMenuOpen(false);
//   };

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <Link href="/" className="flex items-center cursor-pointer">
//             <Mountain className="h-8 w-8 text-[#0d4544]" />
//             <span className="ml-2 text-4xl font-bold text-[#0d4544]">
//               Trektrips
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             <Link href="/" className={`text-lg font-medium ${pathname === "/" ? "text-[#0d4544]" : "text-black"}`}>Home</Link>
//             <Link href="/destinations" className={`text-lg font-medium ${pathname === "/destinations" ? "text-[#0d4544]" : "text-[#0d4544] hover:text-black"}`}>Destinations</Link>
//             <Link href="/regions" className={`text-lg font-medium ${pathname === "/regions" ? "text-[#0d4544]" : "text-[#0d4544] hover:text-black"}`}>Regions</Link>
//             <Link href="/services" className={`text-lg font-medium ${pathname === "/services" ? "text-[#0d4544]" : "text-[#0d4544] hover:text-black"}`}>Services</Link>
//             <Link href="/about" className={`text-lg font-medium ${pathname === "/about" ? "text-[#0d4544]" : "text-[#0d4544] hover:text-black"}`}>About</Link>
//             <Link href="/blog" className={`text-lg font-medium ${pathname === "/blog" ? "text-[#0d4544]" : "text-[#0d4544] hover:text-black"}`}>Blog</Link>
//             <Link href="/Bookingform" className={`text-lg font-medium ${pathname === "/bookingform" ? "text-[#0d4544]" : "text-[#0d4544] hover:text-black"}`}>Contact</Link>

//             {/* Auth Links */}
//             {!isAuthenticated ? (
//               <>
//                 <Link href="/login">
//                   <button className="bg-[#0d4544] px-6 rounded-md py-2 text-lg text-white">Login</button>
//                 </Link>
//                 <Link href="/register">
//                   <button className="bg-[#0d4544] px-4 rounded-md py-2 text-lg text-white">SignUp</button>
//                 </Link>
//               </>
//             ) : (
//               <>
//                 <Link href="/dashboard" className="text-lg font-medium text-[#0d4544]">My Bookings</Link>
//                 <button
//                   onClick={handleLogout}
//                   className="bg-red-600 px-4 py-2 rounded-md text-lg text-white hover:bg-red-700"
//                 >
//                   Logout
//                 </button>
//               </>
//             )}
//           </nav>

//           {/* Mobile menu button */}
//           <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-black hover:text-green-800">
//             {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white border-t">
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             <Link href="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600">Home</Link>
//             <Link href="/destinations" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600">Destinations</Link>
//             <Link href="/regions" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600">Regions</Link>
//             <Link href="/services" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600">Services</Link>
//             <Link href="/about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600">About</Link>
//             <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600">Blog</Link>
//             <Link href="/Bookingform" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600">Contact</Link>

//             {!isAuthenticated ? (
//               <>
//                 <Link href="/login" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 bg-[#0d4544] text-white rounded-md text-center">Login</Link>
//                 <Link href="/register" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 bg-[#0d4544] text-white rounded-md text-center">SignUp</Link>
//               </>
//             ) : (
//               <>
//                 <Link href="/dashboard" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600">My Bookings</Link>
//                 <button
//                   onClick={handleLogout}
//                   className="w-full block px-3 py-2 bg-red-600 text-white rounded-md text-center hover:bg-red-700"
//                 >
//                   Logout
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }























// "use client";

// import { useState } from "react";
// import { Menu, X, Mountain } from "lucide-react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { useAuth } from "../app/context/AuthContext";

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const pathname = usePathname();
//   const router = useRouter();
//   const { isAuthenticated, logoutUser } = useAuth();

//   const handleLogout = () => {
//     logoutUser();
//     router.push("/"); // logout ke baad home page redirect
//   };

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <Link href="/" className="flex items-center cursor-pointer">
//             <Mountain className="h-8 w-8 text-[#0d4544]" />
//             <span className="ml-2 text-3xl sm:text-4xl font-bold text-[#0d4544]">
//               Trektrips
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-6 text-black">
//             <Link href="/" className={`text-lg font-medium ${pathname === "/" ? "text-[#0d4544]" : "text-black"}`}>
//               Home
//             </Link>
//             <Link href="/destinations" className={`text-lg font-medium ${pathname === "/destinations" ? "text-[#0d4544]" : "text-black hover:text-[#0d4544]"}`}>
//               Destinations
//             </Link>
//             <Link href="/regions" className={`text-lg font-medium ${pathname === "/regions" ? "text-[#0d4544]" : "text-black hover:text-[#0d4544]"}`}>
//               Regions
//             </Link>
//             <Link href="/services" className={`text-lg font-medium ${pathname === "/services" ? "text-[#0d4544]" : "text-black hover:text-[#0d4544]"}`}>
//               Services
//             </Link>
//             <Link href="/about" className={`text-lg font-medium ${pathname === "/about" ? "text-[#0d4544]" : "text-black hover:text-[#0d4544]"}`}>
//               About
//             </Link>
//             <Link href="/blog" className={`text-lg font-medium ${pathname === "/blog" ? "text-[#0d4544]" : "text-black hover:text-[#0d4544]"}`}>
//               Blog
//             </Link>
//             <Link href="/Bookingform" className={`text-lg font-medium ${pathname === "/bookingform" ? "text-[#0d4544]" : "text-black hover:text-[#0d4544]"}`}>
//               Contact
//             </Link>

//             {/* Auth Links */}
//             {!isAuthenticated ? (
//               <>
//                 <Link href="/login">
//                   <button className="bg-[#0d4544] px-6 py-2 rounded-md text-white font-medium hover:opacity-90 transition">
//                     Login
//                   </button>
//                 </Link>
//                 <Link href="/register">
//                   <button className="bg-[#0d4544] px-4 py-2 rounded-md text-white font-medium hover:opacity-90 transition">
//                     Sign Up
//                   </button>
//                 </Link>
//               </>
//             ) : (
//               <>
//                 <Link href="/mybookings">
//                   <button className="bg-[#0d4544] px-6 py-2 rounded-md text-white font-medium hover:opacity-90 transition">
//                     My Bookings
//                   </button>
//                 </Link>
//                 <button
//                   onClick={handleLogout}
//                   className="bg-red-600 px-4 py-2 rounded-md text-white font-medium hover:bg-red-700 transition"
//                 >
//                   Logout
//                 </button>
//               </>
//             )}
//           </nav>

//           {/* Mobile menu button */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="md:hidden p-2 text-black hover:text-[#0d4544]"
//           >
//             {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white border-t shadow-sm">
//           <div className="px-2 pt-2 pb-3 space-y-2">
//             <Link href="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#0d4544]">Home</Link>
//             <Link href="/destinations" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#0d4544]">Destinations</Link>
//             <Link href="/regions" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#0d4544]">Regions</Link>
//             <Link href="/services" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#0d4544]">Services</Link>
//             <Link href="/about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#0d4544]">About</Link>
//             <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#0d4544]">Blog</Link>
//             <Link href="/Bookingform" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#0d4544]">Contact</Link>

//             {!isAuthenticated ? (
//               <>
//                 <Link href="/login" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 bg-[#0d4544] text-white rounded-md text-center font-medium hover:opacity-90 transition">Login</Link>
//                 <Link href="/register" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 bg-[#0d4544] text-white rounded-md text-center font-medium hover:opacity-90 transition">Sign Up</Link>
//               </>
//             ) : (
//               <>
//                 <Link href="/mybookings" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 bg-[#0d4544] text-white rounded-md text-center font-medium hover:opacity-90 transition">My Bookings</Link>
//                 <button
//                   onClick={() => { handleLogout(); setIsMenuOpen(false); }}
//                   className="w-full block px-3 py-2 bg-red-600 text-white rounded-md text-center font-medium hover:bg-red-700 transition"
//                 >
//                   Logout
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }











// "use client";

// import { useState } from "react";
// import { Menu, X, Mountain } from "lucide-react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useAuth } from "../app/context/AuthContext";

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const pathname = usePathname();
//   const { isAuthenticated, logoutUser } = useAuth();

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <Link href="/" className="flex items-center cursor-pointer">
//             <Mountain className="h-8 w-8 text-[#0d4544]" />
//             <span className="ml-2 text-4xl font-bold text-[#0d4544]">Trektrips</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8 text-black">
//             {["/", "/destinations", "/regions", "/services", "/about", "/blog", "/bookingform"].map(
//               (path, idx) => (
//                 <Link
//                   key={idx}
//                   href={path}
//                   className={`text-lg font-medium ${
//                     pathname === path ? "text-[#0d4544]" : "text-black hover:text-[#0d4544]"
//                   }`}
//                 >
//                   {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
//                 </Link>
//               )
//             )}

//             {!isAuthenticated ? (
//               <>
//                 <Link href="/login">
//                   <button className="bg-[#0d4544] px-6 rounded-md py-2 text-lg text-white">Login</button>
//                 </Link>
//                 <Link href="/register">
//                   <button className="bg-[#0d4544] px-4 rounded-md py-2 text-lg text-white">SignUp</button>
//                 </Link>
//               </>
//             ) : (
//               <>
//                 <Link
//                   href="/mybookings"
//                   className={`text-lg font-medium ${
//                     pathname === "/mybookings" ? "text-[#0d4544]" : "text-[#0d4544] hover:text-black"
//                   }`}
//                 >
//                   My Bookings
//                 </Link>
//                 <button
//                   onClick={logoutUser}
//                   className="bg-red-600 px-4 py-2 rounded-md text-lg text-white hover:bg-red-700"
//                 >
//                   Logout
//                 </button>
//               </>
//             )}
//           </nav>

//           {/* Mobile Menu Button */}
//           <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-black hover:text-teal-600">
//             {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white border-t">
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             {["/", "/destinations", "/regions", "/services", "/about", "/blog", "/bookingform"].map(
//               (path, idx) => (
//                 <Link
//                   key={idx}
//                   href={path}
//                   onClick={() => setIsMenuOpen(false)}
//                   className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600"
//                 >
//                   {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
//                 </Link>
//               )
//             )}

//             {!isAuthenticated ? (
//               <>
//                 <Link
//                   href="/login"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="block px-3 py-2 bg-[#0d4544] text-white rounded-md text-center"
//                 >
//                   Login
//                 </Link>
//                 <Link
//                   href="/register"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="block px-3 py-2 bg-[#0d4544] text-white rounded-md text-center"
//                 >
//                   SignUp
//                 </Link>
//               </>
//             ) : (
//               <>
//                 <Link
//                   href="/dashboard"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600"
//                 >
//                   My Bookings
//                 </Link>
//                 <button
//                   onClick={() => {
//                     logoutUser();
//                     setIsMenuOpen(false);
//                   }}
//                   className="w-full block px-3 py-2 bg-red-600 text-white rounded-md text-center hover:bg-red-700"
//                 >
//                   Logout
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }





















// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { useAuth } from "../app/context/AuthContext";
// import { Menu, X, Mountain } from "lucide-react";

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { isAuthenticated, logoutUser } = useAuth();
//   const pathname = usePathname();
//   const router = useRouter();

//   // Logout with redirect to home
//   const handleLogout = () => {
//     logoutUser();
//     router.push("/");
//   };

//   const links = [
//     { href: "/", label: "Home" },
//     { href: "/destinations", label: "Destinations" },
//     { href: "/regions", label: "Regions" },
//     { href: "/services", label: "Services" },
//     { href: "/about", label: "About" },
//     { href: "/blog", label: "Blog" },
//     { href: "/bookingform", label: "Contact" },
//   ];

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
//       <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
//         {/* Logo */}
//         <Link href="/" className="flex items-center">
//           <Mountain className="w-8 h-8 text-[#0d4544]" />
//           <span className="ml-2 text-2xl font-bold text-[#0d4544]">Trektrips</span>
//         </Link>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex items-center space-x-6">
//           {links.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className={`text-lg font-medium ${
//                 pathname === link.href ? "text-[#0d4544]" : "text-black hover:text-[#0d4544]"
//               }`}
//             >
//               {link.label}
//             </Link>
//           ))}

//           {!isAuthenticated ? (
//             <>
//               <Link href="/login">
//                 <button className="bg-[#0d4544] text-white px-4 py-2 rounded">Login</button>
//               </Link>
//               <Link href="/register">
//                 <button className="bg-[#0d4544] text-white px-4 py-2 rounded">SignUp</button>
//               </Link>
//             </>
//           ) : (
//             <>
//               <Link href="/dashboard" className="text-lg font-medium text-[#0d4544]">
//                 My Bookings
//               </Link>
//               <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded">
//                 Logout
//               </button>
//             </>
//           )}
//         </nav>

//         {/* Mobile Menu Button */}
//         <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
//           {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//         </button>
//       </div>

//       {/* Mobile Nav */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white border-t">
//           <div className="flex flex-col px-4 py-2 space-y-2">
//             {links.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 onClick={() => setIsMenuOpen(false)}
//                 className="text-gray-700 hover:text-teal-600 p-2 rounded"
//               >
//                 {link.label}
//               </Link>
//             ))}

//             {!isAuthenticated ? (
//               <>
//                 <Link
//                   href="/login"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="bg-[#0d4544] text-white p-2 rounded text-center"
//                 >
//                   Login
//                 </Link>
//                 <Link
//                   href="/register"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="bg-[#0d4544] text-white p-2 rounded text-center"
//                 >
//                   SignUp
//                 </Link>
//               </>
//             ) : (
//               <>
//                 <Link
//                   href="/dashboard"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="text-gray-700 hover:text-teal-600 p-2 rounded"
//                 >
//                   My Bookings
//                 </Link>
//                 <button
//                   onClick={() => {
//                     handleLogout();
//                     setIsMenuOpen(false);
//                   }}
//                   className="bg-red-600 text-white p-2 rounded"
//                 >
//                   Logout
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }






















// new hai yeh 
// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { useAuth } from "../app/context/AuthContext";
// import { Menu, X, Mountain } from "lucide-react";

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { user, logoutUser, checkAuth } = useAuth(); // ✅ user state
//   const pathname = usePathname();
//   const router = useRouter();

//   // Page load hone par authentication check kare
//   useEffect(() => {
//     checkAuth();
//   }, []);

//   const isAuthenticated = !!user; // ✅ convert user to boolean

//   // Logout with redirect to home
//   const handleLogout = () => {
//     logoutUser();
//     router.push("/");
//   };

//   const links = [
//     { href: "/", label: "Home" },
//     { href: "/destinations", label: "Destinations" },
//     { href: "/regions", label: "Regions" },
//     { href: "/services", label: "Services" },
//     { href: "/about", label: "About" },
//     { href: "/blog", label: "Blog" },
//     { href: "/bookingform", label: "Contact" },
//   ];

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
//       <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
//         {/* Logo */}
//         <Link href="/" className="flex items-center">
//           <Mountain className="w-8 h-8 text-[#0d4544]" />
//           <span className="ml-2 text-2xl font-bold text-[#0d4544]">Trektrips</span>
//         </Link>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex items-center space-x-6">
//           {links.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className={`text-lg font-medium ${
//                 pathname === link.href
//                   ? "text-[#0d4544]"
//                   : "text-[#0d4544]"
//               }`}
//             >
//               {link.label}
//             </Link>
//           ))}

//           {/* Auth Links */}
//           {!isAuthenticated ? (
//             <>
//               <Link href="/login">
//                 <button className="bg-[#0d4544] text-white px-4 py-2 rounded">
//                   Login
//                 </button>
//               </Link>
//               <Link href="/register">
//                 <button className="bg-[#0d4544] text-white px-4 py-2 rounded">
//                   SignUp
//                 </button>
//               </Link>
//             </>
//           ) : (
//             <>
//               <Link
//                 href="/dashboard"
//                 className="text-lg font-medium text-[#0d4544]"
//               >
//                 My Bookings
//               </Link>
//               <button
//                 onClick={handleLogout}
//                 className="bg-red-600 text-white px-4 py-2 rounded"
//               >
//                 Logout
//               </button>
//             </>
//           )}
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="md:hidden"
//         >
//           {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//         </button>
//       </div>

//       {/* Mobile Nav */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white border-t">
//           <div className="flex flex-col px-4 py-2 space-y-2">
//             {links.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 onClick={() => setIsMenuOpen(false)}
//                 className="text-gray-700 hover:text-teal-600 p-2 rounded"
//               >
//                 {link.label}
//               </Link>
//             ))}

//             {!isAuthenticated ? (
//               <>
//                 <Link
//                   href="/login"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="bg-[#0d4544] text-white p-2 rounded text-center"
//                 >
//                   Login
//                 </Link>
//                 <Link
//                   href="/register"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="bg-[#0d4544] text-white p-2 rounded text-center"
//                 >
//                   SignUp
//                 </Link>
//               </>
//             ) : (
//               <>
//                 <Link
//                   href="/dashboard"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="text-gray-700 hover:text-teal-600 p-2 rounded"
//                 >
//                   My Bookings
//                 </Link>
//                 <button
//                   onClick={() => {
//                     handleLogout();
//                     setIsMenuOpen(false);
//                   }}
//                   className="bg-red-600 text-white p-2 rounded"
//                 >
//                   Logout
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }















"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "../app/context/AuthContext";
import { Menu, X, Mountain } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logoutUser, checkAuth } = useAuth(); // ✅ user state
  const pathname = usePathname();
  const router = useRouter();

  // Page load par authentication check
  useEffect(() => {
    checkAuth();
  }, []);

  const isAuthenticated = !!user; // ✅ reactive check

  const handleLogout = () => {
    logoutUser();
    router.push("/");
  };

  const links = [
    { href: "/", label: "Home" },
    { href: "/destinations", label: "Destinations" },
    { href: "/regions", label: "Regions" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/bookingform", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Mountain className="w-8 h-8 text-[#0d4544]" />
          <span className="ml-2 text-2xl font-bold text-[#0d4544]">Trektrips</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-lg font-medium ${
                pathname === link.href ? "text-[#0d4544]" : "text-[#0d4544]"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Auth Links */}
          {!isAuthenticated ? (
            <>
              <Link href="/login">
                <button className="bg-[#0d4544] text-white px-4 py-2 rounded">
                  Login
                </button>
              </Link>
              <Link href="/signup">
                <button className="bg-[#0d4544] text-white px-4 py-2 rounded">
                  SignUp
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/dashboard"
                className="text-lg font-medium text-[#0d4544]"
              >
                My Bookings
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Logout
              </button>
            </>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col px-4 py-2 space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-teal-600 p-2 rounded"
              >
                {link.label}
              </Link>
            ))}

            {!isAuthenticated ? (
              <>
                <Link
                  href="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-[#0d4544] text-white p-2 rounded text-center"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-[#0d4544] text-white p-2 rounded text-center"
                >
                  SignUp
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/dashboard"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-teal-600 p-2 rounded"
                >
                  My Bookings
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="bg-red-600 text-white p-2 rounded"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
