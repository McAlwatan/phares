'use client';

import SagProject from "../../../components/SagProject";
import { useRouter } from "next/navigation";

export default function SagPage() {
  const router = useRouter();

  const handleBack = () => {
    router.push('/');
  };

  return <SagProject onBack={handleBack} />;
}
