import { useEffect } from "react";
import NendiweProjectScreen from "../imports/NendiweProjectScreen";
import ProjectNavigation from "./ProjectNavigation";

interface NendiweProjectProps {
  onBack: () => void;
}

export default function NendiweProject({ onBack }: NendiweProjectProps) {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Find all video elements and set up autoplay
    const videos = document.querySelectorAll('video');
    
    const observers: IntersectionObserver[] = [];

    videos.forEach((video) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              video.play().catch(() => {
                console.log('Autoplay prevented for video');
              });
            } else {
              video.pause();
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(video);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  // Force black background styling
  useEffect(() => {
    document.body.style.backgroundColor = '#111111';
    const htmlElement = document.documentElement;
    htmlElement.style.backgroundColor = '#111111';
    
    return () => {
      document.body.style.backgroundColor = '';
      htmlElement.style.backgroundColor = '';
    };
  }, []);

  return (
  <div className="min-h-screen bg-[#111111] relative">
    <style>{`
      body, html {
        background-color: #111111 !important;
      }
      .bg-white {
        background-color: #111111 !important;
      }
      [data-name*="NENDIWE"] {
        background-color: #111111 !important;
      }
      
      /* REMOVE THESE LINES - THEY'RE BREAKING SCROLL DETECTION:
      .sticky.top-0,
      .contents.sticky.top-0 {
        display: none !important;
      }
      
      [data-name*="PROJECT SCREEN"] .absolute[style*="top-0"]:has([style*="h-[86px]"]) {
        display: none !important;
      }
      */
      
      /* Keep the rest */
      [data-name*="PROJECT SCREEN"] > div {
        margin-bottom: 0 !important;
      }
      
      [data-name*="NENDIWE"] .absolute[style*="bottom-[-"] {
        display: none !important;
      }
    `}</style>
      
      <ProjectNavigation 
        projectName="NENDIWE" 
        projectCategory="WELLNESS CENTRE"
        onBack={onBack}
      />
      
      <NendiweProjectScreen />
    </div>
  );
}