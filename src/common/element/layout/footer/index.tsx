import Link from "next/link";
import Image from "next/image";
import { FaPhone } from "react-icons/fa6";
import { MdLocationPin, MdEmail } from "react-icons/md";
import {
  FaYoutube,
  FaWhatsapp,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1a1b3d] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#2a2b76]/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#cd553b]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="relative z-10">
        <div className="container mx-auto px-6 pt-12 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
            {/* Brand */}
            <div className="lg:col-span-4">
              <Link href="/" className="inline-block mb-6">
                <Image
                  src="/logo-vertical.png"
                  alt="White Bridge Education Logo"
                  width={180}
                  height={120}
                  className="h-auto w-auto max-w-[180px]"
                />
              </Link>
              <p className="text-white/70 text-base leading-relaxed max-w-sm">
                Connecting Global Universities to South Asia and the Middle East
                - the world's fastest growing economies.
              </p>
              <div className="flex items-center gap-3 mt-6">
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#2a2b76] transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-red-600 transition-colors"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </Link>
                <Link
                  href="https://whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-green-500 transition-colors"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </Link>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-sky-500 transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3">
              <h3 className="text-white font-semibold text-lg mb-5">
                Quick Links
              </h3>
              <ul className="space-y-3 text-sm text-white/70">
                {[
                  { label: "Who we are", href: "/about" },
                  { label: "What we do", href: "/service" },
                  { label: "Our Universities", href: "/universities" },
                  { label: "Events, Tours & Fairs", href: "/events" },
                  { label: "Careers @ WBE", href: "/careers" },
                  { label: "Contact Us", href: "/contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-3">
              <h3 className="text-white font-semibold text-lg mb-5">
                Contact Us
              </h3>
              <div className="space-y-4 text-sm text-white/70">
                <div className="flex items-start gap-3">
                  <FaPhone className="text-white mt-1" />
                  <span>+91 9136130742</span>
                </div>
                <div className="flex items-start gap-3">
                  <MdEmail className="text-white mt-1" />
                  <Link
                    href="mailto:info@whitebridgeeducation.com"
                    className="hover:text-white transition-colors"
                  >
                    info@whitebridgeeducation.com
                  </Link>
                </div>
                <Link
                  href="https://www.google.com/maps/place/Prasad+Chambers,+Tata+Rd+No+2,+Charni+Road+East,+Opera+House,+Girgaon,+Mumbai,+Maharashtra+400004/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-white transition-colors"
                >
                  <MdLocationPin className="text-white mt-1" />
                  <span>
                    Prasad Chambers #302,
                    <br />
                    Opera House, Mumbai - 400004
                  </span>
                </Link>
                <Link
                  href="https://www.google.com/maps/search/World+Trade+Center+Dubai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-white transition-colors"
                >
                  <MdLocationPin className="text-white mt-1" />
                  <span>
                    World Trade Center Dubai,
                    <br />
                    Dubai, UAE
                  </span>
                </Link>
              </div>
            </div>

            {/* Legal */}
            <div className="lg:col-span-2">
              <h3 className="text-white font-semibold text-lg mb-5">Legal</h3>
              <ul className="space-y-3 text-sm text-white/70">
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
            <p>Copyright © 2025 White Bridge Education. All rights reserved.</p>
            <p className="text-white font-medium">
              Built on Ethics. Powered by Data. Committed to ROI.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
