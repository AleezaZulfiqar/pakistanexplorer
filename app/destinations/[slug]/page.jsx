// app/destinations/[slug]/page.jsx

import DestinationDetailPage from "@/components/DestinationDetailPage";

// Static destination data
const mockDestinations = {
  lahore: {
    name: "Lahore",
    region: "Punjab",
    image: "/placeholder.svg?height=250&width=350",
  },
  karachi: {
    name: "Karachi",
    region: "Sindh",
    image: "/placeholder.svg?height=250&width=350",
  },
  islamabad: {
    name: "Islamabad",
    region: "Capital Territory",
    image: "/placeholder.svg?height=250&width=350",
  },
  murree: {
    name: "Murree",
    region: "Punjab",
    image: "/placeholder.svg?height=250&width=350",
  },
  "naran-kaghan": {
    name: "Naran Kaghan",
    region: "Khyber Pakhtunkhwa",
    image: "/placeholder.svg?height=250&width=350",
  },
  "fairy-meadows": {
    name: "Fairy Meadows",
    region: "Gilgit-Baltistan",
    image: "/placeholder.svg?height=250&width=350",
  },
};

// ✅ This is a **server component** now — it can access params
export default function DestinationSlugPage({ params }) {
  const slug = params.slug;
  const destination = mockDestinations[slug];

  if (!destination) {
    return (
      <div className="p-10 text-center text-red-500 text-lg">
        Destination not found.
      </div>
    );
  }

  return (
    <DestinationDetailPage selectedDestination={destination} />

  );
}
