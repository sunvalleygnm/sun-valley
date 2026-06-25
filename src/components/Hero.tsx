import Image from "next/image";
import Link from "next/link";

const facts = [
  ["Recognised", "Indian Nursing Council and Govt. of Assam"],
  ["ANC", "Recognised by Assam Nursing Council"],
  ["2026", "Admissions open for 2026-27"],
];

export default function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[calc(100vh-4rem)] overflow-hidden bg-[#edfafa]">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-[0.24]"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/faculties.jpg"
        aria-hidden="true"
      >
        <source src="/hero-nursing.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-[#f7fbfb]/96 via-[#f7fbfb]/82 to-[#f7fbfb]/62" aria-hidden="true" />
      <div className="absolute inset-0 grid-paper opacity-70" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#f7fbfb] to-transparent" aria-hidden="true" />

      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:px-8">
        <div className="max-w-3xl">
          <div className="eyebrow">Admission Open 2026-27</div>
          <h1 className="mt-5 text-[clamp(2.65rem,7vw,6.8rem)] font-black leading-[0.92] tracking-normal text-[#071d2b]">
            Become a confident nurse.
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-medium text-[#486278] sm:text-xl">
            Sun Valley GNM School of Nursing prepares students through classroom depth, clinical practice, and a parent-hospital ecosystem in Guwahati.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="#admissions" className="btn-solid">
              Apply for GNM
            </Link>
            <Link href="#programs" className="btn-outline">
              View Course Details
            </Link>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {facts.map(([title, detail]) => (
              <div key={title} className="info-card p-4">
                <p className="text-2xl font-black text-[#123bd3]">{title}</p>
                <p className="mt-1 text-xs font-bold leading-snug text-[#486278]">{detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-5 top-8 z-10 hidden rounded-md bg-[#ffd94d] px-4 py-3 text-sm font-black text-[#071d2b] shadow-xl sm:block">
            10+2 any stream
          </div>
          <div className="absolute -right-4 bottom-10 z-10 rounded-md bg-[#123bd3] px-4 py-3 text-sm font-black text-white shadow-xl">
            3 years GNM
          </div>
          <div className="overflow-hidden rounded-lg border border-white/70 bg-white p-3 shadow-[0_28px_80px_rgba(7,29,43,0.18)]">
            <Image
              src="/admission-2026.jpeg"
              alt="Sun Valley GNM School of Nursing admission open poster for 2026-27"
              width={1080}
              height={1600}
              sizes="(max-width: 1024px) 92vw, 42vw"
              className="max-h-[74vh] w-full rounded-md object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
