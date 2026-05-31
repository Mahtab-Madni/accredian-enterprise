"use client";
import { useState } from "react";

const faqCategories = {
  "About the Course": [
    {
      q: "What types of corporate training programs does Accredian offer?",
      a: "Accredian provides industry-specific, customizable training programs tailored to meet your organization's unique needs, covering domains like leadership, tech, data, and fintech.",
    },
    {
      q: "What domain specializations are available?",
      a: "We offer specializations in Product & Innovation, Gen-AI Mastery, Leadership Elevation, Tech & Data Insights, Operations Excellence, Digital Enterprise, and Fintech Innovation.",
    },
    {
      q: "Can courses be customized for our industry?",
      a: "Yes, all our programs can be tailored to your industry, company culture, and specific learning objectives to ensure maximum relevance and impact.",
    },
  ],
  "About the Delivery": [
    {
      q: "What delivery formats are available?",
      a: "We offer both online and offline delivery options including live virtual sessions, on-site workshops, blended learning, and self-paced modules through our LMS.",
    },
    {
      q: "How long does a typical training program last?",
      a: "Program durations vary from 1-day workshops to multi-month certificate programs, depending on the scope and depth of training required.",
    },
  ],
  Miscellaneous: [
    {
      q: "How do I get started with Accredian Enterprise?",
      a: "Simply click 'Enquire Now' and our team will schedule a consultation to understand your needs and propose the best training solution.",
    },
    {
      q: "Do you provide post-training support?",
      a: "Yes, we provide follow-up assessments, coaching sessions, and access to our resource library to ensure lasting impact from our programs.",
    },
  ],
};

interface FAQsProps {
  onOpenForm: () => void;
}

export default function FAQs({ onOpenForm }: FAQsProps) {
  const [activeCategory, setActiveCategory] = useState("About the Course");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const currentFaqs =
    faqCategories[activeCategory as keyof typeof faqCategories];

  return (
    <section id="faqs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Category tabs */}
          <div className="lg:w-64 flex-shrink-0 space-y-3">
            {Object.keys(faqCategories).map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(0);
                }}
                className={`w-full text-left px-6 py-4 rounded-xl font-medium transition-all ${
                  activeCategory === cat
                    ? "text-blue-600 border border-blue-200 bg-white shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ accordion */}
          <div className="flex-1 space-y-3">
            {currentFaqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span
                    className={`font-medium text-sm ${openIndex === i ? "text-blue-600" : "text-gray-800"}`}
                  >
                    {faq.q}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ml-4 ${openIndex === i ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 text-sm">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Enquire Button - Centered on full screen */}
        <div className="flex justify-center mt-12">
          <button
            onClick={onOpenForm}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  );
}
