'use client';

import RifalyProject from "../../../components/RifalyProject";
import { useRouter } from "next/navigation";

export default function RifalyPage() {
  const router = useRouter();

  const handleBack = () => {
    router.push('/');
  };

  return <RifalyProject onBack={handleBack} />;
}
