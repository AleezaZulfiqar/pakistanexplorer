"use client";

import React from "react";

export default function Sidebar({ activeTab, setActiveTab }) {
  const menuItems = [
    { id: "bookings", label: "Bookings" },
    { id: "payments", label: "Payments" },
    { id: "reviews", label: "Reviews" },
  ];

  return (
    <div className="w-64 bg-white shadow-lg h-screen p-6 flex flex-col">
      <h2 className="text-xl font-bold text-[#0d4544] mb-8">TrekTrips</h2>
      <nav className="flex flex-col space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`text-left px-4 py-2 rounded-lg font-medium transition 
              ${activeTab === item.id ? "bg-[#0d4544] text-white" : "hover:bg-gray-200 text-gray-700"}`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
