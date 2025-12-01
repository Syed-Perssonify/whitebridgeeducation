"use client";

import { WorldMap } from "@/components/map";

export default function WorldMapPage4() {
  return (
    <div className="py-4 md:py-6 bg-white w-full">
      <div className="container mx-auto px-6">
        <div className="mb-4 text-left">
          <h4 className="text-PrimaryColor-0 font-bold text-xl md:text-2xl lg:text-3xl">
            Regions We Serve:{" "}
            <span className="text-gray-600">
              Expanding Global Education Reach Across
            </span>
          </h4>
        </div>
        <div className="w-full">
          <WorldMap
            dots={[
              {
                start: {
                  lat: 64.2008,
                  lng: -149.4937,
                  label: "Fairbanks",
                },
                end: {
                  lat: 34.0522,
                  lng: -118.2437,
                  label: "Los Angeles",
                },
              },
              {
                start: {
                  lat: 64.2008,
                  lng: -149.4937,
                  label: "Fairbanks",
                },
                end: {
                  lat: -15.7975,
                  lng: -47.8919,
                  label: "Brasília",
                },
              },
              {
                start: {
                  lat: -15.7975,
                  lng: -47.8919,
                  label: "Brasília",
                },
                end: {
                  lat: 38.7223,
                  lng: -9.1393,
                  label: "Lisbon",
                },
              },
              {
                start: {
                  lat: 51.5074,
                  lng: -0.1278,
                  label: "London",
                },
                end: {
                  lat: 28.6139,
                  lng: 77.209,
                  label: "New Delhi",
                },
              },
              {
                start: {
                  lat: 28.6139,
                  lng: 77.209,
                  label: "New Delhi",
                },
                end: {
                  lat: 43.1332,
                  lng: 131.9113,
                  label: "Vladivostok",
                },
              },
              {
                start: {
                  lat: 28.6139,
                  lng: 77.209,
                  label: "New Delhi",
                },
                end: {
                  lat: -1.2921,
                  lng: 36.8219,
                  label: "Nairobi",
                },
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
