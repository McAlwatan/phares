import { useState } from "react";
import svgPaths from "../imports/svg-q3cfdsi52r";

export default function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="relative">
      {/* About Me Button with Bouncing Arrow */}
      <button 
        className="absolute box-border content-stretch cursor-pointer flex gap-[5px] items-center left-[70px] overflow-visible p-0 top-[123px]"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#008cff] text-[22px] text-justify text-nowrap uppercase">
          <p className="leading-[normal] whitespace-pre">about me</p>
        </div>
        {/* Enhanced Bouncing Arrow */}
        <div className={`relative shrink-0 size-[20px] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
          <div className="animate-enhanced-bounce">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <g>
                <path d={svgPaths.p7c6ea00} stroke="#008CFF" strokeLinecap="square" strokeWidth="1.5" />
              </g>
            </svg>
          </div>
        </div>
      </button>

      {/* Description Text */}
      <div className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[0] not-italic text-[#7f7f7f] text-[22px] text-justify top-[126px] uppercase w-[601px]" style={{ left: "calc(50% + 49px)" }}>
        <p className="leading-[normal]">{`Despite my core focus on Product & UX/ui, here you'll find a blend of projects that showcase my broader creative range.`}</p>
      </div>

      {/* Expanded About Content */}
      {isExpanded && (
        <div className="absolute bg-[#111111] border border-[#262626] rounded-[8px] p-[24px] top-[200px] left-[70px] w-[800px] z-10">
          <div className="font-['IBM_Plex_Mono:Regular',_sans-serif] text-[#7f7f7f] text-[18px] leading-[1.6]">
            <p className="mb-4">
              Hi, I'm Phares. For the past 8 years, I've explored and worked across diverse creative projects, 
              always chasing new ways to make design feel exciting and inspiring.
            </p>
            <p className="mb-4">
              Creating this portfolio reminded me of the countless hours, dedication, and energy I poured into 
              every project. Over time, design has become more than just a career, it's part of who I am. 
              It's how I grow, express, and create experiences worth sharing.
            </p>
            <p>
              I currently live in Dar es Salaam, and I'm excited to explore remote collaborations with teams 
              and individuals anywhere.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}