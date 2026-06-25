import Image from "next/image";

const dates = [
  ["Application start", "10th April 2026"],
  ["Application deadline", "30th May 2026"],
  ["Entrance exam", "28th June 2026"],
];

const benefits = [
  "Affordable fee structure",
  "Both male and female students can apply",
  "100% placement assistance",
  "Own parent hospital support",
];

export default function Admissions() {
  return (
    <section id="admissions" className="section-shell bg-white">
      <div className="section-inner">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <div className="eyebrow">Admission open</div>
            <h2 className="section-title">GNM admission for 2026-27 is open.</h2>
            <p className="section-copy">
              CEE 2026 is mandatory for enrolment in the GNM course, conducted by SSHUS, Government of Assam.
            </p>

            <div className="mt-8 overflow-hidden rounded-lg border border-[#071d2b]/10 bg-[#f7fbfb]">
              <Image
                src="/admission-2026.jpeg"
                alt="Admission open poster for Sun Valley GNM School of Nursing 2026-27"
                width={1080}
                height={1600}
                sizes="(max-width: 1024px) 92vw, 34vw"
                className="w-full object-contain"
              />
            </div>
          </div>

          <div className="grid gap-5">
            <div className="info-card p-6">
              <p className="text-sm font-black uppercase tracking-[0.14em] text-[#123bd3]">Important dates</p>
              <div className="mt-5 grid gap-3">
                {dates.map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between gap-4 rounded-md bg-[#edfafa] p-4">
                    <span className="text-sm font-black text-[#486278]">{label}</span>
                    <span className="text-right text-lg font-black text-[#e42332]">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="info-card p-6">
                <h3 className="text-2xl font-black text-[#071d2b]">Eligibility</h3>
                <p className="mt-4 text-[#486278]">10+2 with any stream. Students should be prepared for the Common Entrance Examination 2026.</p>
              </div>
              <div className="info-card p-6">
                <h3 className="text-2xl font-black text-[#071d2b]">Course</h3>
                <p className="mt-4 text-[#486278]">GNM is a 3 years course with classroom learning, clinical training, and career preparation.</p>
              </div>
            </div>

            <div className="info-card p-6">
              <h3 className="text-2xl font-black text-[#071d2b]">Why choose Sun Valley?</h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {benefits.map((item) => (
                  <div key={item} className="flex gap-3 rounded-md border border-[#071d2b]/10 p-4">
                    <span className="mt-2 h-2 w-2 flex-none rounded-full bg-[#0f9f9a]" />
                    <span className="text-sm font-bold text-[#486278]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
