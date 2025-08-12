"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce) setMounted(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-[#f8f9fa] to-white overflow-hidden flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-16 sm:w-32 h-16 sm:h-32 bg-[#e74c3c] rounded-full"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-12 sm:w-24 h-12 sm:h-24 bg-[#16a085] rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 sm:left-1/3 w-8 sm:w-16 h-8 sm:h-16 bg-[#2c3e50] rounded-full"></div>
        <div className="absolute top-1/4 right-1/4 w-6 sm:w-12 h-6 sm:h-12 bg-[#e74c3c] rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/2 w-4 sm:w-8 h-4 sm:h-8 bg-[#16a085] rounded-full"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Content */}
          <div
            className={
              "text-center lg:text-left max-w-5xl mx-auto lg:mx-0 " +
              (mounted ? "animate-fadeInUp lg:animate-fadeInLeft" : "")
            }
            style={{ animationDuration: "900ms", animationTimingFunction: "ease-out" }}
          >
            {/* Animated Badge */}
            <div className="inline-flex items-center bg-[#e74c3c]/10 border border-[#e74c3c]/20 text-[#e74c3c] rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
              <span className="w-2 sm:w-3 h-2 sm:h-3 bg-[#e74c3c] rounded-full mr-2 sm:mr-3 animate-pulse"></span>
              <span className="text-xs font-bold">Admissions Open 2024</span>
            </div>

            {/* Main Heading */}
            <div className="mb-8 sm:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-[#2c3e50] mb-6 sm:mb-8">
                <span className="block">Sun Valley</span>
                <span className="text-[#e74c3c] block">GNM</span>
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl block">School of Nursing</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#6c757d] mb-6 sm:mb-8 leading-relaxed lg:max-w-2xl">
                Shaping the Future of Healthcare Through Excellence in Nursing Education
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text- xl text-[#16a085] font-semibold mb-8 sm:mb-12">
                Where Compassion Meets Competence
              </p>
            </div>

            {/* Credentials */}
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
              <div className="flex items-center justify-center bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-center">
                  <div className="w-3 sm:w-4 h-3 sm:h-4 bg-[#16a085] rounded-full mx-auto mb-2"></div>
                  <span className="text-[#2c3e50] font-semibold text-xs block">Approved by</span>
                  <span className="text-[#6c757d] text-xs">Assam Nurses' Midwives' Council</span>
                </div>
              </div>
              <div className="flex items-center justify-center bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-center">
                  <div className="w-3 sm:w-4 h-3 sm:h-4 bg-[#16a085] rounded-full mx-auto mb-2"></div>
                  <span className="text-[#2c3e50] font-semibold text-xs block">Recognized by</span>
                  <span className="text-[#6c757d] text-xs">Govt. of Assam</span>
                </div>
              </div>
              <div className="flex items-center justify-center bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-center">
                  <div className="w-3 sm:w-4 h-3 sm:h-4 bg-[#16a085] rounded-full mx-auto mb-2"></div>
                  <span className="text-[#2c3e50] font-semibold text-xs block">Established</span>
                  <span className="text-[#6c757d] text-xs">2021</span>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mb-10 sm:mb-12">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#e74c3c] mb-2">3+</div>
                <div className="text-xs sm:text-sm text-[#6c757d]">Years Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#16a085] mb-2">500+</div>
                <div className="text-xs sm:text-sm text-[#6c757d]">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2c3e50] mb-2">95%</div>
                <div className="text-xs sm:text-sm text-[#6c757d]">Placement Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#e74c3c] mb-2">20+</div>
                <div className="text-xs sm:text-sm text-[#6c757d]">Hospital Partners</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
              <Link
                href="#admissions"
                className="group bg-gradient-to-r from-[#e74c3c] to-[#c0392b] text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl font-bold text-xs sm:text-sm lg:text-base shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center justify-center lg:justify-start">
                  Apply Now
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link
                href="#about"
                className="group border-2 border-[#2c3e50] text-[#2c3e50] px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl font-bold text-xs sm:text-sm lg:text-base hover:bg-[#2c3e50] hover:text-white transition-all duration-300"
              >
                <span className="flex items-center justify-center lg:justify-start">
                  Learn More
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* Right: Image */}
          <div
            className={(mounted ? "animate-fadeInRight" : "") + " relative hidden lg:block"}
            style={{ animationDuration: "900ms", animationTimingFunction: "ease-out", animationDelay: "200ms" }}
          >
            <div className="relative bg-white p-4 rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
              <Image
                src="/faculties.jpg"
                alt="Nursing students in a modern lab environment"
                width={900}
                height={900}
                className="w-full h-auto rounded-2xl object-cover"
                priority
              />
              <div className="absolute -z-10 top-8 right-8 w-24 h-24 bg-[#e74c3c]/10 rounded-full"></div>
              <div className="absolute -z-10 bottom-8 left-8 w-20 h-20 bg-[#16a085]/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}

