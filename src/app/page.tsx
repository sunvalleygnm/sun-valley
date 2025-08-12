'use client';


import dynamic from "next/dynamic";
import Header from "@/components/Header";
const Hero = dynamic(() => import("@/components/Hero"), { ssr: true });
const About = dynamic(() => import("@/components/About"), { ssr: true });
const Programs = dynamic(() => import("@/components/Programs"), { ssr: true });
const Faculty = dynamic(() => import("@/components/Faculty"), { ssr: true });
const Admissions = dynamic(() => import("@/components/Admissions"), { ssr: true });
const Facilities = dynamic(() => import("@/components/Facilities"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });
const Fab = dynamic(() => import("@/components/Fab"), { ssr: true });


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Programs Section */}
      <Programs />

      {/* Faculty Section */}
      <Faculty />

      {/* Admissions Section */}
      <Admissions />

      {/* Transport & Facilities Section */}
      <Facilities />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#1a252f] to-[#2c3e50] text-white py-12 sm:py-16 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-5 sm:top-10 right-5 sm:right-10 w-16 sm:w-32 h-16 sm:h-32 bg-[#e74c3c] rounded-full"></div>
          <div className="absolute bottom-5 sm:bottom-10 left-5 sm:left-10 w-12 sm:w-24 h-12 sm:h-24 bg-[#16a085] rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            <div className="sm:col-span-2 lg:col-span-2">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                Sun Valley <span className="text-[#e74c3c]">GNM</span>
              </h3>
              <p className="text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                Shaping the future of healthcare through excellence in nursing education. Join us in making a difference in the lives of patients and communities.
              </p>
              <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-white/20">
                <div className="text-xs sm:text-sm text-gray-300 space-y-1">
                  <p className="flex items-center"><span className="text-[#16a085] mr-2 flex-shrink-0">✓</span> Approved by: Assam Nurses&#39; Midwives&#39; Council</p>
                  <p className="flex items-center"><span className="text-[#16a085] mr-2 flex-shrink-0">✓</span> Recognized by: Govt. of Assam</p>
                  <p className="flex items-center"><span className="text-[#16a085] mr-2 flex-shrink-0">✓</span> Established: 2021</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-[#e74c3c]">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li><a href="#home" className="text-gray-300 hover:text-[#e74c3c] transition-colors flex items-center group text-sm sm:text-base">
                  <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#16a085] rounded-full mr-2 sm:mr-3 group-hover:bg-[#e74c3c] transition-colors flex-shrink-0"></span>
                  Home
                </a></li>
                <li><a href="#about" className="text-gray-300 hover:text-[#e74c3c] transition-colors flex items-center group text-sm sm:text-base">
                  <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#16a085] rounded-full mr-2 sm:mr-3 group-hover:bg-[#e74c3c] transition-colors flex-shrink-0"></span>
                  About
                </a></li>
                <li><a href="#programs" className="text-gray-300 hover:text-[#e74c3c] transition-colors flex items-center group text-sm sm:text-base">
                  <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#16a085] rounded-full mr-2 sm:mr-3 group-hover:bg-[#e74c3c] transition-colors flex-shrink-0"></span>
                  Programs
                </a></li>
                <li><a href="#faculty" className="text-gray-300 hover:text-[#e74c3c] transition-colors flex items-center group text-sm sm:text-base">
                  <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#16a085] rounded-full mr-2 sm:mr-3 group-hover:bg-[#e74c3c] transition-colors flex-shrink-0"></span>
                  Faculty
                </a></li>
                <li><a href="#facilities" className="text-gray-300 hover:text-[#e74c3c] transition-colors flex items-center group text-sm sm:text-base">
                  <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#16a085] rounded-full mr-2 sm:mr-3 group-hover:bg-[#e74c3c] transition-colors flex-shrink-0"></span>
                  Facilities
                </a></li>
                <li><a href="#admissions" className="text-gray-300 hover:text-[#e74c3c] transition-colors flex items-center group text-sm sm:text-base">
                  <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#16a085] rounded-full mr-2 sm:mr-3 group-hover:bg-[#e74c3c] transition-colors flex-shrink-0"></span>
                  Admissions
                </a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-[#16a085]">Contact Info</h4>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start">
                  <div className="w-6 sm:w-8 h-6 sm:h-8 bg-[#e74c3c]/20 rounded-lg flex items-center justify-center mr-2 sm:mr-3 mt-1 flex-shrink-0">
                    <span className="text-[#e74c3c] text-xs sm:text-sm">📍</span>
                  </div>
                  <div className="text-gray-300">
                    <p className="font-medium text-sm sm:text-base">Address</p>
                    <p className="text-xs sm:text-sm">G.T. Road, Guwahati<br />Assam, India - 781001</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 sm:w-8 h-6 sm:h-8 bg-[#16a085]/20 rounded-lg flex items-center justify-center mr-2 sm:mr-3 mt-1 flex-shrink-0">
                    <span className="text-[#16a085] text-xs sm:text-sm">📞</span>
                  </div>
                  <div className="text-gray-300">
                    <p className="font-medium text-sm sm:text-base">Phone</p>
                    <p className="text-xs sm:text-sm">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 sm:w-8 h-6 sm:h-8 bg-[#e74c3c]/20 rounded-lg flex items-center justify-center mr-2 sm:mr-3 mt-1 flex-shrink-0">
                    <span className="text-[#e74c3c] text-xs sm:text-sm">✉️</span>
                  </div>
                  <div className="text-gray-300">
                    <p className="font-medium text-sm sm:text-base">Email</p>
                    <p className="text-xs sm:text-sm">info@sunvalleygnm.edu.in</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 sm:mt-12 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
                © 2024 Sun Valley GNM School of Nursing. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6">
                <a href="#" className="text-gray-400 hover:text-[#e74c3c] transition-colors text-xs sm:text-sm">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-[#e74c3c] transition-colors text-xs sm:text-sm">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-[#e74c3c] transition-colors text-xs sm:text-sm">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <Fab />
    </div>
  );
}
