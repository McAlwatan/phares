'use client';

import SoundPage from "../../components/SoundPage";
import { useRouter } from "next/navigation";

export default function SoundRoute() {
  const router = useRouter();

  const handleBack = () => {
    router.push('/');
  };

  return <SoundPage onBack={handleBack} />;
}
