"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Sun Valley GNM School of Nursing Logo"
                width={240}
                height={240}
                sizes="(max-width: 640px) 2.5rem, (max-width: 768px) 3rem, (max-width: 1024px) 4rem, 14rem"
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-56 lg:h-56"
                priority
              />
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:block">
            <div className="ml-6 xl:ml-10 flex items-baseline space-x-1 xl:space-x-2">
              <Link href="#home" className="text-[#2c3e50] hover:text-[#e74c3c] hover:bg-[#e74c3c]/5 px-2 xl:px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-300 relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#e74c3c] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="#about" className="text-[#2c3e50] hover:text-[#e74c3c] hover:bg-[#e74c3c]/5 px-2 xl:px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-300 relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#e74c3c] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="#programs" className="text-[#2c3e50] hover:text-[#e74c3c] hover:bg-[#e74c3c]/5 px-2 xl:px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-300 relative group">
                Programs
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#e74c3c] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="#faculty" className="text-[#2c3e50] hover:text-[#e74c3c] hover:bg-[#e74c3c]/5 px-2 xl:px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-300 relative group">
                Faculty
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#e74c3c] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="#facilities" className="text-[#2c3e50] hover:text-[#e74c3c] hover:bg-[#e74c3c]/5 px-2 xl:px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-300 relative group">
                Facilities
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#e74c3c] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="#admissions" className="text-[#2c3e50] hover:text-[#e74c3c] hover:bg-[#e74c3c]/5 px-2 xl:px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-300 relative group">
                Admissions
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#e74c3c] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="#contact" className="bg-gradient-to-r from-[#e74c3c] to-[#c0392b] text-white px-3 xl:px-4 py-2 rounded-xl text-xs font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#2c3e50] hover:text-[#e74c3c] focus:outline-none focus:text-[#e74c3c] p-2 rounded-lg hover:bg-[#e74c3c]/5 transition-all duration-300"
            >
              <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-gray-100">
              <Link href="#home" className="text-[#2c3e50] hover:text-[#e74c3c] hover:bg-[#e74c3c]/5 block px-3 sm:px-4 py-2 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link href="#about" className="text-[#2c3e50] hover:text-[#e74c3c] hover:bg-[#e74c3c]/5 block px-3 sm:px-4 py-2 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link href="#programs" className="text-[#2c3e50] hover:text-[#e74c3c] hover:bg-[#e74c3c]/5 block px-3 sm:px-4 py-2 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300" onClick={() => setIsMenuOpen(false)}>Programs</Link>
              <Link href="#faculty" className="text-[#2c3e50] hover:text-[#e74c3c] hover:bg-[#e74c3c]/5 block px-3 sm:px-4 py-2 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300" onClick={() => setIsMenuOpen(false)}>Faculty</Link>
              <Link href="#facilities" className="text-[#2c3e50] hover:text-[#e74c3c] hover:bg-[#e74c3c]/5 block px-3 sm:px-4 py-2 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300" onClick={() => setIsMenuOpen(false)}>Facilities</Link>
              <Link href="#admissions" className="text-[#2c3e50] hover:text-[#e74c3c] hover:bg-[#e74c3c]/5 block px-3 sm:px-4 py-2 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300" onClick={() => setIsMenuOpen(false)}>Admissions</Link>
              <Link href="#contact" className="bg-gradient-to-r from-[#e74c3c] to-[#c0392b] text-white block px-3 sm:px-4 py-2 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold text-center transition-all duration-300" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

