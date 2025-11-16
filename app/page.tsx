'use client';

import { useState } from "react";
import ResponsivePortfolio from "../components/ResponsivePortfolio";
import PasswordPopup from "../components/PasswordPopup";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [showPasswordPopup, setShowPasswordPopup] = useState(false);
  const router = useRouter();

  const handleProjectClick = (projectName: string) => {
    if (projectName === 'rifaly') {
      router.push('/projects/rifaly');
    } else if (projectName === 'sag') {
      router.push('/projects/sag');
    } else if (projectName === 'nmb') {
      router.push('/projects/nmb');
    } else if (projectName === 'tequila') {
      router.push('/projects/tequila');
    } else if (projectName === 'nendiwe') {
      router.push('/projects/nendiwe');
    } else if (projectName === 'nikonekt') {
      router.push('/projects/nikonekt');
    } else if (projectName === 'sites') {
      router.push('/projects/sites');
    } else if (projectName === 'random') {
      router.push('/projects/random');
    } else if (projectName === 'sound') {
      router.push('/sound');
    } else if (projectName === 'bolt-password') {
      setShowPasswordPopup(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#111111]">
      <ResponsivePortfolio onProjectClick={handleProjectClick} />
      
      {/* Password Popup for BOLT project */}
      <PasswordPopup 
        isOpen={showPasswordPopup}
        onClose={() => setShowPasswordPopup(false)}
        projectName="BOLT"
      />
    </div>
  );
}
