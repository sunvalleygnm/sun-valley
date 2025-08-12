export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#f8f9fa] to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-16 sm:w-32 h-16 sm:h-32 bg-[#e74c3c] rounded-full"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-12 sm:w-24 h-12 sm:h-24 bg-[#16a085] rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 sm:left-1/3 w-8 sm:w-16 h-8 sm:h-16 bg-[#2c3e50] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center bg-[#e74c3c]/10 text-[#e74c3c] px-3 sm:px-4 py-2 rounded-full text-xs font-semibold mb-4 sm:mb-6">
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#e74c3c] rounded-full mr-2"></span>
            About Our Institution
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2c3e50] mb-4 sm:mb-6">
            About <span className="text-[#e74c3c]">Sun Valley</span> GNM
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#6c757d] max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            Committed to excellence in nursing education since 2021, preparing compassionate healthcare professionals for tomorrow&#39;s challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-[#e74c3c] to-[#c0392b] rounded-xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                  <span className="text-white text-lg sm:text-xl">🎯</span>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#2c3e50]">Our Mission</h3>
              </div>
              <p className="text-sm sm:text-base text-[#6c757d] leading-relaxed">
                To provide comprehensive nursing education that combines theoretical knowledge with practical skills,
                preparing students to become competent, caring, and ethical nursing professionals who can meet the
                evolving healthcare needs of our community.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold text-[#2c3e50] mb-4">What Sets Us Apart</h4>
              <div className="space-y-4">
                <div className="flex items-start group">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#16a085] to-[#138d75] rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <span className="text-[#2c3e50] font-semibold">State-of-the-art facilities and equipment</span>
                    <p className="text-[#6c757d] text-sm mt-1">Modern labs and simulation centers for hands-on learning</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#16a085] to-[#138d75] rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <span className="text-[#2c3e50] font-semibold">Experienced and qualified faculty</span>
                    <p className="text-[#6c757d] text-sm mt-1">Expert educators with years of clinical experience</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#16a085] to-[#138d75] rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <span className="text-[#2c3e50] font-semibold">Clinical training in leading hospitals</span>
                    <p className="text-[#6c757d] text-sm mt-1">Real-world experience in top healthcare facilities</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#16a085] to-[#138d75] rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <span className="text-[#2c3e50] font-semibold">100% placement assistance</span>
                    <p className="text-[#6c757d] text-sm mt-1">Dedicated career support and job placement services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#e74c3c]/10 to-[#16a085]/10 rounded-full -translate-y-16 translate-x-16"></div>
            <h3 className="text-3xl font-bold text-[#2c3e50] mb-8 relative">Why Choose Us?</h3>
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-[#e74c3c] to-[#c0392b] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-3xl font-bold text-white">3+</span>
                </div>
                <div className="text-[#6c757d] font-medium">Years of Excellence</div>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-[#16a085] to-[#138d75] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-2xl font-bold text-white">500+</span>
                </div>
                <div className="text-[#6c757d] font-medium">Students Trained</div>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-[#2c3e50] to-[#1a252f] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-3xl font-bold text-white">95%</span>
                </div>
                <div className="text-[#6c757d] font-medium">Placement Rate</div>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-[#e74c3c] to-[#16a085] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-3xl font-bold text-white">20+</span>
                </div>
                <div className="text-[#6c757d] font-medium">Hospital Partners</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

