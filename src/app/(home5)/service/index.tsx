"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { useRef } from "react";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

interface ServiceCardProps {
  serviceIcon: string;
  serviceSubTitle: string;
  serviceTitle: string;
  serviceDesc: string;
  serviceUrl: string;
  btnContent: string;
  btnIcon: React.ReactNode;
  serviceThumb: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  serviceIcon,
  serviceSubTitle,
  serviceTitle,
  serviceDesc,
  serviceUrl,
  btnContent,
  btnIcon,
  serviceThumb,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 items-stretch rounded-lg bg-white group relative overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full">
      <div className="px-6 py-6 flex flex-col">
        <div className="mb-4">
          <Image src={serviceIcon} alt={serviceTitle} width={36} height={36} />
        </div>
        <span
          className="font-medium text-xs uppercase inline-block mb-2"
          style={{ color: "#2a2b76" }}
        >
          {serviceSubTitle}
        </span>
        <Link href={serviceUrl}>
          <h4 className="font-bold text-sm text-gray-900 mb-2 hover:text-teal-700 transition-colors">
            {serviceTitle}
          </h4>
        </Link>
        <p className="text-gray-600 text-xs leading-relaxed mb-4">
          {serviceDesc}
        </p>
        <Link href={serviceUrl} className="inline-block mt-auto">
          <button
            className="font-medium flex gap-1 items-center text-xs transition-all duration-300 hover:gap-2"
            style={{ color: "#2a2b76" }}
          >
            {btnContent}
            <span className="text-lg transition-all duration-300 group-hover:rotate-45">
              {btnIcon}
            </span>
          </button>
        </Link>
      </div>
      <div className="h-[280px] w-full overflow-hidden">
        <Image
          src={serviceThumb}
          alt={serviceTitle}
          width={400}
          height={280}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

const ServiceData = [
  {
    id: 1,
    serviceIcon: "/images/service_icon1.png",
    serviceSubTitle: "International Candidate Recruitment",
    serviceTitle: "ICR",
    serviceDesc:
      "Full-funnel recruitment support, from market scans to agent enablement, keeps your applicant pipeline healthy and conversion-ready.",
    serviceUrl: "/services/icr",
    btnContent: "View Details",
    btnIcon: <GoArrowUpRight />,
    serviceThumb:
      "https://images.unsplash.com/photo-1521790945508-bf2a36314e85?w=400&h=280&fit=crop",
  },
  {
    id: 2,
    serviceIcon: "/images/service_icon2.png",
    serviceSubTitle: "Pipeline Acceleration",
    serviceTitle: "Digital Marketing & Lead Engagement",
    serviceDesc:
      "Always-on digital campaigns plus nurture journeys help you reach, educate, and qualify prospects across every key channel.",
    serviceUrl: "/services/digital-marketing",
    btnContent: "View Details",
    btnIcon: <GoArrowUpRight />,
    serviceThumb:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=280&fit=crop",
  },
  {
    id: 3,
    serviceIcon: "/images/service_icon1.png",
    serviceSubTitle: "Transnational Education",
    serviceTitle: "TNE & Institutional Partnerships",
    serviceDesc:
      "We broker sustainable TNE models, joint programs, and strategic alliances that unlock new markets for both campuses.",
    serviceUrl: "/services/tne",
    btnContent: "View Details",
    btnIcon: <GoArrowUpRight />,
    serviceThumb:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=400&h=280&fit=crop",
  },
  {
    id: 4,
    serviceIcon: "/images/service_icon2.png",
    serviceSubTitle: "Boardroom Advisory",
    serviceTitle: "Advisory Services",
    serviceDesc:
      "Data-backed governance, pricing, and portfolio guidance gives leadership the clarity needed to make bold growth decisions.",
    serviceUrl: "/services/advisory",
    btnContent: "View Details",
    btnIcon: <GoArrowUpRight />,
    serviceThumb:
      "https://images.unsplash.com/photo-1454165205744-3b78555e5572?w=400&h=280&fit=crop",
  },
];

export default function Service() {
  const swiperRef = useRef<any>(null);

  return (
    <section className="relative h-[600px] sm:h-[650px] lg:h-[550px] xl:h-[600px] bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 h-full flex flex-col justify-center">
        {/* Header */}
        <div className="mb-8 lg:mb-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <h1
              className="font-FiraSans font-semibold text-lg sm:text-2xl md:text-3xl lg:text-4xl mb-4"
              style={{ color: "#2a2b76" }}
            >
              Our Services
            </h1>
            <p className="font-medium text-gray-700 text-base sm:text-lg md:text-xl leading-snug mt-2">
              Integrated growth solutions that cover recruitment, marketing,
              partnerships, and executive advisory so you can scale with
              confidence.
            </p>
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-md"
              style={{ backgroundColor: "#cd553b" }}
            >
              <BiChevronLeft size={20} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-md"
              style={{ backgroundColor: "#cd553b" }}
            >
              <BiChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Swiper Container */}
        <div className="flex-1 max-h-[380px]">
          <Swiper
            modules={[Autoplay]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            loop={true}
            spaceBetween={24}
            speed={1000}
            initialSlide={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 1.5 },
              992: { slidesPerView: 2 },
              1400: { slidesPerView: 2.5 },
            }}
            className="h-full"
          >
            {ServiceData.map((service) => (
              <SwiperSlide key={service.id} className="h-auto">
                <ServiceCard {...service} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
