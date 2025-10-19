import svgPaths from "./svg-ozigyvshte";

// Placeholder images for Sites project
const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%23222' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' fill='%23666' font-size='18' font-family='monospace'%3ESITE IMAGE%3C/text%3E%3C/svg%3E";
const imgRectangle5702 = placeholder;

function Group427319857() {
  return (
    <div className="contents pointer-events-auto sticky top-0">
      <div className="absolute h-[84px] left-1/2 top-[86px] translate-x-[-50%] w-[1440px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle5702} />
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[normal] not-italic text-[#606060] text-[20px] text-nowrap text-right top-[118px] translate-x-[-100%] whitespace-pre" style={{ left: "calc(50% + 655px)" }}>
        WEB DESIGNING
      </p>
      <p className="absolute font-['Neue_Brucke:Regular',_sans-serif] leading-[normal] not-italic text-[#bfbfbf] text-[28px] text-nowrap top-[117px] whitespace-pre" style={{ left: "calc(50% - 617px)" }}>
        COOL SITES
      </p>
      <div className="absolute aspect-[14/12] left-[4.51%] right-[93.96%] translate-y-[-50%]" data-name="Vector" style={{ top: "calc(50% - 385px)" }}>
        <div className="absolute inset-[-5%_-4.55%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 22">
            <path d={svgPaths.p1f642900} id="Vector" stroke="var(--stroke-0, #BFBFBF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group427319880() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[normal] not-italic place-items-start relative shrink-0 text-center text-nowrap whitespace-pre">
      <div className="[grid-area:1_/_1] font-['IBM_Plex_Mono:Regular',_sans-serif] ml-[72px] mt-[41px] relative text-[#bfbfbf] text-[24px] translate-x-[-50%]">
        <p className="mb-0">WEB DESIGN</p>
        <p>UI/UX</p>
      </div>
      <p className="[grid-area:1_/_1] font-['IBM_Plex_Mono:SemiBold',_sans-serif] ml-[72px] mt-0 relative text-[#606060] text-[20px] translate-x-[-50%]">ROLE</p>
    </div>
  );
}

function Group427319881() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[normal] not-italic place-items-start relative shrink-0 text-nowrap whitespace-pre">
      <div className="[grid-area:1_/_1] font-['IBM_Plex_Mono:Regular',_sans-serif] ml-[79.5px] mt-[41px] relative text-[#bfbfbf] text-[24px] text-center translate-x-[-50%]">
        <p className="mb-0">Figma, Ps</p>
        <p>Illustrator</p>
      </div>
      <p className="[grid-area:1_/_1] font-['IBM_Plex_Mono:SemiBold',_sans-serif] ml-[37px] mt-0 relative text-[#606060] text-[20px]">TOOL(s)</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex gap-[100px] items-center leading-[0] top-[760px] translate-x-[-50%]" style={{ left: "calc(50% + 0.5px)" }}>
      <Group427319880 />
      <Group427319881 />
    </div>
  );
}

function Group427319893() {
  return (
    <div className="absolute bottom-[-8730px] contents left-1/2 translate-x-[-50%]">
      <div className="absolute aspect-[30.6429/25.9285] left-[4.51%] right-[93.82%] translate-y-[-50%]" data-name="Vector" style={{ top: "calc(50% + 9199px)" }}>
      </div>
      <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[normal] not-italic text-[#bfbfbf] text-[20px] text-nowrap top-[9704px] whitespace-pre" style={{ left: "calc(50% + 499px)" }}>
        © 2025. V 2.0
      </p>
      <div className="absolute h-0 left-1/2 top-[9668px] translate-x-[-50%] w-[1310px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1310 1">
            <line id="Line 3" stroke="var(--stroke-0, #262626)" x2="1310" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function SitesProjectScreen() {
  return (
    <div className="bg-[#111111] relative size-full" data-name="SITES PROJECT SCREEN">
      <p className="absolute font-['Neue_Brucke:Regular',_sans-serif] leading-[normal] left-1/2 not-italic text-[#bfbfbf] text-[100px] text-center top-[230px] translate-x-[-50%] uppercase w-[1132px]">{`Below are snapshots of websites I’ve designed at different times, for different clients and teams. `}</p>
      <div className="absolute bottom-0 left-0 pointer-events-none top-[86px]" style={{ height: "calc(100% - 86px)" }}>
        <Group427319857 />
      </div>
      <Frame4 />
      <Group427319893 />
    </div>
  );
}