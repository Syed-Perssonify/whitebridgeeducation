"use client";

import Image from "next/image";
import { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";

const World = dynamic(
  () => import("@/components/ui/globe").then((mod) => mod.World),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center text-white/60">
        Loading globe...
      </div>
    ),
  }
);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const foregroundY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const midgroundY = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.4]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);

  const globeConfig = {
    pointSize: 4,
    atmosphereColor: "#ffffff",
    showAtmosphere: true,
    atmosphereAltitude: 0.1,
    polygonColor: "rgba(255,255,255,0.7)",
    globeColor: "#1d072e",
    emissive: "#000000",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    arcTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
  };

  const data = [
    {
      order: 1,
      startLat: 20.5937,
      startLng: 78.9629,
      endLat: 20.5937,
      endLng: 78.9629,
      arcAlt: 0.1,
      color: "#ffffff",
    },
    {
      order: 2,
      startLat: 28.3949,
      startLng: 84.124,
      endLat: 28.3949,
      endLng: 84.124,
      arcAlt: 0.1,
      color: "#ffffff",
    },
    {
      order: 3,
      startLat: 23.685,
      startLng: 90.3563,
      endLat: 23.685,
      endLng: 90.3563,
      arcAlt: 0.1,
      color: "#ffffff",
    },
    {
      order: 4,
      startLat: 7.8731,
      startLng: 80.7718,
      endLat: 7.8731,
      endLng: 80.7718,
      arcAlt: 0.1,
      color: "#ffffff",
    },
    {
      order: 5,
      startLat: 25.0,
      startLng: 45.0,
      endLat: 25.0,
      endLng: 45.0,
      arcAlt: 0.1,
      color: "#ffffff",
    },
    {
      order: 6,
      startLat: 0.0,
      startLng: 20.0,
      endLat: 0.0,
      endLng: 20.0,
      arcAlt: 0.1,
      color: "#ffffff",
    },
    {
      order: 7,
      startLat: 45.0,
      startLng: 65.0,
      endLat: 45.0,
      endLng: 65.0,
      arcAlt: 0.1,
      color: "#ffffff",
    },
    {
      order: 8,
      startLat: 35.0,
      startLng: 45.0,
      endLat: 35.0,
      endLng: 45.0,
      arcAlt: 0.1,
      color: "#ffffff",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#070911] via-[#10182c] to-[#03050a]"
    >
      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ opacity: glowOpacity }}
          className="absolute inset-x-0 top-12 mx-auto h-[420px] w-[420px] rounded-full bg-[#f97316]/20 blur-[120px]"
        />
        <motion.div
          style={{ y: midgroundY }}
          className="absolute -top-32 -left-16 h-[480px] w-[480px] rounded-full bg-[#7b61ff]/20 blur-[140px]"
        />
        <motion.div style={{ y: foregroundY }} className="absolute inset-0">
          <Image
            src="/hero/hero-images.jpg"
            alt="Global university partners collage"
            fill
            className="object-cover object-center opacity-40 mix-blend-lighten"
            priority
            sizes="100vw"
          />
        </motion.div>
        <motion.div
          style={{ y: midgroundY }}
          className="absolute right-0 top-24 h-[520px] w-[520px] opacity-60"
        >
          <Image
            src="/hero/hero-2.jpg"
            alt="Students collaborating"
            fill
            className="object-cover object-center rounded-[56px] border border-white/10"
            sizes="50vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#03050a] via-transparent to-[#03050a]/60" />
      </div>

      {/* Hero Content */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20 gap-8">
          {/* Content - Left Side */}
          <div className="w-full lg:w-1/2 text-left">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mb-4"
            >
              <span className="text-white text-xs sm:text-sm uppercase tracking-wider font-semibold">
                Connecting Two Regions. Multiplying Opportunities.
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 leading-tight"
            >
              Built on ethics.
              <br />
              Powered by data.
              <br />
              Committed to ROI.
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-gray-300 text-sm sm:text-base md:text-lg mb-6 leading-relaxed"
            >
              Connecting Global Universities to South Asia
              <br className="hidden sm:block" />
              and the Middle East - the world's fastest growing economies.
            </motion.p>

            {/* Contact Us Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a
                href="#contact"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Contact Us
              </a>
            </motion.div>
          </div>

          {/* Globe - Right Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full lg:w-1/2 h-[400px] md:h-[500px] lg:h-[600px] lg:translate-x-24 lg:translate-y-24"
          >
            <World globeConfig={globeConfig} data={data} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
