"use client";

import { RotatingGlobeMap } from "./components/RotatingGlobeMap";
import { PinnedLocation } from "./types/PinnedLocation";

const defaultPinnedLocations: PinnedLocation[] = [
  {
    name: "India",
    coordinates: [78.9629, 20.5937],
    countries: ["IND"],
    flagColor: "#FF9933",
    description: "Market Entry Services Available",
  },
  {
    name: "Nepal",
    coordinates: [84.124, 28.3949],
    countries: ["NPL"],
    flagColor: "#DC143C",
    description: "Market Entry Services Available",
  },
  {
    name: "Bangladesh",
    coordinates: [90.3563, 23.685],
    countries: ["BGD"],
    flagColor: "#006A4E",
    description: "Market Entry Services Available",
  },
  {
    name: "Sri Lanka",
    coordinates: [80.7718, 7.8731],
    countries: ["LKA"],
    flagColor: "#8B0000",
    description: "Market Entry Services Available",
  },
  {
    name: "Africa",
    coordinates: [17.2137, -0.5],
    countries: [
      "DZA",
      "AGO",
      "BEN",
      "BWA",
      "BFA",
      "BDI",
      "CMR",
      "CPV",
      "CAF",
      "TCD",
      "COM",
      "COG",
      "COD",
      "CIV",
      "DJI",
      "EGY",
      "GNQ",
      "ERI",
      "ETH",
      "GAB",
      "GMB",
      "GHA",
      "GIN",
      "GNB",
      "KEN",
      "LSO",
      "LBR",
      "LBY",
      "MDG",
      "MWI",
      "MLI",
      "MRT",
      "MUS",
      "MAR",
      "MOZ",
      "NAM",
      "NER",
      "NGA",
      "RWA",
      "STP",
      "SEN",
      "SYC",
      "SLE",
      "SOM",
      "ZAF",
      "SSD",
      "SDN",
      "SWZ",
      "TZA",
      "TGO",
      "TUN",
      "UGA",
      "ZMB",
      "ZWE",
    ],
    flagColor: "#FF9933",
    description: "Market Entry Services Available",
  },
  {
    name: "Middle East",
    coordinates: [47.5769, 29.3117],
    countries: [
      "BHR",
      "IRQ",
      "JOR",
      "KWT",
      "LBN",
      "OMN",
      "QAT",
      "SAU",
      "SYR",
      "ARE",
      "YEM",
    ],
    flagColor: "#00732F",
    description: "Market Entry Services Available",
  },
  {
    name: "Central Asia",
    coordinates: [66.9237, 48.0196],
    countries: ["KAZ", "KGZ", "TJK", "TKM", "UZB"],
    flagColor: "#00AFCA",
    description: "Market Entry Services Available",
  },
  {
    name: "West Asia",
    coordinates: [50.5821, 40.1431],
    countries: ["ARM", "AZE", "GEO", "TUR"],
    flagColor: "#DC143C",
    description: "Market Entry Services Available",
  },
];

export default function RotatingGlobeExample() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-3">
            Version 4 - Rotating Globe
          </h1>
          <p className="text-lg text-gray-400">
            Watch the globe rotate and hover over graduation caps to explore
            regions
          </p>
        </div>

        {/* Globe Container */}
        <div
          className="w-full rounded-xl overflow-hidden border border-gray-700"
          style={{
            height: "600px",
            backgroundColor: "#0a0a0a",
          }}
        >
          <RotatingGlobeMap
            pinnedLocations={defaultPinnedLocations}
            capColor="#ffffff"
          />
        </div>
      </div>
    </div>
  );
}
