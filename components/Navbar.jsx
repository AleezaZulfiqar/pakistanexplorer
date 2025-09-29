"use client";
import { Bell } from "lucide-react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Navbar({ user }) {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/notifications", { withCredentials: true });
        setNotifications(res.data);
      } catch {}
    };
    fetchNotifications();
  }, []);

  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold text-gray-700">Welcome, {user?.firstName}!</h1>
      <div className="flex items-center space-x-4">
        <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
        <div className="w-10 h-10 bg-gray-300 rounded-full" />
      </div>
    </div>
  );
}
