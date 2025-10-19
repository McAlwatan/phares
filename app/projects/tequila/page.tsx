'use client';

import TequilaProject from "../../../components/TequilaProject";
import { useRouter } from "next/navigation";

export default function TequilaPage() {
  const router = useRouter();

  const handleBack = () => {
    router.push('/');
  };

  return <TequilaProject onBack={handleBack} />;
}
