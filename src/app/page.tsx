'use client';

import dynamic from "next/dynamic";
import Header from "@/components/Header";

const Hero = dynamic(() => import("@/components/Hero"), { ssr: true });
const About = dynamic(() => import("@/components/About"), { ssr: true });
const Programs = dynamic(() => import("@/components/Programs"), { ssr: true });
const Highlights = dynamic(() => import("@/components/Highlights"), { ssr: true });
const Faculty = dynamic(() => import("@/components/Faculty"), { ssr: true });
const Admissions = dynamic(() => import("@/components/Admissions"), { ssr: true });
const Facilities = dynamic(() => import("@/components/Facilities"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });
const Fab = dynamic(() => import("@/components/Fab"), { ssr: true });

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7fbfb] text-[#102a43]">
      <Header />
      <Hero />
      <About />
      <Programs />
      <Highlights />
      <Faculty />
      <Admissions />
      <Facilities />
      <Contact />

      <footer className="bg-[#071d2b] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-lg font-black tracking-tight">Sun Valley GNM School of Nursing</p>
              <p className="mt-2 max-w-2xl text-sm text-white/70">
                Above Sun Valley Hospital, GS Rd, Mathura Nagar, Bormotoria, Guwahati, Assam 781006, India
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-white/75">
              <a className="hover:text-white" href="#admissions">Admissions</a>
              <a className="hover:text-white" href="#programs">GNM Course</a>
              <a className="hover:text-white" href="#facilities">Facilities</a>
              <a className="hover:text-white" href="#contact">Contact</a>
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-6 text-xs text-white/50">
            Copyright 2026 Sun Valley GNM School of Nursing. All rights reserved.
          </div>
        </div>
      </footer>

      <Fab />
    </div>
  );
}
