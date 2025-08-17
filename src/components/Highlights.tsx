import Image from "next/image";

type Highlight = {
  src: string;
  title: string;
  description: string;
  alt: string;
};

const highlights: Highlight[] = [
  {
    src: "/activity.jpeg",
    title: "Student Activities",
    description:
      "Hands-on learning through engaging academic and co-curricular activities that build real-world clinical confidence.",
    alt: "Students participating in nursing activities",
  },
  {
    src: "/awards.jpeg",
    title: "Awards & Recognition",
    description:
      "Celebrating achievements and excellence in nursing education, leadership, and community service.",
    alt: "Awards and recognition ceremony",
  },
  {
    src: "/birthday.jpeg",
    title: "Campus Life",
    description:
      "A supportive, vibrant community that values empathy, collaboration, and lifelong friendships.",
    alt: "Students celebrating a birthday on campus",
  },
  {
    src: "/celebration.jpeg",
    title: "Cultural Celebrations",
    description:
      "Events and festivals that promote diversity, belonging, and a positive student experience.",
    alt: "Cultural celebration at the campus",
  },
  {
    src: "/counselling.jpeg",
    title: "Counselling & Guidance",
    description:
      "Personalized academic and career guidance to help every student thrive in the healthcare profession.",
    alt: "Counselling session for students",
  },
  {
    src: "/felicitation.jpeg",
    title: "Felicitation Programs",
    description:
      "Honouring outstanding contributions and milestones achieved by our students and faculty.",
    alt: "Felicitation event on stage",
  },
  {
    src: "/foundation.jpeg",
    title: "Foundation Day",
    description:
      "Marking our commitment to excellence in nursing education and community healthcare service.",
    alt: "Foundation day group photo",
  },
];

export default function Highlights() {
  return (
    <>
      {highlights.map((item, idx) => (
        <section
          key={item.src}
          id={`highlight-${idx + 1}`}
          className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#f8f9fa] to-white relative overflow-hidden"
        >
          {/* Background accents */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 right-10 w-24 h-24 bg-[#e74c3c] rounded-full"></div>
            <div className="absolute bottom-10 left-10 w-20 h-20 bg-[#16a085] rounded-full"></div>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Text */}
              <div className="order-2 lg:order-1 text-center lg:text-left">
                <div className="inline-flex items-center bg-[#e74c3c]/10 text-[#e74c3c] px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                  <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#e74c3c] rounded-full mr-2"></span>
                  Campus Highlight
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2c3e50] mb-4">
                  {item.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-[#6c757d] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Image */}
              <div className="order-1 lg:order-2">
                <div className="relative bg-white p-4 sm:p-6 rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={1200}
                    height={800}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="w-full h-auto rounded-2xl object-cover"
                    priority={idx === 0}
                  />
                  <div className="absolute -z-10 top-6 right-6 w-20 h-20 bg-[#e74c3c]/10 rounded-full"></div>
                  <div className="absolute -z-10 bottom-6 left-6 w-16 h-16 bg-[#16a085]/10 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

