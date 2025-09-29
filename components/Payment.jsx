


// "use client";

// import { useState } from "react";
// import axios from "axios";
// import { useSearchParams, useRouter } from "next/navigation";

// export default function PaymentPage() {
//   const [method, setMethod] = useState("");
//   const [formData, setFormData] = useState({
//     bankName: "",
//     accountNumber: "",
//     mobileNumber: "",
//     name: "",
//     phone: "",
//   });
//   const [loading, setLoading] = useState(false);

//   const searchParams = useSearchParams();
//   const router = useRouter();

//   const bookingId = searchParams.get("bookingId");

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!bookingId) return alert("Booking ID missing!");
//     if (!method) return alert("Select a payment method");

//     setLoading(true);
//     try {
//       await axios.post(
//         "http://localhost:5000/api/payments",
//         {
//           bookingId,
//           method,
//           ...formData,
//         },
//         { withCredentials: true }
//       );

//       alert("Payment saved successfully!");
//       router.push("/dashboard"); // redirect after successful payment
//     } catch (err) {
//       console.error("Payment error:", err);
//       alert("Failed to save payment. Check console.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-20">
//       <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-2xl">
//         <h2 className="text-3xl font-bold text-[#0d4544] mb-6 text-center">
//           Complete Your Payment
//         </h2>

//         {/* Payment Method Buttons */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
//           {["Bank Transfer", "JazzCash / EasyPaisa", "Cash"].map((m) => (
//             <button
//               key={m}
//               onClick={() => setMethod(m)}
//               className={`p-4 rounded-xl font-semibold border transition ${
//                 method === m
//                   ? "bg-[#0d4544] text-white border-[#0d4544]"
//                   : "bg-gray-50 border-gray-300 hover:bg-gray-100"
//               }`}
//             >
//               {m}
//             </button>
//           ))}
//         </div>

//         {/* Payment Form */}
//         {method && (
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {method === "Bank Transfer" && (
//               <>
//                 <input
//                   type="text"
//                   name="bankName"
//                   value={formData.bankName}
//                   onChange={handleChange}
//                   placeholder="Bank Name"
//                   className="w-full p-4 border rounded-xl"
//                   required
//                 />
//                 <input
//                   type="text"
//                   name="accountNumber"
//                   value={formData.accountNumber}
//                   onChange={handleChange}
//                   placeholder="Account Number"
//                   className="w-full p-4 border rounded-xl"
//                   required
//                 />
//               </>
//             )}

//             {method === "JazzCash / EasyPaisa" && (
//               <input
//                 type="text"
//                 name="mobileNumber"
//                 value={formData.mobileNumber}
//                 onChange={handleChange}
//                 placeholder="Enter JazzCash / EasyPaisa Number"
//                 className="w-full p-4 border rounded-xl"
//                 required
//               />
//             )}

//             {method === "Cash" && (
//               <>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Full Name"
//                   className="w-full p-4 border rounded-xl"
//                   required
//                 />
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="Phone Number"
//                   className="w-full p-4 border rounded-xl"
//                   required
//                 />
//               </>
//             )}

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-[#0d4544] text-white py-3 rounded-xl font-semibold hover:bg-[#126162] transition"
//             >
//               {loading ? "Processing..." : "Confirm Payment"}
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }








// "use client";

// import { useState } from "react";
// import axios from "axios";
// import { useSearchParams, useRouter } from "next/navigation";

// export default function PaymentPage() {
//   const [method, setMethod] = useState("");
//   const [formData, setFormData] = useState({
//     referenceId: "",
//   });
//   const [loading, setLoading] = useState(false);

//   const searchParams = useSearchParams();
//   const router = useRouter();

//   const bookingId = searchParams.get("bookingId");

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!bookingId) return alert("Booking ID missing!");
//     if (!method) return alert("Select a payment method");
//     if (!formData.referenceId) return alert("Please enter your payment reference ID");

//     setLoading(true);
//     try {
//       // Prepare payload
//       const payload = {
//         bookingId,
//         method,
//         referenceId: formData.referenceId,
//         bankDetails: {},
//       };

//       // Pre-fill bank/e-wallet details
//       if (method === "Bank Transfer") {
//         payload.bankDetails = {
//           bankName: "ABC Bank",
//           accountNumber: "1234567890",
//         };
//       } else if (method === "JazzCash / EasyPaisa") {
//         payload.bankDetails = {
//           name: "Travel Agency",
//           mobileNumber: "03001234567",
//         };
//       } else if (method === "Cash") {
//         payload.bankDetails = {
//           name: "Travel Agency",
//           phone: "03001234567",
//         };
//       }

//       await axios.post("http://localhost:5000/api/payments", payload, {
//         withCredentials: true,
//       });

//       alert("Payment info submitted successfully!");
//       router.push("/dashboard");
//     } catch (err) {
//       console.error("Payment error:", err);
//       alert("Failed to save payment. Check console.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const methodDetails = {
//     "Bank Transfer": {
//       title: "Bank Transfer Details",
//       description: "Transfer the amount to the following bank account:",
//       details: [
//         { label: "Bank Name", value: "ABC Bank" },
//         { label: "Account Number", value: "1234567890" },
//       ],
//     },
//     "JazzCash / EasyPaisa": {
//       title: "JazzCash / EasyPaisa Payment",
//       description: "Send the payment to this number:",
//       details: [
//         { label: "Account Name", value: "Travel Agency" },
//         { label: "Number", value: "03001234567" },
//       ],
//     },
//     Cash: {
//       title: "Cash Payment",
//       description: "Pay cash directly to our agent using the following contact:",
//       details: [
//         { label: "Agent Name", value: "Travel Agency" },
//         { label: "Phone", value: "03001234567" },
//       ],
//     },
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-20">
//       <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-2xl">
//         <h2 className="text-3xl font-bold text-[#0d4544] mb-6 text-center">
//           Complete Your Payment
//         </h2>

//         {/* Payment Method Selection */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
//           {Object.keys(methodDetails).map((m) => (
//             <button
//               key={m}
//               onClick={() => setMethod(m)}
//               className={`p-4 rounded-xl font-semibold border transition ${
//                 method === m
//                   ? "bg-[#0d4544] text-white border-[#0d4544]"
//                   : "bg-gray-50 border-gray-300 hover:bg-gray-100"
//               }`}
//             >
//               {m}
//             </button>
//           ))}
//         </div>

//         {/* Payment Details & Reference */}
//         {method && (
//           <div className="space-y-6">
//             <div className="bg-gray-50 p-6 rounded-xl shadow-inner">
//               <h3 className="text-xl font-semibold text-[#0d4544] mb-2">
//                 {methodDetails[method].title}
//               </h3>
//               <p className="text-gray-700 mb-4">{methodDetails[method].description}</p>
//               {methodDetails[method].details.map((d) => (
//                 <p key={d.label} className="text-gray-800">
//                   <span className="font-medium">{d.label}:</span> {d.value}
//                 </p>
//               ))}
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 type="text"
//                 name="referenceId"
//                 value={formData.referenceId}
//                 onChange={handleChange}
//                 placeholder="Enter your payment reference / transaction ID"
//                 className="w-full p-4 border border-gray-300 rounded-xl"
//                 required
//               />

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-[#0d4544] text-white py-3 rounded-xl font-semibold hover:bg-[#126162] transition"
//               >
//                 {loading ? "Processing..." : "Confirm Payment"}
//               </button>
//             </form>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



















// "use client";

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useSearchParams, useRouter } from "next/navigation";

// export default function PaymentPage() {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const bookingId = searchParams.get("bookingId");

//   const [method, setMethod] = useState("");
//   const [formData, setFormData] = useState({
//     bankPaymentId: "",
//     mobilePaymentId: "",
//     cashName: "",
//     cashPhone: "",
//   });
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (!bookingId) {
//       alert("Booking ID missing! Please complete booking first.");
//       router.push("/booking-form");
//     }
//   }, [bookingId, router]);

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!method) return alert("Select a payment method");

//     setLoading(true);
//     try {
//       let payload = { bookingId, method };

//       if (method === "Bank Transfer") {
//         payload.bankName = "ABC Bank";
//         payload.accountNumber = "1234567890";
//         payload.paymentId = formData.bankPaymentId;
//         if (!payload.paymentId) return alert("Enter your Bank Payment ID");
//       }

//       if (method === "JazzCash / EasyPaisa") {
//         payload.mobileNumber = "03001234567";
//         payload.paymentId = formData.mobilePaymentId;
//         if (!payload.paymentId) return alert("Enter your Mobile Payment ID");
//       }

//       if (method === "Cash") {
//         payload.name = formData.cashName;
//         payload.phone = formData.cashPhone;
//         if (!payload.name || !payload.phone) return alert("Enter your name and phone for Cash payment");
//       }

//       await axios.post("http://localhost:5000/api/payments", payload, { withCredentials: true });
//       alert("Payment saved successfully!");
//       router.push("/dashboard");
//     } catch (err) {
//       console.error("Payment error:", err.response?.data || err.message);
//       alert("Failed to save payment.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
//       <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Complete Your Payment</h2>

//         {/* Payment Methods */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
//           {["Bank Transfer", "JazzCash / EasyPaisa", "Cash"].map((m) => (
//             <button
//               key={m}
//               onClick={() => setMethod(m)}
//               className={`py-2 px-3 rounded-lg border font-medium ${
//                 method === m ? "border-black bg-gray-100" : "border-gray-300"
//               }`}
//             >
//               {m}
//             </button>
//           ))}
//         </div>

//         {/* Payment Form */}
//         {method && (
//           <form onSubmit={handleSubmit} className="space-y-4">
//             {method === "Bank Transfer" && (
//               <>
//                 <p className="text-sm text-gray-600">Pay to: ABC Bank | Account: 1234567890</p>
//                 <input
//                   type="text"
//                   name="bankPaymentId"
//                   value={formData.bankPaymentId}
//                   onChange={handleChange}
//                   placeholder="Enter your Bank Payment ID"
//                   className="w-full p-3 border rounded-lg"
//                   required
//                 />
//               </>
//             )}

//             {method === "JazzCash / EasyPaisa" && (
//               <>
//                 <p className="text-sm text-gray-600">Pay to: John Doe | Mobile: 03001234567</p>
//                 <input
//                   type="text"
//                   name="mobilePaymentId"
//                   value={formData.mobilePaymentId}
//                   onChange={handleChange}
//                   placeholder="Enter your Mobile Payment ID"
//                   className="w-full p-3 border rounded-lg"
//                   required
//                 />
//               </>
//             )}

//             {method === "Cash" && (
//               <>
//                 <input
//                   type="text"
//                   name="cashName"
//                   value={formData.cashName}
//                   onChange={handleChange}
//                   placeholder="Full Name"
//                   className="w-full p-3 border rounded-lg"
//                   required
//                 />
//                 <input
//                   type="tel"
//                   name="cashPhone"
//                   value={formData.cashPhone}
//                   onChange={handleChange}
//                   placeholder="Phone Number"
//                   className="w-full p-3 border rounded-lg"
//                   required
//                 />
//               </>
//             )}

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full py-3 border rounded-lg font-semibold"
//             >
//               {loading ? "Processing..." : "Confirm Payment"}
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }











// "use client";

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useSearchParams, useRouter } from "next/navigation";
// import { Banknote, CreditCard, Wallet } from "lucide-react";


// export default function PaymentPage() {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const bookingId = searchParams.get("bookingId");

//   const [method, setMethod] = useState("");
//   const [formData, setFormData] = useState({
//     bankPaymentId: "",
//     mobilePaymentId: "",
//     cashName: "",
//     cashPhone: "",
//   });
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (!bookingId) {
//       alert("Booking ID missing! Please complete booking first.");
//       router.push("/booking-form");
//     }
//   }, [bookingId, router]);

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!method) return alert("Select a payment method");

//     setLoading(true);
//     try {
//       let payload = { bookingId, method };

//       if (method === "Bank Transfer") {
//         payload.bankName = "ABC Bank";
//         payload.accountNumber = "1234567890";
//         payload.paymentId = formData.bankPaymentId;
//         if (!payload.paymentId) return alert("Enter your Bank Payment ID");
//       }

//       if (method === "JazzCash / EasyPaisa") {
//         payload.mobileNumber = "03001234567";
//         payload.paymentId = formData.mobilePaymentId;
//         if (!payload.paymentId) return alert("Enter your Mobile Payment ID");
//       }

//       if (method === "Cash") {
//         payload.name = formData.cashName;
//         payload.phone = formData.cashPhone;
//         if (!payload.name || !payload.phone) return alert("Enter your name and phone for Cash payment");
//       }

//       await axios.post("http://localhost:5000/api/payments", payload, { withCredentials: true });
//       alert("Payment saved successfully!");
//       router.push("/dashboard");
//     } catch (err) {
//       console.error("Payment error:", err.response?.data || err.message);
//       alert("Failed to save payment.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Payment method icons mapping
//   const paymentIcons = {
//     "Bank Transfer": <Bank className="w-5 h-5 mr-2" />,
//     "JazzCash / EasyPaisa": <CreditCard className="w-5 h-5 mr-2" />,
//     Cash: <Banknote className="w-5 h-5 mr-2" />,
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e0f7fa] to-[#ffffff] p-6">
//       <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
//         <h2 className="text-3xl font-bold mb-8 text-center text-[#0d4544]">Complete Your Payment</h2>

//         {/* Payment Methods */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//           {["Bank Transfer", "JazzCash / EasyPaisa", "Cash"].map((m) => (
//             <button
//               key={m}
//               onClick={() => setMethod(m)}
//               className={`flex items-center justify-center py-3 px-4 rounded-xl border transition-all duration-200 hover:scale-105
//                 ${method === m ? "border-[#0d4544] bg-[#e0f7fa]" : "border-gray-300 bg-white"}`}
//             >
//               {paymentIcons[m]}
//               <span className="font-medium">{m}</span>
//             </button>
//           ))}
//         </div>

//         {/* Payment Form */}
//         {method && (
//           <form onSubmit={handleSubmit} className="space-y-4">
//             {method === "Bank Transfer" && (
//               <>
//                 <p className="text-sm text-gray-600 mb-2">Pay to: <strong>ABC Bank</strong> | Account: 1234567890</p>
//                 <input
//                   type="text"
//                   name="bankPaymentId"
//                   value={formData.bankPaymentId}
//                   onChange={handleChange}
//                   placeholder="Enter your Bank Payment ID"
//                   className="w-full p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0d4544]"
//                   required
//                 />
//               </>
//             )}

//             {method === "JazzCash / EasyPaisa" && (
//               <>
//                 <p className="text-sm text-gray-600 mb-2">Pay to: <strong>John Doe</strong> | Mobile: 03001234567</p>
//                 <input
//                   type="text"
//                   name="mobilePaymentId"
//                   value={formData.mobilePaymentId}
//                   onChange={handleChange}
//                   placeholder="Enter your Mobile Payment ID"
//                   className="w-full p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0d4544]"
//                   required
//                 />
//               </>
//             )}

//             {method === "Cash" && (
//               <>
//                 <input
//                   type="text"
//                   name="cashName"
//                   value={formData.cashName}
//                   onChange={handleChange}
//                   placeholder="Full Name"
//                   className="w-full p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0d4544]"
//                   required
//                 />
//                 <input
//                   type="tel"
//                   name="cashPhone"
//                   value={formData.cashPhone}
//                   onChange={handleChange}
//                   placeholder="Phone Number"
//                   className="w-full p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0d4544]"
//                   required
//                 />
//               </>
//             )}

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full py-3 bg-[#0d4544] text-white font-semibold rounded-xl transition-all hover:bg-[#074c4b] disabled:opacity-50"
//             >
//               {loading ? "Processing..." : "Confirm Payment"}
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }











// "use client";

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useSearchParams, useRouter } from "next/navigation";
// import { Banknote, CreditCard, Wallet } from "lucide-react";

// export default function PaymentPage() {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const bookingId = searchParams.get("bookingId");

//   const [method, setMethod] = useState("");
//   const [formData, setFormData] = useState({
//     bankPaymentId: "",
//     mobilePaymentId: "",
//     cashName: "",
//     cashPhone: "",
//   });
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (!bookingId) {
//       alert("Booking ID missing! Please complete booking first.");
//       router.push("/booking-form");
//     }
//   }, [bookingId, router]);

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!method) return alert("Select a payment method");

//     setLoading(true);
//     try {
//       let payload = { bookingId, method };

//       if (method === "Bank Transfer") {
//         payload.bankName = "ABC Bank";
//         payload.accountNumber = "1234567890";
//         payload.paymentId = formData.bankPaymentId;
//         if (!payload.paymentId) return alert("Enter your Bank Payment ID");
//       }

//       if (method === "JazzCash / EasyPaisa") {
//         payload.mobileNumber = "03001234567";
//         payload.paymentId = formData.mobilePaymentId;
//         if (!payload.paymentId) return alert("Enter your Mobile Payment ID");
//       }

//       if (method === "Cash") {
//         payload.name = formData.cashName;
//         payload.phone = formData.cashPhone;
//         if (!payload.name || !payload.phone)
//           return alert("Enter your name and phone for Cash payment");
//       }

//       await axios.post("http://localhost:5000/api/payments", payload, {
//         withCredentials: true,
//       });
//       alert("Payment saved successfully!");
//       router.push("/dashboard");
//     } catch (err) {
//       console.error("Payment error:", err.response?.data || err.message);
//       alert("Failed to save payment.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ FIXED icons mapping
//   const paymentIcons = {
//     "Bank Transfer": <Wallet className="w-5 h-5 mr-2" />, // updated
//     "JazzCash / EasyPaisa": <CreditCard className="w-5 h-5 mr-2" />,
//     Cash: <Banknote className="w-5 h-5 mr-2" />,
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e0f7fa] to-[#ffffff] p-6">
//       <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
//         <h2 className="text-3xl font-bold mb-8 text-center text-[#0d4544]">
//           Complete Your Payment
//         </h2>

//         {/* Payment Methods */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//           {["Bank Transfer", "JazzCash / EasyPaisa", "Cash"].map((m) => (
//             <button
//               key={m}
//               onClick={() => setMethod(m)}
//               className={`flex items-center justify-center py-3 px-4 rounded-xl border transition-all duration-200 hover:scale-105
//                 ${
//                   method === m
//                     ? "border-[#0d4544] bg-[#e0f7fa]"
//                     : "border-gray-300 bg-white"
//                 }`}
//             >
//               {paymentIcons[m]}
//               <span className="font-medium">{m}</span>
//             </button>
//           ))}
//         </div>

//         {/* Payment Form */}
//         {method && (
//           <form onSubmit={handleSubmit} className="space-y-4">
//             {method === "Bank Transfer" && (
//               <>
//                 <p className="text-sm text-gray-600 mb-2">
//                   Pay to: <strong>ABC Bank</strong> | Account: 1234567890
//                 </p>
//                 <input
//                   type="text"
//                   name="bankPaymentId"
//                   value={formData.bankPaymentId}
//                   onChange={handleChange}
//                   placeholder="Enter your Bank Payment ID"
//                   className="w-full p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0d4544]"
//                   required
//                 />
//               </>
//             )}

//             {method === "JazzCash / EasyPaisa" && (
//               <>
//                 <p className="text-sm text-gray-600 mb-2">
//                   Pay to: <strong>John Doe</strong> | Mobile: 03001234567
//                 </p>
//                 <input
//                   type="text"
//                   name="mobilePaymentId"
//                   value={formData.mobilePaymentId}
//                   onChange={handleChange}
//                   placeholder="Enter your Mobile Payment ID"
//                   className="w-full p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0d4544]"
//                   required
//                 />
//               </>
//             )}

//             {method === "Cash" && (
//               <>
//                 <input
//                   type="text"
//                   name="cashName"
//                   value={formData.cashName}
//                   onChange={handleChange}
//                   placeholder="Full Name"
//                   className="w-full p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0d4544]"
//                   required
//                 />
//                 <input
//                   type="tel"
//                   name="cashPhone"
//                   value={formData.cashPhone}
//                   onChange={handleChange}
//                   placeholder="Phone Number"
//                   className="w-full p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0d4544]"
//                   required
//                 />
//               </>
//             )}

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full py-3 bg-[#0d4544] text-white font-semibold rounded-xl transition-all hover:bg-[#074c4b] disabled:opacity-50"
//             >
//               {loading ? "Processing..." : "Confirm Payment"}
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }






















"use client";

import { useState } from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { CheckCircle } from "lucide-react";

// Stripe public key
const stripePromise = loadStripe("pk_test_XXXXXXXXXXXXXXXXXXXX");

function StripeForm({ setCardNumber, setStripePaymentDone }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setLoading(true);
    setError(null);

    try {
      const res = await axios.post("/api/create-payment-intent", { amount: 5000 });
      const clientSecret = res.data.clientSecret;

      const card = elements.getElement(CardElement);
      const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card },
      });

      if (stripeError) throw stripeError;

      if (paymentIntent?.status === "succeeded") {
        setSuccess(true);
        setStripePaymentDone(true);
        setCardNumber("**** **** **** " + card._last4);
      }
    } catch (err) {
      setError(err.message || "Payment failed");
    } finally {
      setLoading(false);
    }
  };

  if (success)
    return (
      <p className="text-green-600 text-center font-semibold text-lg">
        Payment successful!
      </p>
    );

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
      <CardElement className="p-4 border rounded-lg bg-white shadow-sm" />
      {error && <p className="text-red-500">{error}</p>}
      <button
        type="submit"
        disabled={!stripe || loading}
        className="py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-600 transition"
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
}

export default function PaymentCard() {
  const [selectedMethod, setSelectedMethod] = useState("bank");
  const [mobileOption, setMobileOption] = useState("jazcash");
  const [bankTransactionId, setBankTransactionId] = useState("");
  const [mobileTransactionId, setMobileTransactionId] = useState("");
  const [screenshot, setScreenshot] = useState(null);
  const [cardNumber, setCardNumber] = useState("");
  const [stripePaymentDone, setStripePaymentDone] = useState(false);

  const handleConfirmPayment = async () => {
    try {
      const formData = new FormData();
      formData.append("method", selectedMethod);
      if (selectedMethod === "mobile") formData.append("mobileOption", mobileOption);
      if (selectedMethod === "bank") formData.append("bankTransactionId", bankTransactionId);
      if (selectedMethod === "mobile") formData.append("mobileTransactionId", mobileTransactionId);
      if (screenshot) formData.append("screenshot", screenshot);
      if (selectedMethod === "card") formData.append("cardNumber", cardNumber);

      const res = await axios.post("/api/save-payment", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.status === 200) alert("Payment details saved successfully!");
      else throw new Error("Failed to save payment");
    } catch (err) {
      alert("Error saving payment: " + (err.response?.data?.message || err.message));
    }
  };

  const paymentOptions = [
    { key: "bank", label: "Bank Transfer" },
    { key: "mobile", label: "Mobile Payment (JazzCash / EasyPaisa)" },
    { key: "cash", label: "Cash to Agent" },
    { key: "card", label: "Pay with Card" },
  ];

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-2xl rounded-2xl border mt-20 border-gray-200">
      <h2 className="text-3xl font-bold text-[#0d4544] mb-6 text-center">Payment Method</h2>

      {/* Payment Method Buttons */}
      <div className="flex flex-col gap-4">
        {paymentOptions.map((option) => (
          <button
            key={option.key}
            onClick={() => setSelectedMethod(option.key)}
            className={`flex items-center justify-between p-4 border rounded-xl transition shadow-sm hover:shadow-md ${
              selectedMethod === option.key
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300 hover:bg-gray-50"
            }`}
          >
            <span className="font-medium text-gray-800">{option.label}</span>
            {selectedMethod === option.key && <CheckCircle className="text-blue-500 w-5 h-5" />}
          </button>
        ))}
      </div>

      {/* Conditional Fields */}
      {selectedMethod === "bank" && (
        <div className="mt-5 flex flex-col gap-4">
          <input
            type="text"
            className="p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
            value="Demo Bank Ltd."
            readOnly
          />
          <input
            type="text"
            className="p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
            value="1234567890"
            readOnly
          />
          <input
            type="text"
            placeholder="Transaction ID"
            className="p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
            value={bankTransactionId}
            onChange={(e) => setBankTransactionId(e.target.value)}
          />
        </div>
      )}

      {selectedMethod === "mobile" && (
        <div className="mt-5 flex flex-col gap-4">
          <div className="flex gap-4">
            <button
              onClick={() => setMobileOption("jazcash")}
              className={`flex-1 p-3 border rounded-lg flex items-center justify-center gap-2 font-medium shadow-sm transition ${
                mobileOption === "jazcash" ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:bg-gray-50"
              }`}
            >
              <img src="/icons/jazzcash.svg" className="w-6 h-6" /> JazzCash
            </button>
            <button
              onClick={() => setMobileOption("easypaisa")}
              className={`flex-1 p-3 border rounded-lg flex items-center justify-center gap-2 font-medium shadow-sm transition ${
                mobileOption === "easypaisa" ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:bg-gray-50"
              }`}
            >
              <img src="/icons/easypaisa.svg" className="w-6 h-6" /> EasyPaisa
            </button>
          </div>

          <input
            type="text"
            className="p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
            value={mobileOption === "jazcash" ? "Ali Khan" : "Sara Ahmed"}
            readOnly
          />
          <input
            type="text"
            className="p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
            value={mobileOption === "jazcash" ? "03001234567" : "03101234567"}
            readOnly
          />
          <input
            type="file"
            className="p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setScreenshot(e.target.files[0])}
          />
          {screenshot && (
            <div className="mt-2">
              <p className="text-gray-600 text-sm">Preview:</p>
              <img
                src={URL.createObjectURL(screenshot)}
                alt="Screenshot Preview"
                className="w-32 h-20 object-cover border rounded-lg mt-1"
              />
            </div>
          )}
          <input
            type="text"
            placeholder="Transaction ID"
            className="p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
            value={mobileTransactionId}
            onChange={(e) => setMobileTransactionId(e.target.value)}
          />
        </div>
      )}

      {selectedMethod === "cash" && (
        <div className="mt-5 p-4 bg-gray-50 rounded-lg border border-gray-200 text-center text-gray-700 shadow-sm">
          <p className="font-medium">Pay cash to agent</p>
          <p className="text-gray-500 mt-1">Agent: Mr. Ahmed, 0300-1234567</p>
        </div>
      )}

      {selectedMethod === "card" && (
        <Elements stripe={stripePromise}>
          <StripeForm setCardNumber={setCardNumber} setStripePaymentDone={setStripePaymentDone} />
        </Elements>
      )}

      <button
        onClick={handleConfirmPayment}
        className="mt-8 w-full py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-600 transition shadow-md"
      >
        Confirm Payment
      </button>
    </div>
  );
}
