"use client";

import Link from "next/link";
import Image from "next/image";
import { FaCircle } from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";

interface BlogCardProps {
  blogThumb: string;
  blogDateIcon: React.ReactNode;
  blogDate: string;
  blogPostBy: string;
  blogUrl: string;
  blogTitle: string;
  blogBtn: string;
  blogBtnIcon: React.ReactNode;
}

const BlogCard: React.FC<BlogCardProps> = ({
  blogThumb,
  blogDateIcon,
  blogDate,
  blogPostBy,
  blogUrl,
  blogTitle,
  blogBtn,
  blogBtnIcon,
}) => {
  return (
    <div className="group transition-all duration-500 rounded-lg bg-white shadow-shade">
      <div className="relative rounded-xl overflow-hidden before:absolute before:top-0 before:left-1/2 before:w-0 before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:w-full group-hover:before:left-0 before:z-10 group-hover:before:opacity-0">
        <Image
          src={blogThumb}
          alt={blogTitle}
          width={400}
          height={300}
          className="transition-all duration-500 scale-100 group-hover:scale-110 w-full"
        />
      </div>
      <div className="rounded-b-lg relative z-20 flex justify-center transition-all duration-500 px-5 sm:px-7 lg:px-5 2xl:px-[30px] pt-9 pb-6">
        <div>
          <div className="flex gap-6 mb-3">
            <p className="font-FiraSans text-white py-1 px-4 bg-PrimaryColor-0 inline-block rounded-r-full text-sm uppercase">
              {blogPostBy}
            </p>
            <p className="font-FiraSans text-TextColor2-0 flex gap-2 items-center leading-[15px]">
              <span className="text-PrimaryColor-0 text-[10px]">
                {blogDateIcon}
              </span>
              {blogDate}
            </p>
          </div>
          <Link href={blogUrl}>
            <button className="font-FiraSans text-left font-semibold text-lg sm:text-xl lg:text-base xl:text-xl 2xl:text-[22px] text-HeadingColor-0 mt-2 mb-5">
              {blogTitle}
            </button>
          </Link>
          <Link href={blogUrl} className="inline-block relative">
            <button className="flex items-center gap-2 font-FiraSans uppercase overflow-hidden font-medium text-sm">
              <span className="-ml-[76px] text-PrimaryColor-0 transition-all duration-500 group-hover:ml-0">
                {blogBtn}
              </span>
              <span className="text-[22px] text-PrimaryColor-0">
                {blogBtnIcon}
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const BlogData = [
  {
    id: 1,
    blogThumb: "/images/blog_01.png",
    blogDateIcon: <FaCircle />,
    blogDate: "04 Mar, 2024",
    blogPostBy: "TECHNOLOGY",
    blogUrl: "/blog_details",
    blogTitle: "Globally disintermediate exten services Planning",
    blogBtn: "Read More",
    blogBtnIcon: <BsArrowRight />,
  },
  {
    id: 2,
    blogThumb: "/images/blog_02.png",
    blogDateIcon: <FaCircle />,
    blogDate: "14 Mar, 2024",
    blogPostBy: "Business",
    blogUrl: "/blog_details",
    blogTitle: "Sustainability Consulting for Business Planning",
    blogBtn: "Read More",
    blogBtnIcon: <BsArrowRight />,
  },
  {
    id: 3,
    blogThumb: "/images/blog_03.png",
    blogDate: "24 Mar, 2024",
    blogDateIcon: <FaCircle />,
    blogPostBy: "Consulting",
    blogUrl: "/blog_details",
    blogTitle: "Consulting Industry changing Business Landscape",
    blogBtn: "Read More",
    blogBtnIcon: <BsArrowRight />,
  },
];

export default function Blog() {
  return (
    <section className="py-28 bg-[url(/images/blog_bg.png)] bg-cover bg-center bg-no-repeat">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-FiraSans font-medium text-sm sm:text-base text-PrimaryColor-0 uppercase flex items-center justify-center gap-2 mb-3">
            LATEST BLOG
          </h5>
          <h1 className="font-FiraSans font-semibold text-HeadingColor-0 text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[34px] lg:leading-[44px] xl:text-[42px] xl:leading-[52px]">
            Read Our Latest Insights from the
            <br />
            Latest Blog Articles
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-[56px]">
          {BlogData.map((blog) => (
            <div key={blog.id}>
              <BlogCard {...blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
