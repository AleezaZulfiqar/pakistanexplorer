"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
const destinationPackages = [
  {
    id: 1,
    name: "Karachi City Tour",
    destination: "Karachi",
    duration: "3 Days / 2 Nights",
    price: "PKR 25,000",
    image: "/images/karachi.jpg",
    highlights: ["Clifton Beach", "Port Grand", "Mazar-e-Quaid"],
  },
  {
    id: 2,
    name: "Lahore Heritage Trip",
    destination: "Lahore",
    duration: "4 Days / 3 Nights",
    price: "PKR 35,000",
    image: "/images/lhr.jpg",
    highlights: ["Badshahi Mosque", "Shalimar Gardens", "Anarkali Bazaar"],
  },
  {
    id: 3,
    name: "Islamabad Scenic Package",
    destination: "Islamabad",
    duration: "2 Days / 1 Night",
    price: "PKR 18,000",
    image: "/Images/isla.jpg",
    highlights: ["Faisal Mosque", "Pakistan Monument", "Daman-e-Koh"],
  },
  {
    id: 4,
    name: "Murree Hills Escape",
    destination: "Murree",
    duration: "3 Days / 2 Nights",
    price: "PKR 28,000",
    image: "/Images/murree.webp",
    highlights: ["Mall Road", "Patriata", "Kashmir Point"],
  },
  {
    id: 5,
    name: "Naran Kaghan Adventure",
    destination: "Naran Kaghan",
    duration: "5 Days / 4 Nights",
    price: "PKR 50,000",
    image: "/Images/naran.jpg",
    highlights: ["Lake Saif ul Malook", "Babusar Top", "Lulusar Lake"],
  },
  {
    id: 6,
    name: "Fairy Meadows Trek",
    destination: "Fairy Meadows",
    duration: "6 Days / 5 Nights",
    price: "PKR 60,000",
    image: "/Images/fairy.webp",
    highlights: ["Nanga Parbat View", "Reflection Lake", "Base Camp Trek"],
  },
];

const DestinationPackages = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-[#0B60B0] mb-12">
        Destination Packages
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {destinationPackages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            <div className="relative w-full h-56">
              <Image
                src={pkg.image}
                alt={pkg.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-2xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
              <p className="text-sm text-gray-500 mb-1">
                <strong>Destination:</strong> {pkg.destination}
              </p>
              <p className="text-sm text-gray-500 mb-1">
                <strong>Duration:</strong> {pkg.duration}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                <strong>Highlights:</strong> {pkg.highlights.join(", ")}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-[#809c13] font-bold text-lg">{pkg.price}</span>
                <Link href="/Bookingform">
                <button className="bg-[#809c13] text-white px-4 py-2 rounded-lg text-sm hover:bg-white hover:text-gray-900 border border-[#809c13] transition">
                  Book Now
                </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationPackages;
