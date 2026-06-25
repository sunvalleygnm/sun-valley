export default function Fab() {
  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      <a
        href="tel:+919395894109"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e42332] text-white shadow-[0_18px_45px_rgba(228,35,50,0.35)] transition hover:-translate-y-1 sm:h-16 sm:w-16"
        aria-label="Call Sun Valley GNM School of Nursing"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 0 1 2-2h2.28a1 1 0 0 1 .95.68l1.1 3.3a1 1 0 0 1-.36 1.12l-1.5 1.12a12.5 12.5 0 0 0 5.31 5.31l1.12-1.5a1 1 0 0 1 1.12-.36l3.3 1.1a1 1 0 0 1 .68.95V19a2 2 0 0 1-2 2h-1C9.37 21 3 14.63 3 7V5z" />
        </svg>
      </a>
    </div>
  );
}
