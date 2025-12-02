"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Service {
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    title: "In-Country Representation",
    description:
      "Establish a strong local presence in South Asia and the Middle East with our dedicated in-country representatives who understand regional dynamics.",
    image: "/Services/In-Country Representation.jpg",
  },
  {
    title: "Digital Marketing",
    description:
      "Leverage cutting-edge digital marketing strategies to reach prospective students across multiple channels.",
    image: "/Services/Digital Marketing.jpg",
  },
  {
    title: "TNE & Partnerships",
    description:
      "Build sustainable transnational education models and strategic institutional partnerships.",
    image: "/Services/TNE & Partnerships.jpg",
  },
  {
    title: "Advisory Services",
    description:
      "Access expert guidance on market entry strategies, enrollment optimization, and institutional growth planning.",
    image: "/Services/Advisory Services.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-8 md:py-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Centered Header */}
        <div className="mb-8 text-center">
          <h2 className="text-gray-900 font-bold text-2xl md:text-3xl lg:text-4xl">
            Our Services
          </h2>
        </div>

        {/* 2x2 Grid - Side by Side Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-lg p-4 md:p-5 flex flex-row gap-4 h-full">
                {/* Image Section - Left */}
                <div className="relative w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content Section - Right */}
                <div className="flex-1 flex flex-col min-w-0">
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-3 flex-1">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-gray-900 font-medium text-xs md:text-sm"
                  >
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
