'use client';

import Image from "next/image";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
const Hero = dynamic(() => import("@/components/Hero"), { ssr: true });
const About = dynamic(() => import("@/components/About"), { ssr: true });
const Programs = dynamic(() => import("@/components/Programs"), { ssr: true });


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
      <section id="faculty" className="py-24 bg-gradient-to-br from-[#2c3e50] to-[#1a252f] text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-[#e74c3c] rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#16a085] rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative order-2 lg:order-1">
              <div className="relative">
                {/* Main Faculty Image */}
                <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-3xl border border-white/20 shadow-2xl">
                  <Image
                    src="/faculties.jpg"
                    alt="Experienced Faculty at Sun Valley GNM School of Nursing"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-2xl"
                  />

                  {/* Floating Achievement Cards */}
                  <div className="absolute -top-6 -right-6 bg-gradient-to-r from-[#e74c3c] to-[#c0392b] text-white p-6 rounded-2xl shadow-xl">
                    <div className="text-center">
                      <div className="text-3xl font-bold">15+</div>
                      <div className="text-sm">Expert Faculty</div>
                    </div>
                  </div>

                  <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-[#16a085] to-[#138d75] text-white p-6 rounded-2xl shadow-xl">
                    <div className="text-center">
                      <div className="text-3xl font-bold">20+</div>
                      <div className="text-sm">Years Experience</div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -z-10 top-12 left-12 w-32 h-32 bg-[#e74c3c]/20 rounded-full blur-xl"></div>
                <div className="absolute -z-10 bottom-12 right-12 w-24 h-24 bg-[#16a085]/20 rounded-full blur-xl"></div>
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="inline-flex items-center bg-[#e74c3c]/20 text-[#e74c3c] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <span className="w-2 h-2 bg-[#e74c3c] rounded-full mr-2"></span>
                Meet Our Team
              </div>

              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Expert <span className="text-[#e74c3c]">Faculty</span>
              </h2>

              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Our distinguished faculty brings decades of clinical experience and academic excellence to provide
                world-class nursing education. Learn from the best in the field.
              </p>

              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <h3 className="text-xl font-bold text-[#16a085] mb-3">Qualified Educators</h3>
                  <p className="text-gray-300">
                    Our faculty holds advanced degrees in nursing and healthcare, with extensive clinical and teaching experience.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <h3 className="text-xl font-bold text-[#e74c3c] mb-3">Clinical Expertise</h3>
                  <p className="text-gray-300">
                    Active practitioners who bring real-world healthcare experience directly into the classroom.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                  <h3 className="text-xl font-bold text-[#16a085] mb-3">Mentorship Focus</h3>
                  <p className="text-gray-300">
                    Dedicated to student success with personalized guidance and career development support.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a
                  href="#contact"
                  className="bg-gradient-to-r from-[#e74c3c] to-[#c0392b] text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 text-center"
                >
                  Meet Our Faculty
                </a>
                <a
                  href="#programs"
                  className="border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#2c3e50] transition-all duration-300 text-center"
                >
                  View Programs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Section */}
      <section id="admissions" className="py-24 bg-gradient-to-br from-[#f8f9fa] to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-36 h-36 bg-[#2c3e50] rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-28 h-28 bg-[#e74c3c] rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-[#2c3e50]/10 text-[#2c3e50] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-[#2c3e50] rounded-full mr-2"></span>
              Join Our Community
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-[#2c3e50] mb-6">
              <span className="text-[#e74c3c]">Admissions</span> Open
            </h2>
            <p className="text-xl text-[#6c757d] max-w-4xl mx-auto leading-relaxed">
              Join our nursing program and start your journey towards a rewarding healthcare career. Transform your passion for caring into professional excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#2c3e50] mb-6">Eligibility Criteria</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-[#e74c3c] pl-4">
                  <h4 className="font-semibold text-[#2c3e50]">Educational Qualification</h4>
                  <p className="text-[#6c757d]">10+2 or equivalent with Physics, Chemistry, Biology and English</p>
                </div>
                <div className="border-l-4 border-[#16a085] pl-4">
                  <h4 className="font-semibold text-[#2c3e50]">Minimum Marks</h4>
                  <p className="text-[#6c757d]">45% aggregate in 10+2 (40% for reserved categories)</p>
                </div>
                <div className="border-l-4 border-[#2c3e50] pl-4">
                  <h4 className="font-semibold text-[#2c3e50]">Age Limit</h4>
                  <p className="text-[#6c757d]">17-35 years as on 31st December of admission year</p>
                </div>
                <div className="border-l-4 border-[#e74c3c] pl-4">
                  <h4 className="font-semibold text-[#2c3e50]">Medical Fitness</h4>
                  <p className="text-[#6c757d]">Medical fitness certificate required</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#2c3e50] mb-6">Application Process</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#e74c3c] text-white rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2c3e50]">Submit Application</h4>
                    <p className="text-[#6c757d]">Fill out the online application form with required documents</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#16a085] text-white rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2c3e50]">Entrance Test</h4>
                    <p className="text-[#6c757d]">Appear for the entrance examination and interview</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#2c3e50] text-white rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2c3e50]">Merit List</h4>
                    <p className="text-[#6c757d]">Check merit list and counseling schedule</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#e74c3c] text-white rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2c3e50]">Admission</h4>
                    <p className="text-[#6c757d]">Complete admission formalities and fee payment</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-[#f8f9fa] rounded-lg">
                <h4 className="font-semibold text-[#2c3e50] mb-2">Important Dates</h4>
                <div className="text-[#6c757d] text-sm space-y-1">
                  <p>• Application Start: March 2024</p>
                  <p>• Application Deadline: May 2024</p>
                  <p>• Entrance Test: June 2024</p>
                  <p>• Classes Begin: August 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transport & Facilities Section */}
      <section id="facilities" className="py-24 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-36 h-36 bg-[#16a085] rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-28 h-28 bg-[#e74c3c] rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-[#16a085]/10 text-[#16a085] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-[#16a085] rounded-full mr-2"></span>
              Student Facilities
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-[#2c3e50] mb-6">
              Transport & <span className="text-[#16a085]">Facilities</span>
            </h2>
            <p className="text-xl text-[#6c757d] max-w-4xl mx-auto leading-relaxed">
              We provide comprehensive facilities and safe transportation to ensure a comfortable and secure learning environment for all our students.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content Side */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-[#f8f9fa] to-white p-8 rounded-3xl shadow-xl border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#16a085] to-[#138d75] rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🚌</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#2c3e50]">Safe Transportation</h3>
                </div>
                <p className="text-[#6c757d] leading-relaxed mb-6">
                  Modern, well-maintained buses with experienced drivers ensure safe and comfortable daily commute for students from various locations across Guwahati and surrounding areas.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-[#6c757d]">
                    <div className="w-2 h-2 bg-[#16a085] rounded-full mr-3"></div>
                    <span>Multiple routes covering Guwahati</span>
                  </div>
                  <div className="flex items-center text-[#6c757d]">
                    <div className="w-2 h-2 bg-[#16a085] rounded-full mr-3"></div>
                    <span>GPS tracking for safety</span>
                  </div>
                  <div className="flex items-center text-[#6c757d]">
                    <div className="w-2 h-2 bg-[#16a085] rounded-full mr-3"></div>
                    <span>Affordable transportation fees</span>
                  </div>
                  <div className="flex items-center text-[#6c757d]">
                    <div className="w-2 h-2 bg-[#16a085] rounded-full mr-3"></div>
                    <span>Punctual and reliable service</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[#e74c3c]/10 to-white p-6 rounded-2xl border border-[#e74c3c]/20">
                  <div className="w-10 h-10 bg-[#e74c3c] rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-lg">🏥</span>
                  </div>
                  <h4 className="font-bold text-[#2c3e50] mb-2">Modern Labs</h4>
                  <p className="text-[#6c757d] text-sm">State-of-the-art nursing labs with latest equipment</p>
                </div>

                <div className="bg-gradient-to-br from-[#2c3e50]/10 to-white p-6 rounded-2xl border border-[#2c3e50]/20">
                  <div className="w-10 h-10 bg-[#2c3e50] rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-lg">📚</span>
                  </div>
                  <h4 className="font-bold text-[#2c3e50] mb-2">Library</h4>
                  <p className="text-[#6c757d] text-sm">Comprehensive medical and nursing literature</p>
                </div>

                <div className="bg-gradient-to-br from-[#16a085]/10 to-white p-6 rounded-2xl border border-[#16a085]/20">
                  <div className="w-10 h-10 bg-[#16a085] rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-lg">🏠</span>
                  </div>
                  <h4 className="font-bold text-[#2c3e50] mb-2">Hostel</h4>
                  <p className="text-[#6c757d] text-sm">Safe and comfortable accommodation</p>
                </div>

                <div className="bg-gradient-to-br from-[#e74c3c]/10 to-white p-6 rounded-2xl border border-[#e74c3c]/20">
                  <div className="w-10 h-10 bg-[#e74c3c] rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-lg">🍽️</span>
                  </div>
                  <h4 className="font-bold text-[#2c3e50] mb-2">Cafeteria</h4>
                  <p className="text-[#6c757d] text-sm">Nutritious meals and refreshments</p>
                </div>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative">
              <div className="relative">
                {/* Main Transport Image */}
                <div className="relative bg-gradient-to-br from-[#f8f9fa] to-white p-6 rounded-3xl shadow-2xl border border-gray-100">
                  <Image
                    src="/transport 2.jpeg"
                    alt="Safe and Reliable Transportation at Sun Valley GNM School"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-2xl"
                  />

                  {/* Floating Info Cards */}
                  <div className="absolute -top-4 -left-4 bg-gradient-to-r from-[#16a085] to-[#138d75] text-white p-4 rounded-2xl shadow-xl">
                    <div className="text-center">
                      <div className="text-2xl font-bold">24/7</div>
                      <div className="text-xs">Safety Support</div>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-[#e74c3c] to-[#c0392b] text-white p-4 rounded-2xl shadow-xl">
                    <div className="text-center">
                      <div className="text-2xl font-bold">10+</div>
                      <div className="text-xs">Bus Routes</div>
                    </div>
                  </div>

                  <div className="absolute top-1/2 -right-6 bg-gradient-to-r from-[#2c3e50] to-[#1a252f] text-white p-4 rounded-2xl shadow-xl">
                    <div className="text-center">
                      <div className="text-xl font-bold">GPS</div>
                      <div className="text-xs">Tracked</div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -z-10 top-8 right-8 w-32 h-32 bg-[#16a085]/10 rounded-full"></div>
                <div className="absolute -z-10 bottom-8 left-8 w-24 h-24 bg-[#e74c3c]/10 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-[#f8f9fa] to-white p-8 rounded-3xl shadow-xl border border-gray-100 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-[#2c3e50] mb-4">Complete Student Support</h3>
              <p className="text-[#6c757d] mb-6">
                From transportation to accommodation, we ensure every aspect of student life is taken care of so you can focus on your studies and career development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="bg-gradient-to-r from-[#16a085] to-[#138d75] text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300">
                  Learn More
                </a>
                <a href="#admissions" className="border-2 border-[#2c3e50] text-[#2c3e50] px-8 py-3 rounded-xl font-semibold hover:bg-[#2c3e50] hover:text-white transition-all duration-300">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#2c3e50] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Get in touch with us for admissions, inquiries, or any other information.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#e74c3c] rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Address</h3>
              <p className="opacity-90">
                G.T. Road, Guwahati<br />
                Assam, India - 781001
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#16a085] rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="opacity-90">
                +91 98765 43210<br />
                +91 87654 32109
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#e74c3c] rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">✉️</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="opacity-90">
                info@sunvalleygnm.edu.in<br />
                admissions@sunvalleygnm.edu.in
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Nursing Career?</h3>
              <p className="mb-6 opacity-90">
                Join Sun Valley GNM School of Nursing and become part of the healthcare revolution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+919876543210" className="bg-[#e74c3c] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#c0392b] transition-colors">
                  Call Now
                </a>
                <a href="mailto:admissions@sunvalleygnm.edu.in" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#2c3e50] transition-colors">
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  <p className="flex items-center"><span className="text-[#16a085] mr-2 flex-shrink-0">✓</span> Approved by: Assam Nurses' Midwives' Council</p>
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
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
        <a
          href="tel:+919876543210"
          className="group bg-gradient-to-r from-[#e74c3c] to-[#c0392b] text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-2xl hover:shadow-[#e74c3c]/25 hover:scale-110 transition-all duration-300 animate-pulse-glow"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
