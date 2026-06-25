import Image from "next/image";

const highlights = [
  ["/activity.jpeg", "Student Activities", "Hands-on learning and academic participation."],
  ["/awards.jpeg", "Recognition", "Celebrating achievement and service."],
  ["/counselling.jpeg", "Counselling", "Guidance for admissions and career direction."],
  ["/foundation.jpeg", "Foundation Day", "Institutional milestones and community spirit."],
  ["/celebration.jpeg", "Campus Culture", "A supportive student community."],
  ["/felicitation.jpeg", "Felicitation", "Honouring students, faculty, and guests."],
];

export default function Highlights() {
  return (
    <section id="highlights" className="section-shell bg-[#edfafa]">
      <div className="section-inner">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="eyebrow">Campus life</div>
            <h2 className="section-title max-w-3xl">Real moments from the Sun Valley campus.</h2>
          </div>
          <p className="section-copy md:max-w-md">
            Existing campus images are used throughout, keeping the redesign grounded in the actual school environment.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map(([src, title, copy], index) => (
            <article key={src} className={`group overflow-hidden rounded-lg bg-white shadow-sm ${index === 0 ? "lg:col-span-2" : ""}`}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={src}
                  alt={`${title} at Sun Valley GNM School of Nursing`}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="border border-t-0 border-[#071d2b]/10 p-4">
                <h3 className="font-black text-[#071d2b]">{title}</h3>
                <p className="mt-1 text-sm text-[#486278]">{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
