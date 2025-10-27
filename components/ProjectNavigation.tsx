"use client"

import { useState, useEffect } from "react"
import MainNavigation from "./MainNavigation"

interface ProjectNavigationProps {
  projectName: string
  projectCategory: string
  onBack: () => void
  className?: string
}

export default function ProjectNavigation({ projectName, projectCategory, onBack }: ProjectNavigationProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          scrolled ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <MainNavigation defaultActive="design" />
      </div>
      <div
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "top-0" : "top-[60px] md:top-[86px]"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-[#111111]/80 to-transparent pointer-events-none" />

        <div className="relative h-[60px] md:h-[84px] w-full border-b border-[#262626]/30">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 h-full flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={onBack}
                className="flex items-center gap-2 hover:bg-[#262626] rounded transition-colors cursor-pointer px-2 py-1"
                aria-label="Go back to portfolio"
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-[#bfbfbf]"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="font-['Neue_Brucke',_sans-serif] text-[#bfbfbf] text-lg sm:text-xl md:text-2xl lg:text-[25px] text-nowrap">
                  {projectName}
                </div>
              </button>
            </div>
            <div className="font-['IBM_Plex_Mono',_monospace] text-[#606060] text-xs sm:text-sm md:text-base lg:text-[20px] text-right uppercase">
              {projectCategory}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-b from-transparent via-[#111111]/10 to-transparent pointer-events-none" />
      </div>

      <div className={`transition-all duration-300 ${scrolled ? "h-[60px] md:h-[84px]" : "h-[120px] md:h-[170px]"}`} />
    </>
  )
}