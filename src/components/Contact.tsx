export default function Contact() {
  return (
    <section id="contact" className="section-shell bg-[#071d2b] text-white">
      <div className="section-inner">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <div className="eyebrow border-white/15 bg-white/10 text-white">Contact</div>
            <h2 className="mt-5 text-[clamp(2.1rem,4vw,4.6rem)] font-black leading-none tracking-normal">
              Start your admission conversation.
            </h2>
            <p className="mt-5 text-lg text-white/70">
              Reach out for admission guidance, course details, CEE preparation questions, or campus visit information.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <a href="tel:+919395894109" className="rounded-lg border border-white/12 bg-white/8 p-6 transition hover:bg-white/12">
              <p className="text-sm font-black uppercase tracking-[0.14em] text-white/50">Phone</p>
              <p className="mt-3 text-2xl font-black">93958-94109</p>
              <p className="text-xl font-black text-white/80">78965-43546</p>
            </a>
            <a href="mailto:gnmschoolsunvalley@gmail.com" className="rounded-lg border border-white/12 bg-white/8 p-6 transition hover:bg-white/12">
              <p className="text-sm font-black uppercase tracking-[0.14em] text-white/50">Email</p>
              <p className="mt-3 break-words text-lg font-black">gnmschoolsunvalley@gmail.com</p>
            </a>
            <div className="rounded-lg border border-white/12 bg-white/8 p-6 md:col-span-2">
              <p className="text-sm font-black uppercase tracking-[0.14em] text-white/50">Address</p>
              <p className="mt-3 text-xl font-black">Above Sun Valley Hospital, GS Rd, Mathura Nagar, Bormotoria, Guwahati, Assam 781006, India</p>
              <p className="mt-2 text-white/65">www.sunvalleynursingschool.in</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
