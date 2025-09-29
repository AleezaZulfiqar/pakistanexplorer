



// "use client";

// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function Dashboard() {
//   const [user, setUser] = useState(null);
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     let mounted = true;

//     async function loadDashboard() {
//       setLoading(true);
//       try {
//         const meRes = await axios.get("/api/auth/me", { withCredentials: true });
//         if (!mounted) return;
//         const meData = meRes.data || {};
//         setUser(meData.user || {});
//         setBookings(meData.bookings || []);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     }

//     loadDashboard();
//     return () => { mounted = false; };
//   }, []);

//   function humanDate(d) {
//     try {
//       const dt = new Date(d);
//       return dt.toLocaleDateString() + " • " + dt.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
//     } catch {
//       return d;
//     }
//   }

//   if (loading) {
//     return (
//       <main className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="text-center">
//           <div className="inline-block w-12 h-12 border-4 border-gray-200 rounded-full animate-spin border-t-[#0d4544]" />
//           <p className="mt-4 text-gray-700">Loading your dashboard…</p>
//         </div>
//       </main>
//     );
//   }

//   const displayName = user?.firstName || user?.name || (user?.email ? user.email.split("@")[0] : "Traveler");

//   return (
//     <main className="min-h-screen bg-gray-50 p-6 mt-10">
//       <div className="max-w-7xl mx-auto">
//         {/* Welcome */}
//         <div className="mb-10">
//           <h1 className="text-4xl font-bold text-[#0d4544] mb-4">Welcome back, {displayName}!</h1>
//           <p className="text-gray-600 mb-6">{user?.email ? `Signed in as ${user.email}` : ""}</p>
//         </div>

//         {/* Bookings Section */}
//         <div className="mb-10">
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-2xl font-semibold">Your Bookings</h2>
//             <a href="/booking-form" className="text-sm text-[#0d4544] font-medium hover:underline">Create new booking</a>
//           </div>
//           <div className="space-y-4">
//             {bookings.length === 0 ? (
//               <div className="bg-white p-6 rounded-xl shadow text-center">
//                 <p className="text-gray-500">No bookings yet. Start by creating one.</p>
//               </div>
//             ) : bookings.map((b) => {
//               const isConfirmed = b.status === "confirmed"; // admin confirm ka flag
//               return (
//                 <div key={b._id} className="bg-white rounded-xl shadow p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:shadow-lg transition">
//                   <div>
//                     <h3 className="text-lg font-semibold">{b.destination}</h3>
//                     <p className="text-sm text-gray-500">{b.notes || "No extra notes"}</p>
//                     <p className="text-xs text-gray-400 mt-1">Date: {b.date ? humanDate(b.date) : "—"}</p>
//                     <p className="text-xs text-gray-400">Travelers: {b.travelers || "—"}</p>
//                     <p className="text-xs text-gray-400">Contact: {b.email || b.phone || "—"}</p>
//                   </div>
//                   <div className="flex flex-col items-end gap-2">
//                     <span className={`text-sm font-medium px-2 py-1 rounded ${isConfirmed ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
//                       {isConfirmed ? "Success" : "Pending"}
//                     </span>
//                   </div>

//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }































"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function loadDashboard() {
      setLoading(true);
      try {
        // ✅ Fetch user info + bookings from backend
       const meRes = await axios.get("http://localhost:5000/api/auth/me", {
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
});

        if (!mounted) return;

        setUser(meRes.data.user); // User ka naam/email
        setBookings(meRes.data.bookings || []); // User ki bookings
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
    return () => { mounted = false; };
  }, []);

  function humanDate(d) {
    try {
      const dt = new Date(d);
      return dt.toLocaleDateString() + " • " + dt.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    } catch {
      return d;
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="inline-block w-12 h-12 border-4 border-gray-200 rounded-full animate-spin border-t-[#0d4544]" />
          <p className="mt-4 text-gray-700">Loading your dashboard…</p>
        </div>
      </main>
    );
  }

  const displayName = user?.firstName || user?.name || (user?.email ? user.email.split("@")[0] : "Traveler");

  return (
    <main className="min-h-screen bg-gray-50 p-6 mt-10">
      <div className="max-w-7xl mx-auto">
        {/* Welcome */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-[#0d4544] mb-4">Welcome  {displayName}!</h1>
          <p className="text-gray-600 mb-6">{user?.email ? `Signed in as ${user.email}` : ""}</p>
        </div>

        {/* Bookings Section */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Your Bookings</h2>
            <a href="/booking-form" className="text-sm text-[#0d4544] font-medium hover:underline">Create new booking</a>
          </div>
          <div className="space-y-4">
            {bookings.length === 0 ? (
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <p className="text-gray-500">No bookings yet. Start by creating one.</p>
              </div>
            ) : bookings.map((b) => (
              <div key={b._id} className="bg-white rounded-xl shadow p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:shadow-lg transition">
                <div>
                  <h3 className="text-lg font-semibold">{b.destination}</h3>
                  <p className="text-sm text-gray-500">{b.notes || "No extra notes"}</p>
                  <p className="text-xs text-gray-400 mt-1">Date: {b.date ? humanDate(b.date) : "—"}</p>
                  <p className="text-xs text-gray-400">Travelers: {b.travelers || "—"}</p>
                  <p className="text-xs text-gray-400">Contact: {b.email || b.phone || "—"}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  {/* ✅ Always show Success */}
                  <span className="text-sm font-medium px-2 py-1 rounded bg-green-100 text-green-700">
                    Success
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
