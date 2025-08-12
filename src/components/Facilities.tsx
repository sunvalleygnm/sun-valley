import Image from "next/image";

export default function Facilities() {
  return (
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
  );
}

