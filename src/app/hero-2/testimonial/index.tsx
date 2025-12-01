"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { MdOutlineStarPurple500 } from "react-icons/md";
import CountUp from "react-countup";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import "swiper/css";

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
    <div className="flex flex-col sm:flex-row gap-8 bg-gray-50 rounded-2xl overflow-hidden p-6 lg:p-8 transition-all duration-500">
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
    testiImg:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Darren Wagner",
    testiDesignation: "Rowan University",
    testiDesc: `My time working with the team at White Bridge Education has been a genuine pleasure. They are not only professional and reliable but also incredibly thoughtful partners who bring insight, warmth, and consistency to our collaboration. Our interactions are always productive and enjoyable.`,
  },
  {
    id: 2,
    testiQuote: "/images/testi_icon2.png",
    testiImg:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "John White",
    testiDesignation: "Wake Forest University School of Business",
    testiDesc: `White Bridge is a valued and respected partner to the Wake Forest University School of Business, working to expand our brand presence and graduate program awareness in the highly competitive Indian market. They take the time to deeply understand our strategic priorities and convey them effectively. Their data-driven insights have been instrumental in guiding how we engage with a complex and dynamic graduate student population.`,
  },
  {
    id: 3,
    testiQuote: "/images/testi_icon2.png",
    testiImg:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Jordan Aird",
    testiDesignation: "University of Salford",
    testiDesc: `Here at the University of Salford, we are delighted with the services provided by White Bridge Education and are proud to be their first UK university partner. The vast amount of expertise, insight, and network across the continent support us daily in our student recruitment and partnership development goals. The team are extremely personable and always work collaboratively with us.`,
  },
  {
    id: 4,
    testiQuote: "/images/testi_icon2.png",
    testiImg:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Director of International Admissions",
    testiDesignation: "La Salle University",
    testiDesc: `As the Director of International Admissions at La Salle University, I recently had the privilege of visiting India alongside our trusted partners at White Bridge Education. WBE ensured the entire visit was thoughtfully organized and strategically planned. Their support was instrumental in facilitating productive conversations and strengthening La Salle University's presence in India.`,
  },
  {
    id: 5,
    testiQuote: "/images/testi_icon2.png",
    testiImg:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Event Participant",
    testiDesignation: "Summer Programs Fair",
    testiDesc: `As an educator and participant in the summer programs fair, I was extremely happy and impressed with the event in terms of the extent and quality of outreach, footfalls, internal arrangements and handling. The event served well what it set out to do - a dynamic platform for educational institutes and students.`,
  },
  {
    id: 6,
    testiQuote: "/images/testi_icon2.png",
    testiImg:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: "Education Partner",
    testiDesignation: "South Asia Region",
    testiDesc: `Possibly the highest quality bespoke student counselling service we have seen in South Asia. They understand cultural nuances and educational variations of schools and colleges in USA, Europe and developed Asia, thereby delivering the right match for their students with high-touch guidance.`,
  },
];

export default function Testimonial2() {
  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-10 mb-10">
          <div className="max-w-2xl text-left">
            <h5 className="text-PrimaryColor-0 font-semibold text-base uppercase tracking-wider mb-3">
              Testimonial
            </h5>
            <h2 className="text-PrimaryColor-0 font-bold text-2xl md:text-3xl lg:text-4xl leading-tight mb-4">
              Trusted By Leading <br /> Universities Worldwide
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-3xl leading-relaxed">
              Partnering with prestigious institutions to expand global
              education opportunities and student success
            </p>
          </div>

          {/* Rating Stats */}
          <div className="flex flex-col sm:flex-row items-center gap-4 border border-gray-200 rounded-2xl px-8 py-6">
            <div className="text-center sm:text-right pr-0 sm:pr-6 sm:border-r border-gray-200">
              <CountUp
                start={0}
                end={4.98}
                decimals={2}
                enableScrollSpy
                scrollSpyOnce
                duration={2.5}
                className="text-5xl md:text-6xl text-PrimaryColor-0 font-bold"
              />
            </div>
            <div className="text-center sm:text-left">
              <ul className="flex items-center justify-center sm:justify-start gap-1 mb-2">
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

        {/* Testimonials Below */}
        <div className="mt-8">
          <Swiper
            modules={[Autoplay]}
            loop
            spaceBetween={24}
            speed={900}
            centeredSlides
            grabCursor
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
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
    </section>
  );
}
