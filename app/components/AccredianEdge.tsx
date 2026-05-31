"use client";
import { useState } from "react";
import {
  Lightbulb,
  Users,
  Settings,
  Globe,
  TrendingUp,
  Target,
  Package,
  Brain,
  BarChart3,
  Monitor,
  Briefcase,
  GraduationCap,
  Crown,
} from "lucide-react";

const edgeItems = [
  {
    top: true,
    title: "Tailored Solutions",
    desc: "Programs customized to your organization's goals and challenges.",
    icon: Lightbulb,
  },
  {
    top: false,
    title: "Expert Guidance",
    desc: "Learn from industry leaders with real-world success.",
    icon: Users,
  },
  {
    top: true,
    title: "Innovative Framework",
    desc: "Proprietary methods for impactful, application-driven results.",
    icon: Settings,
  },
  {
    top: false,
    title: "Advanced Technology",
    desc: "State-of-the-art LMS for seamless learning experiences.",
    icon: Globe,
  },
  {
    top: true,
    title: "Diverse Offerings",
    desc: "Courses across industries, skill levels, and emerging fields.",
    icon: TrendingUp,
  },
  {
    top: false,
    title: "Proven Impact",
    desc: "Trusted by leading organizations for measurable ROI.",
    icon: Target,
  },
  {
    top: true,
    title: "Flexible Delivery",
    desc: "Online and offline options tailored to your needs.",
    icon: Package,
  },
];

const domains = [
  { icon: Lightbulb, name: "Product & Innovation Hub" },
  { icon: Brain, name: "Gen-AI Mastery" },
  { icon: Users, name: "Leadership Elevation" },
  { icon: BarChart3, name: "Tech & Data Insights" },
  { icon: Settings, name: "Operations Excellence" },
  { icon: Globe, name: "Digital Enterprise" },
  { icon: TrendingUp, name: "Fintech Innovation Lab" },
];

export default function AccredianEdge() {
  const [courseIndex, setCourseIndex] = useState(0);

  const courseSegmentationCards = [
    {
      title: "Program Specific",
      image:
        "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/project-management-v2.webp",
    },
    {
      title: "Industry Specific",
      image:
        "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/digital-transformation-v2.webp",
    },
    {
      title: "Topic Specific",
      image:
        "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/data-science-v2.webp",
    },
    {
      title: "Level Specific",
      image:
        "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/senior-management-v2.webp",
    },
  ];

  return (
    <section id="accredian-edge" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            The <span className="text-blue-600">Accredian Edge</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mt-2">
            Key Aspects of{" "}
            <span className="text-blue-500">Our Strategic Training</span>
          </p>
        </div>

        {/* USP Image - Desktop
        <div className="w-full hidden sm:flex justify-center items-center mb-8">
          <img
            src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/accredian-edge-usp-v3.svg"
            alt="Our Solutions"
            className="w-[100%] h-auto rounded-lg"
          />
        </div> */}

        {/* USP Image - Mobile */}
        <div className="flex sm:hidden w-full justify-center items-center mb-8">
          <img
            src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/accredian-edge-usp-mobile.svg"
            alt="Our Solutions"
            className="w-[100%] h-auto rounded-lg"
          />
        </div>

        {/* Timeline flow */}
        <div className="hidden sm:block relative overflow-x-auto pb-4">
          <div className="flex items-center min-w-max mx-auto justify-center gap-0">
            {edgeItems.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center"
                style={{ width: "160px" }}
              >
                {/* Top label */}
                <div
                  className={`h-24 flex flex-col justify-end pb-2 text-center px-2 ${item.top ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                >
                  <p className="font-bold text-xs text-gray-900">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500 leading-tight mt-1">
                    {item.desc}
                  </p>
                </div>

                {/* Connector + Circle */}
                <div className="flex items-center w-full">
                  {i > 0 && (
                    <div className="flex-1 h-px bg-gray-300 border-dashed border-t border-gray-300" />
                  )}
                  <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl shadow-lg flex-shrink-0 z-10">
                    <item.icon size={24} strokeWidth={1.5} />
                  </div>
                  {i < edgeItems.length - 1 && (
                    <div className="flex-1 h-px bg-gray-300" />
                  )}
                </div>

                {/* Bottom label */}
                <div
                  className={`h-24 flex flex-col justify-start pt-2 text-center px-2 ${!item.top ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                >
                  <p className="font-bold text-xs text-gray-900">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500 leading-tight mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Domain Expertise */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Our <span className="text-blue-600">Domain Expertise</span>
            </h2>
            <p className="text-blue-500 text-sm sm:text-base mt-2">
              Specialized Programs{" "}
              <span className="text-gray-700">Designed to Fuel Innovation</span>
            </p>
          </div>

          <div className="grid grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
            {domains.map((d, idx) => (
              <div
                key={d.name}
                className={`border border-gray-200 rounded-xl p-4 sm:p-8 flex flex-col items-center gap-2 sm:gap-4 hover:shadow-lg transition-shadow cursor-pointer shadow-sm ${
                  idx === domains.length - 1 && domains.length % 3 === 1
                    ? "col-start-2"
                    : ""
                }`}
              >
                <d.icon
                  size={32}
                  className="sm:w-12 sm:h-12 w-8 h-8 text-blue-600"
                />
                <p className="text-gray-800 font-semibold text-center text-xs sm:text-sm">
                  {d.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Course Segmentation */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Tailored{" "}
              <span className="text-blue-600">Course Segmentation</span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mt-2">
              Explore <span className="text-blue-500">Custom-fit Courses</span>{" "}
              Designed to Address Every Professional Focus
            </p>
          </div>

          {/* Mobile Carousel */}
          <div className="sm:hidden">
            <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <img
                src={courseSegmentationCards[courseIndex].image}
                alt={courseSegmentationCards[courseIndex].title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="text-blue-600 font-bold text-lg text-center">
                  {courseSegmentationCards[courseIndex].title}
                </h3>
              </div>
            </div>
            {/* Carousel dots */}
            <div className="flex justify-center gap-2 mt-6">
              {courseSegmentationCards.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCourseIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === courseIndex ? "bg-blue-600 w-8" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courseSegmentationCards.map((card) => (
              <div
                key={card.title}
                className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 bg-white">
                  <h3 className="text-blue-600 font-bold text-lg text-center">
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Who Should Join */}
        <div className="mt-14 bg-blue-600 rounded-2xl p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/3">
              <p className="text-blue-200 text-sm font-medium mb-2">
                Who Should Join?
              </p>
              <h3 className="text-white text-3xl font-bold">
                Strategic Skill Enhancement
              </h3>
              <div className="w-[300px] justify-center hidden md:block">
                <img src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/imagehuman.png" alt="Human Illustration">
                </img>
              </div>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Monitor,
                  title: "Tech Professionals",
                  desc: "Enhance expertise, embrace tech, drive innovation.",
                },
                {
                  icon: Briefcase,
                  title: "Non-Tech Professionals",
                  desc: "Adapt digitally, collaborate in tech environments.",
                },
                {
                  icon: GraduationCap,
                  title: "Emerging Professionals",
                  desc: "Develop powerful skills for rapid career growth.",
                },
                {
                  icon: Crown,
                  title: "Senior Professionals",
                  desc: "Strengthen leadership, enhance strategic decisions.",
                },
              ].map((p) => (
                <div key={p.title} className="flex gap-4">
                  <p.icon
                    size={24}
                    className="text-white flex-shrink-0 mt-1"
                    strokeWidth={1.5}
                  />
                  <div>
                    <p className="text-white font-bold">{p.title}</p>
                    <p className="text-blue-200 text-sm">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
