import Link from "next/link";
import Image from "next/image";
import { FaPhone } from "react-icons/fa6";
import { MdLocationPin, MdEmail } from "react-icons/md";
import { FaYoutube, FaWhatsapp, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1a1b3d] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#2a2b76]/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#cd553b]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="relative z-10">
        <div className="container mx-auto px-6 pt-12 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Logo & Description Section */}
            <div className="lg:col-span-4">
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/logo-vertical.png"
                  alt="White Bridge Education Logo"
                  width={160}
                  height={120}
                  draggable={false}
                  className="h-auto w-auto max-w-[140px]"
                />
              </Link>
              <p className="text-white/70 text-sm leading-relaxed max-w-xs">
                Connecting global universities with South Asia and the Middle
                East's brightest minds.
              </p>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h3 className="text-white font-semibold text-base mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-white/70 text-sm hover:text-white transition-colors duration-300 inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      Privacy Policy
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service"
                    className="text-white/70 text-sm hover:text-white transition-colors duration-300 inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      Services
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#research"
                    className="text-white/70 text-sm hover:text-white transition-colors duration-300 inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      Contact us
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#testimonials"
                    className="text-white/70 text-sm hover:text-white transition-colors duration-300 inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      Careers
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-white/70 text-sm hover:text-white transition-colors duration-300 inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      Contact
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Locations */}
            <div className="lg:col-span-3">
              <h3 className="text-white font-semibold text-base mb-4">
                Our Offices
              </h3>
              <div className="space-y-4">
                {/* Mumbai Office */}
                <Link
                  href="https://www.google.com/maps/place/Prasad+Chambers,+Tata+Rd+No+2,+Charni+Road+East,+Opera+House,+Girgaon,+Mumbai,+Maharashtra+400004/@18.9544015,72.8146768,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7ce103e6ec89d:0xe9100d13231f6ef6!8m2!3d18.9543964!4d72.8172517!16s%2Fg%2F12hnmggmy?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-xl border border-white/5 bg-white/0 p-3 hover:border-white/20 hover:bg-white/5 transition-colors"
                >
                  <div className="flex gap-2.5 items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-[#cd553b] to-[#a03d27] flex items-center justify-center shadow-lg">
                      <MdLocationPin className="text-white text-base" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white/90 font-medium text-sm mb-1 group-hover:text-white">
                        Mumbai, India
                      </p>
                      <p className="text-white/60 text-xs leading-relaxed group-hover:text-white/80">
                        Prasad Chambers #302,
                        <br />
                        Opera House, Mumbai - 400004
                      </p>
                    </div>
                  </div>
                </Link>

                {/* Dubai Office */}
                <Link
                  href="https://www.google.com/maps/search/Dubai+World+Trade+Centre,+Sheikh+Zayed+Road,+Dubai,+United+Arab+Emirates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-xl border border-white/5 bg-white/0 p-3 hover:border-white/20 hover:bg-white/5 transition-colors"
                >
                  <div className="flex gap-2.5 items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-[#cd553b] to-[#a03d27] flex items-center justify-center shadow-lg">
                      <MdLocationPin className="text-white text-base" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white/90 font-medium text-sm mb-1 group-hover:text-white">
                        Dubai, UAE
                      </p>
                      <p className="text-white/60 text-xs leading-relaxed group-hover:text-white/80">
                        World Trade Center Dubai,
                        <br />
                        Dubai, UAE
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Contact & Social */}
            <div className="lg:col-span-3">
              <h3 className="text-white font-semibold text-base mb-4">
                Get in Touch
              </h3>
              <div className="space-y-3 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-white text-xs" />
                  </div>
                  <p className="text-white/70 text-sm">+91 9136130742</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MdEmail className="text-white text-sm" />
                  </div>
                  <Link href="mailto:info@whitebridgeeducation.com">
                    <p className="text-white/70 text-sm hover:text-white transition-colors">
                      info@whitebridgeeducation.com
                    </p>
                  </Link>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <p className="text-white/90 font-medium text-sm mb-3">
                  Follow Us
                </p>
                <div className="flex items-center gap-2.5">
                  <Link
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-red-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <FaYoutube className="text-white text-base" />
                  </Link>
                  <Link
                    href="https://whatsapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-green-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <FaWhatsapp className="text-white text-base" />
                  </Link>
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <FaLinkedin className="text-white text-base" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright Bar */}
          <div className="mt-10 pt-6 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3">
              <p className="text-white/50 text-xs">
                © {new Date().getFullYear()} White Bridge Education. All rights
                reserved.
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href="/privacy"
                  className="text-white/50 text-xs hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-white/50 text-xs hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
