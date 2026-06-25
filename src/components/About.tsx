const pillars = [
  ["Clinical confidence", "Practice-led learning that connects nursing theory with hospital realities."],
  ["Parent hospital support", "Students learn around a healthcare ecosystem connected to Sun Valley Hospital."],
  ["Guided preparation", "CEE-focused admission guidance and clear academic mentoring from day one."],
  ["Placement mindset", "Career readiness, interview preparation, and placement support built into the journey."],
];

export default function About() {
  return (
    <section id="about" className="section-shell bg-[#f7fbfb]">
      <div className="section-inner">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="eyebrow">About the institution</div>
            <h2 className="section-title">A focused GNM school for future healthcare workers.</h2>
          </div>
          <p className="section-copy lg:pb-2">
            Established in 2021, Sun Valley GNM School of Nursing is built for students who want a practical, respected route into nursing. The experience is direct, disciplined, and centered on patient care.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map(([title, copy]) => (
            <article key={title} className="info-card p-5">
              <div className="mb-5 h-1.5 w-14 rounded-full bg-[#e42332]" />
              <h3 className="text-lg font-black text-[#071d2b]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#486278]">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
