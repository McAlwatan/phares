'use client';

import NikonektProject from "../../../components/NikonektProject";
import { useRouter } from "next/navigation";

export default function NikonektPage() {
  const router = useRouter();

  const handleBack = () => {
    router.push('/');
  };

  const handleProjectClick = (projectName: string) => {
    if (projectName === 'sites') {
      router.push('/projects/sites');
    }
  };

  return <NikonektProject onBack={handleBack} onProjectClick={handleProjectClick} />;
}
