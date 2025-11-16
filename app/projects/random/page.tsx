'use client';

import RandomProject from "components/randomPage";
import { useRouter } from "next/navigation";

export default function RandomPage() {
  const router = useRouter();

  const handleBack = () => {
    router.push('/');
  };

  return <RandomProject onBack={handleBack} />;
}
