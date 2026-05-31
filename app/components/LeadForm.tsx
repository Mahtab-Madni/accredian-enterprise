"use client";
import { useState } from "react";
import { CheckCircle2, X } from "lucide-react";

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadFormModal({ isOpen, onClose }: LeadFormModalProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    domain: "",
    candidates: "",
    delivery: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.company) return;
    setStatus("loading");
    try {
      // Add +91 prefix to phone if it exists
      const phoneWithCountryCode = form.phone ? `+91${form.phone}` : "";

      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          phone: phoneWithCountryCode,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({
          name: "",
          email: "",
          company: "",
          phone: "",
          domain: "",
          candidates: "",
          delivery: "",
        });
        setTimeout(() => {
          onClose();
          setStatus("idle");
        }, 2000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/10 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[95vh] overflow-hidden flex flex-col md:flex-row shadow-2xl">
        {/* Left side - Image */}
        <div className="hidden md:block md:w-5/12 bg-gray-100 md:max-h-[95vh]">
          <img
            src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/business-v2.webp"
            alt="Quote Request"
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>

        {/* Right side - Form */}
        <div className="w-full md:w-7/12 p-8 sm:p-10 overflow-y-auto max-h-[95vh]">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Enquire Now</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={28} />
            </button>
          </div>

          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-12">
              <CheckCircle2
                size={64}
                className="text-green-600 mb-4"
                strokeWidth={1.5}
              />
              <h3 className="text-green-800 text-xl font-bold">Thank you!</h3>
              <p className="text-green-700 mt-2 text-center">
                We&apos;ll be in touch with you shortly.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Name */}
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter Name"
                className="w-full bg-transparent border-b border-gray-300 px-0 py-3 text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              />

              {/* Email */}
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter Email"
                className="w-full bg-transparent border-b border-gray-300 px-0 py-3 text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              />

              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 border-b border-gray-300 pb-3 flex-shrink-0">
                  <img
                    src="https://flagcdn.com/w20/in.png"
                    alt="India flag"
                    className="w-5 h-3"
                  />
                  <span className="text-sm text-gray-700">+91</span>
                </div>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="flex-1 bg-transparent border-b border-gray-300 px-0 py-3 text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Company */}
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Enter company name"
                className="w-full bg-transparent border-b border-gray-300 px-0 py-3 text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              />

              {/* Domain */}
              <select
                name="domain"
                value={form.domain}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-300 px-0 py-3 text-sm text-gray-700 focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer"
              >
                <option value="">Select Domain</option>
                <option value="Product & Innovation Hub">
                  Product & Innovation Hub
                </option>
                <option value="Gen-AI Mastery">Gen-AI Mastery</option>
                <option value="Leadership Elevation">
                  Leadership Elevation
                </option>
                <option value="Tech & Data Insights">
                  Tech & Data Insights
                </option>
                <option value="Operations Excellence">
                  Operations Excellence
                </option>
                <option value="Digital Enterprise">Digital Enterprise</option>
                <option value="Fintech Innovation Lab">
                  Fintech Innovation Lab
                </option>
              </select>

              {/* Candidates */}
              <input
                name="candidates"
                value={form.candidates}
                onChange={handleChange}
                placeholder="Enter No. of candidates"
                className="w-full bg-transparent border-b border-gray-300 px-0 py-3 text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              />

              {/* Mode of Delivery */}
              <select
                name="delivery"
                value={form.delivery}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-300 px-0 py-3 text-sm text-gray-700 focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer"
              >
                <option value="">Select Mode of Delivery</option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
                <option value="Hybrid">Hybrid</option>
              </select>

              {/* Location Example */}
              <p className="text-xs text-gray-400 pt-2">
                Eg: Gurgoan, Delhi, India
              </p>

              {status === "error" && (
                <p className="text-red-500 text-sm">
                  Something went wrong. Please try again.
                </p>
              )}

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={status === "loading"}
                className="w-full mt-6 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-semibold py-3 rounded-lg transition-colors"
              >
                {status === "loading" ? "Submitting..." : "Submit"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
