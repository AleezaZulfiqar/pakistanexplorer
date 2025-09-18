"use client";

import { useRouter } from "next/navigation";
import DestinationsPage from "@/components/DestinationsPage";
import Header from "@/components/Header";

export default function DestinationsRoute() {
  const router = useRouter();

  return (
    <>
    <Header/>
    <DestinationsPage
      navigateToPage={(page) => router.push(`/${page}`)}
      showDestinationDetails={(destination) => {
        const slug = destination.name.toLowerCase().replace(/\s+/g, "-");
        router.push(`/destinations/${slug}`);
      }}
    />
    </>
  );
}



