import React from "react";

export default function Programs() {
  return (
    <section id="programs" className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-5 sm:top-10 right-5 sm:right-10 w-20 sm:w-40 h-20 sm:h-40 bg-[#16a085] rounded-full"></div>
        <div className="absolute bottom-5 sm:bottom-10 left-5 sm:left-10 w-16 sm:w-32 h-16 sm:h-32 bg-[#e74c3c] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center bg-[#16a085]/10 text-[#16a085] px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#16a085] rounded-full mr-2"></span>
            Academic Excellence
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2c3e50] mb-4 sm:mb-6">
            Our <span className="text-[#e74c3c]">Programs</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#6c757d] max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            Comprehensive nursing programs designed to meet industry standards and prepare you for a successful healthcare career.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* GNM Program Card */}
          <div className="group bg-gradient-to-br from-white to-[#f8f9fa] p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden sm:col-span-2 lg:col-span-1">
            <div className="absolute top-0 right-0 w-12 sm:w-24 h-12 sm:h-24 bg-gradient-to-br from-[#e74c3c]/10 to-transparent rounded-full -translate-y-6 sm:-translate-y-12 translate-x-6 sm:translate-x-12"></div>
            <div className="relative">
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-[#e74c3c] to-[#c0392b] rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <span className="text-white text-2xl sm:text-3xl">🎓</span>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#2c3e50] mb-3 sm:mb-4 group-hover:text-[#e74c3c] transition-colors">
                General Nursing & Midwifery (GNM)
              </h3>
              <p className="text-sm sm:text-base text-[#6c757d] mb-4 sm:mb-6 leading-relaxed">
                3.5-year comprehensive diploma program covering nursing care, midwifery, and community health with extensive practical training.
              </p>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center text-[#6c757d] text-sm sm:text-base">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#e74c3c] rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                  <span>Duration: 3 years</span>
                </div>
                <div className="flex items-center text-[#6c757d] text-sm sm:text-base">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#e74c3c] rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                  <span>Clinical Training: 6 months</span>
                </div>
                <div className="flex items-center text-[#6c757d] text-sm sm:text-base">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#e74c3c] rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                  <span>Eligibility: Any stream preferably Science</span>
                </div>
                <div className="flex items-center text-[#6c757d] text-sm sm:text-base">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#e74c3c] rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                  <span>Registration: Assam Nursing Council</span>
                </div>
              </div>
            </div>
          </div>

          {/* Clinical Training Card */}
          <div className="group bg-gradient-to-br from-white to-[#f8f9fa] p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#16a085]/10 to-transparent rounded-full -translate-y-12 translate-x-12"></div>
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-[#16a085] to-[#138d75] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <span className="text-white text-3xl">🏥</span>
              </div>
              <h3 className="text-2xl font-bold text-[#2c3e50] mb-4 group-hover:text-[#16a085] transition-colors">
                Clinical Training
              </h3>
              <p className="text-[#6c757d] mb-6 leading-relaxed">
                Hands-on experience in leading hospitals and healthcare facilities across Assam with expert supervision and mentorship.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-[#6c757d]">
                  <div className="w-2 h-2 bg-[#16a085] rounded-full mr-3"></div>
                  <span>Medical-Surgical Nursing</span>
                </div>
                <div className="flex items-center text-[#6c757d]">
                  <div className="w-2 h-2 bg-[#16a085] rounded-full mr-3"></div>
                  <span>Pediatric Nursing</span>
                </div>
                <div className="flex items-center text-[#6c757d]">
                  <div className="w-2 h-2 bg-[#16a085] rounded-full mr-3"></div>
                  <span>Obstetric & Gynecological Nursing</span>
                </div>
                <div className="flex items-center text-[#6c757d]">
                  <div className="w-2 h-2 bg-[#16a085] rounded-full mr-3"></div>
                  <span>Community Health Nursing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Career Support Card */}
          <div className="group bg-gradient-to-br from-white to-[#f8f9fa] p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#2c3e50]/10 to-transparent rounded-full -translate-y-12 translate-x-12"></div>
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-[#2c3e50] to-[#1a252f] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <span className="text-white text-3xl">💼</span>
              </div>
              <h3 className="text-2xl font-bold text-[#2c3e50] mb-4 group-hover:text-[#2c3e50] transition-colors">
                Career Support
              </h3>
              <p className="text-[#6c757d] mb-6 leading-relaxed">
                Comprehensive placement assistance and career guidance to ensure successful transition into the healthcare industry.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-[#6c757d]">
                  <div className="w-2 h-2 bg-[#2c3e50] rounded-full mr-3"></div>
                  <span>Job Placement Assistance</span>
                </div>
                <div className="flex items-center text-[#6c757d]">
                  <div className="w-2 h-2 bg-[#2c3e50] rounded-full mr-3"></div>
                  <span>Interview Preparation</span>
                </div>
                <div className="flex items-center text-[#6c757d]">
                  <div className="w-2 h-2 bg-[#2c3e50] rounded-full mr-3"></div>
                  <span>Resume Building</span>
                </div>
                <div className="flex items-center text-[#6c757d]">
                  <div className="w-2 h-2 bg-[#2c3e50] rounded-full mr-3"></div>
                  <span>Industry Connections</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

