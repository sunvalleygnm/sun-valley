import Image from "next/image";
import Link from "next/link";

export default function Faculty() {
  return (
    <section id="faculty" className="section-shell bg-[#071d2b] text-white">
      <div className="section-inner">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative overflow-hidden rounded-lg border border-white/12 bg-white/8 p-3">
            <Image
              src="/faculties.jpg"
              alt="Faculty and students at Sun Valley GNM School of Nursing"
              width={1200}
              height={800}
              className="rounded-md object-cover"
            />
          </div>

          <div>
            <div className="eyebrow border-white/15 bg-white/10 text-white">Faculty and mentoring</div>
            <h2 className="mt-5 text-[clamp(2rem,4vw,4.8rem)] font-black leading-none tracking-normal">
              Learn with faculty who keep nursing practical.
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-white/72">
              The academic experience is built around qualified teaching, clinical exposure, and regular mentoring so students can move from classroom concepts to confident care.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {["Clinical discipline", "Student mentoring", "Career guidance"].map((item) => (
                <div key={item} className="rounded-md border border-white/12 bg-white/8 p-4 text-sm font-black">
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#contact" className="btn-solid">Talk to Admissions</Link>
              <Link href="#facilities" className="inline-flex min-h-[46px] items-center justify-center rounded-md border border-white/25 px-4 font-black text-white hover:bg-white hover:text-[#071d2b]">
                View Facilities
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
