export default function Fab(): JSX.Element {
  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
      <a
        href="tel:+919876543210"
        className="group bg-gradient-to-r from-[#e74c3c] to-[#c0392b] text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-2xl hover:shadow-[#e74c3c]/25 hover:scale-110 transition-all duration-300 animate-pulse-glow"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </a>
    </div>
  );
}

