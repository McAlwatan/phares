'use client';

import NmbProject from "../../../components/NmbProject";
import { useRouter } from "next/navigation";

export default function NmbPage() {
  const router = useRouter();

  const handleBack = () => {
    router.push('/');
  };

  return <NmbProject onBack={handleBack} />;
}
