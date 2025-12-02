"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function HeroPremium4() {
  return (
    <section className="relative min-h-screen flex items-center overflow-x-hidden">
      {/* Clean Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/edu-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-5xl px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div className="flex flex-col items-start justify-center min-h-screen pt-32 pb-16 lg:pt-40 lg:pb-20">
            {/* Left Aligned Content */}
            <div className="w-full text-left z-20 flex flex-col items-start justify-center pt-12">
              {/* Premium Headline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="mb-6 lg:mb-8"
              >
                <h1 className="font-bold text-4xl md:text-5xl lg:text-[2.85rem] xl:text-[3.25rem] 2xl:text-6xl leading-[1.08] tracking-[-0.02em] text-left w-full">
                  <span className="block text-white/95 text-left">
                    Built on <span className="text-white">ethics</span>.
                  </span>
                  <span className="block text-white/95 mt-1 text-left">
                    Powered by <span className="text-white">data</span>.
                  </span>
                  <span className="block text-white/95 mt-1 text-left">
                    Committed to{" "}
                    <span className="text-white font-extrabold">ROI</span>.
                  </span>
                </h1>
              </motion.div>

              {/* Premium Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-8 lg:mb-10 leading-relaxed max-w-3xl font-light text-left"
              >
                Connecting Global Universities to{" "}
                <span className="text-white font-medium">South Asia</span> and{" "}
                <span className="text-white font-medium">the Middle East</span>{" "}
                — the world&apos;s fastest-growing education markets.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                className="mb-8 lg:mb-10"
              >
                <a
                  href="#contact"
                  className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden  px-8 py-4 font-semibold text-white bg-[#cd553b] border border-[#cd553b] transition-all duration-500 hover:bg-transparent hover:border-white/50"
                >
                  <span className="relative">Book Meeting</span>
                  <FaArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
