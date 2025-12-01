"use client";

import Link from "next/link";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="py-32 bg-white">
      <div className="border-y border-gray-200 bg-gray-50 max-w-full overflow-hidden pt-10 md:pt-16 lg:pt-20">
        <div className="container mx-auto px-6 relative flex flex-col md:flex-row md:gap-12">
          {/* Left Content */}
          <div className="mb-72 md:mb-28 md:w-2/3 lg:shrink-0 xl:mb-20 xl:w-1/2">
            <h3 className="text-[#2a2b76] font-bold text-4xl md:text-5xl mb-4 md:mb-6">
              Work with Us
            </h3>
            <p className="text-gray-600 text-base lg:text-lg mb-8 leading-relaxed">
              Join our dynamic team and help shape the future of international
              education. We're looking for passionate individuals who want to
              make a real impact in connecting students with world-class
              universities across South Asia and the Middle East.
            </p>
            <Link href="/careers">
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#2a2b76] text-white font-semibold text-sm hover:bg-[#1f1f5c] transition-all duration-300 hover:scale-105 shadow-lg">
                Explore Career Opportunities
              </button>
            </Link>
          </div>

          {/* Right - Stacked Cards with Images */}
          <div className="absolute bottom-0 right-1/2 h-min w-[110%] max-w-md translate-x-1/2 md:right-0 md:w-3/4 md:max-w-xl md:translate-x-0 lg:mt-auto xl:relative xl:right-0 xl:bottom-0 xl:h-full xl:w-full xl:max-w-full">
            <div className="aspect-[8/5] relative h-full min-h-64 w-full translate-y-8 md:translate-y-12 lg:translate-y-16">
              {/* Card 1 - Left Back */}
              <div className="aspect-[3/5] bg-white shadow-xl absolute left-0 top-0 z-30 flex w-[45%] translate-x-[10%] translate-y-[12%] -rotate-[20deg] justify-center overflow-hidden rounded-3xl">
                <div className="relative w-full h-full">
                  <Image
                    src="/Careers/medium-shot-people-with-laptop.jpg"
                    alt="Team collaboration"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2a2b76]/10 to-transparent"></div>
                </div>
              </div>

              {/* Card 2 - Center Front */}
              <div className="aspect-[3/5] bg-white shadow-2xl absolute left-1/2 top-0 z-50 flex w-[45%] -translate-x-1/2 items-center justify-center overflow-hidden rounded-3xl">
                <div className="relative w-full h-full">
                  <Image
                    src="/Careers/bussiness-people-working-team-office.jpg"
                    alt="Business team working"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Card 3 - Right Back */}
              <div className="aspect-[3/5] bg-white shadow-xl absolute right-0 top-0 z-30 flex w-[45%] -translate-x-[10%] translate-y-[4%] rotate-[20deg] justify-center overflow-hidden rounded-3xl">
                <div className="relative w-full h-full">
                  <Image
                    src="/Careers/medium-shot-people-with-laptop.jpg"
                    alt="Professional team"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2a2b76]/10 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
