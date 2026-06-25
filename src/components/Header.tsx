"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  ["About", "#about"],
  ["Course", "#programs"],
  ["Campus", "#highlights"],
  ["Faculty", "#faculty"],
  ["Facilities", "#facilities"],
  ["Admissions", "#admissions"],
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#071d2b]/10 bg-white/88 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link href="#home" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
          <Image
            src="/logo.png"
            alt="Sun Valley GNM School of Nursing"
            width={72}
            height={72}
            className="h-12 w-12 object-contain lg:h-14 lg:w-14"
            priority
          />
          <div className="leading-tight">
            <p className="text-sm font-black tracking-tight text-[#071d2b] sm:text-base">Sun Valley GNM</p>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#123bd3]">School of Nursing</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="rounded-md px-3 py-2 text-sm font-bold text-[#102a43] transition hover:bg-[#dff7f3] hover:text-[#123bd3]"
            >
              {label}
            </Link>
          ))}
          <Link href="#contact" className="ml-2 btn-solid text-sm">
            Enquire Now
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#071d2b]/10 text-[#071d2b] lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-[#071d2b]/10 bg-white px-4 py-3 lg:hidden">
          <div className="grid gap-1">
            {navItems.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-bold text-[#102a43] hover:bg-[#dff7f3]"
              >
                {label}
              </Link>
            ))}
            <Link href="#contact" onClick={() => setIsMenuOpen(false)} className="mt-2 btn-solid text-sm">
              Enquire Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
