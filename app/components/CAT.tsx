"use client";
import { FileText, Settings, Wrench } from "lucide-react";

export default function CAT() {
  return (
    <section id="cat" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            The <span className="text-blue-600">CAT Framework</span>
          </h2>
          <p className="text-gray-500 mt-2">
            Our Proven Approach to{" "}
            <span className="text-blue-500">Learning Excellence</span>
          </p>
        </div>

        {/* Three circles connected */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
          {[
            {
              letter: "C",
              title: "Concept",
              desc: "Foundational knowledge for deep subject understanding.",
              icon: FileText,
            },
            {
              letter: "A",
              title: "Application",
              desc: "Practical implementation through real-world scenarios.",
              icon: Settings,
            },
            {
              letter: "T",
              title: "Tools",
              desc: "Resources and techniques for effective skill mastery.",
              icon: Wrench,
            },
          ].map((item, i) => (
            <div
              key={item.letter}
              className="flex flex-col md:flex-row items-center"
            >
              {i > 0 && (
                <div className="w-px h-8 md:w-16 md:h-px bg-blue-400 my-2 md:my-0" />
              )}
              <div className="w-52 h-52 rounded-full border-2 border-blue-500 bg-white flex flex-col items-center justify-center text-center p-6 shadow-md hover:shadow-lg transition-shadow">
                <item.icon
                  size={36}
                  className="mb-2 text-blue-600"
                  strokeWidth={1.5}
                />
                <h3 className="text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs mt-2 leading-tight">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
