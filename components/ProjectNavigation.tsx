import React, { useState, useEffect } from 'react';
import MainNavigation from './MainNavigation';

interface ProjectNavigationProps {
  projectName: string;
  projectCategory: string;
  onBack: () => void;
  className?: string;
}

export default function ProjectNavigation({ projectName, projectCategory, onBack }: ProjectNavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hide main navigation when scrolled past 86px (height of main nav)
      setScrolled(window.scrollY > 86);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Main Navigation - moves out of view on scroll */}
      <div 
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          scrolled ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <MainNavigation defaultActive="design" />
      </div>

      {/* Project Sub-navigation with gradient background */}
      <div 
        className={`fixed left-0 right-0 z-40 transition-all ${
          scrolled ? 'top-0' : 'top-[86px]'
        }`}
      >
        {/* Gradient background - dark to transparent */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-[#111111]/80 to-transparent pointer-events-none" />
        
        {/* Project-specific sub-navigation */}
        <div className="relative h-[84px] w-full border-b border-[#262626]/30">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 h-full flex items-center justify-between">
            {/* Left: Back arrow + Project name */}
            <div className="ml-[40px] flex items-center">
              <button 
                onClick={onBack}
                className="flex items-center justify-center w-8 h-8 hover:bg-[#262626] rounded transition-colors cursor-pointer"
                aria-label="Go back"
              >
                <div className="font-['Neue_Brucke',_sans-serif] text-[#bfbfbf] text-xl text-nowrap sm:text-2xl md:text-[25px]">
                  {projectName}
                </div>
              </button>
            </div>
            {/* Right: Project category */}
            <div className="font-['IBM_Plex_Mono',_monospace] text-[#606060] text-sm sm:text-base md:text-lg lg:text-[20px] text-right uppercase">
              {projectCategory}
            </div>
          </div>
        </div>
        
        {/* Shadow fade below navigation */}
        <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-b from-transparent via-[#111111]/10 to-transparent pointer-events-none" />
      </div>

      {/* Spacer to prevent content from going under fixed navigation */}
      <div className={`transition-all duration-300 ${scrolled ? 'h-[84px]' : 'h-[100px]'}`} />
    </>
  );
}