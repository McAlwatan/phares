'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface MainNavigationProps {
  className?: string;
  defaultActive?: 'design' | 'sound' | 'home';
  onSectionChange?: (section: string) => void;
}


export default function MainNavigation({ 
  className = "", 
  defaultActive = 'design', 
  onSectionChange 
}: MainNavigationProps) {
  const [activeSection, setActiveSection] = useState<string>(defaultActive);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
    onSectionChange?.(section);
  };

  return (
    <div className={`w-full bg-[#111111]/95 backdrop-blur-md ${className} z-1000 border-b border-[#262626]/50`}>
      <div className="w-full">
        <div className="w-full sm:max-w-[1440px] md:max-w-[1440px] lg:max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 h-[70px] sm:h-[80px] md:h-[86px] flex items-center justify-between">
          <Link href="/">
            <div className="font-['IBM_Plex_Mono',_monospace] text-[#bfbfbf] text-lg sm:text-xl md:text-2xl lg:text-[24px] tracking-wider uppercase cursor-pointer">
              Phares Chibwaye
            </div>
          </Link>

          <button
            className="md:hidden text-[#bfbfbf] hover:text-[#008cff] transition-colors p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#008cff] focus:ring-offset-2 focus:ring-offset-[#111111]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          
          <div className="hidden md:flex relative items-center gap-6 lg:gap-8">
            <Link href={'/'}>
              <button
                onClick={() => handleSectionChange('design')}
                className={`font-['IBM_Plex_Mono',_monospace] text-base lg:text-lg xl:text-[20px] transition-colors duration-300 uppercase cursor-pointer ${
                  activeSection === 'design' || activeSection === 'home'
                    ? 'text-[#bfbfbf]' 
                    : 'text-[#606060] hover:text-[#bfbfbf]'
                }`}
              >
                Design
              </button>
            </Link>


            <Link href={'/sound'}>
              <button
                onClick={() => handleSectionChange('sound')}
                className={`font-['IBM_Plex_Mono',_monospace] text-base lg:text-lg xl:text-[20px] transition-colors duration-300 uppercase cursor-pointer ${
                  activeSection === 'sound' 
                    ? 'text-[#bfbfbf]' 
                    : 'text-[#606060] hover:text-[#bfbfbf]'
                }`}
              >
                Sound
              </button>
            </Link>
            <div 
              className={`absolute bottom-[-20px] h-[2px] bg-[#bfbfbf] transition-all duration-300 ease-out ${
                activeSection === 'design' || activeSection === 'home'
                  ? 'left-0 w-[70px]'
                  : 'left-[106px] w-[56px]'
              }`}
            />
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-[#262626]/50 bg-[#111111] animate-in slide-in-from-top-2 duration-300">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-4 flex flex-col gap-3">
              <Link href={'/'}>
                <button
                  onClick={() => handleSectionChange('design')}
                  className={`font-['IBM_Plex_Mono',_monospace] text-left text-base sm:text-lg uppercase transition-colors py-2 px-3 rounded-md ${
                    activeSection === 'design' || activeSection === 'home'
                      ? 'text-[#008cff] bg-[#008cff]/10' 
                      : 'text-[#bfbfbf] hover:text-[#008cff] hover:bg-[#202020]'
                  }`}
                >
                  Design
                </button>
              </Link>

              <Link href={'/sound'}>
                <button
                  onClick={() => handleSectionChange('sound')}
                  className={`font-['IBM_Plex_Mono',_monospace] text-left text-base sm:text-lg uppercase transition-colors py-2 px-3 rounded-md ${
                    activeSection === 'sound' 
                      ? 'text-[#008cff] bg-[#008cff]/10' 
                      : 'text-[#bfbfbf] hover:text-[#008cff] hover:bg-[#202020]'
                  }`}
                >
                  Sound
                </button>
              </Link>
              
            </div>
          </div>
        )}
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-4 sm:h-6 bg-gradient-to-b from-[#111111]/40 via-[#111111]/20 to-transparent pointer-events-none" />
    </div>
  );
}