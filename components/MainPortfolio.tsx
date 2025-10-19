import Header from "./Header";
import AboutSection from "./AboutSection";
import PortfolioGrid from "./PortfolioGrid";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

interface MainPortfolioProps {
  onProjectClick?: (projectName: string) => void;
}

export default function MainPortfolio({ onProjectClick }: MainPortfolioProps) {
  return (
    <div className="bg-[#111111] relative min-h-screen w-[1440px]">
      <Header />
      <AboutSection />
      <PortfolioGrid onProjectClick={onProjectClick} />
      
      {/* About Me Full Section with Enhanced Layout */}
      <div className="absolute top-[1309px] w-full max-w-[1440px]">
        {/* ABOUT ME Title Row with Let's chat and Experience on the right */}
        <div className="flex items-center justify-between w-full px-[70px]">
          {/* Left: ABOUT ME */}
          <div className="font-['Neue_Brucke:Regular',_sans-serif] text-[#bfbfbf] text-[48px] tracking-[0.96px] uppercase">
            <p className="leading-[50px] whitespace-pre">about me</p>
          </div>
          
          {/* Right: Let's chat and Experience */}
          <div className="flex items-center gap-16">
            <div className="font-['IBM_Plex_Mono:Regular',_sans-serif] text-[#bfbfbf] text-[22px]">
              <p className="leading-[normal] whitespace-pre">Let's chat:</p>
            </div>
            <div className="font-['IBM_Plex_Mono:Regular',_sans-serif] text-[#bfbfbf] text-[22px]">
              <p className="leading-[normal] whitespace-pre">Experience:</p>
            </div>
          </div>
        </div>
        
        {/* ABOUT ME Description */}
        <div className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[normal] not-italic text-[#7f7f7f] text-[22px] text-justify top-[84px] w-[1011px]" style={{ left: "calc(50% - 649px)" }}>
          <p className="mb-0">Hi, I'm Phares. For the past 8 years, I've explored and worked across diverse creative projects, always chasing new ways to make design feel exciting and inspiring.</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">Creating this portfolio reminded me of the countless hours, dedication, and energy I poured into every project. Over time, design has become more than just a career, it's part of who I am. It's how I grow, express, and create experiences worth sharing.</p>
          <p className="mb-0">&nbsp;</p>
          <p>I currently live in Dar es Salaam, and I'm excited to explore remote collaborations with teams and individuals anywhere.</p>
        </div>
      </div>

      <ContactSection />
      <Footer />
    </div>
  );
}