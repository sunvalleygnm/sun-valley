

export default function Admissions() {
  return (
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
  );
}

