"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 10000,
    suffix: "+",
    label: "Professionals Trained For Exceptional Career Success",
  },
  {
    value: 200,
    suffix: "+",
    label: "Sessions Delivered With Unmatched Learning Excellence",
  },
  {
    value: 5000,
    suffix: "+",
    label: "Active Learners Engaged In Dynamic Courses",
  },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  const display = count >= 1000 ? `${Math.floor(count / 1000)}K` : `${count}`;

  return (
    <span ref={ref} className="text-3xl font-bold text-blue-600">
      {display}
      {suffix}
    </span>
  );
}

const clients = [
  {
    name: "Reliance",
    logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/rel.png",
  },
  {
    name: "HCL",
    logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/hcl.png",
  },
  {
    name: "IBM",
    logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/ibm.png",
  },
  {
    name: "CRIF",
    logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/crif.png",
  },
  {
    name: "ADP",
    logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/adp.svg",
  },
  {
    name: "Bayer",
    logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/bayer.svg",
  },
];

export default function Stats() {
  return (
    <>
      <section id="stats" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Our <span className="text-blue-600">Track Record</span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mt-2">
              The Numbers Behind{" "}
              <span className="text-blue-500">Our Success</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`text-center py-8 ${i < 2 ? "md:border-r border-gray-200" : ""}`}
              >
                <div className="inline-block bg-blue-100 rounded-full px-6 py-2 mb-4">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-gray-700 font-medium max-w-xs mx-auto">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="clients" className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Our Proven <span className="text-blue-600">Partnerships</span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mt-2">
              Successful Collaborations With the{" "}
              <span className="text-blue-500">Industry&apos;s Best</span>
            </p>
          </div>

          <div className="w-full flex justify-center items-center mt-2">
            {/* Desktop Grid */}
            <ul className="hidden sm:grid grid-cols-3 md:grid-cols-6 xl:grid-cols-6 gap-6 md:gap-8 xl:gap-12 w-full">
              {clients.map((client) => (
                <li
                  key={client.name}
                  className="flex justify-center items-center sm:p-4  transition-all duration-300"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="object-contain w-14 h-14 sm:w-24 sm:h-24 md:w-24 md:h-24"
                  />
                </li>
              ))}
            </ul>

            {/* Mobile Marquee */}
            <div className="sm:hidden w-full">
              <div className="overflow-hidden relative w-full bg-white">
                <div className="flex animate-marquee-right gap-8 py-6">
                  {[...clients, ...clients, ...clients].map((client, idx) => (
                    <div
                      key={`${client.name}-${idx}`}
                      className="flex justify-center items-center flex-shrink-0"
                    >
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
