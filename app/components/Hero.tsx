"use client";

interface HeroProps {
  onOpenForm: () => void;
}

export default function Hero({ onOpenForm }: HeroProps) {
  return (
    <section
      id="home"
      className="pt-16 bg-gray-50 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="bg-blue-50 rounded-3xl overflow-hidden relative">
          <div className="flex flex-col-reverse lg:flex-row items-center">
            {/* Text Content */}
            <div className="flex-1 p-6 sm:p-8 lg:p-14">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                Next-Gen <span className="text-blue-600">Expertise</span>
                <br />
                For Your <span className="text-blue-600">Enterprise</span>
              </h1>
              <p className="text-gray-700 text-base sm:text-lg mb-6">
                Cultivate high-performance
                <br />
                teams through expert learning.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8">
                {[
                  "Tailored Solutions",
                  "Industry Insights",
                  "Expert Guidance",
                  "Measurable Impact",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-gray-700 text-xs sm:text-sm font-medium"
                  >
                    <span className="w-5 h-5 rounded-full border-2 border-green-500 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                    </span>
                    {item}
                  </div>
                ))}
              </div>
              <button
                onClick={onOpenForm}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-md"
              >
                Enquire Now
              </button>
            </div>

            {/* Hero Image */}
            <div className="flex-1 flex  justify-center items-center lg:items-end overflow-hidden px-4 sm:px-0">
              <img
                src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/corporate-big-hero-v4.webp"
                alt="Enterprise Team"
                className="w-full h-auto max-w-xs sm:max-w-md lg:max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
