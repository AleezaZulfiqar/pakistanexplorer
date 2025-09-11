"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (!savedUser) {
      router.push("/login");
    } else {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  if (!user) return null;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Welcome, {user.name || "Guest"}!</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone || "N/A"}</p>
      <button
        className="mt-6 bg-red-500 text-white px-4 py-2 rounded"
        onClick={() => {
          localStorage.removeItem("user");
          router.push("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
