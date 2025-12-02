"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ServiceCard {
  title: string;
  description: string;
  image: string;
  colSpan: string; // "md:col-span-2" or "md:col-span-3"
}

const Services3: React.FC = () => {
  const services: ServiceCard[] = [
    {
      title: "In-Country Representation",
      description:
        "Establish a strong local presence in South Asia and the Middle East with our dedicated in-country representatives who understand regional dynamics.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      colSpan: "md:col-span-2",
    },
    {
      title: "Digital Marketing",
      description:
        "Leverage cutting-edge digital marketing strategies to reach prospective students across multiple channels.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
      colSpan: "md:col-span-3",
    },
    {
      title: "TNE & Partnerships",
      description:
        "Build sustainable transnational education models and strategic institutional partnerships.",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=600&fit=crop",
      colSpan: "md:col-span-3",
    },
    {
      title: "Advisory Services",
      description:
        "Access expert guidance on market entry strategies, enrollment optimization, and institutional growth planning.",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop",
      colSpan: "md:col-span-2",
    },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-5">
            Our Services
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
            By partnering with WBE, your institution will gain access to a
            comprehensive suite of enrollment solutions tailored for global
            universities to enter and succeed in high growth markets.
          </p>
        </motion.div>

        {/* Services Grid - Asymmetric Layout */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-5 md:items-stretch">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-accent flex flex-col justify-between rounded-lg h-full ${service.colSpan}`}
            >
              {/* Image */}
              <div className="relative w-full h-64 md:h-72 overflow-hidden flex-shrink-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 40vw, 30vw"
                />
              </div>

              {/* Text Content */}
              <div className="p-6">
                <p className="mb-3 text-lg font-semibold text-gray-900">
                  {service.title}
                </p>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services3;
