"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { GoShareAndroid } from "react-icons/go";

interface TeamCardProps {
  teamThumb: string;
  teamTitle: string;
  teamDesc: string;
  teamShare: React.ReactNode;
  socialIcon: React.ReactNode;
  socialIcon2: React.ReactNode;
  socialIcon3: React.ReactNode;
  teamShape: string;
}

function TeamCard({
  teamThumb,
  teamTitle,
  teamDesc,
  teamShare,
  socialIcon,
  socialIcon2,
  socialIcon3,
  teamShape,
}: TeamCardProps) {
  return (
    <div className="group relative bg-white rounded-md">
      <div className="relative z-20 overflow-hidden rounded bg-white">
        <Image
          src={teamThumb}
          alt={teamTitle}
          width={300}
          height={350}
          className="w-full xl:w-[inherit] m-auto object-cover"
          style={{
            mixBlendMode: "multiply",
          }}
        />
        <div className="absolute z-30 top-5 right-5">
          <Link href="/">
            <button className="size-[42px] flex justify-center items-center rounded-full overflow-hidden relative bg-[#ff9307] text-white text-xl">
              {teamShare}
            </button>
          </Link>
        </div>
        <ul>
          <li className="absolute z-20 top-5 right-[24px] transition-all duration-300 group-hover:top-[72px]">
            <Link href="/">
              <button className="size-9 text-sm flex justify-center items-center rounded-full overflow-hidden relative bg-[#ff9307] text-white z-10">
                {socialIcon}
              </button>
            </Link>
          </li>
          <li className="absolute z-20 top-5 right-[24px] transition-all duration-500 group-hover:top-[119px]">
            <Link href="/">
              <button className="size-9 text-sm flex justify-center items-center rounded-full overflow-hidden relative bg-[#ff9307] text-white z-10">
                {socialIcon2}
              </button>
            </Link>
          </li>
          <li className="absolute z-20 top-5 right-[24px] transition-all duration-700 group-hover:top-[166px]">
            <Link href="/">
              <button className="size-9 text-sm flex justify-center items-center rounded-full overflow-hidden relative bg-[#ff9307] text-white z-10">
                {socialIcon3}
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="relative shadow-shades transition-all duration-500 text-center pt-[22px] pb-7 z-10">
        <h5 className="font-FiraSans font-medium text-[22px] text-HeadingColor-0 pb-[2px]">
          {teamTitle}
        </h5>
        <p className="font-FiraSans text-TextColor2-0">{teamDesc}</p>
      </div>
      <div className="absolute -z-50 left-1/2 -translate-x-1/2 bottom-0 transition-all duration-500 group-hover:-bottom-8">
        <Image
          src={teamShape}
          alt=""
          width={100}
          height={100}
          draggable={false}
          className="max-w-[inherit]"
        />
      </div>
    </div>
  );
}

interface TeamData {
  id: number;
  teamThumb: string;
  teamTitle: string;
  teamShare: React.ReactNode;
  socialIcon: React.ReactNode;
  socialIcon2: React.ReactNode;
  socialIcon3: React.ReactNode;
  teamDesc: string;
  teamShape: string;
}

export default function TeamMember() {
  const teamData: TeamData[] = [
    {
      id: 1,
      teamThumb: "/team/1.png",
      teamTitle: "Kimberly Dixit",
      teamShare: <GoShareAndroid />,
      socialIcon: <FaFacebookF />,
      socialIcon2: <FaXTwitter />,
      socialIcon3: <FaLinkedinIn />,
      teamDesc: "Co‑Founder & Executive Director, White Bridge Education",
      teamShape: "/images/team-dot.png",
    },
    {
      id: 2,
      teamThumb: "/team/2.png",
      teamTitle: "Preeti Wadekar",
      teamShare: <GoShareAndroid />,
      socialIcon: <FaFacebookF />,
      socialIcon2: <FaXTwitter />,
      socialIcon3: <FaLinkedinIn />,
      teamDesc: "Co‑Founder & CEO; Leads MBA Admissions at The Red Pen",
      teamShape: "/images/team-dot.png",
    },
    {
      id: 3,
      teamThumb: "/team/3.png",
      teamTitle: "Shruti Khanna",
      teamShare: <GoShareAndroid />,
      socialIcon: <FaFacebookF />,
      socialIcon2: <FaXTwitter />,
      socialIcon3: <FaLinkedinIn />,
      teamDesc: "Director, Global Accounts – Partnerships & Growth",
      teamShape: "/images/team-dot.png",
    },
    {
      id: 4,
      teamThumb: "/team/4.png",
      teamTitle: "Namita Mehta",
      teamShare: <GoShareAndroid />,
      socialIcon: <FaFacebookF />,
      socialIcon2: <FaXTwitter />,
      socialIcon3: <FaLinkedinIn />,
      teamDesc: "Co‑Founder & Executive Director; UG Admissions Strategist",
      teamShape: "/images/team-dot.png",
    },
  ];

  return (
    <section className="py-28 relative z-10">
      <div className="absolute -z-10 top-10 left-1/2 -translate-x-1/2">
        <Image
          src="/images/team_rotate.png"
          alt=""
          width={200}
          height={200}
          draggable={false}
          className="max-w-[inherit] w-[inherit]"
        />
      </div>
      <div className="Container">
        <div className="text-center">
          <h1 className="font-FiraSans font-semibold text-PrimaryColor-0 text-lg sm:text-2xl md:text-3xl lg:text-4xl mb-4">
            MEET OUR TEAM
          </h1>
          <h2 className="font-FiraSans font-semibold text-HeadingColor-0 text-xl text-center pb-2">
            30+ YEARS OF INSIGHT,
            <br /> IMPACT & CREDIBILITY IN GLOBAL EDUCATION
          </h2>
          <p className="font-FiraSans text-TextColor2-0 pt-4 max-w-3xl mx-auto  ">
            With over 30 years of collective experience in counselling students
            around the world on global best-fit universities and programs,{" "}
            <br /> White Bridge Education is founded to expand the reach of
            global education across the length and breadth high-growth markets
            such as South Asia and the Middle East
          </p>

          {/* <div className="absolute -z-10 top-36 left-[22%] hidden 2xl:block animate-rotate">
            <Image
              src="/images/tir.png"
              alt=""
              width={80}
              height={80}
              draggable={false}
            />
          </div> */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-8 mt-[58px]">
          {teamData.map(
            ({
              id,
              teamThumb,
              teamTitle,
              teamShare,
              socialIcon,
              socialIcon2,
              socialIcon3,
              teamDesc,
              teamShape,
            }) => {
              return (
                <div key={id}>
                  <TeamCard
                    teamThumb={teamThumb}
                    teamTitle={teamTitle}
                    teamShare={teamShare}
                    socialIcon={socialIcon}
                    socialIcon2={socialIcon2}
                    socialIcon3={socialIcon3}
                    teamDesc={teamDesc}
                    teamShape={teamShape}
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
