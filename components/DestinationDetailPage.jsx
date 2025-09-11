"use client";
import { useRouter } from "next/navigation";
import { ArrowLeft, Clock, Calendar, Bed, Car } from "lucide-react";



export default function DestinationDetailPage({ selectedDestination, navigateToPage }) {
  const router = useRouter();

  if (!selectedDestination) return null;

  const destinationDetails = {
    Karachi: {
      fullDescription:
        "Karachi, Pakistan's largest city and economic hub, is a vibrant metropolis that perfectly blends modernity with tradition. Known as the 'City of Lights,' Karachi offers an incredible diversity of experiences from pristine beaches along the Arabian Sea to bustling markets, world-class restaurants, and rich cultural heritage sites.",
      image: "/images/karachi.jpg",
      attractions: [
        { name: "Clifton Beach", description: "Popular beach destination with camel rides and food stalls" },
        { name: "Quaid-e-Azam Mausoleum", description: "Final resting place of Pakistan's founder" },
        { name: "Port Grand", description: "Waterfront dining and entertainment complex" },
        { name: "Empress Market", description: "Historic Victorian-era market" },
        { name: "Frere Hall", description: "Beautiful colonial architecture and library" },
        { name: "Pakistan Maritime Museum", description: "Naval history and submarine tours" },
      ],
      activities: ["Beach activities", "Shopping", "Food tours", "Historical tours", "Nightlife", "Cultural shows"],
      bestTime: "November to March (cooler weather)",
      duration: "3-5 days recommended",
      accommodation: "Luxury hotels to budget hostels available",
      transportation: "Metro bus, taxis, ride-sharing apps",
      cuisine: ["Karachi Biryani", "BBQ", "Street food", "Seafood", "Haleem", "Nihari"],
    },
    Lahore: {
      fullDescription:
        "Lahore, the cultural capital of Pakistan, is a city where history comes alive through its magnificent Mughal architecture, vibrant bazaars, and legendary food culture. Known as the 'Heart of Pakistan,' Lahore offers an immersive experience into the country's rich heritage and artistic traditions.",
      image: "/images/mosque.jpg",
      attractions: [
        { name: "Badshahi Mosque", description: "One of the largest mosques in the world" },
        { name: "Lahore Fort", description: "UNESCO World Heritage Mughal fortress" },
        { name: "Shalimar Gardens", description: "Beautiful Mughal gardens with fountains" },
        { name: "Wazir Khan Mosque", description: "Stunning tile work and architecture" },
        { name: "Anarkali Bazaar", description: "Historic market for traditional items" },
        { name: "Lahore Museum", description: "Rich collection of art and artifacts" },
      ],
      activities: ["Heritage walks", "Food tours", "Shopping", "Cultural performances", "Photography", "Art galleries"],
      bestTime: "October to March",
      duration: "4-6 days recommended",
      accommodation: "Heritage hotels and modern accommodations",
      transportation: "Metro bus, rickshaws, taxis",
      cuisine: ["Lahori Karahi", "Kulfi", "Lassi", "Paaye", "Halwa Puri", "Seekh Kebabs"],
    },
    Islamabad: {
      fullDescription:
        "Islamabad, the capital of Pakistan, is known for its modern architecture, organized layout, and proximity to natural beauty. It is one of the cleanest and most peaceful cities in Pakistan.",
      image: "/images/mosque.jpg",
      attractions: [
        { name: "Faisal Mosque", description: "The largest mosque in Pakistan with striking modern architecture" },
        { name: "Pakistan Monument", description: "A national symbol representing unity and heritage" },
        { name: "Daman-e-Koh", description: "A scenic viewpoint in the Margalla Hills" },
      ],
      activities: ["Hiking", "Museum visits", "City tours", "Picnics", "Photography"],
      bestTime: "October to April",
      duration: "2-4 days recommended",
      accommodation: "Modern hotels, guesthouses, and resorts",
      transportation: "Ride-sharing apps, taxis, Metro bus",
      cuisine: ["Chapli Kebab", "Biryani", "BBQ", "Pakistani Chinese"],
    },
    Murree: {
      fullDescription:
        "Murree is a popular hill station located in the Pir Panjal Range. Known for its pine forests, cool weather, and colonial architecture, it's a favorite weekend getaway.",
      image: "/images/murree.jpg",
      attractions: [
        { name: "Mall Road", description: "Shopping, dining, and strolling in a lively mountain setting" },
        { name: "Patriata (New Murree)", description: "Chair lifts and cable cars with scenic views" },
        { name: "Kashmir Point", description: "Panoramic views of the surrounding mountains" },
      ],
      activities: ["Sightseeing", "Shopping", "Photography", "Cable car rides"],
      bestTime: "April to September",
      duration: "2-3 days recommended",
      accommodation: "Hill resorts, hotels, cottages",
      transportation: "Private cars, taxis",
      cuisine: ["Pakistani desi food", "Pakoras", "Paratha rolls", "Hot beverages"],
    },
    "Naran Kaghan": {
      fullDescription:
        "Naran Kaghan Valley is a beautiful alpine region famous for its lakes, rivers, and mountains. It's a summer paradise for nature lovers and adventurers.",
      image: "/images/naran.jpg",
      attractions: [
        { name: "Lake Saif ul Malook", description: "Crystal-clear lake surrounded by mountains" },
        { name: "Lulusar Lake", description: "High-altitude lake with serene views" },
        { name: "Babusar Pass", description: "Mountain pass connecting Kaghan to Chilas" },
      ],
      activities: ["Boating", "Trekking", "Camping", "Fishing", "Photography"],
      bestTime: "May to September",
      duration: "3-6 days recommended",
      accommodation: "Hotels, guest houses, campsites",
      transportation: "Jeeps, vans, private cars",
      cuisine: ["Trout fish", "Chappal Kebab", "Pakistani food"],
    },
    "Fairy Meadows": {
      fullDescription:
        "Fairy Meadows offers stunning views of Nanga Parbat and is known for its lush green fields, camping spots, and adventure treks.",
      image: "/images/fairymeadows.jpg",
      attractions: [
        { name: "Nanga Parbat View", description: "Panoramic view of the 9th highest mountain in the world" },
        { name: "Base Camp Trek", description: "A scenic but challenging trek to the Nanga Parbat base camp" },
        { name: "Reflection Lake", description: "A peaceful lake reflecting the snow-capped peaks" },
      ],
      activities: ["Trekking", "Camping", "Photography", "Nature walks"],
      bestTime: "June to September",
      duration: "4-7 days recommended",
      accommodation: "Camping, wooden cottages",
      transportation: "Jeeps, hiking trails",
      cuisine: ["Simple Pakistani food", "Bonfire meals", "Local dishes"],
    },
  };
// ✅ Get details for the selected destination
const details = destinationDetails[selectedDestination?.name] || {};

// ✅ Decide image: priority → selectedDestination.image → details.image → placeholder
const imageToShow =
  selectedDestination?.image && selectedDestination.image.trim() !== ""
    ? selectedDestination.image
    : details.image && details.image.trim() !== ""
    ? details.image
    : "/images/placeholder.svg";  // 👈 fallback image (place in public/images/)




  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => router.push("/destinations")}
          className="flex items-center text-teal-600 hover:text-teal-700 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Destinations
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative py-20  bg-gradient-to-l from-blue-300 to-[#809c13] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">{selectedDestination.name}</h1>
              <p className="text-xl mb-6">{selectedDestination.region}</p>
              <p className="text-lg text-gray-200">{details.fullDescription}</p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <Clock className="h-8 w-8 text-teal-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">Best Time</h3>
              <p className="text-gray-600 text-sm">{details.bestTime}</p>
            </div>
            <div className="text-center">
              <Calendar className="h-8 w-8 text-teal-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">Duration</h3>
              <p className="text-gray-600 text-sm">{details.duration}</p>
            </div>
            <div className="text-center">
              <Bed className="h-8 w-8 text-teal-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">Stay</h3>
              <p className="text-gray-600 text-sm">{details.accommodation}</p>
            </div>
            <div className="text-center">
              <Car className="h-8 w-8 text-teal-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900">Transport</h3>
              <p className="text-gray-600 text-sm">{details.transportation}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Attractions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Top Attractions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {details.attractions?.map((attraction, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{attraction.name}</h3>
                <p className="text-gray-600">{attraction.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities & Cuisine */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Activities</h2>
              <div className="grid grid-cols-2 gap-4">
                {details.activities?.map((activity, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow">
                    <p className="text-gray-700 font-medium">{activity}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Must-Try Cuisine</h2>
              <div className="grid grid-cols-2 gap-4">
                {details.cuisine?.map((dish, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow">
                    <p className="text-gray-700 font-medium">{dish}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}   
