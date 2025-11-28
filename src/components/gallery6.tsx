"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface GalleryItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}

interface Gallery6Props {
  heading?: string;
  subheading?: string;
  items?: GalleryItem[];
}

const Gallery6 = ({
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
}: Gallery6Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  // Create autoplay plugin instance
  const autoplayPlugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };

    updateSelection();
    carouselApi.on("select", updateSelection);
    carouselApi.on("reInit", updateSelection);

    return () => {
      carouselApi.off("select", updateSelection);
      carouselApi.off("reInit", updateSelection);
    };
  }, [carouselApi]);
  return (
    <section className="py-16 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header with Arrows on Right */}
        <div className="mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-[#2a2b76] font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
                {heading}
              </h2>
              <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0">
                {subheading}
              </p>
            </div>

            {/* Navigation Arrows - Right Side */}
            <div className="flex justify-center md:justify-end items-center gap-3">
              <Button
                size="icon"
                variant="outline"
                onClick={() => carouselApi?.scrollPrev()}
                disabled={!canScrollPrev}
                className="w-12 h-12 rounded-full border-2 border-[#2a2b76] text-[#2a2b76] hover:bg-[#2a2b76] hover:text-white transition-all disabled:opacity-30"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                onClick={() => carouselApi?.scrollNext()}
                disabled={!canScrollNext}
                className="w-12 h-12 rounded-full border-2 border-[#2a2b76] text-[#2a2b76] hover:bg-[#2a2b76] hover:text-white transition-all disabled:opacity-30"
              >
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Carousel - Centered */}
        <div className="w-full">
          <Carousel
            setApi={setCarouselApi}
            plugins={[autoplayPlugin.current]}
            opts={{
              align: "start",
              loop: true,
              dragFree: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-6">
              {items.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="pl-6 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <a
                    href={item.url}
                    className="group block transition-transform duration-300 hover:-translate-y-2"
                  >
                    {/* Image Only - Clean */}
                    <div className="relative aspect-[4/3] overflow-hidden mb-4 bg-white flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-gray-900 font-semibold text-base md:text-lg mb-2 line-clamp-2 leading-snug group-hover:text-[#2a2b76] transition-colors">
                      {item.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-gray-600 text-sm line-clamp-2 mb-3 leading-relaxed">
                      {item.summary}
                    </p>

                    {/* Read More Link */}
                    <div className="flex items-center text-sm font-medium text-[#2a2b76]">
                      Read more
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export { Gallery6 };
