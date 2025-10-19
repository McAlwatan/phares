import svgPaths from "../imports/svg-q3cfdsi52r";

export default function ContactSection() {
  return (
    <section className="relative">
      {/* Let's chat label */}
      <div className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[0] not-italic text-[#bfbfbf] text-[22px] text-nowrap top-[1778px]" style={{ left: "calc(50% - 649px)" }}>
        <p className="leading-[normal] whitespace-pre">Let's chat:</p>
      </div>

      {/* Email Contact */}
      <div className="absolute contents left-[71px] top-[1819px]">
        <div className="absolute bg-[#202020] h-[56px] left-[71px] rounded-[5px] top-[1819px] w-[386px]">
          <div aria-hidden="true" className="absolute border border-[#3d3d3d] border-solid inset-0 pointer-events-none rounded-[5px]" />
        </div>
        
        {/* Arrow Icon */}
        <div className="absolute aspect-[7/14] left-[29.79%] right-[69.65%] translate-y-[-50%]" style={{ top: "calc(50% + 1335px)" }}>
          <div className="absolute inset-[-6.25%_-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 18">
              <path d="M1 1L9 9L1 17" stroke="#7F7F7F" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="2" />
            </svg>
          </div>
        </div>
        
        {/* Email Address */}
        <div className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[0] left-[131px] not-italic text-[#bfbfbf] text-[22px] text-nowrap top-[1839px]">
          <p className="leading-[normal] whitespace-pre">pharespeter@gmail.com</p>
        </div>
        
        {/* Email Icon */}
        <div className="absolute inset-[179.4%_92.01%_-81.25%_6.32%]">
          <div className="absolute inset-[-5.26%_-4.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 21">
              <path d={svgPaths.p33b7c900} stroke="#008CFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>

      {/* Experience label */}
      <div className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[0] not-italic text-[#bfbfbf] text-[22px] text-nowrap top-[1778px]" style={{ left: "calc(50% - 193px)" }}>
        <p className="leading-[normal] whitespace-pre">Experience:</p>
      </div>

      {/* LinkedIn Contact */}
      <div className="absolute contents left-[527px] top-[1819px]">
        <div className="absolute bg-[#202020] h-[56px] left-[527px] rounded-[5px] top-[1819px] w-[306px]">
          <div aria-hidden="true" className="absolute border border-[#3d3d3d] border-solid inset-0 pointer-events-none rounded-[5px]" />
        </div>
        
        {/* Arrow Icon */}
        <div className="absolute aspect-[7/14] left-[55.9%] right-[43.54%] translate-y-[-50%]" style={{ top: "calc(50% + 1335px)" }}>
          <div className="absolute inset-[-6.25%_-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 18">
              <path d="M1 1L9 9L1 17" stroke="#7F7F7F" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="2" />
            </svg>
          </div>
        </div>
        
        {/* Name */}
        <div className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[0] left-[587px] not-italic text-[#bfbfbf] text-[22px] text-nowrap top-[1839px]">
          <p className="leading-[normal] whitespace-pre">Phares Chibwaye</p>
        </div>
        
        {/* LinkedIn Icon */}
        <div className="absolute left-[547px] size-[25px] translate-y-[-50%]" style={{ top: "calc(50% + 1334.5px)" }}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
            <g>
              <path d={svgPaths.p2a2fbd00} fill="#0072B1" />
              <path d={svgPaths.p1f269c00} fill="white" />
              <path d={svgPaths.p3ad5df80} fill="white" />
              <path d={svgPaths.p5737e00} fill="white" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}