import svgPaths from "../imports/svg-3qcp7sqj43";


function SoundFun({ onClick }: { onClick: () => void }) {
  return (
    <div 
      className="absolute left-[calc(50%+200px)] size-[49.647px] top-[30.03px] cursor-pointer z-10"
      onClick={onClick}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="Group 427319887">
          <ellipse cx="24.8236" cy="24.8237" fill="var(--fill-0, white)" fillOpacity="0.2" id="Ellipse 368" rx="24.8236" ry="24.8236" />
          <path d={svgPaths.p3b7b5280} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

export default SoundFun