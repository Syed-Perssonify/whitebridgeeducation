"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 size-12 rounded-full bg-PrimaryColor-0 flex items-center justify-center text-white transition-all duration-300 hover:bg-HeadingColor-0"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}
