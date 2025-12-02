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
              // 1. India to Middle East
              {
                start: {
                  lat: 8.0,
                  lng: 80.0,
                  label: "India",
                },
                end: {
                  lat: 6.0,
                  lng: 47.0,
                  label: "Middle East",
                },
              },
              // 2. Middle East to Africa
              {
                start: {
                  lat: 6.0,
                  lng: 47.0,
                  label: "",
                },
                end: {
                  lat: -11.0,
                  lng: 18.2812,
                  label: "Africa",
                },
              },
              // 3. India to Bangladesh
              {
                start: {
                  lat: 8.0,
                  lng: 80.0,
                  label: "",
                },
                end: {
                  lat: 18.0,
                  lng: 95.0,
                  label: "Bangladesh",
                },
              },
              // 4. India to Sri Lanka
              {
                start: {
                  lat: 8.0,
                  lng: 80.0,
                  label: "",
                },
                end: {
                  lat: -7.0,
                  lng: 85.0,
                  label: "Sri Lanka",
                },
              },
              // 5. Middle East to Central Asia
              {
                start: {
                  lat: 6.0,
                  lng: 47.0,
                  label: "",
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
