"use client";
import Image from "next/image";
import Link from "next/link";

export default function Faculty() {
  return (
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
              <Link
                href="#contact"
                className="bg-gradient-to-r from-[#e74c3c] to-[#c0392b] text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 text-center"
              >
                Meet Our Faculty
              </Link>
              <Link
                href="#programs"
                className="border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#2c3e50] transition-all duration-300 text-center"
              >
                View Programs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

