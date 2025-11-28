"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const MarketsData = [
  {
    id: 1,
    regionIcon: "/images/steps_1.png",
    regionFlag: "🇮🇳",
    regionTitle: "India",
    regionDesc:
      "Our largest market with 10,000+ students counseled across all education levels. Strong presence in major cities including Mumbai, Delhi, Bangalore, and Hyderabad.",
    regionUrl: "/markets/india",
  },
  {
    id: 2,
    regionIcon: "/images/steps_2.png",
    regionFlag: "🇦🇪",
    regionTitle: "United Arab Emirates",
    regionDesc:
      "150+ partnerships established with leading universities. Strategic hub for Middle East operations serving students from across the GCC region.",
    regionUrl: "/markets/uae",
  },
  {
    id: 3,
    regionIcon: "/images/steps_3.png",
    regionFlag: "🇸🇦",
    regionTitle: "Saudi Arabia",
    regionDesc:
      "Rapidly expanding market with growing demand for international education. Active partnerships with top-tier institutions and government entities.",
    regionUrl: "/markets/saudi-arabia",
  },
  {
    id: 4,
    regionIcon: "/images/steps_1.png",
    regionFlag: "🇳🇵",
    regionTitle: "Nepal",
    regionDesc:
      "Established network connecting students to global opportunities. Strong relationships with educational institutions and counseling centers across the region.",
    regionUrl: "/markets/nepal",
  },
  {
    id: 5,
    regionIcon: "/images/steps_2.png",
    regionFlag: "🇱🇰",
    regionTitle: "Sri Lanka",
    regionDesc:
      "Growing market with increasing demand for quality international education. Strategic partnerships supporting student recruitment initiatives.",
    regionUrl: "/markets/sri-lanka",
  },
  {
    id: 6,
    regionIcon: "/images/steps_3.png",
    regionFlag: "OC",
    regionTitle: "Other GCC Countries",
    regionDesc:
      "Comprehensive coverage across Kuwait, Qatar, Oman, and Bahrain. Serving diverse student populations with tailored enrollment solutions.",
    regionUrl: "/markets/gcc",
  },
];

interface MarketCardProps {
  regionIcon: string;
  regionFlag: string;
  regionTitle: string;
  regionDesc: string;
  regionUrl: string;
}

function MarketCard({
  regionIcon,
  regionFlag,
  regionTitle,
  regionDesc,
  regionUrl,
}: MarketCardProps) {
  return (
    <div className="feature8-box flex flex-col sm:flex-row gap-8 rounded-md bg-transparent group relative z-10">
      <div className="feature8-icon size-[100px] lg:size-[60px] xl:size-[100px] rounded-full rounded-se-md bg-[#cd553b] relative transition-all duration-500 flex justify-center items-center z-10 overflow-hidden group-hover:rounded-se-full">
        <span
          className="text-4xl lg:text-3xl xl:text-4xl text-white"
          role="img"
          aria-label={`${regionTitle} flag`}
        >
          {regionFlag}
        </span>
      </div>
      <div className="flex-1 overflow-hidden relative -mt-1">
        <h5 className="font-FiraSans font-medium text-HeadingColor-0 text-xl sm:text-[22px] lg:text-lg xl:text-[22px] pb-3">
          {regionTitle}
        </h5>
        <p className="font-FiraSans text-[15px] text-TextColor2-0">
          {regionDesc}
        </p>
        <div className="inline-block mt-4">
          <Link href={regionUrl}>
            <button className="font-FiraSans overflow-hidden flex gap-2 items-center text-HeadingColor-0">
              <span className="-ml-[84px] transition-all duration-500 group-hover:ml-0">
                Read More
              </span>
              <span className="text-HeadingColor-0 text-xl">
                <FaArrowRightLong />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Markets() {
  return (
    <section
      id="markets"
      className="pt-28 pb-[120px] relative bg-white feature8"
    >
      <div className="Container">
        <div className="text-center">
          <h1 className="font-FiraSans font-semibold text-PrimaryColor-0 text-lg sm:text-2xl md:text-3xl lg:text-4xl mb-4">
            MARKETS / REGIONS WE SERVE
          </h1>
          <h2 className="font-FiraSans font-semibold text-HeadingColor-0 text-xl text-center pb-2">
            Expanding Access in High-Growth Regions
          </h2>
          <p className="font-FiraSans text-sm text-TextColor2-0 max-w-3xl mx-auto mt-4 leading-relaxed">
            With deep expertise and established networks, we connect
            universities to exceptional students across South Asia and the
            Middle East, driving enrollment success in the world&apos;s
            fastest-growing education markets.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:items-center lg:grid-cols-3 gap-7 mt-10 features8-box">
          {MarketsData.map(
            ({
              id,
              regionIcon,
              regionFlag,
              regionTitle,
              regionDesc,
              regionUrl,
            }) => {
              return (
                <div key={id}>
                  <MarketCard
                    regionIcon={regionIcon}
                    regionFlag={regionFlag}
                    regionTitle={regionTitle}
                    regionDesc={regionDesc}
                    regionUrl={regionUrl}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
