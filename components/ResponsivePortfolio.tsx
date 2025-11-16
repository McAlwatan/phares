'use client';

import { useState } from "react";
import MainNavigation from "./MainNavigation";
import svgPaths from "../imports/svg-q3cfdsi52r";
import ResponsiveImage from "./ResponsiveImage";
import { portfolioGifs, portfolioThumbnails } from "../lib/imageHelper";
import PasswordPopup from "./PasswordPopup";

interface ProjectCardProps {
  title: string;
  category: string;
  imageSrc: string;
  projectKey: string;
  hasPlayIcon?: boolean;
  onClick?: () => void;
}

function ProjectCard({ title, category, imageSrc, projectKey, hasPlayIcon = false, onClick }: ProjectCardProps) {
  return (
    <div className="group cursor-pointer transition-transform hover:scale-105 duration-300" onClick={onClick}>
      {/* Responsive Image Container */}
      <div className="relative w-full aspect-[420/236] rounded-[5px] shadow-[0px_127px_36px_0px_rgba(0,0,0,0),0px_81px_33px_0px_rgba(0,0,0,0.03),0px_46px_28px_0px_rgba(0,0,0,0.1),0px_20px_20px_0px_rgba(0,0,0,0.17),0px_5px_11px_0px_rgba(0,0,0,0.2)] overflow-hidden bg-[#1a1a1a]">
        <ResponsiveImage
          src={imageSrc}
          alt={title}
          fallbackText={projectKey.toUpperCase()}
          fill
          objectFit="cover"
          className="rounded-[5px]"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        
        {hasPlayIcon && (
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-5 h-6 sm:w-6 sm:h-8 z-10">
            <svg className="block size-full drop-shadow-lg" fill="none" preserveAspectRatio="none" viewBox="0 0 21 26">
              <path d={svgPaths.p1b2a1770} fill="white" fillOpacity="0.5" />
            </svg>
          </div>
        )}
      </div>
      
      {/* Project Info */}
      <div className="mt-3 sm:mt-4 space-y-1">
        <h3 className="font-['IBM_Plex_Mono',_monospace] text-[#d9d9d9] text-base sm:text-lg md:text-xl uppercase leading-none">
          {title}
        </h3>
        <p className="font-['IBM_Plex_Mono',_monospace] text-[rgba(127,127,127,0.8)] text-sm sm:text-base md:text-lg uppercase leading-none">
          {category}
        </p>
      </div>
    </div>
  );
}

interface ResponsivePortfolioProps {
  onProjectClick?: (projectName: string) => void;
}

export default function ResponsivePortfolio({ onProjectClick }: ResponsivePortfolioProps) {
  const [showPasswordPopup, setShowPasswordPopup] = useState(false);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    { title: "rifaly", category: "news and content", image: portfolioThumbnails.rifaly, projectKey: 'rifaly' },
    { title: "bolt", category: "ride hailing", image: portfolioThumbnails.bolt, projectKey: 'bolt', hasPlayIcon: true },
    { title: "SAG", category: "innovation & digital", image: portfolioGifs.sag, projectKey: 'sag' },
    { title: "NENDIWE", category: "WELLNESS CENTRE", image: portfolioThumbnails.nendiwe, projectKey: 'nendiwe' },
    { title: "TEQUILA ISLAND", category: "ENTERTAINMENT", image: portfolioGifs.tequila, projectKey: 'tequila' },
    { title: "nmb", category: "BANKING", image: portfolioThumbnails.nmb, projectKey: 'nmb' },
    { title: "NIKONEKT", category: "SOCIAL NETWORKING", image: portfolioGifs.nikonekt, projectKey: 'nikonekt' },
    { title: "COOL SITES", category: "ui DESIGNING", image: portfolioThumbnails.sites, projectKey: 'sites' },
    { title: "RANDOM", category: "THE ARCHIVE", image: portfolioGifs.random, projectKey: 'random' },
  ];

  const handleProjectClick = (projectTitle: string) => {
    const projectName = projectTitle.toLowerCase();
    
    if (projectName === 'rifaly') {
      onProjectClick?.('rifaly');
    } else if (projectName === 'bolt') {
      setShowPasswordPopup(true);
    } else if (projectName === 'sag') {
      onProjectClick?.('sag');
    } else if (projectName === 'nendiwe') {
      onProjectClick?.('nendiwe');
    } else if (projectName === 'tequila island') {
      onProjectClick?.('tequila');
    } else if (projectName === 'nmb') {
      onProjectClick?.('nmb');
    } else if (projectName === 'nikonekt') {
      onProjectClick?.('nikonekt');
    } else if (projectName === 'cool sites') {
      onProjectClick?.('sites');
    } else if (projectName === 'random') {
      onProjectClick?.('random');
    }
  };

  return (
    <div className="bg-[#111111] min-h-screen w-full">
      {/* Enhanced Navigation */}
      <MainNavigation onSectionChange={(section) => {
        if (section === 'sound') {
          onProjectClick?.('sound');
        }
      }} />

      {/* Main Content */}
      <main className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8 max-w-[1440px] mx-auto pt-[50px] sm:pt-[30px] md:pt-[50px]">
        {/* About Me Collapsible Section */}
        <section className="mb-12 sm:mb-14 md:mb-16">
          <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row justify-between w-full t-0">
            <button 
              onClick={scrollToAbout}
              className="flex items-center gap-2 mb-4 sm:mb-6 transition-colors hover:text-[#00a6ff] cursor-pointer rounded-md px-2 py-1"
              aria-label="Scroll to about me section"
            >
              <span className="font-['IBM_Plex_Mono',_monospace] text-[#008cff] text-lg sm:text-xl lg:text-2xl uppercase">
                about me
              </span>
              {/* Enhanced Bouncing Arrow */}
              <div className="transition-transform duration-300">
                <div className="animate-enhanced-bounce">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p7c6ea00} stroke="#008CFF" strokeLinecap="square" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </button>
          
            <p className="font-['IBM_Plex_Mono',_monospace] text-[#7f7f7f] text-base sm:text-lg lg:text-xl uppercase leading-normal max-w-3xl mb-2">
              Despite my core focus on Product & UX/ui, <br />here you'll find a blend of projects that <br />showcase my broader creative range.
            </p>
          </div>
        </section>

        {/* Portfolio Grid - Fully Responsive */}
        <section className="mb-16 sm:mb-18 md:mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                category={project.category}
                imageSrc={project.image}
                projectKey={project.projectKey}
                hasPlayIcon={project.hasPlayIcon}
                onClick={() => handleProjectClick(project.title)}
              />
            ))}
          </div>
        </section>

        {/* About Me Full Section with Enhanced Layout */}
        <section id="about-section" className="mb-16 sm:mb-18 md:mb-20">
          {/* ABOUT ME Title Row with Let's chat and Experience on the right */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 sm:mb-8 gap-4 sm:gap-6">
            {/* Left: ABOUT ME */}
            <h2 className="font-['Neue_Brucke',_sans-serif] text-[#bfbfbf] text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-wider outline-none cursor-pointer">
              about me
            </h2>
          </div>
          
          {/* ABOUT ME Description */}
          <div className="font-['IBM_Plex_Mono',_monospace] text-[#7f7f7f] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed space-y-3 sm:space-y-4 max-w-4xl">
            <p>
              Hi, I'm Phares. For the past 8 years, I've explored and worked across diverse creative projects, 
              always chasing new ways to make design feel exciting and inspiring.
            </p>
            <p>
              Creating this portfolio reminded me of the countless hours, dedication, and energy I poured into 
              every project. Over time, design has become more than just a career, it's part of who I am. 
              It's how I grow, express, and create experiences worth sharing.
            </p>
            <p>
              I currently live in Dar es Salaam, and I'm excited to explore remote collaborations with teams 
              and individuals anywhere.
            </p>
          </div>
        </section>

        {/* Contact Section - Fully Responsive */}
        <section className="mb-12 sm:mb-14 md:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Email Contact */}
            <div>
              <h3 className="font-['IBM_Plex_Mono',_monospace] text-[#bfbfbf] text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4">
                Let's chat:
              </h3>
              <a 
                href="mailto:pharespeter@gmail.com"
                className="block bg-[#202020] border border-[#3d3d3d] rounded-lg p-3 sm:p-4 group hover:border-[#008cff] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" fill="none" viewBox="0 0 26 21">
                      <path d={svgPaths.p33b7c900} stroke="#008CFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                    <span className="font-['IBM_Plex_Mono',_monospace] text-[#bfbfbf] text-sm sm:text-base md:text-lg lg:text-xl truncate">
                      pharespeter@gmail.com
                    </span>
                  </div>
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[#7f7f7f] group-hover:text-[#008cff] transition-colors flex-shrink-0 ml-2" fill="none" viewBox="0 0 10 18">
                    <path d="M1 1L9 9L1 17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="2" />
                  </svg>
                </div>
              </a>
            </div>

            {/* LinkedIn Contact */}
            <div>
              <h3 className="font-['IBM_Plex_Mono',_monospace] text-[#bfbfbf] text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4">
                Experience:
              </h3>
              <a 
                href="https://linkedin.com/in/phares-chibwaye-0b3547203"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#202020] border border-[#3d3d3d] rounded-lg p-3 sm:p-4 group hover:border-[#008cff] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" fill="none" viewBox="0 0 25 25">
                      <g>
                        <path d={svgPaths.p2a2fbd00} fill="#0072B1" />
                        <path d={svgPaths.p1f269c00} fill="white" />
                        <path d={svgPaths.p3ad5df80} fill="white" />
                        <path d={svgPaths.p5737e00} fill="white" />
                      </g>
                    </svg>
                    <span className="font-['IBM_Plex_Mono',_monospace] text-[#bfbfbf] text-sm sm:text-base md:text-lg lg:text-xl">
                      Phares Chibwaye
                    </span>
                  </div>
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[#7f7f7f] group-hover:text-[#008cff] transition-colors flex-shrink-0 ml-2" fill="none" viewBox="0 0 10 18">
                    <path d="M1 1L9 9L1 17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="2" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Responsive */}
      <footer className="border-t border-[#262626] px-4 sm:px-6 md:px-8 lg:px-16 py-4 sm:py-5 md:py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center max-w-[1440px] mx-auto gap-3 sm:gap-0">
          <button 
            className="text-[#bfbfbf] hover:text-[#008cff] transition-colors p-2 rounded-md hover:bg-[#202020] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#008cff]"
            aria-label="Scroll to top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 26 22">
              <path d={svgPaths.p3672900} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </button>
          <span className="font-['IBM_Plex_Mono',_monospace] text-[#bfbfbf] text-sm sm:text-base md:text-lg">
            © 2025. V 2.0
          </span>
        </div>
      </footer>

      {/* Password Popup */}
      <PasswordPopup 
        isOpen={showPasswordPopup}
        onClose={() => setShowPasswordPopup(false)}
        projectName="BOLT"
      />
    </div>
  );
}