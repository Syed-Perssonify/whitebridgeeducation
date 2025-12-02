import React from "react";

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
      lat: 20.5937, // Center of India
      lng: 78.9629,
      alignment: "right",
    },
    {
      region: "Africa",
      lat: 9.1021, // Center of Africa continent
      lng: 18.2812,
      alignment: "left",
    },
    {
      region: "Middle East",
      lat: 29.0, // Approximate center of Middle East region
      lng: 47.0,
      alignment: "left",
    },
    {
      region: "Central Asia",
      lat: 48.0196, // Kazakhstan (Central Asia representative)
      lng: 66.9237,
      alignment: "right",
    },
    {
      region: "West Asia",
      lat: 38.9637, // Turkey (West Asia representative)
      lng: 35.2433,
      alignment: "right",
    },
  ];

  return (
    <section className="py-20 md:py-30 lg:py-50 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        {/* Title */}
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-12">
          Our Locations
        </h3>

        {/* Full Width World Map */}
        <div
          className="relative w-full bg-center bg-cover bg-no-repeat rounded-lg overflow-hidden"
          style={{
            backgroundImage:
              "url(https://cdn.grokglobal.com/wp-content/uploads/2023/05/img-world-map.png)",
            paddingBottom: "52%",
          }}
        >
          {/* Location Pins */}
          {locations.map((location, index) => {
            const position = convertToPosition(location.lat, location.lng);
            return (
              <div
                key={index}
                className="absolute group cursor-pointer z-10"
                style={{
                  top: position.top,
                  left: position.left,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {/* Pin Marker - No pulse effect */}
                <div className="relative">
                  <span className="relative inline-flex rounded-full h-5 w-5 bg-foreground border-2 border-background shadow-lg hover:scale-125 transition-transform duration-200"></span>
                </div>

                {/* Region Label - Shows on Hover */}
                <div
                  className={`absolute top-8 ${
                    location.alignment === "left" ? "left-0" : "right-0"
                  } opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20`}
                >
                  <div className="bg-background/95 backdrop-blur-sm border border-border rounded-lg px-4 py-3 shadow-xl whitespace-nowrap">
                    <h4 className="text-sm font-semibold text-foreground">
                      {location.region}
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorldMap;
