"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

interface ClientItem {
  id: string;
  title: string;
  url: string;
  image: string;
}

interface ClientProps {
  items?: ClientItem[];
}

const OurClients = ({
  items = [
    {
      id: "item-1",
      title: "Clarkson University",
      url: "#",
      image: "/clarkson.avif",
    },
    {
      id: "item-2",
      title: "Rowan University",
      url: "#",
      image: "/rowan.avif",
    },
    {
      id: "item-3",
      title: "Wake Forest University School of Business",
      url: "#",
      image: "/wake.avif",
    },
    {
      id: "item-4",
      title: "University of Salford",
      url: "#",
      image: "/hero/University of Salford.jpg",
    },
    {
      id: "item-5",
      title: "Brandeis University",
      url: "#",
      image: "/hero/Brandeis University.png",
    },
    {
      id: "item-6",
      title: "La Salle University",
      url: "#",
      image: "/lasalle.avif",
    },
    {
      id: "item-7",
      title: "East Tennessee State University",
      url: "#",
      image: "/hero/East Tennessee State University.webp",
    },
    {
      id: "item-8",
      title: "Scranton University",
      url: "#",
      image: "/hero/Scranton University.png",
    },
  ],
}: ClientProps) => {
  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-10 text-left">
          <h2 className="text-PrimaryColor-0 font-bold text-2xl md:text-3xl lg:text-4xl mb-4">
            Our University Partners
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-3xl leading-relaxed">
            Trusted by leading institutions worldwide to connect students with
            quality education opportunities.
          </p>
        </div>

        {/* Carousel - Continuous Infinite Scroll */}
        <div className="w-full">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            spaceBetween={40}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
            className="w-full"
          >
            {items.map((item) => (
              <SwiperSlide key={item.id}>
                <a href={item.url} className="group block">
                  {/* Logo Only - Clean & Minimal */}
                  <div className="relative aspect-[3/2] flex items-center justify-center p-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-w-full max-h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    />
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
