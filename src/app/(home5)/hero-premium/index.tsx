"use client";

import { useRef, useEffect, useState, useCallback, useMemo } from "react";
import dynamic from "next/dynamic";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FaArrowRight, FaChevronRight } from "react-icons/fa";
import { GraduationCap } from "lucide-react";

// Lazy load heavy components
const WorldPremium = dynamic(
  () => import("@/components/ui/globe-premium").then((mod) => mod.WorldPremium),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center">
        <div className="w-16 h-16 border-4 border-white/20 border-t-[#cd553b] rounded-full animate-spin" />
      </div>
    ),
  }
);


// Optimized floating particle component
const FloatingParticle = ({
  delay,
  duration,
  size,
  x,
  y,
}: {
  delay: number;
  duration: number;
  size: number;
  x: string;
  y: string;
}) => (
  <motion.div
    className="absolute rounded-full bg-white/15 pointer-events-none"
    style={{ width: size, height: size, left: x, top: y }}
    initial={{ opacity: 0 }}
    animate={{
      y: [0, -25, 0],
      opacity: [0.1, 0.4, 0.1],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

// Animated counter with intersection observer
const AnimatedCounter = ({
  end,
  suffix = "",
  label,
}: {
  end: number;
  suffix?: string;
  label: string;
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number;
          const duration = 2000;

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Easing function for smoother animation
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tabular-nums">
        {count}
        {suffix}
      </div>
      <div className="text-xs md:text-sm text-white/60 mt-1 font-medium">
        {label}
      </div>
    </div>
  );
};





export default function HeroPremium() {
  const sectionRef = useRef<HTMLElement>(null);
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

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.98]);

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
      arcTime: 2000, // Smooth 2 second arc travel
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
      {
        order: 7,
        startLat: 20.5937,
        startLng: 78.9629,
        endLat: 38.9637,
        endLng: 35.2433,
        arcAlt: 0.18,
        color: "#ffffff",
        label: "West Asia",
      },
    ],
    []
  );


  // Reduced particles for performance (8 instead of 20)
  const particles = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        delay: Math.random() * 4,
        duration: 5 + Math.random() * 3,
        size: 3 + Math.random() * 3,
        x: `${10 + Math.random() * 80}%`,
        y: `${10 + Math.random() * 80}%`,
      })),
    []
  );

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1d4a] via-[#2a2b76] to-[#1e2756]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#cd553b]/8 via-transparent to-[#92bec0]/12" />

        {/* Animated orbs */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#cd553b]/15 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#92bec0]/10 rounded-full blur-[120px]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating Particles */}
      {isMounted &&
        particles.map((p) => <FloatingParticle key={p.id} {...p} />)}

      {/* Main Content */}
      <motion.div style={{ opacity, scale }} className="relative z-10 w-full">
        <div className="max-w-[1500px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20 lg:py-24 gap-10 lg:gap-6">
            {/* Left Content */}
            <div className="w-full lg:w-[48%] xl:w-[45%] text-center lg:text-left z-20">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-6 lg:mb-8"
              >
                <span className="inline-flex items-center gap-2.5 bg-white/5 backdrop-blur-xl text-white text-[10px] sm:text-xs uppercase tracking-[0.15em] font-medium px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-white/10">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#cd553b] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#cd553b]" />
                  </span>
                  Connecting Two Regions. Multiplying Opportunities.
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl 2xl:text-6xl mb-6 lg:mb-8 leading-[1.1] tracking-tight"
              >
                <span className="text-white">Built on </span>
                <span className="bg-gradient-to-r from-[#cd553b] to-[#e8836c] bg-clip-text text-transparent">
                  ethics.
                </span>
                <br />
                <span className="text-white">Powered by </span>
                <span className="bg-gradient-to-r from-[#92bec0] to-[#b8d4d5] bg-clip-text text-transparent">
                  data.
                </span>
                <br />
                <span className="text-white">Committed to </span>
                <span className="text-white">ROI.</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-white/75 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg mb-8 lg:mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0"
              >
                Connecting Global Universities to{" "}
                <span className="text-[#92bec0] font-semibold">South Asia</span>{" "}
                and{" "}
                <span className="text-[#cd553b] font-semibold">
                  the Middle East
                </span>{" "}
                — the world&apos;s fastest-growing education markets.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-10 lg:mb-12"
              >
                <a
                  href="#contact"
                  className="group relative inline-flex items-center justify-center gap-2 bg-[#cd553b] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:bg-[#b84a33] hover:shadow-xl hover:shadow-[#cd553b]/25 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Contact Us</span>
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>

                <a
                  href="#markets"
                  className="group inline-flex items-center justify-center gap-2 bg-white/5 backdrop-blur-md text-white font-semibold px-7 py-3.5 rounded-full border border-white/15 hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                >
                  <span>Our Markets</span>
                  <FaChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex justify-center lg:justify-start gap-6 sm:gap-10 pt-8 border-t border-white/10"
              >
                <AnimatedCounter end={8} suffix="+" label="Markets" />
                <AnimatedCounter end={50} suffix="+" label="Partners" />
                <AnimatedCounter end={10} suffix="K+" label="Students" />
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
                {/* Graduation Cap - Top Right of Globe */}
                {/* <motion.div
                  className="absolute top-12 sm:top-16 md:top-20 right-[15%] sm:right-[18%] md:right-[20%] z-20"
                  initial={{ opacity: 0, y: -20, rotate: 0 }}
                  animate={{ opacity: 1, y: 0, rotate: 25 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#cd553b]/20 blur-2xl rounded-full scale-150" />
                    <GraduationCap
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-[#cd553b] scale-110 drop-shadow-lg relative"
                      strokeWidth={2}
                    />
                  </div>
                </motion.div> */}

                {/* Glow */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-[60%] h-[60%] bg-[#92bec0]/8 rounded-full blur-[60px]" />
                </div>

                {/* Globe Display - Optimized size for static view */}
                <div className="h-[350px] sm:h-[420px] md:h-[500px] lg:h-[560px] xl:h-[620px]">
                  {isMounted && (
                    <WorldPremium
                      globeConfig={globeConfig}
                      data={arcData}
                    />
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/40"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium">
            Scroll
          </span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1 h-1 bg-white/50 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

