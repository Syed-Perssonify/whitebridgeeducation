"use client";

import { useRef, useEffect, useState, useCallback, useMemo } from "react";
import dynamic from "next/dynamic";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FaArrowRight, FaChevronRight } from "react-icons/fa";
import { TrendingUp, Users, Globe2, type LucideIcon } from "lucide-react";

// Lazy load heavy components
const WorldPremium = dynamic(
  () => import("@/common/element/globe").then((mod) => mod.WorldPremium),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center">
        <div className="w-16 h-16 border-4 border-white/20 border-t-[#cd553b] rounded-full animate-spin" />
      </div>
    ),
  }
);

export default function HeroPremium1() {
  const [isMounted, setIsMounted] = useState(false);

  // Hydration safe
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Smooth mouse tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 30, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 30, damping: 20 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (typeof window !== "undefined" && window.innerWidth < 1024) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / 80;
      const y = (e.clientY - rect.top - rect.height / 2) / 80;
      mouseX.set(x);
      mouseY.set(y);
    },
    [mouseX, mouseY]
  );

  // Premium globe config with elegant styling - static for best UX
  const globeConfig = useMemo(
    () => ({
      pointSize: 3,
      atmosphereColor: "#92bec0",
      showAtmosphere: true,
      atmosphereAltitude: 0.15,
      polygonColor: "rgba(255,255,255,0.25)",
      globeColor: "#1e2756",
      emissive: "#2a2b76",
      emissiveIntensity: 0.1,
      shininess: 0.9,
      arcTime: 500, // Smooth 2 second arc travel
      arcLength: 0.6,
      rings: 1,
      maxRings: 3,
      ambientLight: "#ffffff",
      directionalLeftLight: "#92bec0",
      directionalTopLight: "#ffffff",
      pointLight: "#ffffff",
      autoRotate: false,
      autoRotateSpeed: 0,
    }),
    []
  );

  // Arc data - South Asia (by country), other regions by region name
  const arcData = useMemo(
    () => [
      // South Asia - Nepal (country name)
      {
        order: 1,
        startLat: 20.5937,
        startLng: 78.9629,
        endLat: 28.3949,
        endLng: 84.124,
        arcAlt: 0.06,
        color: "#ffffff",
        label: "Nepal",
      },
      // South Asia - Bangladesh (country name)
      {
        order: 2,
        startLat: 20.5937,
        startLng: 78.9629,
        endLat: 23.685,
        endLng: 90.3563,
        arcAlt: 0.05,
        color: "#ffffff",
        label: "Bangladesh",
      },
      // South Asia - Sri Lanka (country name)
      {
        order: 3,
        startLat: 20.5937,
        startLng: 78.9629,
        endLat: 7.8731,
        endLng: 80.7718,
        arcAlt: 0.06,
        color: "#ffffff",
        label: "Sri Lanka",
      },
      // Africa (region name) - pointing to Kenya
      {
        order: 4,
        startLat: 20.5937,
        startLng: 78.9629,
        endLat: -1.2921,
        endLng: 36.8219,
        arcAlt: 0.18,
        color: "#ffffff",
        label: "Africa",
      },
      // Middle East (region name) - pointing to UAE
      {
        order: 5,
        startLat: 20.5937,
        startLng: 78.9629,
        endLat: 25.2048,
        endLng: 55.2708,
        arcAlt: 0.12,
        color: "#ffffff",
        label: "Middle East",
      },
      // Central Asia (region name) - pointing to Kazakhstan
      {
        order: 6,
        startLat: 20.5937,
        startLng: 78.9629,
        endLat: 48.0196,
        endLng: 66.9237,
        arcAlt: 0.16,
        color: "#ffffff",
        label: "Central Asia",
      },
      // West Asia (region name) - pointing to Turkey
      // {
      //   order: 7,
      //   startLat: 20.5937,
      //   startLng: 78.9629,
      //   endLat: 38.9637,
      //   endLng: 35.2433,
      //   arcAlt: 0.18,
      //   color: "#ffffff",
      //   label: "West Asia",
      // },
    ],
    []
  );

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-x-hidden"
    >
      {/* Premium Background System */}
      <div className="absolute inset-0">
        {/* Base gradient - deep sophisticated navy */}
        <div className="absolute inset-0 bg-[#0a0c1a]" />

        {/* Layered gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1228] via-[#151a3d] to-[#0d1025]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#cd553b]/5 via-transparent to-[#92bec0]/8" />

        {/* Radial accent from center-right for globe glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(146,190,192,0.08)_0%,transparent_50%)]" />

        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,12,26,0.4)_100%)]" />

        {/* Animated ambient glow - coral accent */}
        <motion.div
          className="absolute top-[20%] left-[5%] w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(205,85,59,0.12) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Animated ambient glow - teal accent */}
        <motion.div
          className="absolute bottom-[10%] left-[15%] w-[300px] h-[300px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(146,190,192,0.1) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Geometric accent lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.03]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="heroGrid"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
        </svg>

        {/* Diagonal accent line */}
        <div className="absolute top-0 left-[30%] w-px h-full bg-gradient-to-b from-transparent via-white/[0.03] to-transparent transform -skew-x-12" />
        <div className="absolute top-0 left-[35%] w-px h-full bg-gradient-to-b from-transparent via-[#cd553b]/[0.05] to-transparent transform -skew-x-12" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-[1500px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen pt-24 pb-16 lg:pt-28 lg:pb-20 gap-8 lg:gap-6">
            {/* Left Content - Premium Design */}
            <div className="w-full lg:w-[48%] xl:w-[45%] text-center lg:text-left z-20 flex flex-col justify-center pt-10">
              {/* Premium Headline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="mb-6 lg:mb-8"
              >
                <h1 className="font-bold text-4xl md:text-5xl lg:text-[2.85rem] xl:text-[3.25rem] 2xl:text-6xl leading-[1.08] tracking-[-0.02em]">
                  <span className="block text-white/95">
                    Built on{" "}
                    <span className="relative inline-block">
                      <span className="bg-gradient-to-r from-[#cd553b] via-[#e8836c] to-[#cd553b] bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_3s_ease-in-out_infinite]">
                        ethics
                      </span>
                      <span className="text-[#cd553b]">.</span>
                    </span>
                  </span>
                  <span className="block text-white/95 mt-1">
                    Powered by{" "}
                    <span className="relative inline-block">
                      <span className="bg-gradient-to-r from-[#92bec0] via-[#b8d4d5] to-[#92bec0] bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_3s_ease-in-out_infinite_0.5s]">
                        data
                      </span>
                      <span className="text-[#92bec0]">.</span>
                    </span>
                  </span>
                  <span className="block text-white/95 mt-1">
                    Committed to{" "}
                    <span className="relative inline-block">
                      <span className="text-white font-extrabold">ROI</span>
                      <span className="text-white">.</span>
                      {/* Underline accent */}
                      <motion.span
                        className="absolute -bottom-1 left-0 h-[3px] bg-gradient-to-r from-[#cd553b] to-[#92bec0] rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{
                          duration: 0.8,
                          delay: 1.2,
                          ease: "easeOut",
                        }}
                      />
                    </span>
                  </span>
                </h1>
              </motion.div>

              {/* Premium Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-white/60 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg mb-8 lg:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light"
              >
                Connecting Global Universities to{" "}
                <span className="text-[#92bec0] font-medium">South Asia</span>{" "}
                and{" "}
                <span className="text-[#cd553b] font-medium">
                  the Middle East
                </span>{" "}
                — the world&apos;s fastest-growing education markets.
              </motion.p>

              {/* Premium CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 lg:mb-10"
              >
                {/* Primary CTA */}
                <a
                  href="#contact"
                  className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full px-8 py-4 font-semibold text-white transition-all duration-500"
                >
                  {/* Gradient background */}
                  <span className="absolute inset-0 bg-gradient-to-r from-[#cd553b] via-[#d9664d] to-[#cd553b] bg-[length:200%_auto] transition-all duration-500 group-hover:bg-[position:right_center]" />
                  {/* Shine effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  {/* Glow */}
                  <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_30px_rgba(205,85,59,0.5)]" />
                  <span className="relative">Contact Us</span>
                  <FaArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </motion.div>
            </div>

            {/* Right Side - Globe */}
            <div className="w-full lg:w-[52%] xl:w-[55%] relative">
              {/* Globe Container with parallax */}
              <motion.div
                style={{ x: smoothX, y: smoothY }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                {/* Premium Graduation Cap - Clean Modern Design */}
                {/* <motion.div
                  className="absolute top-6 sm:top-10 md:top-14 right-[10%] sm:right-[12%] md:right-[15%] z-20"
                  initial={{ opacity: 0, y: -20, scale: 0.9 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 1,
                    ease: [0.34, 1.56, 0.64, 1]
                  }}
                >
                  <motion.div
                    className="relative"
                    animate={{
                      y: [0, -6, 0],
                      rotate: [8, 12, 8],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="absolute -inset-4 bg-[#cd553b]/20 blur-3xl rounded-full" />

                    <svg
                      viewBox="0 0 100 100"
                      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 relative"
                      style={{ filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.4))' }}
                    >
                      <defs>
                        <linearGradient id="boardMain" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#2a2d3e" />
                          <stop offset="40%" stopColor="#1f2233" />
                          <stop offset="100%" stopColor="#151722" />
                        </linearGradient>
                        <linearGradient id="boardShine" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
                          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                        </linearGradient>
                        <linearGradient id="capBase" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#252839" />
                          <stop offset="100%" stopColor="#1a1c28" />
                        </linearGradient>
                        <linearGradient id="tasselCoral" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#e07058" />
                          <stop offset="50%" stopColor="#cd553b" />
                          <stop offset="100%" stopColor="#b54530" />
                        </linearGradient>
                        <radialGradient id="goldButton" cx="30%" cy="30%" r="70%">
                          <stop offset="0%" stopColor="#ffe066" />
                          <stop offset="50%" stopColor="#ffc733" />
                          <stop offset="100%" stopColor="#d4a520" />
                        </radialGradient>
                      </defs>

                      <ellipse
                        cx="50" cy="58" rx="22" ry="12"
                        fill="url(#capBase)"
                      />
                      <ellipse
                        cx="50" cy="56" rx="20" ry="10"
                        fill="url(#capBase)"
                        stroke="rgba(255,255,255,0.05)"
                        strokeWidth="0.5"
                      />

                      <polygon
                        points="50,22 88,44 50,66 12,44"
                        fill="url(#boardMain)"
                      />
                      <polygon
                        points="50,22 88,44 50,66 12,44"
                        fill="none"
                        stroke="rgba(255,255,255,0.08)"
                        strokeWidth="1"
                      />
                      <polygon
                        points="50,22 69,33 50,44 31,33"
                        fill="url(#boardShine)"
                      />

                      <circle cx="50" cy="44" r="4" fill="url(#goldButton)" />
                      <circle cx="48" cy="42" r="1.5" fill="rgba(255,255,255,0.5)" />

                      <path
                        d="M50,44 Q58,50 62,60 Q65,70 62,78"
                        stroke="url(#tasselCoral)"
                        strokeWidth="2.5"
                        fill="none"
                        strokeLinecap="round"
                      />

                      <circle cx="62" cy="78" r="4" fill="url(#tasselCoral)" />

                      <g stroke="#cd553b" strokeWidth="2" strokeLinecap="round">
                        <line x1="59" y1="81" x2="57" y2="92" />
                        <line x1="62" y1="82" x2="61" y2="94" />
                        <line x1="65" y1="81" x2="66" y2="92" />
                      </g>
                    </svg>
                  </motion.div>
                </motion.div> */}

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-[60%] h-[60%] bg-[#92bec0]/8 rounded-full blur-[60px]" />
                </div>

                <div className="h-[350px] sm:h-[420px] md:h-[500px] lg:h-[560px] xl:h-[620px]">
                  {isMounted && (
                    <WorldPremium globeConfig={globeConfig} data={arcData} />
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
