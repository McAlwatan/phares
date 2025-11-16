import { useEffect } from "react";
import NmbProjectScreen from "../imports/NmbProjectScreen";
import ProjectNavigation from "./ProjectNavigation";

interface NmbProjectProps {
  onBack: () => void;
}

export default function NmbProject({ onBack }: NmbProjectProps) {
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

  // Add click handler to back button
  useEffect(() => {
    const handleBackClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest('button') && target.textContent?.includes('back to top')) {
        e.preventDefault();
        e.stopPropagation();
        onBack();
      }
    };

    document.addEventListener('click', handleBackClick);
    return () => document.removeEventListener('click', handleBackClick);
  }, [onBack]);

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
        [data-name="NMB PROJECT SCREEN"] {
          background-color: #111111 !important;
        }
        
        /* Hide the original navigation */
        .sticky.top-0,
        .contents.sticky.top-0 {
          display: none !important;
        }
        
        /* Hide the top navigation bar */
        [data-name*="PROJECT SCREEN"] .absolute[style*="top-0"]:has([style*="h-[86px]"]) {
          display: none !important;
        }
        
        /* Fix image overflow issues */
        [data-name*="PROJECT SCREEN"] [data-name*="1"] img {
          max-width: 100% !important;
          max-height: 100% !important;
          object-fit: cover !important;
        }
        
        /* Adjust content to account for fixed navigation
        [data-name*="PROJECT SCREEN"] {
          padding-top: 170px !important;
        }
        */
        
        /* Fix spacing issues */
        [data-name*="PROJECT SCREEN"] > div {
          margin-bottom: 0 !important;
        }
        
        /* Remove extra space at bottom by hiding elements with negative bottom positioning */
        [data-name="NMB PROJECT SCREEN"] .absolute[style*="bottom-[-"] {
          display: none !important;
        }
      `}</style>
      
      <ProjectNavigation 
        projectName="NMB" 
        projectCategory="BANKING"
        onBack={onBack}
      />
      
      <NmbProjectScreen />
    </div>
  );
}