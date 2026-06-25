const modules = [
  "Medical-Surgical Nursing",
  "Community Health Nursing",
  "Child Health Nursing",
  "Midwifery and Obstetrical Nursing",
  "Mental Health Nursing",
  "Clinical Posting and Ward Practice",
];

export default function Programs() {
  return (
    <section id="programs" className="section-shell bg-white">
      <div className="section-inner">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-start">
          <div>
            <div className="eyebrow">GNM course</div>
            <h2 className="section-title">Three years. Any stream. One professional path.</h2>
            <p className="section-copy">
              The General Nursing and Midwifery program is designed for 10+2 students who want a structured path into nursing, bedside care, and community health.
            </p>
          </div>

          <div className="info-card overflow-hidden">
            <div className="bg-[#123bd3] p-6 text-white">
              <p className="text-sm font-black uppercase tracking-[0.14em] text-white/75">Eligibility</p>
              <p className="mt-2 text-3xl font-black">10+2 with any stream</p>
            </div>
            <div className="grid grid-cols-2 gap-px bg-[#071d2b]/10 text-center">
              <div className="bg-white p-5">
                <p className="text-3xl font-black text-[#e42332]">3</p>
                <p className="text-xs font-bold uppercase text-[#486278]">Years course</p>
              </div>
              <div className="bg-white p-5">
                <p className="text-3xl font-black text-[#0f9f9a]">CEE</p>
                <p className="text-xs font-bold uppercase text-[#486278]">Required 2026</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-md border border-[#071d2b]/10 bg-[#f7fbfb] p-4">
              <span className="h-2.5 w-2.5 flex-none rounded-full bg-[#0f9f9a]" />
              <span className="text-sm font-bold text-[#102a43]">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
