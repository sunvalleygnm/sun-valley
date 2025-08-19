export default function Contact() {
  return (
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
              gnmschoolsunvalley@gmail.com
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
  );
}

