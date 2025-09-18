

"use client";
import { useState } from "react";
import emailjs from "emailjs-com";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelers: "",
    date: "",
    notes: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const destinations = [
    "Karachi",
    "Lahore",
    "Islamabad",
    "Murree",
    "Naran Kaghan",
    "Fairy Meadows",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_s993iro", // ✅ Your Service ID
        "template_oohrog2", // ✅ Corrected Template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          destination: formData.destination,
          travelers: formData.travelers,
          date: formData.date,
          notes: formData.notes,
        },
        "EtsRQfGfe9OlOimtD" // ✅ Your Public Key
      );

      setShowModal(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        destination: "",
        travelers: "",
        date: "",
        notes: "",
      });
    } catch (err) {
      console.error("❌ Error submitting booking:", err.text || err);
      alert("Failed to send email. Please check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-20 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-2xl">
        <h2 className="text-4xl font-bold text-center text-[#0d4544] mb-8">
          Book Your Travel Experience
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="p-4 border border-gray-300 rounded-xl"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="p-4 border border-gray-300 rounded-xl"
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="p-4 border border-gray-300 rounded-xl"
              required
            />
            <select
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              className="p-4 border border-gray-300 rounded-xl"
              required
            >
              <option value="">Select Destination</option>
              {destinations.map((dest, index) => (
                <option key={index} value={dest}>
                  {dest}
                </option>
              ))}
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="number"
              name="travelers"
              value={formData.travelers}
              onChange={handleChange}
              placeholder="No. of Travelers"
              className="p-4 border border-gray-300 rounded-xl"
              required
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="p-4 border border-gray-300 rounded-xl"
              required
            />
          </div>

          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows="4"
            placeholder="Additional Notes (optional)"
            className="w-full p-4 border border-gray-300 rounded-xl"
          ></textarea>

          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-[#0d4544] text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-white transition"
            >
              {loading ? "Submitting..." : "Submit Booking"}
            </button>
          </div>
        </form>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full text-center">
            <h2 className="text-2xl font-bold text-[#0d4544] mb-2">
              Booking Confirmed
            </h2>
            <p className="text-gray-700">
              Thank you! Your booking details have been sent via email.
            </p>
            <button
              className="mt-6 px-6 py-2 bg-[#0d4544] text-white font-semibold rounded-xl  transition"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
