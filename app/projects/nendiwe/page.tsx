'use client';

import NendiweProject from "../../../components/NendiweProject";
import { useRouter } from "next/navigation";

export default function NendiwePage() {
  const router = useRouter();

  const handleBack = () => {
    router.push('/');
  };

  return <NendiweProject onBack={handleBack} />;
}
