"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaRocket } from "react-icons/fa";

export default function Header() {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Offcanvas Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOffcanvasOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 h-full overflow-y-auto">
          {/* Close Button - Animated X */}
          <button
            onClick={toggleOffcanvas}
            className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center group z-10"
            aria-label="Close menu"
          >
            <div className="relative w-6 h-6">
              <span className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-700 transform -translate-y-1/2 rotate-45 group-hover:bg-black transition-colors"></span>
              <span className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-700 transform -translate-y-1/2 -rotate-45 group-hover:bg-black transition-colors"></span>
            </div>
          </button>

          {/* Logo - Fixed to prevent repetition */}

          {/* Mobile Navigation Menu */}
          <nav className="mb-6">
            <ul className="space-y-1">
              <li>
                <Link
                  href="/about"
                  onClick={toggleOffcanvas}
                  className={`block py-3 px-4 rounded-lg transition-all ${
                    pathname === "/about"
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-gray-700 hover:bg-gray-50 hover:text-blue-500"
                  }`}
                >
                  Who we are
                </Link>
              </li>
              <li>
                <Link
                  href="/service"
                  onClick={toggleOffcanvas}
                  className={`block py-3 px-4 rounded-lg transition-all ${
                    pathname === "/service"
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-gray-700 hover:bg-gray-50 hover:text-blue-500"
                  }`}
                >
                  What we do
                </Link>
              </li>
              <li>
                <Link
                  href="/universities"
                  onClick={toggleOffcanvas}
                  className={`block py-3 px-4 rounded-lg transition-all ${
                    pathname === "/universities"
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-gray-700 hover:bg-gray-50 hover:text-blue-500"
                  }`}
                >
                  Our Universities
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  onClick={toggleOffcanvas}
                  className={`block py-3 px-4 rounded-lg transition-all ${
                    pathname === "/events"
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-gray-700 hover:bg-gray-50 hover:text-blue-500"
                  }`}
                >
                  Events, Tours & Fairs
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  onClick={toggleOffcanvas}
                  className={`block py-3 px-4 rounded-lg transition-all ${
                    pathname === "/careers"
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-gray-700 hover:bg-gray-50 hover:text-blue-500"
                  }`}
                >
                  Careers @ WBE
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={toggleOffcanvas}
                  className={`block py-3 px-4 rounded-lg transition-all ${
                    pathname === "/contact"
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-gray-700 hover:bg-gray-50 hover:text-blue-500"
                  }`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isOffcanvasOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={toggleOffcanvas}
        />
      )}

      {/* Main Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1b3d] shadow-md">
        <div className="relative">
          {/* Announcement Banner - Below header, hides on scroll */}
          {!isScrolled && (
            <div className="absolute left-0 right-0 top-full z-[60] bg-AccentColor-0">
              <div className="container mx-auto px-4">
                <div className="flex items-center justify-center gap-3 py-3">
                  <FaRocket className="text-yellow-400 text-xl flex-shrink-0" />
                  <p className="text-white text-sm lg:text-base text-center">
                    Announcing U.S. News &amp; World Report&apos;s Strategic
                    Investment in White Bridge Education.{" "}
                    <Link
                      href="/announcement"
                      className="underline font-medium hover:text-yellow-400 transition-colors"
                    >
                      Learn More Here!
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          )}
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-1 lg:py-1.5 lg:grid lg:grid-cols-12 lg:gap-4">
              {/* Logo */}
              <div className="lg:col-span-2 flex items-center">
                <Link href="/" className="block">
                  <Image
                    src="/logo-vertical.png"
                    alt="White Bridge Education Logo"
                    width={180}
                    height={120}
                    draggable={false}
                    className="h-auto w-auto max-w-[180px]"
                    priority
                  />
                </Link>
              </div>

              {/* Desktop Menu */}
              <nav className="lg:col-span-10 hidden lg:flex lg:items-center lg:justify-end">
                <ul className="flex items-center justify-end gap-4 lg:gap-6">
                  <li className="group">
                    <Link
                      href="/about"
                      className={`relative py-1 inline-block text-sm lg:text-base font-bold transition-colors ${
                        pathname === "/about"
                          ? "text-white"
                          : "text-white hover:text-[#cd553b]"
                      }`}
                    >
                      Who we are
                      <span
                        className={`absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300 ${
                          pathname === "/about"
                            ? "bg-white scale-x-100"
                            : "bg-[#cd553b] scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      href="/service"
                      className={`relative py-1 inline-block text-sm lg:text-base font-bold transition-colors ${
                        pathname === "/service"
                          ? "text-white"
                          : "text-white hover:text-[#cd553b]"
                      }`}
                    >
                      What we do
                      <span
                        className={`absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300 ${
                          pathname === "/service"
                            ? "bg-white scale-x-100"
                            : "bg-[#cd553b] scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      href="/universities"
                      className={`relative py-1 inline-block text-sm lg:text-base font-bold transition-colors ${
                        pathname === "/universities"
                          ? "text-white"
                          : "text-white hover:text-[#cd553b]"
                      }`}
                    >
                      Our Universities
                      <span
                        className={`absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300 ${
                          pathname === "/universities"
                            ? "bg-white scale-x-100"
                            : "bg-[#cd553b] scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      href="/events"
                      className={`relative py-1 inline-block text-sm lg:text-base font-bold transition-colors ${
                        pathname === "/events"
                          ? "text-white"
                          : "text-white hover:text-[#cd553b]"
                      }`}
                    >
                      Events, Tours & Fairs
                      <span
                        className={`absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300 ${
                          pathname === "/events"
                            ? "bg-white scale-x-100"
                            : "bg-[#cd553b] scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      href="/careers"
                      className={`relative py-1 inline-block text-sm lg:text-base font-bold transition-colors ${
                        pathname === "/careers"
                          ? "text-white"
                          : "text-white hover:text-[#cd553b]"
                      }`}
                    >
                      Careers @ WBE
                      <span
                        className={`absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300 ${
                          pathname === "/careers"
                            ? "bg-white scale-x-100"
                            : "bg-[#cd553b] scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      href="/contact"
                      className={`relative py-1 inline-block text-sm lg:text-base font-bold transition-colors ${
                        pathname === "/contact"
                          ? "text-white"
                          : "text-white hover:text-[#cd553b]"
                      }`}
                    >
                      Contact Us
                      <span
                        className={`absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300 ${
                          pathname === "/contact"
                            ? "bg-white scale-x-100"
                            : "bg-[#cd553b] scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Mobile Hamburger Button */}
              <div className="lg:hidden flex items-center">
                <button
                  onClick={toggleOffcanvas}
                  className="w-8 h-8 flex flex-col items-center justify-center gap-1.5 group"
                  aria-label="Toggle menu"
                >
                  <span
                    className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                      isOffcanvasOpen
                        ? "rotate-45 translate-y-2"
                        : "rotate-0 translate-y-0"
                    }`}
                  ></span>
                  <span
                    className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                      isOffcanvasOpen ? "opacity-0" : "opacity-100"
                    }`}
                  ></span>
                  <span
                    className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                      isOffcanvasOpen
                        ? "-rotate-45 -translate-y-2"
                        : "rotate-0 translate-y-0"
                    }`}
                  ></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
