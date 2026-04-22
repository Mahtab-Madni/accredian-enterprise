"use client";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

interface FooterProps {
  onOpenForm: () => void;
}

export default function Footer({ onOpenForm }: FooterProps) {
  return (
    <footer className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-start py-8">
          {/* Logo & Social */}
          <div>
            <div className="flex flex-col leading-tight mb-4">
              <span className="text-blue-600 font-bold text-4xl tracking-tight">
                accredian
              </span>
              <span className="text-gray-400 text-[10px] tracking-widest">
                credentials that matter
              </span>
            </div>
            <div className="flex gap-4 text-gray-700">
              {[
                { icon: FaFacebook, label: "Facebook" },
                { icon: FaLinkedin, label: "LinkedIn" },
                { icon: FaTwitter, label: "Twitter" },
                { icon: FaInstagram, label: "Instagram" },
                { icon: FaYoutube, label: "YouTube" },
              ].map(({ icon: Icon, label, }) => (
                <a
                  key={label}
                  href="#"
                  className="hover:text-blue-600 transition-colors"
                  title={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col items-end gap-2">
            <button
              onClick={onOpenForm}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors"
            >
              Enquire Now
            </button>
            <span className="text-gray-400 text-xs">
              Speak with our Advisor
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200"></div>

        {/* Middle Section: Links and Contact */}
        <div className="flex justify-between py-8">
          {/* Quick links */}
          <div>
            <h4 className="font-bold text-gray-800 mb-3">Accredian</h4>
            <ul className="space-y-2">
              {["About", "Blog", "Why Accredian"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-600 text-sm hover:text-blue-600 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-gray-800 mb-3">Contact Us</h4>
            <p className="text-gray-600 text-sm mb-2">
              Email us:{" "}
              <a
                href="mailto:enterprise@accredian.com"
                className="text-blue-600 hover:underline"
              >
                enterprise@accredian.com
              </a>
            </p>
            <p className="text-gray-600 text-sm">
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,
              Gurugram, Haryana
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200"></div>

        {/* Bottom Section: Copyright */}
        <div className="text-center py-6">
          <p className="text-gray-700 text-sm">
            © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
            Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
