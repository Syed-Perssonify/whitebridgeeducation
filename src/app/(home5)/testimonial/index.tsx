"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import { MdOutlineStarPurple500 } from "react-icons/md";
import CountUp from "react-countup";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useRef } from "react";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import "swiper/css";
import "swiper/css/effect-fade";

interface TestimonialCardProps {
  testiImg: string;
  testiRatingIcon: React.ReactNode;
  testiName: string;
  testiDesignation: string;
  testiDesc: string;
  testiQuote: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testiImg,
  testiRatingIcon,
  testiName,
  testiDesignation,
  testiDesc,
  testiQuote,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-8 bg-gray-50 rounded-2xl overflow-hidden p-6 lg:p-8 hover:shadow-xl transition-all duration-500">
      {/* Image */}
      <div className="relative flex-shrink-0">
        <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-xl overflow-hidden">
          <Image
            src={testiImg}
            alt={testiName}
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        {/* Quote Icon */}
        <div className="mb-4">
          <Image src={testiQuote} alt="Quote" width={40} height={40} />
        </div>

        {/* Stars */}
        <ul className="flex gap-1 items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <li key={i} className="text-[#ffb609] text-xl">
              {testiRatingIcon}
            </li>
          ))}
        </ul>

        {/* Description */}
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
          {testiDesc}
        </p>

        {/* Name & Designation */}
        <div>
          <h5 className="font-semibold text-gray-900 text-lg mb-1">
            {testiName}
          </h5>
          <p className="text-gray-600 text-sm">{testiDesignation}</p>
        </div>
      </div>
    </div>
  );
};

const testiData = [
  {
    id: 1,
    testiQuote: "/images/testi_icon2.png",
    testiImg: "/11.avif",
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Darren Wagner",
    testiDesignation: "Rowan University",
    testiDesc: `My time working with the team at White Bridge Education has been a genuine pleasure. They are not only professional and reliable but also incredibly thoughtful partners who bring insight, warmth, and consistency to our collaboration.`,
  },
  {
    id: 2,
    testiQuote: "/images/testi_icon2.png",
    testiImg: "/22.avif",
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "John White",
    testiDesignation: "Wake Forest University School of Business",
    testiDesc: `White Bridge is a valued and respected partner to the Wake Forest University School of Business, working to expand our brand presence and graduate program awareness in the highly competitive Indian market.`,
  },
  {
    id: 3,
    testiQuote: "/images/testi_icon2.png",
    testiImg: "/33.avif",
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Jordan Aird",
    testiDesignation: "University of Salford",
    testiDesc: `Here at the University of Salford, we are delighted with the services provided by White Bridge Education and are proud to be their first UK university partner.`,
  },
];

export default function Testimonial() {
  const swiperRef = useRef<any>(null);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-5">
            <h5 className="text-[#2a2b76] font-semibold text-base uppercase tracking-wider mb-3">
              Testimonial
            </h5>
            <h2 className="text-gray-900 font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
              Trusted By Leading <br /> Universities Worldwide
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              Partnering with prestigious institutions to expand global
              education opportunities and student success
            </p>

            {/* Rating Stats */}
            <div className="flex items-center gap-6 border-t border-gray-200 pt-8">
              <div className="border-r border-gray-200 pr-6">
                <CountUp
                  start={0}
                  end={4.98}
                  decimals={2}
                  enableScrollSpy
                  scrollSpyOnce
                  duration={2.5}
                  className="text-5xl md:text-6xl text-[#2a2b76] font-bold"
                />
              </div>
              <div>
                <ul className="flex items-center gap-1 mb-2">
                  <li className="text-[#ffb609]">
                    <FaStar size={18} />
                  </li>
                  <li className="text-[#ffb609]">
                    <FaStar size={18} />
                  </li>
                  <li className="text-[#ffb609]">
                    <FaStar size={18} />
                  </li>
                  <li className="text-[#ffb609]">
                    <FaStar size={18} />
                  </li>
                  <li className="text-[#ffb609]">
                    <FaStarHalfAlt size={18} />
                  </li>
                </ul>
                <p className="text-gray-600 text-sm">Avg. University Ratings</p>
              </div>
            </div>
          </div>

          {/* Right Testimonials */}
          <div className="lg:col-span-7">
            {/* Navigation Arrows */}
            <div className="flex items-center justify-end gap-3 mb-6">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-12 h-12 rounded-full bg-[#2a2b76] text-white flex items-center justify-center hover:bg-[#1f1f5c] transition-all duration-300 hover:scale-110"
              >
                <BiChevronLeft size={24} />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="w-12 h-12 rounded-full bg-[#2a2b76] text-white flex items-center justify-center hover:bg-[#1f1f5c] transition-all duration-300 hover:scale-110"
              >
                <BiChevronRight size={24} />
              </button>
            </div>

            {/* Swiper Slider */}
            <Swiper
              modules={[Autoplay, EffectFade]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              loop={true}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              speed={800}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              slidesPerView={1}
            >
              {testiData.map((testi) => (
                <SwiperSlide key={testi.id}>
                  <TestimonialCard {...testi} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
