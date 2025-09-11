"use client";

import { useRouter } from "next/navigation";
import DestinationsPage from "@/components/DestinationsPage";

export default function DestinationsRoute() {
  const router = useRouter();

  return (
    <DestinationsPage
      navigateToPage={(page) => router.push(`/${page}`)}
      showDestinationDetails={(destination) => {
        const slug = destination.name.toLowerCase().replace(/\s+/g, "-");
        router.push(`/destinations/${slug}`);
      }}
    />
  );
}



