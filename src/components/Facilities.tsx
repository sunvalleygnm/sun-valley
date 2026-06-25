import Image from "next/image";

const facilities = ["Transport routes", "Nursing labs", "Library access", "Hostel support", "Parent hospital", "Career support"];

export default function Facilities() {
  return (
    <section id="facilities" className="section-shell bg-[#edfafa]">
      <div className="section-inner">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="eyebrow">Facilities</div>
            <h2 className="section-title">Daily student life, handled with care.</h2>
            <p className="section-copy">
              From safe transportation to academic support spaces, the campus experience is designed to keep students focused on learning and clinical readiness.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {facilities.map((item) => (
                <div key={item} className="rounded-md bg-white p-4 text-sm font-black text-[#102a43] shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-white bg-white p-3 shadow-[0_24px_70px_rgba(7,29,43,0.12)]">
            <Image
              src="/transport 2.jpeg"
              alt="Transport facility at Sun Valley GNM School of Nursing"
              width={1200}
              height={800}
              sizes="(max-width: 1024px) 92vw, 40vw"
              className="rounded-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
