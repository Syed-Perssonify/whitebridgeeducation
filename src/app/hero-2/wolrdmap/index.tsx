"use client";

import { WorldMap } from "@/components/map";

export default function WorldMapPage3() {
  return (
    <div className="py-4 md:py-6 bg-white w-full">
      <div className="container mx-auto px-6">
        <div className="mb-4 text-center">
          <h4 className="text-gray-900 font-bold text-xl md:text-2xl lg:text-3xl">
            Markets/Regions we serve
          </h4>
        </div>
        <div className="w-full">
          <WorldMap
            dots={[
              {
                start: {
                  lat: -11.0,
                  lng: 18.2812,
                  label: "Africa",
                },
                end: {
                  lat: 6.0,
                  lng: 47.0,
                  label: "Middle East",
                },
              },
              {
                start: {
                  lat: 10.0,
                  lng: 79.0,
                  label: "New Delhi",
                },
                end: {
                  lat: 35.0,
                  lng: 20.0,
                  label: "Central Asia",
                },
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
