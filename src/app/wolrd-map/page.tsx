import React from "react";
import { MapPin } from "lucide-react";

interface LocationPin {
  region: string;
  lat: number;
  lng: number;
  alignment: "left" | "right";
}

const WorldMap: React.FC = () => {
  // Convert lat/lng to percentage position on map
  const convertToPosition = (lat: number, lng: number) => {
    // Map projection: convert lat/lng to x/y percentage
    // Longitude: -180 to 180 => 0% to 100%
    const x = ((lng + 180) / 360) * 100;
    // Latitude: 90 to -90 => 0% to 100% (inverted)
    const y = ((90 - lat) / 180) * 100;
    return { top: `${y}%`, left: `${x}%` };
  };

  const locations: LocationPin[] = [
    {
      region: "India",
      lat: 20.5937,
      lng: 78.9629,
      alignment: "right",
    },
    {
      region: "Africa",
      lat: 9.1021,
      lng: 18.2812,
      alignment: "left",
    },
    {
      region: "Middle East",
      lat: 29.0,
      lng: 47.0,
      alignment: "left",
    },
    {
      region: "Central Asia",
      lat: 48.0196,
      lng: 66.9237,
      alignment: "right",
    },
    {
      region: "West Asia",
      lat: 38.9637,
      lng: 35.2433,
      alignment: "right",
    },
  ];

  return (
    <section className="relative py-20 md:py-30 lg:py-50 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background -z-10"></div>

      <div className="container max-w-7xl mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-12 lg:mb-16">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent mb-4">
            Our Global Presence
          </h3>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            Connecting institutions across continents with strategic locations
            worldwide
          </p>
        </div>

        {/* World Map Container */}
        <div className="relative">
          {/* Map Background with Border */}
          <div className="relative w-full rounded-2xl overflow-hidden border border-border/50 bg-gradient-to-br from-background to-muted/20 shadow-2xl backdrop-blur-sm">
            <div
              className="relative w-full bg-center bg-contain bg-no-repeat"
              style={{
                backgroundImage:
                  "url(https://cdn.grokglobal.com/wp-content/uploads/2023/05/img-world-map.png)",
                paddingBottom: "56.25%",
              }}
            >
              {/* Location Pins */}
              {locations.map((location, index) => {
                const position = convertToPosition(location.lat, location.lng);
                return (
                  <div
                    key={index}
                    className="absolute group z-10"
                    style={{
                      top: position.top,
                      left: position.left,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {/* Animated Pulse Ring */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="absolute inline-flex h-8 w-8 rounded-full bg-primary/30 animate-ping"></span>
                    </div>

                    {/* Pin Marker */}
                    <div className="relative cursor-pointer">
                      <div className="relative flex items-center justify-center">
                        {/* Outer Glow */}
                        <div className="absolute h-10 w-10 bg-primary/20 rounded-full blur-md group-hover:bg-primary/40 transition-all duration-300"></div>

                        {/* Pin Circle */}
                        <div className="relative h-7 w-7 bg-gradient-to-br from-primary to-primary/80 rounded-full border-3 border-background shadow-lg flex items-center justify-center group-hover:scale-125 transition-all duration-300">
                          {/* Inner Dot */}
                          <div className="h-2 w-2 bg-background rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    {/* Region Label - Shows on Hover */}
                    <div
                      className={`absolute top-10 ${
                        location.alignment === "left" ? "left-0" : "right-0"
                      } opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20 group-hover:translate-y-0 translate-y-2`}
                    >
                      <div className="relative">
                        {/* Arrow */}
                        <div
                          className={`absolute -top-1 ${
                            location.alignment === "left" ? "left-4" : "right-4"
                          } w-2 h-2 bg-background border-l border-t border-border rotate-45 transform`}
                        ></div>

                        {/* Label */}
                        <div className="bg-background/98 backdrop-blur-md border border-border rounded-lg px-5 py-3 shadow-2xl">
                          <h4 className="text-sm font-bold text-foreground flex items-center gap-2 whitespace-nowrap">
                            <MapPin className="h-4 w-4 text-primary" />
                            {location.region}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"></div>
        </div>

        {/* Location Cards Below Map */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {locations.map((location, index) => (
            <div
              key={index}
              className="group cursor-pointer p-4 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              <div className="flex items-center justify-center mb-2">
                <div className="h-3 w-3 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
              </div>
              <p className="text-sm font-semibold text-foreground">
                {location.region}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorldMap;
