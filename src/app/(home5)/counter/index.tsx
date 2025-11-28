"use client";

import { NumberTicker } from "@/common/element/number-ticker";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

export default function Counter() {
  return (
    <section className="border-b border-BorderColor-0">
      <div className="Container">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-0 lg:grid-cols-3 items-center justify-center">
          <div className="relative flex items-center justify-center gap-7 py-[56px]">
            <div>
              <span className="font-FiraSans text-3xl leading-[22px] sm:text-[50px] sm:leading-[42px] xl:text-[60px] xl:leading-[52px] text-HeadingColor-0 font-medium">
                <NumberTicker
                  value={5}
                  startValue={0}
                  className="font-FiraSans text-3xl leading-[22px] sm:text-[50px] sm:leading-[42px] xl:text-[60px] xl:leading-[52px] text-HeadingColor-0 font-medium"
                />
                K+
              </span>
            </div>
            <p className="font-FiraSans text-lg text-TextColor2-0 capitalize">
              Completed Works <br /> with Satisfaction
            </p>
          </div>
          <div className="relative border-x border-Secondarycolor-0 border-opacity-10 flex items-center justify-center gap-7 py-[56px]">
            <div>
              <span className="font-FiraSans text-3xl leading-[22px] sm:text-[50px] sm:leading-[42px] xl:text-[60px] xl:leading-[52px] text-HeadingColor-0 font-medium">
                4.
                <NumberTicker
                  value={98}
                  startValue={0}
                  decimalPlaces={0}
                  className="font-FiraSans text-3xl leading-[22px] sm:text-[50px] sm:leading-[42px] xl:text-[60px] xl:leading-[52px] text-HeadingColor-0 font-medium"
                />
              </span>
            </div>
            <div>
              <ul className="flex items-center gap-1">
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
              <p className="font-FiraSans text-lg text-TextColor2-0 capitalize mt-2">
                Avg. Clients Ratings
              </p>
            </div>
          </div>
          <div className="relative flex items-center justify-center gap-7 py-[56px]">
            <div>
              <span className="font-FiraSans text-3xl leading-[22px] sm:text-[50px] sm:leading-[42px] xl:text-[60px] xl:leading-[52px] text-HeadingColor-0 font-medium">
                <NumberTicker
                  value={99}
                  startValue={0}
                  className="font-FiraSans text-3xl leading-[22px] sm:text-[50px] sm:leading-[42px] xl:text-[60px] xl:leading-[52px] text-HeadingColor-0 font-medium"
                />
                %
              </span>
            </div>
            <p className="font-FiraSans text-lg text-TextColor2-0 capitalize">
              Track and analyze <br /> business reports.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
