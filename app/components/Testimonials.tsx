"use client";
import { useState } from "react";

const testimonials = [
  [
    {
      logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/adp.svg",
      logoColor: "#CC0000",
      text: "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
    },
    {
      logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/bayer.svg",
      logoColor: "#10A0E3",
      text: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
    },
  ],
  [
    {
      logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/hcl.png",
      logoColor: "#0066CC",
      text: "The training programs designed by Accredian have transformed our team's capabilities. Their innovative approach and expert guidance have delivered measurable results across all departments.",
    },
    {
      logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/ibm.png",
      logoColor: "#1F70C1",
      text: "Working with Accredian has been a game-changer for our organization. Their tailored solutions and deep industry expertise have helped us upskill our workforce effectively.",
    },
  ],
];

interface TestimonialsProps {
  onOpenForm: () => void;
}

export default function Testimonials({ onOpenForm }: TestimonialsProps) {
  const [slide, setSlide] = useState(0);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Testimonials from{" "}
            <span className="text-blue-600">Our Partners</span>
          </h2>
          <p className="text-gray-500 mt-2">
            What <span className="text-blue-500">Our Clients</span> Are Saying
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials[slide].map((t, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-shadow"
            >
              <div
                className="font-bold text-lg mb-4"
                style={{ color: t.logoColor }}
              >
                <img
                  src={t.logo}
                  alt="Client Logo"
                  className="h-14 object-contain inline-block mr-2"
                />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                &quot;{t.text}&quot;
              </p>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${slide === i ? "bg-blue-600" : "bg-gray-300"}`}
            />
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-14 bg-blue-600 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center text-white text-2xl">
              🎧
            </div>
            <div>
              <h3 className="text-white text-xl font-bold">
                Want to Learn More About Our Training Solutions?
              </h3>
              <p className="text-blue-200 text-sm">
                Get Expert Guidance for Your Team&apos;s Success!
              </p>
            </div>
          </div>
          <button
            onClick={onOpenForm}
            className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-2 flex-shrink-0"
          >
            Contact Us <span>›</span>
          </button>
        </div>
      </div>
    </section>
  );
}
