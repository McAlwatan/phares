import { useEffect } from "react";
import RifalyProjectScreen from "../imports/RifalyProjectScreen";
import ProjectNavigation from "./ProjectNavigation";

interface RifalyProjectProps {
  onBack: () => void;
}

export default function RifalyProject({ onBack }: RifalyProjectProps) {
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
        [data-name*="RIFALY"] {
          background-color: #111111 !important;
        }
        
        /* Hide the original navigation */
        [data-name="RIFALY PROJECT SCREEN"] > div:first-child:has(.sticky.top-0),
        .sticky.top-0,
        .contents.sticky.top-0 {
          display: none !important;
        }
        
        /* Hide the top navigation bar */
        [data-name="RIFALY PROJECT SCREEN"] .absolute[style*="top-0"]:has([style*="h-[86px]"]) {
          display: none !important;
        }
        
        /* Fix image overflow issues - specifically the thumbnail posters image */
        [data-name="thumbnail posters 1"] {
          overflow: visible !important;
        }
        [data-name="thumbnail posters 1"] img {
          position: static !important;
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          left: 0 !important;
          top: 0 !important;
        }
        
        /* Fix other image overflow issues */
        [data-name*="PROJECT SCREEN"] [data-name*="1"] img {
          max-width: 100% !important;
          max-height: 100% !important;
        }
        
        /* Adjust content to account for fixed navigation 
        [data-name="RIFALY PROJECT SCREEN"] {
          padding-top: 170px !important;
        }
        */
        
        /* Fix spacing issues */
        [data-name*="PROJECT SCREEN"] > div {
          margin-bottom: 0 !important;
        }
        
        /* Remove extra space at bottom by hiding elements with negative bottom positioning */
        [data-name*="RIFALY"] .absolute[style*="bottom-[-"] {
          display: none !important;
        }
      `}</style>
      
      <ProjectNavigation 
        projectName="RIFALY" 
        projectCategory="NEWS AND CONTENT"
        onBack={onBack}
      />
      
      <RifalyProjectScreen />
    </div>
  );
}