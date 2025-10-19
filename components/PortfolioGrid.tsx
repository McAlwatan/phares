'use client';

import svgPaths from "../imports/svg-q3cfdsi52r";
import ResponsiveImage from "./ResponsiveImage";
import { portfolioThumbnails } from "../lib/imageHelper";

interface PortfolioGridProps {
  onProjectClick?: (projectName: string) => void;
}

export default function PortfolioGrid({ onProjectClick }: PortfolioGridProps) {
  const projects = [
    // First Row
    { title: "rifaly", category: "news and content", image: portfolioThumbnails.rifaly, projectKey: 'rifaly', position: { left: 70, top: 244 } },
    { title: "bolt", category: "ride hailing", image: portfolioThumbnails.bolt, projectKey: 'bolt', position: { left: 510, top: 244 }, hasPlayIcon: true },
    { title: "SAG", category: "innovation & digital", image: portfolioThumbnails.sag, projectKey: 'sag', position: { left: 950, top: 244 } },
    
    // Second Row
    { title: "NENDIWE", category: "WELLNESS CENTRE", image: portfolioThumbnails.nendiwe, projectKey: 'nendiwe', position: { left: 70, top: 569 } },
    { title: "TEQUILA ISLAND", category: "ENTERTAINMENT", image: portfolioThumbnails.tequila, projectKey: 'tequila', position: { left: 510, top: 569 } },
    { title: "nmb", category: "BANKING", image: portfolioThumbnails.nmb, projectKey: 'nmb', position: { left: 950, top: 569 } },
    
    // Third Row
    { title: "NIKONEKT", category: "SOCIAL NETWORKING", image: portfolioThumbnails.nikonekt, projectKey: 'nikonekt', position: { left: 70, top: 894 } },
    { title: "COOL SITES", category: "ui DESIGNING", image: portfolioThumbnails.sites, projectKey: 'sites', position: { left: 510, top: 894 } },
    { title: "RANDOM", category: "THE ARCHIVE", image: portfolioThumbnails.sound, projectKey: 'sound', position: { left: 950, top: 894 } },
  ];

  const handleProjectClick = (projectTitle: string) => {
    const projectName = projectTitle.toLowerCase();
    
    if (projectName === 'rifaly') {
      onProjectClick?.('rifaly');
    } else if (projectName === 'bolt') {
      onProjectClick?.('bolt-password');
    } else if (projectName === 'sag') {
      onProjectClick?.('sag');
    } else if (projectName === 'nendiwe') {
      onProjectClick?.('nendiwe');
    } else if (projectName === 'tequila island') {
      onProjectClick?.('tequila');
    } else if (projectName === 'nmb') {
      onProjectClick?.('nmb');
    }
  };

  return (
    <section className="relative">
      {projects.map((project, index) => (
        <div key={index} className="absolute cursor-pointer" style={{ left: project.position.left, top: project.position.top }} onClick={() => handleProjectClick(project.title)}>
          {/* Project Image Container */}
          <div className="relative h-[236px] w-[420px] rounded-[5px] shadow-[0px_127px_36px_0px_rgba(0,0,0,0),0px_81px_33px_0px_rgba(0,0,0,0.03),0px_46px_28px_0px_rgba(0,0,0,0.1),0px_20px_20px_0px_rgba(0,0,0,0.17),0px_5px_11px_0px_rgba(0,0,0,0.2)] hover:scale-105 transition-transform duration-300 overflow-hidden">
            <ResponsiveImage
              src={project.image}
              alt={project.title}
              fallbackText={project.title}
              fill
              objectFit="cover"
              className="rounded-[5px]"
              sizes="420px"
            />
            
            {/* Play Icon Overlay for Bolt project */}
            {project.hasPlayIcon && (
              <div className="absolute inset-[5.84%_4.08%_85.42%_90.94%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 26">
                  <path d={svgPaths.p1b2a1770} fill="white" fillOpacity="0.5" />
                </svg>
              </div>
            )}
          </div>
          
          {/* Project Title */}
          <div className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[0] not-italic text-[#d9d9d9] text-[20px] text-nowrap top-[256px] uppercase">
            <p className="leading-[normal] whitespace-pre">{project.title}</p>
          </div>
          
          {/* Project Category */}
          <div className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[0] not-italic text-[20px] text-[rgba(127,127,127,0.8)] text-nowrap top-[281px] uppercase">
            <p className="leading-[normal] whitespace-pre">{project.category}</p>
          </div>
        </div>
      ))}
      
      {/* Decorative Ellipse */}
      <div className="absolute h-[12px] left-[70px] top-[1260px] w-[30px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 12">
          <ellipse cx="15" cy="6" fill="#111111" rx="15" ry="6" />
        </svg>
      </div>
    </section>
  );
}