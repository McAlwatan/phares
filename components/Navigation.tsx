import { useState } from "react";

interface NavigationProps {
  activeSection?: string;
  onSectionChange?: (section: string) => void;
}

export default function Navigation({ activeSection = "work", onSectionChange }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "work", label: "WORK" },
    { id: "about", label: "ABOUT" },
    { id: "contact", label: "CONTACT" },
  ];

  const handleSectionClick = (sectionId: string) => {
    onSectionChange?.(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="relative">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-8">
        <div className="h-px w-12 bg-[#bfbfbf]"></div>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleSectionClick(item.id)}
            className={`font-['IBM_Plex_Mono:Regular',_sans-serif] text-lg xl:text-xl transition-colors ${
              activeSection === item.id ? "text-[#bfbfbf]" : "text-[#606060] hover:text-[#bfbfbf]"
            }`}
          >
            {item.label}
          </button>
        ))}
        <span className="font-['IBM_Plex_Mono:Regular',_sans-serif] text-[#606060] text-lg xl:text-xl">
          SOUND
        </span>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 text-[#bfbfbf] hover:text-[#008cff] transition-colors"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {isMenuOpen && (
          <div className="absolute top-full right-0 mt-2 bg-[#202020] border border-[#3d3d3d] rounded-lg shadow-lg min-w-[150px] z-50">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSectionClick(item.id)}
                className={`block w-full text-left px-4 py-3 font-['IBM_Plex_Mono:Regular',_sans-serif] text-base transition-colors ${
                  activeSection === item.id 
                    ? "text-[#008cff] bg-[#1a1a1a]" 
                    : "text-[#bfbfbf] hover:text-[#008cff] hover:bg-[#1a1a1a]"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="border-t border-[#3d3d3d] px-4 py-3">
              <span className="font-['IBM_Plex_Mono:Regular',_sans-serif] text-[#606060] text-base">
                SOUND
              </span>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}