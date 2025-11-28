"use client";

import Link from "next/link";
import { useState, useEffect, useCallback, useRef } from "react";
import { FaRocket } from "react-icons/fa";

const SCROLL_THRESHOLD = 100;
const DEBOUNCE_DELAY = 10;
const BANNER_HEIGHT = 48;

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleScroll = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > SCROLL_THRESHOLD);
    }, DEBOUNCE_DELAY);
  }, []);

  useEffect(() => {
    if (isVisible) {
      document.body.style.paddingBottom = `${BANNER_HEIGHT}px`;
    } else {
      document.body.style.paddingBottom = "0px";
    }

    return () => {
      document.body.style.paddingBottom = "0px";
    };
  }, [isVisible]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [handleScroll]);

  return (
    <aside
      className={`fixed bottom-0 left-0 right-0 z-50 hidden transform transition-transform duration-300 ease-in-out sm:block ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      {/* Orange Banner */}
      <section className="bg-AccentColor-0 py-3 px-4 shadow-lg">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-3">
            {/* Rocket Icon */}
            <FaRocket className="text-yellow-400 text-xl flex-shrink-0 " />

            {/* Announcement Text */}
            <p className="text-white text-sm lg:text-base text-center">
              Announcing U.S. News & World Report&apos;s Strategic Investment in
              White Bridge Education.{" "}
              <Link
                href="/announcement"
                className="underline font-medium hover:text-yellow-400 transition-colors"
              >
                Learn More Here!
              </Link>
            </p>
          </div>
        </div>
      </section>
    </aside>
  );
}
