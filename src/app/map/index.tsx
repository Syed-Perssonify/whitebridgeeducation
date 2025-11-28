import { World } from "@/components/ui/globe";
import { WorldMap } from "../(home5)/worldMap";

export default function MapPage() {
  return (
    <div className="w-full h-screen">
      <World globeConfig={globeConfig} data={data} />
    </div>
  );
}

const globeConfig = {
  pointSize: 4,
  atmosphereColor: "#ffffff",
  showAtmosphere: true,
  atmosphereAltitude: 0.1,
  polygonColor: "rgba(255,255,255,0.7)",
  globeColor: "#1d072e",
  emissive: "#000000",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  arcTime: 2000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
};

const data = [
  // South Asia - India
  {
    order: 1,
    startLat: 20.5937,
    startLng: 78.9629,
    endLat: 20.5937,
    endLng: 78.9629,
    arcAlt: 0.1,
    color: "#ffffff",
  },
  // South Asia - Nepal
  {
    order: 2,
    startLat: 28.3949,
    startLng: 84.124,
    endLat: 28.3949,
    endLng: 84.124,
    arcAlt: 0.1,
    color: "#ffffff",
  },
  // South Asia - Bangladesh
  {
    order: 3,
    startLat: 23.685,
    startLng: 90.3563,
    endLat: 23.685,
    endLng: 90.3563,
    arcAlt: 0.1,
    color: "#ffffff",
  },
  // South Asia - Sri Lanka
  {
    order: 4,
    startLat: 7.8731,
    startLng: 80.7718,
    endLat: 7.8731,
    endLng: 80.7718,
    arcAlt: 0.1,
    color: "#ffffff",
  },
  // Middle East
  {
    order: 5,
    startLat: 25.0,
    startLng: 45.0,
    endLat: 25.0,
    endLng: 45.0,
    arcAlt: 0.1,
    color: "#ffffff",
  },
  // Africa
  {
    order: 6,
    startLat: 0.0,
    startLng: 20.0,
    endLat: 0.0,
    endLng: 20.0,
    arcAlt: 0.1,
    color: "#ffffff",
  },
  // Central Asia
  {
    order: 7,
    startLat: 45.0,
    startLng: 65.0,
    endLat: 45.0,
    endLng: 65.0,
    arcAlt: 0.1,
    color: "#ffffff",
  },
  // West Asia
  {
    order: 8,
    startLat: 35.0,
    startLng: 45.0,
    endLat: 35.0,
    endLng: 45.0,
    arcAlt: 0.1,
    color: "#ffffff",
  },
];
