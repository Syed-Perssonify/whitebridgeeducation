"use client";

import React from "react";
import { ArrowRight, Download } from "lucide-react";

interface ResearchCard {
  title: string;
  percentage: string;
  metric: string;
  backgroundImage: string;
  pdfUrl: string;
}

const ResearchInsights: React.FC = () => {
  const researchData: ResearchCard[] = [
    {
      title: "The India Playbook For Australian Universities",
      percentage: "2025",
      metric: "Research Report",
      backgroundImage:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop",
      pdfUrl:
        "/pdf/WBE Research Report_The India Playbook For Australian Universities_April 2025 (1).pdf",
    },
    {
      title: "Evolving Trends in Indian Student Mobility",
      percentage: "2024",
      metric: "Market Analysis",
      backgroundImage:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
      pdfUrl: "/pdf/Evolving Trends in Indian Student Mobility.pdf",
    },
    {
      title: "Transnational Education - India Context",
      percentage: "2024",
      metric: "Education Report",
      backgroundImage:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      pdfUrl: "/pdf/Transnational Education - India Context.pdf",
    },
    {
      title: "Middle East Market Report",
      percentage: "2024",
      metric: "Regional Analysis",
      backgroundImage:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      pdfUrl: "/pdf/Middle_East_Report_26th_Jul (1).pdf",
    },
    {
      title: "India UK CETA 2025",
      percentage: "2025",
      metric: "Partnership Analysis",
      backgroundImage:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop",
      pdfUrl: "/pdf/India UK CETA 2025 (1).pdf",
    },
    {
      title: "Northeast India Education Report",
      percentage: "2024",
      metric: "Regional Insights",
      backgroundImage:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop",
      pdfUrl: "/pdf/NE Report (1).pdf",
    },
  ];

  const handleDownloadPDF = (pdfUrl: string, title: string) => {
    // Open PDF in new tab for viewing/download
    window.open(pdfUrl, "_blank");
  };

  return (
    <section className="pt-4 md:pt-6 pb-8 md:pb-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 md:mb-10 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Research & Market Insights
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
            Access our comprehensive research reports and market analysis to
            stay ahead in the global education landscape.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {researchData.map((research, index) => (
            <a
              key={index}
              href="#"
              style={{ backgroundImage: `url(${research.backgroundImage})` }}
              className="min-h-auto relative w-full overflow-hidden rounded-[.5rem] bg-black/80 bg-cover bg-center bg-no-repeat p-5 transition-all duration-300 before:absolute before:left-0 before:top-0 before:z-10 before:block before:size-full before:bg-black/50 before:transition-all before:duration-300 before:content-[] hover:before:bg-black/30 sm:aspect-square md:aspect-auto md:min-h-[30rem] md:max-w-[30rem]"
              onClick={(e) => {
                e.preventDefault();
                handleDownloadPDF(research.pdfUrl, research.title);
              }}
            >
              <div className="relative z-20 flex size-full flex-col justify-between gap-20 md:gap-16">
                <div className="text-2xl font-normal leading-[1.2] text-white md:text-3xl">
                  {research.title}
                </div>
                <div className="flex w-full flex-col gap-8">
                  <div className="flex gap-8 text-white">
                    <div className="flex flex-col gap-1">
                      <div className="text-[1.15rem] md:text-xl">
                        {research.percentage}
                      </div>
                      <div className="text-sm opacity-80">
                        {research.metric}
                      </div>
                    </div>
                  </div>
                  <button
                    data-slot="button"
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 w-fit"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleDownloadPDF(research.pdfUrl, research.title);
                    }}
                  >
                    Download PDF
                    <Download className="size-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchInsights;
