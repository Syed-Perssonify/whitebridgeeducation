"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaRegThumbsUp,
  FaThumbsUp,
  FaGlobe,
  FaAward,
  FaNetworkWired,
  FaLightbulb,
  FaGraduationCap,
  FaShieldAlt,
} from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { useRef, useEffect, useState } from "react";

export default function About() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let scrollAmount = 0;
    const scrollSpeed = 0.5; // pixels per frame (slower for smoother scroll)
    const cardWidth = 420; // Approximate card width with gap

    const autoScroll = () => {
      if (isPaused) {
        animationFrameId = requestAnimationFrame(autoScroll);
        return;
      }

      const maxScroll = (container.scrollWidth - container.clientWidth) / 2; // Half because we duplicated

      if (scrollAmount >= maxScroll) {
        // Reset to start for seamless infinite scroll
        scrollAmount = 0;
        container.scrollLeft = 0;
      } else {
        scrollAmount += scrollSpeed;
        container.scrollLeft = scrollAmount;
      }

      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPaused]);

  const pillars = [
    {
      id: 1,
      image: "/cu-line.png",
      icon: FaGlobe,
      title: "Global Vision",
      description:
        "With nearly two decades of experience, our globally-minded leadership team, comprising dual-nationality professionals, brings unmatched expertise in international education. We excel in contextualizing and guiding recruitment strategies for universities targeting South Asia and the Middle East.",
    },
    {
      id: 2,
      image: "/cu-line.png",
      icon: FaAward,
      title: "Pursuit of Excellence",
      description:
        "Our unwavering commitment to quality and excellence has established us as a trusted partner for global organizations seeking entry into South Asia and the Middle East's education sectors.",
    },
    {
      id: 3,
      image: "/cu-line.png",
      icon: FaNetworkWired,
      title: "Extensive Networks",
      description:
        "Since 2011, we've counseled over 10,000 applicants across all education levels and partnered with 150+ enrichment providers. This extensive network has equipped us with deep market insights and a diverse educational ecosystem.",
    },
    {
      id: 4,
      image: "/cu-line.png",
      icon: FaLightbulb,
      title: "Thought Leadership",
      description:
        "Through active memberships in NACAC, IACAC, HECA, IECA, AIGAC, and IC3, we've cultivated strong connections with admissions professionals and gathered actionable, institution-specific insights to enhance the student experience.",
    },
    {
      id: 5,
      image: "/cu-line.png",
      icon: FaGraduationCap,
      title: "In-Depth Knowledge",
      description:
        "Our expertise spans India's diverse curricula, enabling us to help students maximize opportunities while advising universities on recruitment strategies tailored to South Asia and the Middle East.",
    },
    {
      id: 6,
      image: "/cu-line.png",
      icon: FaShieldAlt,
      title: "Ethics & Governance",
      description:
        "In an unregulated and fragmented sector, we stand out by adhering to the highest standards of ethics and governance, ensuring trust and transparency in all our interactions with students, universities, and educational institutions.",
    },
  ];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let scrollAmount = 0;
    const scrollSpeed = 1.2; // pixels per frame (increased for better speed)
    let lastTime = performance.now();

    const autoScroll = (currentTime: number) => {
      if (isPaused) {
        lastTime = currentTime;
        animationFrameId = requestAnimationFrame(autoScroll);
        return;
      }

      // Calculate delta time for consistent speed regardless of frame rate
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      const maxScroll = (container.scrollWidth - container.clientWidth) / 2; // Half because we duplicated

      if (scrollAmount >= maxScroll) {
        // Reset to start for seamless infinite scroll
        scrollAmount = 0;
        container.scrollLeft = 0;
      } else {
        // Use delta time for smooth scrolling
        const frameSpeed = scrollSpeed * (deltaTime / 16.67); // Normalize to 60fps
        scrollAmount += frameSpeed;
        container.scrollLeft = scrollAmount;
      }

      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPaused]);

  return (
    <section className="py-16 sm:py-20 lg:py-24 relative bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <Image
              src="/about_2.png"
              alt="White Bridge Education"
              width={650}
              height={700}
              priority
              className="w-full rounded-lg"
            />

            {/* Rotating Badge */}
            <div className="absolute -top-8 sm:-top-12 right-8 sm:right-16 lg:right-12 w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 bg-gray-50 rounded-full flex items-center justify-center shadow-lg">
              <div className="size-14 sm:size-24 lg:size-28 xl:size-[120px] animate-rotational">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 250.5 250.5"
                  className="overflow-visible"
                >
                  <path
                    d="M.25,125.25a125,125,0,1,1,125,125,125,125,0,0,1-125-125"
                    id="e-path-35ee1b2"
                    className="fill-transparent"
                  ></path>
                  <text className="font-FiraSans text-[32px] uppercase">
                    <textPath
                      id="e-text-path-35ee1b2"
                      href="#e-path-35ee1b2"
                      startOffset="0%"
                      className="fill-HeadingColor-0"
                    >
                      * Business Const. * Agency 2024 * Finance Consult
                    </textPath>
                  </text>
                </svg>
              </div>
              {/* Thumbs Up Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <FaThumbsUp className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#cd553b]" />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            {/* Label */}
            <h1 className="font-FiraSans font-semibold text-PrimaryColor-0 text-lg sm:text-2xl md:text-3xl lg:text-4xl mb-4">
              Global Education Consulting
            </h1>

            {/* Heading */}
            <p className="font-bold text-gray-900 text-2xl leading-tight mb-5">
              Our Services
            </p>

            {/* Description */}
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              OUR SERVICES By partnering with WBE, your institution will gain
              access to a comprehensive suite of enrollment solutions tailored
              for global universities and higher education institutions to enter
              and succeed in high growth markets with customised solutions that
              optimise your cost of acquisition per student. We enhance the
              applicant journeys and boost enrollment outcomes by connecting you
              with reputable schools and universities to recruit
              high-performing, best-fit students in South Asia and the Middle
              East.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <Link href="/contact">
                <button
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 text-white text-base font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  style={{ backgroundColor: "#2a2b76" }}
                >
                  <FaRegThumbsUp />
                  Get Started now
                </button>
              </Link>

              <Link href="/services">
                <button className="inline-flex items-center gap-2 text-gray-900 font-semibold group">
                  Our Services
                  <GoArrowUpRight
                    size={20}
                    className="transition-all duration-500 group-hover:rotate-45"
                    style={{ color: "#2a2b76" }}
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Our Pillars of Expertise - Scrollable Section */}
        <div className="mt-16">
          <h2
            className="font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-8"
            style={{ color: "#063232" }}
          >
            Our Pillars of Expertise
          </h2>

          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide pb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              scrollBehavior: "auto",
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex gap-6 min-w-max">
              {/* Duplicate pillars for seamless infinite scroll */}
              {[...pillars, ...pillars].map((pillar, index) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={`${pillar.id}-${index}`}
                    className="flex-shrink-0 w-[320px] sm:w-[380px] lg:w-[420px] bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
                  >
                    {/* Line Image */}
                    <div className="mb-4">
                      <Image
                        src={pillar.image}
                        alt=""
                        width={100}
                        height={4}
                        className="h-1 w-auto"
                      />
                    </div>

                    {/* Icon */}
                    <div className="mb-4">
                      {IconComponent && (
                        <IconComponent
                          className="w-12 h-12 text-[#cd553b]"
                          size={48}
                        />
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-xl sm:text-2xl text-gray-900 mb-4">
                      {pillar.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide {
          will-change: scroll-position;
          -webkit-overflow-scrolling: touch;
        }
      `}</style>
    </section>
  );
}
