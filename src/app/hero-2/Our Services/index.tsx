"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

interface Service {
  title: string;
  description: string;
  image?: string;
}

const services: Service[] = [
  {
    title: "In-Country Representation",
    description:
      "Establish a strong local presence in South Asia and the Middle East with our dedicated in-country representatives who understand regional dynamics.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
  },
  {
    title: "Digital Marketing",
    description:
      "Leverage cutting-edge digital marketing strategies to reach prospective students across multiple channels.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    title: "TNE & Partnerships",
    description:
      "Build sustainable transnational education models and strategic institutional partnerships.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop",
  },
  {
    title: "Advisory Services",
    description:
      "Access expert guidance on market entry strategies, enrollment optimization, and institutional growth planning.",
    image: "/two-businessmen.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-8 md:py-10 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-6 text-left">
          <h2 className="text-PrimaryColor-0 font-bold text-2xl md:text-3xl lg:text-4xl mb-3">
            Our Services
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-3xl leading-relaxed">
            By partnering with WBE, your institution will gain access to a
            comprehensive suite of enrollment solutions tailored for global
            universities to enter and succeed in high growth markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col group-hover:-translate-y-1">
                {/* Image Section - Top */}
                {service.image && (
                  <div className="relative w-full h-36 md:h-40 lg:h-44 bg-gray-100 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                {/* Text Content Section - Bottom */}
                <div className="flex-1 p-4 md:p-5 flex flex-col">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-PrimaryColor-0 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3 flex-1">
                    {service.description}
                  </p>

                  {/* Action Element */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                    <span className="text-xs font-medium text-PrimaryColor-0 flex items-center gap-2">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Service Available
                    </span>
                    <button className="px-3 py-1.5 text-xs font-medium text-PrimaryColor-0 bg-gray-50 border border-gray-200 rounded-lg hover:bg-PrimaryColor-0 hover:text-white hover:border-PrimaryColor-0 transition-colors">
                      <Link href="/services">Learn More</Link>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
