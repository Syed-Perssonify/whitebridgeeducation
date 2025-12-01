"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { Download, FileText, ChevronLeft, ChevronRight } from "lucide-react";

interface ResearchReport {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  downloadUrl: string;
}

const reports: ResearchReport[] = [
  {
    id: 1,
    title: "Evolving Trends in Indian Student Mobility",
    description:
      "Comprehensive analysis of evolving trends and patterns in Indian student mobility for international education opportunities.",
    thumbnail:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    downloadUrl: "/pdf/Evolving Trends in Indian Student Mobility.pdf",
  },
  {
    id: 2,
    title: "India UK CETA 2025",
    description:
      "Analysis of the Comprehensive Economic and Trade Agreement between India and UK and its impact on education partnerships.",
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    downloadUrl: "/pdf/India UK CETA 2025 (1).pdf",
  },
  {
    id: 3,
    title: "Middle East Student Mobility Report",
    description:
      "Analysis of student mobility patterns and preferences in Middle Eastern markets for international education.",
    thumbnail:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
    downloadUrl: "/pdf/Middle_East_Report_26th_Jul (1).pdf",
  },
  {
    id: 4,
    title: "Northeast India Education Report",
    description:
      "Comprehensive insights into education opportunities and challenges in Northeast India for international partnerships.",
    thumbnail:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
    downloadUrl: "/pdf/NE Report (1).pdf",
  },
  {
    id: 5,
    title: "Transnational Education - India Context",
    description:
      "Exploring transnational education opportunities and strategies specifically tailored for the Indian market context.",
    thumbnail:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    downloadUrl: "/pdf/Transnational Education - India Context.pdf",
  },
  {
    id: 6,
    title: "The India Playbook For Australian Universities",
    description:
      "Strategic research report providing comprehensive guidance for Australian universities looking to enter and succeed in the Indian market.",
    thumbnail:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
    downloadUrl:
      "/pdf/WBE Research Report_The India Playbook For Australian Universities_April 2025 (1).pdf",
  },
];

export default function ResearchInsights() {
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const cardWidth = 300;
  const gap = 24;
  const cardWidthWithGap = cardWidth + gap;

  // Duplicate reports for seamless loop
  const duplicatedReports = [...reports, ...reports];

  const goToIndex = useCallback(
    (index: number) => {
      const newIndex = Math.max(0, Math.min(index, reports.length - 1));
      setCurrentIndex(newIndex);
      controls.start({
        x: -newIndex * cardWidthWithGap,
        transition: {
          duration: 0.6,
          ease: "easeInOut",
        },
      });
    },
    [controls, cardWidthWithGap]
  );

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => {
      const nextIndex = prev < reports.length - 1 ? prev + 1 : 0;
      controls.start({
        x: -nextIndex * cardWidthWithGap,
        transition: {
          duration: 0.6,
          ease: "easeInOut",
        },
      });
      return nextIndex;
    });
  }, [controls, cardWidthWithGap]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => {
      const prevIndex = prev > 0 ? prev - 1 : reports.length - 1;
      controls.start({
        x: -prevIndex * cardWidthWithGap,
        transition: {
          duration: 0.6,
          ease: "easeInOut",
        },
      });
      return prevIndex;
    });
  }, [controls, cardWidthWithGap]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [goPrev, goNext]);

  // Auto-scroll when not paused
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        goNext();
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPaused, goNext]);

  return (
    <section className="py-8 md:py-10 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-8 text-left relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1">
                <h1 className="text-PrimaryColor-0 font-bold text-2xl md:text-3xl lg:text-4xl mb-3">
                  Research & Market Insights
                </h1>
                <p className="text-gray-600 text-sm md:text-base max-w-3xl leading-relaxed">
                  Access our comprehensive research reports and market analysis
                  to stay ahead in the global education landscape.
                </p>
              </div>
              {/* Navigation Arrows - Aligned with Title */}
              <div className="flex items-center gap-2">
                <button
                  onClick={goPrev}
                  className="bg-white/90 hover:bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
                  aria-label="Previous report"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700 group-hover:text-[#2a2b76] transition-colors" />
                </button>
                <button
                  onClick={goNext}
                  className="bg-white/90 hover:bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
                  aria-label="Next report"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700 group-hover:text-[#2a2b76] transition-colors" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Auto-scrolling carousel */}
        <div
          ref={containerRef}
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={controls}
              style={{
                width: `${duplicatedReports.length * cardWidthWithGap}px`,
              }}
            >
              {duplicatedReports.map((report, index) => (
                <FlipCard key={`${report.id}-${index}`} report={report} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FlipCard({ report }: { report: ResearchReport }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-[300px] h-[400px] cursor-pointer perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Front Side - Image */}
        <div
          className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-lg"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image
            src={report.thumbnail}
            alt={report.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-white font-bold text-lg line-clamp-2">
              {report.title}
            </h3>
          </div>
        </div>

        {/* Back Side - Info & Download */}
        <div
          className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-600 to-blue-800 p-6 flex flex-col justify-between"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-6 h-6 text-white" />
              <h3 className="text-white font-bold text-xl line-clamp-2">
                {report.title}
              </h3>
            </div>
            <p className="text-white/90 text-sm leading-relaxed line-clamp-6">
              {report.description}
            </p>
          </div>

          <a
            href={report.downloadUrl}
            download
            className="flex items-center justify-center gap-2 w-full py-3 bg-white hover:bg-gray-100 text-blue-600 font-semibold rounded-lg transition-colors duration-300 group"
            onClick={(e) => e.stopPropagation()}
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            <span>Download Report</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
