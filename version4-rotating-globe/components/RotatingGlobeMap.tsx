"use client";

import { useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Sphere,
} from "react-simple-maps";
import { GraduationCap } from "lucide-react";
import { PinnedLocation } from "../types/PinnedLocation";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface RotatingGlobeMapProps {
  pinnedLocations: PinnedLocation[];
  showTooltip?: boolean;
  className?: string;
  capColor?: string;
}

export const RotatingGlobeMap = ({
  pinnedLocations,
  showTooltip = true,
  className = "",
  capColor = "#ffffff",
}: RotatingGlobeMapProps) => {
  const [rotation, setRotation] = useState(0);
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  // Create a set of highlighted country codes
  const highlightedCountries = new Set(
    pinnedLocations.flatMap((loc) => loc.countries)
  );

  // Create a map of country code to flag color
  const countryColorMap = new Map(
    pinnedLocations.flatMap((loc) =>
      loc.countries.map((country) => [country, loc.flagColor])
    )
  );

  // Rotation animation
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.2) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleMarkerHover = (
    location: PinnedLocation,
    event: React.MouseEvent
  ) => {
    setHoveredLocation(location.name);
    setTooltipPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleMarkerLeave = () => {
    setHoveredLocation(null);
  };

  const isCountryHighlighted = (geoId: string) => {
    return highlightedCountries.has(geoId);
  };

  const getCountryColor = (geoId: string) => {
    return countryColorMap.get(geoId);
  };

  return (
    <div className={`relative w-full h-full ${className}`}>
      <ComposableMap
        projection="geoOrthographic"
        projectionConfig={{
          rotate: [-rotation, -20, 0],
          scale: 200,
          center: [0, 0],
        }}
        className="w-full h-full"
        style={{ width: "100%", height: "100%" }}
      >
        <Sphere stroke="#2a2a2a" strokeWidth={0.5} fill="#0a0a0a" />
        <Geographies geography={geoUrl}>
          {({
            geographies,
          }: {
            geographies: Array<{ id: string; rsmKey: string }>;
          }) =>
            geographies.map((geo: { id: string; rsmKey: string }) => {
              const geoId = geo.id;
              const isHighlighted = isCountryHighlighted(geoId);
              const flagColor = getCountryColor(geoId);

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isHighlighted ? `${flagColor}15` : "#1a1a1a"}
                  stroke={isHighlighted ? flagColor : "#2a2a2a"}
                  strokeWidth={isHighlighted ? 2.5 : 0.3}
                  className={isHighlighted ? "animated-country-border" : ""}
                  style={{
                    default: {
                      outline: "none",
                      strokeDasharray: isHighlighted ? "5,5" : "none",
                      animation: isHighlighted
                        ? "dash 20s linear infinite"
                        : "none",
                    },
                    hover: {
                      fill: isHighlighted ? `${flagColor}35` : "#1a1a1a",
                      stroke: isHighlighted ? flagColor : "#2a2a2a",
                      strokeWidth: isHighlighted ? 3 : 0.3,
                      outline: "none",
                      transition: "all 0.3s ease",
                      opacity: isHighlighted ? 1 : 0.8,
                    },
                    pressed: {
                      fill: isHighlighted ? `${flagColor}35` : "#1a1a1a",
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>

        {pinnedLocations.map((location) => (
          <Marker
            key={location.name}
            coordinates={location.coordinates}
            onMouseEnter={(e: React.MouseEvent) =>
              handleMarkerHover(location, e)
            }
            onMouseLeave={handleMarkerLeave}
            style={{ cursor: "pointer" }}
          >
            <foreignObject
              x={-14}
              y={-28}
              width={28}
              height={28}
              className={`transition-all duration-300 ${
                hoveredLocation === location.name ? "scale-125" : "scale-100"
              }`}
            >
              <div className="flex items-center justify-center w-full h-full">
                <GraduationCap
                  size={28}
                  color={capColor}
                  fill={capColor}
                  strokeWidth={1.5}
                  className={`transition-all duration-300 ${
                    hoveredLocation === location.name
                      ? "drop-shadow-[0_4px_12px_rgba(255,255,255,0.6)]"
                      : "drop-shadow-[0_2px_4px_rgba(255,255,255,0.3)]"
                  }`}
                />
              </div>
            </foreignObject>
          </Marker>
        ))}
      </ComposableMap>

      {/* Tooltip */}
      {showTooltip && hoveredLocation && (
        <div
          className="fixed z-50 pointer-events-none"
          style={{
            left: tooltipPosition.x + 15,
            top: tooltipPosition.y - 10,
          }}
        >
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg px-4 py-3 max-w-xs">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
              {hoveredLocation}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {pinnedLocations.find((loc) => loc.name === hoveredLocation)
                ?.description || "Market Entry Services Available"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
