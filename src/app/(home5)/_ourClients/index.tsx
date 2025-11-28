"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Button } from "@/components/ui/button";

import "swiper/css";

interface ClientItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}

interface ClientProps {
  heading?: string;
  subheading?: string;
  items?: ClientItem[];
}

const OurClients = ({
  heading = "Our University Partners",
  subheading = "Trusted by leading institutions worldwide to connect students with quality education opportunities.",
  items = [
    {
      id: "item-1",
      title: "Clarkson University",
      summary:
        "A leading institution providing quality education and innovative programs.",
      url: "#",
      image: "/clarkson.avif",
    },
    {
      id: "item-2",
      title: "Rowan University",
      summary: "Dedicated to excellence in education and student success.",
      url: "#",
      image: "/rowan.avif",
    },
    {
      id: "item-3",
      title: "Wake Forest University School of Business",
      summary: "Renowned for academic excellence and professional development.",
      url: "#",
      image: "/wake.avif",
    },
    {
      id: "item-4",
      title: "University of Salford",
      summary:
        "Committed to providing world-class education and research opportunities.",
      url: "#",
      image: "/hero/University of Salford.jpg",
    },
    {
      id: "item-5",
      title: "Brandeis University",
      summary:
        "A prestigious institution fostering academic excellence and innovation.",
      url: "#",
      image: "/hero/Brandeis University.png",
    },
    {
      id: "item-6",
      title: "La Salle University",
      summary:
        "Empowering students through quality education and community engagement.",
      url: "#",
      image: "/lasalle.avif",
    },
    {
      id: "item-7",
      title: "East Tennessee State University",
      summary:
        "Building futures through comprehensive education and student support.",
      url: "#",
      image: "/hero/East Tennessee State University.webp",
    },
    {
      id: "item-8",
      title: "Scranton University",
      summary:
        "Dedicated to academic excellence and holistic student development.",
      url: "#",
      image: "/hero/Scranton University.png",
    },
  ],
}: ClientProps) => {
  const swiperRef = useRef<any>(null);

  return (
    <section className="py-10 md:py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header with Arrows on Right */}
        <div className="mb-8 md:mb-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-[#2a2b76] font-bold text-2xl md:text-3xl lg:text-4xl mb-3">
                {heading}
              </h2>
              <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
                {subheading}
              </p>
            </div>

            {/* Navigation Arrows - Right Side */}
            <div className="flex justify-center md:justify-end items-center gap-2">
              <Button
                size="icon"
                variant="outline"
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-10 h-10 rounded-full border-2 border-[#2a2b76] text-[#2a2b76] hover:bg-[#2a2b76] hover:text-white transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                onClick={() => swiperRef.current?.slideNext()}
                className="w-10 h-10 rounded-full border-2 border-[#2a2b76] text-[#2a2b76] hover:bg-[#2a2b76] hover:text-white transition-all"
              >
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Carousel - Centered */}
        <div className="w-full">
          <Swiper
            modules={[Autoplay]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            loop={true}
            spaceBetween={24}
            speed={1000}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="w-full"
          >
            {items.map((item) => (
              <SwiperSlide key={item.id}>
                <a
                  href={item.url}
                  className="group block transition-transform duration-300 hover:-translate-y-1"
                >
                  {/* Image Only - Clean */}
                  <div className="relative aspect-[4/3] overflow-hidden mb-3 bg-white flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-gray-900 font-semibold text-sm md:text-base mb-1.5 line-clamp-2 leading-snug group-hover:text-[#2a2b76] transition-colors">
                    {item.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-gray-600 text-xs line-clamp-2 mb-2 leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Read More Link */}
                  <div className="flex items-center text-xs font-medium text-[#2a2b76]">
                    Read more
                    <ArrowRight className="ml-1.5 w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export { OurClients };
