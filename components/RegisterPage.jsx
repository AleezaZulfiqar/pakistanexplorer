// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react";
// import Link from "next/link";

// const Register = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//     agreeToTerms: false,
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [errors, setErrors] = useState({});
//   const router = useRouter();

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
//     if (errors[name]) setErrors({ ...errors, [name]: "" });
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
//     if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
//     if (!formData.email.trim()) newErrors.email = "Email is required";
//     if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
//     if (!formData.password) newErrors.password = "Password is required";
//     if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
//     if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
//     if (!formData.agreeToTerms) newErrors.agreeToTerms = "You must agree to the terms";
//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newErrors = validateForm();
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     try {
//       setIsSubmitting(true);
//       const res = await fetch("http://localhost:5000/api/auth/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           email: formData.email,
//           password: formData.password,
//           firstName: formData.firstName,
//           lastName: formData.lastName,
//           phone: formData.phone,
//         }),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         alert("✅ Registration successful!");
//         router.push("/login"); // redirect to login after register
//       } else {
//         alert(`❌ ${data.message}`);
//       }
//     } catch (err) {
//       console.error(err);
//       alert("❌ Server error");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-stone-100 py-12 px-4">
//       <div className="max-w-2xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <span
//             className="text-4xl font-bold italic"
//             style={{ color: "#0d4544", fontFamily: "'Playfair Display', serif" }}
//           >
//             Trektrip's
//           </span>
//           <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Your Account</h1>
//           <p className="text-gray-600">Join our directory and start growing your business</p>
//         </div>

//         {/* Registration Form */}
//         <div className="bg-white rounded-lg shadow-lg p-8">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* First Name */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
//               <div className="relative">
//                 <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleInputChange}
//                   className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0d4544] focus:border-transparent ${
//                     errors.firstName ? "border-red-500" : "border-gray-300"
//                   }`}
//                   placeholder="Enter your first name"
//                 />
//               </div>
//               {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
//             </div>

//             {/* Last Name */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
//               <div className="relative">
//                 <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleInputChange}
//                   className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0d4544] focus:border-transparent ${
//                     errors.lastName ? "border-red-500" : "border-gray-300"
//                   }`}
//                   placeholder="Enter your last name"
//                 />
//               </div>
//               {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0d4544] focus:border-transparent ${
//                     errors.email ? "border-red-500" : "border-gray-300"
//                   }`}
//                   placeholder="Enter your email"
//                 />
//               </div>
//               {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
//             </div>

//             {/* Phone */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
//               <div className="relative">
//                 <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0d4544] focus:border-transparent ${
//                     errors.phone ? "border-red-500" : "border-gray-300"
//                   }`}
//                   placeholder="Enter your phone"
//                 />
//               </div>
//               {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
//             </div>

//             {/* Password */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Password *</label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   value={formData.password}
//                   onChange={handleInputChange}
//                   className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-[#0d4544] focus:border-transparent ${
//                     errors.password ? "border-red-500" : "border-gray-300"
//                   }`}
//                   placeholder="Enter your password"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                 >
//                   {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                 </button>
//               </div>
//               {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
//             </div>

//             {/* Confirm Password */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password *</label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type={showConfirmPassword ? "text" : "password"}
//                   name="confirmPassword"
//                   value={formData.confirmPassword}
//                   onChange={handleInputChange}
//                   className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-[#0d4544] focus:border-transparent ${
//                     errors.confirmPassword ? "border-red-500" : "border-gray-300"
//                   }`}
//                   placeholder="Confirm password"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                 >
//                   {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                 </button>
//               </div>
//               {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
//             </div>

//             {/* Terms */}
//             <div>
//               <label className="inline-flex items-center">
//                 <input
//                   type="checkbox"
//                   name="agreeToTerms"
//                   checked={formData.agreeToTerms}
//                   onChange={handleInputChange}
//                   className="h-4 w-4 text-[#0d4544] border-gray-300 rounded"
//                 />
//                 <span className="ml-2 text-gray-700 text-sm">
//                   I agree to the <a href="/" className="text-[#0d4544]">Terms of Service</a> and <a href="/" className="text-[#0d4544]">Privacy Policy</a>
//                 </span>
//               </label>
//               {errors.agreeToTerms && <p className="text-red-600 text-sm mt-1">{errors.agreeToTerms}</p>}
//             </div>

//             {/* Submit */}
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="w-full bg-[#0d4544] text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center"
//             >
//               {isSubmitting ? (
//                 <>
//                   <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
//                   Creating Account...
//                 </>
//               ) : (
//                 "Create Account"
//               )}
//             </button>
//           </form>

//           <div className="mt-6 text-center">
//             <p className="text-sm text-gray-600">
//               Already have an account? <Link href="/login" className="text-[#0d4544] font-medium">Sign in</Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

























// "use client";

// import { useState } from "react";
// import { Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// export default function RegisterPage() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//     agreeToTerms: false,
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [dashboardData, setDashboardData] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
//     if (errors[name]) setErrors({ ...errors, [name]: "" });
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
//     if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
//     if (!formData.email.trim()) newErrors.email = "Email is required";
//     if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
//     if (!formData.password) newErrors.password = "Password is required";
//     if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
//     if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
//     if (!formData.agreeToTerms) newErrors.agreeToTerms = "You must agree to the terms";
//     return newErrors;
//   };

//  const handleSubmit = async (e) => {
//   e.preventDefault();
//   const newErrors = validateForm();
//   if (Object.keys(newErrors).length > 0) {
//     setErrors(newErrors);
//     return;
//   }

//   try {
//     setIsSubmitting(true);

//     // 1️⃣ Register user
//     await axios.post("http://localhost:5000/api/auth/register", {
//       firstName: formData.firstName,
//       lastName: formData.lastName,
//       email: formData.email,
//       password: formData.password,
//     });

//     // 2️⃣ Login immediately
//     await axios.post(
//       "http://localhost:5000/api/auth/login",
//       { email: formData.email, password: formData.password },
//       { withCredentials: true }
//     );

//     // 3️⃣ Redirect to your dashboard folder/page.jsx
//     router.push("/dashboard"); // yeh tumhare dashboard ka route hai

//   } catch (err) {
//     const message = err.response?.data?.message || "Server error";
//     alert(`❌ ${message}`);
//   } finally {
//     setIsSubmitting(false);
//   }
// };

//   // ================= Register Form =================
//   return (
//     <div className="min-h-screen bg-stone-100 py-12 px-4">
//       <div className="max-w-2xl mx-auto">
//         <div className="text-center mb-8">
//           <span className="text-4xl font-bold italic" style={{ color: "#0d4544", fontFamily: "'Playfair Display', serif" }}>
//             Trektrip's
//           </span>
//           <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Your Account</h1>
//           <p className="text-gray-600">Join our directory and start growing your business</p>
//         </div>

//         <div className="bg-white rounded-lg shadow-lg p-8">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* First Name */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
//               <div className="relative">
//                 <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleInputChange}
//                   className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0d4544] focus:border-transparent ${
//                     errors.firstName ? "border-red-500" : "border-gray-300"
//                   }`}
//                   placeholder="Enter your first name"
//                 />
//               </div>
//               {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
//             </div>

//             {/* Last Name */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
//               <div className="relative">
//                 <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleInputChange}
//                   className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0d4544] focus:border-transparent ${
//                     errors.lastName ? "border-red-500" : "border-gray-300"
//                   }`}
//                   placeholder="Enter your last name"
//                 />
//               </div>
//               {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0d4544] focus:border-transparent ${
//                     errors.email ? "border-red-500" : "border-gray-300"
//                   }`}
//                   placeholder="Enter your email"
//                 />
//               </div>
//               {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
//             </div>

//             {/* Phone */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
//               <div className="relative">
//                 <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0d4544] focus:border-transparent ${
//                     errors.phone ? "border-red-500" : "border-gray-300"
//                   }`}
//                   placeholder="Enter your phone"
//                 />
//               </div>
//               {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
//             </div>

//             {/* Password */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Password *</label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   value={formData.password}
//                   onChange={handleInputChange}
//                   className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-[#0d4544] focus:border-transparent ${
//                     errors.password ? "border-red-500" : "border-gray-300"
//                   }`}
//                   placeholder="Enter your password"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                 >
//                   {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                 </button>
//               </div>
//               {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
//             </div>

//             {/* Confirm Password */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password *</label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type={showConfirmPassword ? "text" : "password"}
//                   name="confirmPassword"
//                   value={formData.confirmPassword}
//                   onChange={handleInputChange}
//                   className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-[#0d4544] focus:border-transparent ${
//                     errors.confirmPassword ? "border-red-500" : "border-gray-300"
//                   }`}
//                   placeholder="Confirm password"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                 >
//                   {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                 </button>
//               </div>
//               {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
//             </div>

//             {/* Terms */}
//             <div>
//               <label className="inline-flex items-center">
//                 <input
//                   type="checkbox"
//                   name="agreeToTerms"
//                   checked={formData.agreeToTerms}
//                   onChange={handleInputChange}
//                   className="h-4 w-4 text-[#0d4544] border-gray-300 rounded"
//                 />
//                 <span className="ml-2 text-gray-700 text-sm">
//                   I agree to the <a href="/" className="text-[#0d4544]">Terms of Service</a> and <a href="/" className="text-[#0d4544]">Privacy Policy</a>
//                 </span>
//               </label>
//               {errors.agreeToTerms && <p className="text-red-600 text-sm mt-1">{errors.agreeToTerms}</p>}
//             </div>

//             {/* Submit */}
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="w-full bg-[#0d4544] text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center"
//             >
//               {isSubmitting ? (
//                 <>
//                   <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
//                   Creating Account...
//                 </>
//               ) : (
//                 "Create Account"
//               )}
//             </button>
//           </form>
//            <div className="mt-6 text-center">
//            <p className="text-sm text-gray-600">
//             Already have an account? <Link href="/login" className="text-[#0d4544] font-medium">Sign in</Link>
//             </p>
//            </div>
//            </div>
//       </div>
//     </div>
//   );
// }
























// "use client";

// import { useState } from "react";
// import { Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// export default function RegisterPage() {
//   const router = useRouter(); 
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//     agreeToTerms: false,
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [errors, setErrors] = useState({});

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
//     if (errors[name]) setErrors({ ...errors, [name]: "" });
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
//     if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
//     if (!formData.email.trim()) newErrors.email = "Email is required";
//     if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
//     if (!formData.password) newErrors.password = "Password is required";
//     if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
//     if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
//     if (!formData.agreeToTerms) newErrors.agreeToTerms = "You must agree to the terms";
//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newErrors = validateForm();
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     try {
//       setIsSubmitting(true);

//       // ✅ Backend ko ab firstName aur lastName alag bhejna
//       await axios.post("http://localhost:5000/api/auth/signup", {
//         firstName: formData.firstName,
//         lastName: formData.lastName,
//         email: formData.email,
//         phone: formData.phone,
//         password: formData.password,
//       });

//       // ✅ Login immediately after register
//       await axios.post(
//         "http://localhost:5000/api/auth/login",
//         { email: formData.email, password: formData.password },
//         { withCredentials: true }
//       );

//       router.push("/"); // ya "/dashboard"
//     } catch (err) {
//       const message = err.response?.data?.error || "Server error";
//       alert(`❌ ${message}`);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // ================= Register Form =================
//   return (
//     <div className="min-h-screen bg-stone-100 py-12 px-4">
//       <div className="max-w-2xl mx-auto">
//         <div className="text-center mb-8">
//           <span
//             className="text-4xl font-bold italic"
//             style={{ color: "#0d4544", fontFamily: "'Playfair Display', serif" }}
//           >
//             Trektrip's
//           </span>
//           <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Your Account</h1>
//           <p className="text-gray-600">Join our directory and start growing your business</p>
//         </div>

//         <div className="bg-white rounded-lg shadow-lg p-8">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* First Name */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
//               <div className="relative">
//                 <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleInputChange}
//                   className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0d4544] focus:border-transparent ${
//                     errors.firstName ? "border-red-500" : "border-gray-300"
//                   }`}
//                   placeholder="Enter your first name"
//                 />
//               </div>
//               {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
//             </div>

//             {/* Last Name */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
//               <div className="relative">
//                 <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleInputChange}
//                   className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0d4544] focus:border-transparent ${
//                     errors.lastName ? "border-red-500" : "border-gray-300"
//                   }`}
//                   placeholder="Enter your last name"
//                 />
//               </div>
//               {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0d4544] focus:border-transparent ${
//                     errors.email ? "border-red-500" : "border-gray-300"
//                   }`}
//                   placeholder="Enter your email"
//                 />
//               </div>
//               {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
//             </div>

//             {/* Phone */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
//               <div className="relative">
//                 <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0d4544] focus:border-transparent ${
//                     errors.phone ? "border-red-500" : "border-gray-300"
//                   }`}
//                   placeholder="Enter your phone"
//                 />
//               </div>
//               {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
//             </div>

//             {/* Password */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Password *</label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   value={formData.password}
//                   onChange={handleInputChange}
//                   className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-[#0d4544] focus:border-transparent ${
//                     errors.password ? "border-red-500" : "border-gray-300"
//                   }`}
//                   placeholder="Enter your password"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                 >
//                   {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                 </button>
//               </div>
//               {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
//             </div>

//             {/* Confirm Password */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password *</label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type={showConfirmPassword ? "text" : "password"}
//                   name="confirmPassword"
//                   value={formData.confirmPassword}
//                   onChange={handleInputChange}
//                   className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-[#0d4544] focus:border-transparent ${
//                     errors.confirmPassword ? "border-red-500" : "border-gray-300"
//                   }`}
//                   placeholder="Confirm password"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                 >
//                   {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                 </button>
//               </div>
//               {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
//             </div>

//             {/* Terms */}
//             <div>
//               <label className="inline-flex items-center">
//                 <input
//                   type="checkbox"
//                   name="agreeToTerms"
//                   checked={formData.agreeToTerms}
//                   onChange={handleInputChange}
//                   className="h-4 w-4 text-[#0d4544] border-gray-300 rounded"
//                 />
//                 <span className="ml-2 text-gray-700 text-sm">
//                   I agree to the{" "}
//                   <a href="/" className="text-[#0d4544]">
//                     Terms of Service
//                   </a>{" "}
//                   and{" "}
//                   <a href="/" className="text-[#0d4544]">
//                     Privacy Policy
//                   </a>
//                 </span>
//               </label>
//               {errors.agreeToTerms && <p className="text-red-600 text-sm mt-1">{errors.agreeToTerms}</p>}
//             </div>

//             {/* Submit */}
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="w-full bg-[#0d4544] text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center"
//             >
//               {isSubmitting ? (
//                 <>
//                   <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
//                   Creating Account...
//                 </>
//               ) : (
//                 "Create Account"
//               )}
//             </button>
//           </form>
//           <div className="mt-6 text-center">
//             <p className="text-sm text-gray-600">
//               Already have an account?{" "}
//               <Link href="/login" className="text-[#0d4544] font-medium">
//                 Sign in
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }








































// "use client";

// import { useState } from "react";
// import { Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// export default function RegisterPage() {
//   const router = useRouter(); 
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//     agreeToTerms: false,
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [errors, setErrors] = useState({});

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
//     if (errors[name]) setErrors({ ...errors, [name]: "" });
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
//     if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
//     if (!formData.email.trim()) newErrors.email = "Email is required";
//     if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
//     if (!formData.password) newErrors.password = "Password is required";
//     if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
//     if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
//     if (!formData.agreeToTerms) newErrors.agreeToTerms = "You must agree to the terms";
//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newErrors = validateForm();
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     try {
//       setIsSubmitting(true);

//       // ✅ Backend ko ab firstName aur lastName alag bhejna
//       await axios.post("http://localhost:5000/api/auth/signup", {
//         firstName: formData.firstName,
//         lastName: formData.lastName,
//         email: formData.email,
//         phone: formData.phone,
//         password: formData.password,
//       });

//       // ✅ Login immediately after register
//       await axios.post(
//         "http://localhost:5000/api/auth/login",
//         { email: formData.email, password: formData.password },
//         { withCredentials: true }
//       );

//       router.push("/"); // ya "/dashboard"
//     } catch (err) {
//       const message = err.response?.data?.error || "Server error";
//       alert(`❌ ${message}`);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // ================= Register Form =================
//   return (
//     <div className="min-h-screen bg-stone-100 py-12 px-4">
//       <div className="max-w-2xl mx-auto">
//         <div className="text-center mb-8">
//           <span
//             className="text-4xl font-bold italic"
//             style={{ color: "#0d4544", fontFamily: "'Playfair Display', serif" }}
//           >
//             Trektrip's
//           </span>
//           <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Your Account</h1>
//           <p className="text-gray-600">Join our directory and start growing your business</p>
//         </div>

//         <div className="bg-white rounded-lg shadow-lg p-8">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* First Name */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
//               <div className="relative">
//                 <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleInputChange}
//                   className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0d4544] focus:border-transparent ${
//                     errors.firstName ? "border-red-500" : "border-gray-300"
//                   }`}
//                   placeholder="Enter your first name"
//                 />
//               </div>
//               {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
//             </div>

//             {/* Last Name */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
//               <div className="relative">
//                 <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleInputChange}
//                   className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0d4544] focus:border-transparent ${
//                     errors.lastName ? "border-red-500" : "border-gray-300"
//                   }`}
//                   placeholder="Enter your last name"
//                 />
//               </div>
//               {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0d4544] focus:border-transparent ${
//                     errors.email ? "border-red-500" : "border-gray-300"
//                   }`}
//                   placeholder="Enter your email"
//                 />
//               </div>
//               {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
//             </div>

//             {/* Phone */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
//               <div className="relative">
//                 <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0d4544] focus:border-transparent ${
//                     errors.phone ? "border-red-500" : "border-gray-300"
//                   }`}
//                   placeholder="Enter your phone"
//                 />
//               </div>
//               {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
//             </div>

//             {/* Password */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Password *</label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   value={formData.password}
//                   onChange={handleInputChange}
//                   className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-[#0d4544] focus:border-transparent ${
//                     errors.password ? "border-red-500" : "border-gray-300"
//                   }`}
//                   placeholder="Enter your password"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                 >
//                   {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                 </button>
//               </div>
//               {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
//             </div>

//             {/* Confirm Password */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password *</label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type={showConfirmPassword ? "text" : "password"}
//                   name="confirmPassword"
//                   value={formData.confirmPassword}
//                   onChange={handleInputChange}
//                   className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-[#0d4544] focus:border-transparent ${
//                     errors.confirmPassword ? "border-red-500" : "border-gray-300"
//                   }`}
//                   placeholder="Confirm password"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                 >
//                   {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                 </button>
//               </div>
//               {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
//             </div>

//             {/* Terms */}
//             <div>
//               <label className="inline-flex items-center">
//                 <input
//                   type="checkbox"
//                   name="agreeToTerms"
//                   checked={formData.agreeToTerms}
//                   onChange={handleInputChange}
//                   className="h-4 w-4 text-[#0d4544] border-gray-300 rounded"
//                 />
//                 <span className="ml-2 text-gray-700 text-sm">
//                   I agree to the{" "}
//                   <a href="/" className="text-[#0d4544]">
//                     Terms of Service
//                   </a>{" "}
//                   and{" "}
//                   <a href="/" className="text-[#0d4544]">
//                     Privacy Policy
//                   </a>
//                 </span>
//               </label>
//               {errors.agreeToTerms && <p className="text-red-600 text-sm mt-1">{errors.agreeToTerms}</p>}
//             </div>

//             {/* Submit */}
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="w-full bg-[#0d4544] text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center"
//             >
//               {isSubmitting ? (
//                 <>
//                   <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
//                   Creating Account...
//                 </>
//               ) : (
//                 "Create Account"
//               )}
//             </button>
//           </form>
//           <div className="mt-6 text-center">
//             <p className="text-sm text-gray-600">
//               Already have an account?{" "}
//               <Link href="/login" className="text-[#0d4544] font-medium">
//                 Sign in
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }








"use client";

import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "../app/context/AuthContext"; // ✅ Import AuthContext

export default function RegisterPage() {
  const router = useRouter(); 
  const { loginUser } = useAuth(); // ✅ Context loginUser
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    if (!formData.agreeToTerms) newErrors.agreeToTerms = "You must agree to the terms";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setIsSubmitting(true);

      // ✅ Signup
      const signupRes = await axios.post("http://localhost:5000/api/auth/signup", {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      });

      // ✅ Login immediately after signup
      const loginRes = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email: formData.email, password: formData.password },
        { withCredentials: true }
      );

      // ✅ Save token in localStorage
      localStorage.setItem("token", loginRes.data.token);

      // ✅ Update context -> header will auto update
      loginUser(loginRes.data.user, loginRes.data.token);

      // ✅ Redirect to dashboard
      router.push("/dashboard");
    } catch (err) {
      const message = err.response?.data?.error || "Server error";
      alert(`❌ ${message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <span
            className="text-4xl font-bold italic"
            style={{ color: "#0d4544", fontFamily: "'Playfair Display', serif" }}
          >
            Trektrip's
          </span>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Your Account</h1>
          <p className="text-gray-600">Join our directory and start growing your business</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0d4544] focus:border-transparent ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your first name"
                />
              </div>
              {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0d4544] focus:border-transparent ${
                    errors.lastName ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your last name"
                />
              </div>
              {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0d4544] focus:border-transparent ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0d4544] focus:border-transparent ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your phone"
                />
              </div>
              {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password *</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-[#0d4544] focus:border-transparent ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password *</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-[#0d4544] focus:border-transparent ${
                    errors.confirmPassword ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Confirm password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
            </div>

            {/* Terms */}
            <div>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-[#0d4544] border-gray-300 rounded"
                />
                <span className="ml-2 text-gray-700 text-sm">
                  I agree to the{" "}
                  <a href="/" className="text-[#0d4544]">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="/" className="text-[#0d4544]">
                    Privacy Policy
                  </a>
                </span>
              </label>
              {errors.agreeToTerms && <p className="text-red-600 text-sm mt-1">{errors.agreeToTerms}</p>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#0d4544] text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Creating Account...
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="text-[#0d4544] font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
