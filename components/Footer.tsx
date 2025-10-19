import svgPaths from "../imports/svg-q3cfdsi52r";

export default function Footer() {
  return (
    <footer className="relative">
      {/* Footer Background */}
      <div className="absolute bg-[#111111] bottom-[-1070px] h-[86px] left-1/2 translate-x-[-50%] w-[1440px]" />
      
      {/* Home Icon */}
      <button className="absolute aspect-[30.6429/25.9285] block cursor-pointer left-[4.51%] right-[93.82%] translate-y-[-50%]" style={{ top: "calc(50% + 1539px)" }}>
        <div className="absolute inset-[-5%_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 22">
            <path d={svgPaths.p3672900} stroke="#BFBFBF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </button>
      
      {/* Copyright Text */}
      <div className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[0] not-italic text-[#bfbfbf] text-[20px] text-nowrap top-[2044px]" style={{ left: "calc(50% + 499px)" }}>
        <p className="leading-[normal] whitespace-pre">© 2025. V 2.0</p>
      </div>
      
      {/* Divider Line */}
      <div className="absolute h-0 left-1/2 top-[2008px] translate-x-[-50%] w-[1310px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1310 1">
            <line stroke="#262626" x2="1310" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </footer>
  );
}