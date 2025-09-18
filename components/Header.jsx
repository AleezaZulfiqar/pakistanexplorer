"use client";

import { useState } from "react";
import { Menu, X, Search, Phone, Mountain } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white
 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center cursor-pointer">
            <Mountain className="h-8 w-8 text-[#0d4544]" />
            <span className="ml-2 text-4xl font-bold text-[#0d4544]">Trektrips</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-black hover:text-white">
            <Link
              href="/"
              className={`text-lg font-medium transition-colors ${pathname === "/" ? "text-[#0d4544]" : "text-black"}`}
            >
              Home
            </Link>
            <Link
              href="/destinations"
              className={`text-lg font-medium transition-colors ${pathname === "/destinations" ? "text-[#0d4544]" : "text-[#0d4544] hover:text-black"}`}
            >
              Destinations
            </Link>
            <Link
              href="/regions"
              className={`text-lg font-medium transition-colors ${pathname === "/regions" ? "text-[#0d4544]" :  "text-[#0d4544] hover:text-black"}`}
            >
              Regions
            </Link>
            <Link
              href="/services"
              className={`text-lg font-medium transition-colors ${pathname === "/services" ? "text-[#0d4544]" : "text-[#0d4544] hover:text-black"}`}
            >
              Services
            </Link>
            <Link
              href="/about"
              className={`text-lg font-medium transition-colors ${pathname === "/about" ? "text-[#0d4544]" : "text-[#0d4544] hover:text-black"}`}
            >
              About
            </Link>
            <Link
              href="/blog"
              className={`text-lg font-medium transition-colors ${pathname === "/blog" ? "text-[#0d4544]" : "text-[#0d4544] hover:text-black"}`}
            >
              Blog
            </Link>
            <Link
              href="/Bookingform"
              className={`text-lg font-medium transition-colors ${pathname === "/bookingform" ? "text-[#0d4544]" : "text-[#0d4544] hover:text-black"}`}
            >
              Contact
            </Link>
          </nav>

          {/* Contact Info & Search */}
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-black hover:text-green-800 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {[
              { label: "Home", href: "/" },
              { label: "Destinations", href: "/destinations" },
              { label: "Regions", href: "/regions" },
              { label: "Services", href: "/services" },
              { label: "About", href: "/about" },
              { label: "Blog", href: "/blog" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50 w-full text-left"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
