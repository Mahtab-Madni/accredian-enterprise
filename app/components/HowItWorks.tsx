"use client";
import { TrendingUp, Monitor, Video } from "lucide-react";

const steps = [
  {
    num: "1",
    icon: TrendingUp,
    title: "Skill Gap Analysis",
    desc: "Assess team skill gaps and developmental needs.",
  },
  {
    num: "2",
    icon: Monitor,
    title: "Customized Training Plan",
    desc: "Create a tailored roadmap addressing organizational goals.",
  },
  {
    num: "3",
    icon: Video,
    title: "Flexible Program Delivery",
    desc: "Deliver adaptable programs aligned with industry and organizational needs.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            How We <span className="text-blue-600">Deliver Results</span> That
            Matter?
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mt-2">
            A Structured Three-Step Approach to{" "}
            <span className="text-blue-500">Skill Development</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative bg-blue-50 rounded-2xl p-8 border-l-4 border-blue-600 hover:shadow-md transition-shadow"
            >
              <span className="absolute top-4 left-4 text-xs font-bold text-gray-400 border border-gray-300 rounded-full w-6 h-6 flex items-center justify-center">
                {step.num}
              </span>
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl mb-4 mx-auto mt-4">
                <step.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-gray-900 font-bold text-lg text-center mb-2">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm text-center">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
