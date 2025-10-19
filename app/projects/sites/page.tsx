'use client';

import SitesProject from "../../../components/SitesProject";
import { useRouter } from "next/navigation";

export default function SitesPage() {
  const router = useRouter();

  const handleBack = () => {
    router.push('/');
  };

  return <SitesProject onBack={handleBack} />;
}
