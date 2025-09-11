"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [phone, setPhone] = useState("");
  const router = useRouter();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (!savedUser) {
      router.push("/login");
    } else {
      const userData = JSON.parse(savedUser);
      setUser(userData);
      setPhone(userData.phone || "");
    }
  }, []);

  const handleUpdate = () => {
    const updatedUser = { ...user, phone };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    alert("Profile updated!");
  };

  if (!user) return null;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Profile Settings</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <input
        type="text"
        placeholder="Phone Number"
        className="border px-4 py-2 rounded mt-2 block"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button
        onClick={handleUpdate}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Update Profile
      </button>
    </div>
  );
};

export default Profile;
