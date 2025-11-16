export default function Header() {
  return (
    <header className="relative">
      <div className="absolute bg-[#111111] h-[86px] left-0 top-0 w-[1440px]" />
      
      <div className="absolute font-['IBM_Plex_Mono:Medium',_sans-serif] leading-[0] left-[65px] not-italic text-[#bfbfbf] text-[24px] text-justify text-nowrap top-[35px]">
        <p className="leading-[normal] whitespace-pre">PHARES CHIBWAYE</p>
      </div>
      
      <div className="absolute h-0 left-[65px] top-[86px] w-[1310px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1310 1">
            <line id="Line 3" stroke="var(--stroke-0, #262626)" x2="1310" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      
      <div className="absolute h-0 left-[1163px] top-[86px] w-[72px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 1">
            <line id="Line 2" stroke="var(--stroke-0, #BFBFBF)" x2="72" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      
      <div className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[0] left-[1199px] not-italic text-[#bfbfbf] text-[20px] text-center text-nowrap top-[37px] translate-x-[-50%]">
        <p className="leading-[normal] whitespace-pre">DESIGN</p>
      </div>
      
      <div className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[0] left-[1315px] not-italic text-[#606060] text-[20px] text-nowrap top-[37px]">
        <p className="leading-[normal] whitespace-pre">SOUND</p>
      </div>
    </header>
  );
}