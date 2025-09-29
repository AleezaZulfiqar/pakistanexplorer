









// "use client";

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useRouter, useSearchParams } from "next/navigation";

// const BookingForm = () => {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const preDestination = searchParams.get("destination") || "";

//   const [user, setUser] = useState(null);
//   const [loadingUser, setLoadingUser] = useState(true);

//   const [formData, setFormData] = useState({
//     destination: preDestination,
//     travelers: "",
//     date: "",
//     notes: "",
//   });
//   const [loading, setLoading] = useState(false);

//   const destinations = [
//     "Karachi",
//     "Lahore",
//     "Islamabad",
//     "Murree",
//     "Naran Kaghan",
//     "Fairy Meadows",
//   ];

//   // Fetch logged-in user
//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/auth/me", {
//           withCredentials: true,
//         });
//         setUser(res.data);
//         // Pre-fill name & email automatically
//         setFormData((prev) => ({
//           ...prev,
//           name: res.data.name || "",
//           email: res.data.email || "",
//         }));
//       } catch (err) {
//         console.error("Not logged in", err);
//         router.push("/login");
//       } finally {
//         setLoadingUser(false);
//       }
//     };
//     fetchUser();
//   }, [router]);

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//   e.preventDefault();
//   if (!user) return;

//   setLoading(true);
//   try {
//     // Make sure travelers is number
//     const payload = {
//       name: formData.name,
//       email: formData.email,
//       userId: user._id,
//       destination: formData.destination,
//       travelers: Number(formData.travelers),
//       date: formData.date,
//       notes: formData.notes,
//       phone: formData.phone || "", // include if backend requires phone
//     };

//     const res = await axios.post("http://localhost:5000/api/bookings", payload, {
//       withCredentials: true,
//     });

//     alert("Booking submitted successfully!");
//     setFormData({
//       ...formData,
//       travelers: "",
//       date: "",
//       notes: "",
//       phone:""
//     });
//   } catch (err) {
//     console.error("Booking error:", err.response?.data || err.message);
//     alert(err.response?.data?.error || "Failed to save booking.");
//   } finally {
//     setLoading(false);
//   }
// };

//   if (loadingUser) return <p className="text-center mt-20">Loading user...</p>;
//   if (!user) return null;

//   return (
//     <div className="py-24 px-4 sm:px-6 lg:px-20 min-h-screen bg-gray-100">
//       <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-2xl">
//         <h2 className="text-4xl font-bold text-[#0d4544] mb-8 text-center">
//           Book Your Travel Experience
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="grid md:grid-cols-2 gap-6">
//             <input
//               type="text"
//               name="name"
//               value={formData.name || ""}
//               disabled
//               className="p-4 border border-gray-300 rounded-xl w-full bg-gray-100"
//             />
//             <input
//               type="email"
//               name="email"
//               value={formData.email || ""}
//               disabled
//               className="p-4 border border-gray-300 rounded-xl w-full bg-gray-100"
//             />
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             <input
//               type="number"
//               name="travelers"
//               value={formData.travelers}
//               onChange={handleChange}
//               placeholder="No. of Travelers"
//               className="p-4 border border-gray-300 rounded-xl w-full"
//               required
//             />
//             <input
//   type="text"
//   name="phone"
//   value={formData.phone}
//   onChange={handleChange}
//   placeholder="Phone Number"
//   className="p-4 border border-gray-300 rounded-xl w-full"
//   required
// />

//             <select
//               name="destination"
//               value={formData.destination}
//               onChange={handleChange}
//               className="p-4 border border-gray-300 rounded-xl w-full"
//               required
//             >
//               <option value="">Select Destination</option>
//               {destinations.map((d) => (
//                 <option key={d} value={d}>
//                   {d}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             <input
//               type="date"
//               name="date"
//               value={formData.date}
//               onChange={handleChange}
//               className="p-4 border border-gray-300 rounded-xl w-full"
//               required
//             />
//             <input
//               type="text"
//               name="notes"
//               value={formData.notes}
//               onChange={handleChange}
//               placeholder="Additional Notes"
//               className="p-4 border border-gray-300 rounded-xl w-full"
//             />
//           </div>

//           <div className="text-center">
//             <button
//               type="submit"
//               disabled={loading}
//               className="bg-[#0d4544] text-white px-8 py-3 rounded-xl text-lg font-semibold w-full md:w-auto transition"
//             >
//               {loading ? "Submitting..." : "Submit Booking"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default BookingForm;








// "use client";

// import { useState } from "react";
// import axios from "axios";
// import { useSearchParams, useRouter } from "next/navigation";
// import { useAuth } from "../app/Context/AuthContext";

// const BookingForm = () => {
//   const { user, loading } = useAuth();
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const preDestination = searchParams.get("destination") || "";

//   const [formData, setFormData] = useState({
//     destination: preDestination,
//     travelers: "",
//     date: "",
//     notes: "",
//   });
//   const [submitting, setSubmitting] = useState(false);

//   const destinations = [
//     "Karachi",
//     "Lahore",
//     "Islamabad",
//     "Murree",
//     "Naran Kaghan",
//     "Fairy Meadows",
//   ];

//   if (loading) return <p className="text-center mt-20">Loading user...</p>;
//   if (!user) {
//     router.push("/login");
//     return null;
//   }

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitting(true);
//     try {
//       await axios.post(
//         "http://localhost:5000/api/bookings",
//         {
//           ...formData,
//           userId: user._id,
//           name: user.name,
//           email: user.email,
//         },
//         { withCredentials: true }
//       );

//       alert("Booking submitted successfully!");
//       setFormData({
//         destination: preDestination,
//         travelers: "",
//         date: "",
//         notes: "",
//       });
//     } catch (err) {
//       console.error("Booking error:", err);
//       alert("Failed to save booking.");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div className="py-24 px-4 sm:px-6 lg:px-20 min-h-screen bg-gray-100">
//       <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-2xl">
//         <h2 className="text-4xl font-bold text-[#0d4544] mb-8 text-center">
//           Book Your Travel Experience
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="grid md:grid-cols-2 gap-6">
//             <input
//               type="text"
//               name="name"
//               value={user.name}
//               disabled
//               className="p-4 border border-gray-300 rounded-xl w-full bg-gray-100"
//             />
//             <input
//               type="email"
//               name="email"
//               value={user.email}
//               disabled
//               className="p-4 border border-gray-300 rounded-xl w-full bg-gray-100"
//             />
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             <input
//               type="number"
//               name="travelers"
//               value={formData.travelers}
//               onChange={handleChange}
//               placeholder="No. of Travelers"
//               className="p-4 border border-gray-300 rounded-xl w-full"
//               required
//             />
//             <select
//               name="destination"
//               value={formData.destination}
//               onChange={handleChange}
//               className="p-4 border border-gray-300 rounded-xl w-full"
//               required
//             >
//               <option value="">Select Destination</option>
//               {destinations.map((d) => (
//                 <option key={d} value={d}>
//                   {d}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             <input
//               type="date"
//               name="date"
//               value={formData.date}
//               onChange={handleChange}
//               className="p-4 border border-gray-300 rounded-xl w-full"
//               required
//             />
//             <input
//               type="text"
//               name="notes"
//               value={formData.notes}
//               onChange={handleChange}
//               placeholder="Additional Notes"
//               className="p-4 border border-gray-300 rounded-xl w-full"
//             />
//           </div>

//           <div className="text-center">
//             <button
//               type="submit"
//               disabled={submitting}
//               className="bg-[#0d4544] text-white px-8 py-3 rounded-xl text-lg font-semibold w-full md:w-auto transition"
//             >
//               {submitting ? "Submitting..." : "Submit Booking"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default BookingForm;


































// "use client";

// import { useState } from "react";
// import axios from "axios";
// import { useSearchParams, useRouter } from "next/navigation";
// import { useAuth } from ""


// const BookingForm = () => {
//   const { user, loading } = useAuth();
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const preDestination = searchParams.get("destination") || "";

//   const [formData, setFormData] = useState({
//     destination: preDestination,
//     travelers: "",
//     date: "",
//     notes: "",
//   });
//   const [submitting, setSubmitting] = useState(false);

//   const destinations = ["Karachi","Lahore","Islamabad","Murree","Naran Kaghan","Fairy Meadows"];

//   if (loading) return <p className="text-center mt-20">Loading user...</p>;
//   if (!user) {
//     router.push("/login");
//     return null;
//   }

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitting(true);
//     try {
//       // Save booking to DB
//       const res = await axios.post(
//         "http://localhost:5000/api/bookings",
//         {
//           ...formData,
//           userId: user._id,
//           name: user.name,
//           email: user.email,
//           paymentStatus: "pending", // ready for payment
//         },
//         { withCredentials: true }
//       );

//       alert("Booking submitted successfully!");
//       router.push("/dashboard"); // redirect to dashboard after booking
//     } catch (err) {
//       console.error("Booking error:", err);
//       alert("Failed to save booking.");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div className="py-24 px-4 sm:px-6 lg:px-20 min-h-screen bg-gray-100">
//       <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-2xl">
//         <h2 className="text-4xl font-bold text-[#0d4544] mb-8 text-center">
//           Book Your Travel Experience
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="grid md:grid-cols-2 gap-6">
//             <input type="text" name="name" value={user.name} disabled className="p-4 border border-gray-300 rounded-xl w-full bg-gray-100"/>
//             <input type="email" name="email" value={user.email} disabled className="p-4 border border-gray-300 rounded-xl w-full bg-gray-100"/>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             <input type="number" name="travelers" value={formData.travelers} onChange={handleChange} placeholder="No. of Travelers" className="p-4 border border-gray-300 rounded-xl w-full" required/>
//             <select name="destination" value={formData.destination} onChange={handleChange} className="p-4 border border-gray-300 rounded-xl w-full" required>
//               <option value="">Select Destination</option>
//               {destinations.map((d) => (<option key={d} value={d}>{d}</option>))}
//             </select>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             <input type="date" name="date" value={formData.date} onChange={handleChange} className="p-4 border border-gray-300 rounded-xl w-full" required/>
//             <input type="text" name="notes" value={formData.notes} onChange={handleChange} placeholder="Additional Notes" className="p-4 border border-gray-300 rounded-xl w-full"/>
//           </div>

//           <div className="text-center">
//             <button type="submit" disabled={submitting} className="bg-[#0d4544] text-white px-8 py-3 rounded-xl text-lg font-semibold w-full md:w-auto transition">
//               {submitting ? "Submitting..." : "Submit Booking"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default BookingForm;













// "use client";

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useRouter, useSearchParams } from "next/navigation";

// const BookingForm = () => {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const preDestination = searchParams.get("destination") || "";

//   const [user, setUser] = useState(null);
//   const [loadingUser, setLoadingUser] = useState(true);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     destination: preDestination,
//     travelers: "",
//     date: "",
//     notes: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const destinations = [
//     "Karachi",
//     "Lahore",
//     "Islamabad",
//     "Murree",
//     "Naran Kaghan",
//     "Fairy Meadows",
//   ];

//   // Fetch logged-in user
//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/auth/me", {
//           withCredentials: true,
//         });
//         setUser(res.data);

//         // Pre-fill name, email, phone
//         setFormData((prev) => ({
//           ...prev,
//           name: res.data.name || "",
//           email: res.data.email || "",
//           phone: res.data.phone || "",
//         }));
//       } catch (err) {
//         console.error("Not logged in", err);
//         router.push("/login");
//       } finally {
//         setLoadingUser(false);
//       }
//     };
//     fetchUser();
//   }, [router]);

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!user || !formData.name || !formData.email || !formData.phone) {
//       alert("User data is missing. Please wait or check your profile.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const payload = {
//         name: formData.name,
//         email: formData.email,
//         phone: formData.phone,
//         userId: user._id,
//         destination: formData.destination,
//         travelers: Number(formData.travelers),
//         date: formData.date,
//         notes: formData.notes,
//       };

//       console.log("Booking payload:", payload);

//       await axios.post("http://localhost:5000/api/bookings", payload, {
//         withCredentials: true,
//       });

//       alert("Booking submitted successfully!");
//       setFormData({
//         ...formData,
//         travelers: "",
//         date: "",
//         notes: "",
//       });
//     } catch (err) {
//       console.error("Booking error:", err.response?.data || err.message);
//       alert(err.response?.data?.error || "Failed to save booking.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loadingUser) return <p className="text-center mt-20">Loading user...</p>;
//   if (!user) return null;

//   return (
//     <div className="py-24 px-4 sm:px-6 lg:px-20 min-h-screen bg-gray-100">
//       <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-2xl">
//         <h2 className="text-4xl font-bold text-[#0d4544] mb-8 text-center">
//           Book Your Travel Experience
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="grid md:grid-cols-2 gap-6">
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               disabled
//               className="p-4 border border-gray-300 rounded-xl w-full bg-gray-100"
//             />
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               disabled
//               className="p-4 border border-gray-300 rounded-xl w-full bg-gray-100"
//             />
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             <input
//               type="number"
//               name="travelers"
//               value={formData.travelers}
//               onChange={handleChange}
//               placeholder="No. of Travelers"
//               className="p-4 border border-gray-300 rounded-xl w-full"
//               required
//             />
//             <input
//               type="text"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               placeholder="Phone Number"
//               className="p-4 border border-gray-300 rounded-xl w-full"
//               required
//             />
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             <select
//               name="destination"
//               value={formData.destination}
//               onChange={handleChange}
//               className="p-4 border border-gray-300 rounded-xl w-full"
//               required
//             >
//               <option value="">Select Destination</option>
//               {destinations.map((d) => (
//                 <option key={d} value={d}>
//                   {d}
//                 </option>
//               ))}
//             </select>
//             <input
//               type="date"
//               name="date"
//               value={formData.date}
//               onChange={handleChange}
//               className="p-4 border border-gray-300 rounded-xl w-full"
//               required
//             />
//           </div>

//           <div>
//             <input
//               type="text"
//               name="notes"
//               value={formData.notes}
//               onChange={handleChange}
//               placeholder="Additional Notes"
//               className="p-4 border border-gray-300 rounded-xl w-full"
//             />
//           </div>

//           <div className="text-center">
//             <button
//               type="submit"
//               disabled={loading}
//               className="bg-[#0d4544] text-white px-8 py-3 rounded-xl text-lg font-semibold w-full md:w-auto transition"
//             >
//               {loading ? "Submitting..." : "Submit Booking"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default BookingForm;










// "use client";

// import { useState } from "react";
// import axios from "axios";
// import { useRouter } from "next/navigation";

// export default function BookingForm() {
//   const router = useRouter();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     destination: "",
//     travelers: "",
//     date: "",
//     notes: "",
//   });
//   const [loading, setLoading] = useState(false);

//   const destinations = ["Karachi", "Lahore", "Islamabad", "Murree", "Naran Kaghan", "Fairy Meadows"];

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate required fields
//     const requiredFields = ["name", "email", "phone", "destination", "travelers", "date", "notes"];
//     for (let field of requiredFields) {
//       if (!formData[field]) {
//         alert(`Please fill in the ${field} field.`);
//         return;
//       }
//     }

//     setLoading(true);
//     try {
//       // POST booking to backend
//       const res = await axios.post(
//         "http://localhost:5000/api/bookings",
//         {
//           ...formData,
//           travelers: Number(formData.travelers),
//         },
//         { withCredentials: true }
//       );

//       // Ensure backend returned the booking _id
//       if (!res.data || !res.data._id) {
//         throw new Error("Booking ID not returned from backend.");
//       }

//       const bookingId = res.data._id;

//       // Redirect to Payment page with bookingId query param
//       router.push(`/payment?bookingId=${bookingId}`);
//     } catch (err) {
//       console.error("Booking error:", err.response?.data || err.message);
//       alert(err.response?.data?.error || "Booking failed. Try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
//       <div className="bg-white p-10 rounded-xl shadow-md w-full max-w-3xl">
//         <h2 className="text-3xl font-bold mb-6 text-center">Book Your Travel</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Name & Email */}
//           <div className="grid md:grid-cols-2 gap-4">
//             <input
//               type="text"
//               name="name"
//               placeholder="Full Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="p-3 border rounded-xl w-full"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="p-3 border rounded-xl w-full"
//             />
//           </div>

//           {/* Travelers & Phone */}
//           <div className="grid md:grid-cols-2 gap-4">
//             <input
//               type="number"
//               name="travelers"
//               placeholder="No. of Travelers"
//               value={formData.travelers}
//               onChange={handleChange}
//               min={1}
//               required
//               className="p-3 border rounded-xl w-full"
//             />
//             <input
//               type="text"
//               name="phone"
//               placeholder="Phone Number"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//               className="p-3 border rounded-xl w-full"
//             />
//           </div>

//           {/* Destination & Date */}
//           <div className="grid md:grid-cols-2 gap-4">
//             <select
//               name="destination"
//               value={formData.destination}
//               onChange={handleChange}
//               required
//               className="p-3 border rounded-xl w-full"
//             >
//               <option value="">Select Destination</option>
//               {destinations.map((d) => (
//                 <option key={d} value={d}>
//                   {d}
//                 </option>
//               ))}
//             </select>
//             <input
//               type="date"
//               name="date"
//               value={formData.date}
//               onChange={handleChange}
//               required
//               className="p-3 border rounded-xl w-full"
//             />
//           </div>

//           {/* Notes */}
//           <input
//             type="text"
//             name="notes"
//             placeholder="Additional Notes"
//             value={formData.notes}
//             onChange={handleChange}
//             required
//             className="p-3 border rounded-xl w-full"
//           />

//           {/* Continue to Payment */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full py-3 rounded-xl border font-semibold"
//           >
//             {loading ? "Processing..." : "Continue to Payment"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

















"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function BookingForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelers: "",
    date: "",
  });
  const [loading, setLoading] = useState(false);

  const destinations = ["Karachi", "Lahore", "Islamabad", "Murree", "Naran Kaghan", "Fairy Meadows"];

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    const requiredFields = ["name", "email", "phone", "destination", "travelers", "date"];
    for (let field of requiredFields) {
      if (!formData[field]) {
        alert(`Please fill in the ${field} field.`);
        return;
      }
    }

    setLoading(true);
    try {
      // ✅ POST booking to backend with JWT token
      const res = await axios.post(
        "http://localhost:5000/api/bookings",
        {
          ...formData,
          travelers: Number(formData.travelers),
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        }
      );

      if (!res.data || !res.data._id) {
        throw new Error("Booking ID not returned from backend.");
      }

      const bookingId = res.data._id;
      router.push(`/payment?bookingId=${bookingId}`);
    } catch (err) {
      console.error("Booking error:", err.response?.data || err.message);
      alert(err.response?.data?.error || "Booking failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white p-10 rounded-xl shadow-md w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Book Your Travel</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name & Email */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 border rounded-xl w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 border rounded-xl w-full"
            />
          </div>

          {/* Travelers & Phone */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="number"
              name="travelers"
              placeholder="No. of Travelers"
              value={formData.travelers}
              onChange={handleChange}
              min={1}
              required
              className="p-3 border rounded-xl w-full"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="p-3 border rounded-xl w-full"
            />
          </div>

          {/* Destination & Date */}
          <div className="grid md:grid-cols-2 gap-4">
            <select
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              required
              className="p-3 border rounded-xl w-full"
            >
              <option value="">Select Destination</option>
              {destinations.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="p-3 border rounded-xl w-full"
            />
          </div>

          {/* Continue to Payment */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl border font-semibold"
          >
            {loading ? "Processing..." : "Continue to Payment"}
          </button>
        </form>
      </div>
    </div>
  );
}
