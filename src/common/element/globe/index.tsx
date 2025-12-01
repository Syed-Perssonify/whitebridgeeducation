"use client";

import { useEffect, useRef, useState } from "react";
import { Color, Scene, Fog, PerspectiveCamera, Vector3 } from "three";
import ThreeGlobe from "three-globe";
import { useThree, useFrame, Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import countries from "@/data/globe.json";

declare module "@react-three/fiber" {
  interface ThreeElements {
    threeGlobe: ThreeElements["mesh"] & {
      new (): ThreeGlobe;
    };
  }
}

extend({ ThreeGlobe: ThreeGlobe });

const RING_PROPAGATION_SPEED = 4;
const aspect = 1.2;
const cameraZ = 300;

// Region definitions for highlighting
const REGION_COUNTRIES: Record<string, string[]> = {
  southAsia: [
    "India",
    "Nepal",
    "Bangladesh",
    "Sri Lanka",
    "Pakistan",
    "Bhutan",
    "Maldives",
  ],
  middleEast: [
    "Saudi Arabia",
    "United Arab Emirates",
    "Oman",
    "Qatar",
    "Kuwait",
    "Bahrain",
    "Yemen",
    "Iraq",
    "Jordan",
    "Lebanon",
    "Syria",
    "Israel",
  ],
  centralAsia: [
    "Kazakhstan",
    "Uzbekistan",
    "Turkmenistan",
    "Tajikistan",
    "Kyrgyzstan",
  ],
  westAsia: [
    "Turkey",
    "Iran",
    "Azerbaijan",
    "Georgia",
    "Armenia",
    "Afghanistan",
  ],
};

// Map destination labels to their regions
const DESTINATION_TO_REGION: Record<string, string> = {
  // Region labels (used for arc labels)
  Africa: "africa",
  "Middle East": "middleEast",
  "Central Asia": "centralAsia",
  "West Asia": "westAsia",
  // Country labels - South Asia (labeled by country name)
  Nepal: "southAsia",
  Bangladesh: "southAsia",
  "Sri Lanka": "southAsia",
  Pakistan: "southAsia",
  // Country labels - other regions (for backwards compatibility)
  UAE: "middleEast",
  "United Arab Emirates": "middleEast",
  "Saudi Arabia": "middleEast",
  Oman: "middleEast",
  Qatar: "middleEast",
  Kuwait: "middleEast",
  Kenya: "africa",
  Kazakhstan: "centralAsia",
  Uzbekistan: "centralAsia",
  Iran: "westAsia",
  Turkey: "westAsia",
  Afghanistan: "westAsia",
};

// Region color palette aligned with brand colors (for polygon fill)
const REGION_COLORS = {
  southAsia: "rgba(205, 85, 59, 0.7)", // Coral - primary brand
  middleEast: "rgba(146, 190, 192, 0.65)", // Teal - secondary brand
  centralAsia: "rgba(168, 139, 199, 0.6)", // Soft purple
  westAsia: "rgba(218, 175, 95, 0.6)", // Warm gold
  africa: "rgba(120, 190, 140, 0.6)", // Fresh green
  default: "rgba(255, 255, 255, 0.15)", // Subtle white for others
};

// Solid colors for arcs, points, and labels
const REGION_SOLID_COLORS: Record<string, string> = {
  southAsia: "#cd553b", // Coral
  middleEast: "#92bec0", // Teal
  centralAsia: "#a88bc7", // Purple
  westAsia: "#dab05f", // Gold
  africa: "#78be8c", // Green
  default: "#ffffff",
};

// Get solid color for a region
const getRegionSolidColor = (region: string | null): string => {
  if (!region) return REGION_SOLID_COLORS.default;
  return REGION_SOLID_COLORS[region] || REGION_SOLID_COLORS.default;
};

// Get region for a country
const getCountryRegion = (
  countryName: string,
  continent?: string
): string | null => {
  if (continent === "Africa") return "africa";
  if (REGION_COUNTRIES.southAsia.includes(countryName)) return "southAsia";
  if (REGION_COUNTRIES.middleEast.includes(countryName)) return "middleEast";
  if (REGION_COUNTRIES.centralAsia.includes(countryName)) return "centralAsia";
  if (REGION_COUNTRIES.westAsia.includes(countryName)) return "westAsia";
  return null;
};

// Helper function to determine region color - only highlights active regions
const getRegionColorDynamic = (
  feature: any,
  activeRegions: Set<string>
): string => {
  const countryName = feature.properties?.name;
  const continent = feature.properties?.continent;
  const region = getCountryRegion(countryName, continent);

  // Only highlight if this region is active
  if (region && activeRegions.has(region)) {
    return (
      REGION_COLORS[region as keyof typeof REGION_COLORS] ||
      REGION_COLORS.default
    );
  }

  return REGION_COLORS.default;
};

type Position = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
  label?: string;
};

export type GlobeConfig = {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  initialPosition?: {
    lat: number;
    lng: number;
  };
  autoRotate?: boolean;
  autoRotateSpeed?: number;
};

interface WorldProps {
  globeConfig: GlobeConfig;
  data: Position[];
}

// Maximum rotation from center (20 degrees in radians)
const MAX_ROTATION_OFFSET = (20 * Math.PI) / 180; // 0.349 radians
const MAX_TILT_OFFSET = (25 * Math.PI) / 180; // 25 degrees max tilt for X-axis (for northern destinations like Central Asia)

// India's coordinates for center calculation
const INDIA_LNG = 78.9629;
const INDIA_LAT = 20.5937;

// Direction threshold - if destinations are within this angle, skip return to center
const DIRECTION_THRESHOLD = 45; // degrees

export function GlobePremium({ globeConfig, data }: WorldProps) {
  const globeRef = useRef<ThreeGlobe | null>(null);
  const groupRef = useRef<any>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [currentArcIndex, setCurrentArcIndex] = useState(0);

  // Base rotations that center India
  const centerRotationY = useRef(Math.PI * 1.65);
  const centerRotationX = useRef(-0.45);

  // Current and target rotation values for Y-axis (longitude/horizontal)
  const currentRotationY = useRef(Math.PI * 1.65);
  const targetRotationY = useRef(Math.PI * 1.65);

  // Current and target rotation values for X-axis (latitude/vertical tilt)
  const currentRotationX = useRef(-0.45);
  const targetRotationX = useRef(-0.45);

  // Track previous destination for smart rotation
  const prevDestLng = useRef<number | null>(null);
  const prevDestLat = useRef<number | null>(null);

  // Rotation animation state
  const rotationPhase = useRef<"center" | "toDestination" | "atDestination">(
    "center"
  );

  const defaultProps = {
    pointSize: 1,
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
    ...globeConfig,
  };

  // Initialize globe only once
  useEffect(() => {
    if (!globeRef.current && groupRef.current) {
      globeRef.current = new ThreeGlobe();
      (groupRef.current as any).add(globeRef.current);

      // Position globe to show India centered
      (groupRef.current as any).rotation.y = centerRotationY.current;
      (groupRef.current as any).rotation.x = centerRotationX.current;

      currentRotationY.current = centerRotationY.current;
      targetRotationY.current = centerRotationY.current;
      currentRotationX.current = centerRotationX.current;
      targetRotationX.current = centerRotationX.current;

      setIsInitialized(true);
    }
  }, []);

  // Smooth rotation animation following arc flow (both X and Y axes)
  useFrame(() => {
    if (groupRef.current && isInitialized) {
      const lerpSpeed = 0.03; // Smooth interpolation speed

      // Lerp Y-axis (horizontal rotation based on longitude)
      const diffY = targetRotationY.current - currentRotationY.current;
      if (Math.abs(diffY) > 0.001) {
        currentRotationY.current += diffY * lerpSpeed;
      } else {
        currentRotationY.current = targetRotationY.current;
      }

      // Lerp X-axis (tilt based on latitude - for northern destinations like Kazakhstan)
      const diffX = targetRotationX.current - currentRotationX.current;
      if (Math.abs(diffX) > 0.001) {
        currentRotationX.current += diffX * lerpSpeed;
      } else {
        currentRotationX.current = targetRotationX.current;
      }

      // Apply both rotations
      (groupRef.current as any).rotation.y = currentRotationY.current;
      (groupRef.current as any).rotation.x = currentRotationX.current;
    }
  });

  // Build material
  useEffect(() => {
    if (!globeRef.current || !isInitialized) return;

    const globeMaterial = globeRef.current.globeMaterial() as unknown as {
      color: Color;
      emissive: Color;
      emissiveIntensity: number;
      shininess: number;
    };
    globeMaterial.color = new Color(globeConfig.globeColor);
    globeMaterial.emissive = new Color(globeConfig.emissive);
    globeMaterial.emissiveIntensity = globeConfig.emissiveIntensity || 0.1;
    globeMaterial.shininess = globeConfig.shininess || 0.9;
  }, [
    isInitialized,
    globeConfig.globeColor,
    globeConfig.emissive,
    globeConfig.emissiveIntensity,
    globeConfig.shininess,
  ]);

  // Setup static elements (points) - only once
  useEffect(() => {
    if (!globeRef.current || !isInitialized || !data) return;

    const arcs = data;
    const points: any[] = [];

    // India (source) - special styling with South Asia coral color
    const indiaPoint = {
      lat: 20.5937,
      lng: 78.9629,
      size: 1.8,
      color: REGION_SOLID_COLORS.southAsia, // Coral
      isSource: true,
    };
    points.push(indiaPoint);

    // Destination points with their region colors
    for (let i = 0; i < arcs.length; i++) {
      const arc = arcs[i];
      const destRegion = arc.label ? DESTINATION_TO_REGION[arc.label] : null;
      const destColor = getRegionSolidColor(destRegion);

      points.push({
        size: 1.2,
        color: destColor, // Color matches destination region
        lat: arc.endLat,
        lng: arc.endLng,
        isSource: false,
      });
    }

    // Remove duplicates
    const filteredPoints = points.filter(
      (v, i, a) =>
        a.findIndex((v2) =>
          ["lat", "lng"].every(
            (k) => v2[k as "lat" | "lng"] === v[k as "lat" | "lng"]
          )
        ) === i
    );

    // Setup atmosphere
    globeRef.current
      .showAtmosphere(defaultProps.showAtmosphere)
      .atmosphereColor(defaultProps.atmosphereColor)
      .atmosphereAltitude(defaultProps.atmosphereAltitude);

    // Premium points with brand colors and smaller sizing
    globeRef.current
      .pointsData(filteredPoints)
      .pointColor((d: any) => d.color)
      .pointsMerge(false)
      .pointAltitude((d: any) => (d.isSource ? 0.012 : 0.008))
      .pointRadius((d: any) => (d.isSource ? 1.9 : 1));

    // Setup ring config with fade-out effect using brand teal color
    globeRef.current
      .ringColor(() => (t: number) => `rgba(146, 190, 192, ${1 - t})`)
      .ringMaxRadius(defaultProps.maxRings)
      .ringPropagationSpeed(RING_PROPAGATION_SPEED)
      .ringRepeatPeriod(0);
  }, [
    isInitialized,
    data,
    defaultProps.pointSize,
    defaultProps.showAtmosphere,
    defaultProps.atmosphereColor,
    defaultProps.atmosphereAltitude,
    defaultProps.polygonColor,
    defaultProps.maxRings,
  ]);

  // Dynamic polygon highlighting based on current arc
  useEffect(() => {
    if (!globeRef.current || !isInitialized || !data || data.length === 0)
      return;

    const currentArc = data[currentArcIndex];

    // Determine active regions: always include South Asia (India is source)
    // Plus the destination's region
    const activeRegions = new Set<string>(["southAsia"]); // India is always source

    if (currentArc.label) {
      const destRegion = DESTINATION_TO_REGION[currentArc.label];
      if (destRegion) {
        activeRegions.add(destRegion);
      }
    }

    // Update polygon colors based on active regions
    globeRef.current
      .polygonsData(countries.features)
      .polygonCapColor((feature: any) =>
        getRegionColorDynamic(feature, activeRegions)
      )
      .polygonSideColor(() => "rgba(255, 255, 255, 0.05)")
      .polygonStrokeColor(() => "rgba(255, 255, 255, 0.15)")
      .polygonAltitude(0.006);
  }, [isInitialized, data, currentArcIndex]);

  // Calculate Y-axis rotation offset for destination (clamped to max 20 degrees)
  // Centers the view between India and destination so both are visible
  const calculateDestinationRotationY = (destLng: number): number => {
    // Calculate longitude difference from India
    let lngDiff = destLng - INDIA_LNG;

    // Normalize to -180 to 180 range
    if (lngDiff > 180) lngDiff -= 360;
    if (lngDiff < -180) lngDiff += 360;

    // Convert to radians - use 0.5x to center between India and destination
    // This keeps both source and destination visible on screen
    // Negative because globe rotation is opposite to view direction
    let rotationOffset = -(lngDiff * Math.PI * 0.5) / 180;

    // Clamp to maximum 20 degrees rotation from center
    rotationOffset = Math.max(
      -MAX_ROTATION_OFFSET,
      Math.min(MAX_ROTATION_OFFSET, rotationOffset)
    );

    return centerRotationY.current + rotationOffset;
  };

  // Calculate X-axis tilt for destination (for northern/southern destinations)
  // Centers the view between India and destination so both are visible
  const calculateDestinationRotationX = (destLat: number): number => {
    // Calculate latitude difference from India
    const latDiff = destLat - INDIA_LAT;

    // Convert to radians - use 0.7x for more aggressive tilt
    // This ensures northern destinations like Central Asia are properly visible
    let tiltOffset = (latDiff * Math.PI * 0.7) / 180;

    // Clamp to maximum tilt
    tiltOffset = Math.max(
      -MAX_TILT_OFFSET,
      Math.min(MAX_TILT_OFFSET, tiltOffset)
    );

    return centerRotationX.current - tiltOffset; // Subtract because of coordinate system
  };

  // Check if two destinations are in a similar direction from India
  const areSimilarDirections = (
    prevLng: number | null,
    prevLat: number | null,
    newLng: number,
    newLat: number
  ): boolean => {
    if (prevLng === null || prevLat === null) return false;

    // Calculate direction angles from India to each destination
    const prevAngle =
      Math.atan2(prevLat - INDIA_LAT, prevLng - INDIA_LNG) * (180 / Math.PI);
    const newAngle =
      Math.atan2(newLat - INDIA_LAT, newLng - INDIA_LNG) * (180 / Math.PI);

    // Calculate angular difference
    let angleDiff = Math.abs(prevAngle - newAngle);
    if (angleDiff > 180) angleDiff = 360 - angleDiff;

    return angleDiff < DIRECTION_THRESHOLD;
  };

  // Handle rotation phases: optionally return to center, then rotate to destination
  useEffect(() => {
    if (!isInitialized || !data || data.length === 0) return;

    const currentArc = data[currentArcIndex];
    const destLng = currentArc.endLng;
    const destLat = currentArc.endLat;

    // Check if we should skip returning to center
    const skipReturnToCenter = areSimilarDirections(
      prevDestLng.current,
      prevDestLat.current,
      destLng,
      destLat
    );

    const goToDuration = 600; // Time to rotate to destination
    const returnDuration = skipReturnToCenter ? 0 : 400; // Skip return if similar direction

    if (skipReturnToCenter) {
      // Directly go to new destination without returning to center
      rotationPhase.current = "toDestination";
      targetRotationY.current = calculateDestinationRotationY(destLng);
      targetRotationX.current = calculateDestinationRotationX(destLat);
    } else {
      // Phase 1: Return to center (India)
      rotationPhase.current = "center";
      targetRotationY.current = centerRotationY.current;
      targetRotationX.current = centerRotationX.current;
    }

    // Phase 2: After returning to center (or immediately if skipped), rotate toward destination
    const goToDestTimeout = setTimeout(() => {
      rotationPhase.current = "toDestination";
      targetRotationY.current = calculateDestinationRotationY(destLng);
      targetRotationX.current = calculateDestinationRotationX(destLat);
    }, returnDuration);

    // Phase 3: Mark as at destination and store for next comparison
    const atDestTimeout = setTimeout(() => {
      rotationPhase.current = "atDestination";
      // Store current destination for next arc comparison
      prevDestLng.current = destLng;
      prevDestLat.current = destLat;
    }, returnDuration + goToDuration);

    return () => {
      clearTimeout(goToDestTimeout);
      clearTimeout(atDestTimeout);
    };
  }, [isInitialized, data, currentArcIndex, defaultProps.arcTime]);

  // Cycle through arcs one at a time
  useEffect(() => {
    if (!isInitialized || !data || data.length === 0) return;

    const arcDuration = defaultProps.arcTime;
    const pauseBetween = 800; // Increased pause to allow for rotation animation

    const interval = setInterval(() => {
      setCurrentArcIndex((prev) => (prev + 1) % data.length);
    }, arcDuration + pauseBetween);

    return () => clearInterval(interval);
  }, [isInitialized, data, defaultProps.arcTime]);

  // Update arc and ring based on current index
  useEffect(() => {
    if (!globeRef.current || !isInitialized || !data || data.length === 0)
      return;

    const currentArc = data[currentArcIndex];

    // Get destination region and its color
    const destRegion = currentArc.label
      ? DESTINATION_TO_REGION[currentArc.label]
      : null;
    const destColor = getRegionSolidColor(destRegion);
    const sourceColor = REGION_SOLID_COLORS.southAsia;

    // Set the single current arc with destination region color
    globeRef.current
      .arcsData([currentArc])
      .arcStartLat((d) => (d as Position).startLat)
      .arcStartLng((d) => (d as Position).startLng)
      .arcEndLat((d) => (d as Position).endLat)
      .arcEndLng((d) => (d as Position).endLng)
      .arcColor(() => destColor) // Arc color matches destination region
      .arcAltitude((d) => (d as Position).arcAlt)
      .arcStroke(() => 0.8)
      .arcDashLength(0.9)
      .arcDashInitialGap(1)
      .arcDashGap(0)
      .arcDashAnimateTime(() => defaultProps.arcTime);

    // Show both labels immediately when arc starts (India → Destination)
    // Labels use white text for better readability against colored regions
    const labelsToShow = [
      // Source label - India (always shown) - white text for contrast
      {
        lat: 20.5937,
        lng: 78.9629,
        text: "India",
        color: "#ffffff",
        dotColor: sourceColor,
        size: 2,
      },
    ];

    // Add destination label if available - white text for contrast
    if (currentArc.label) {
      labelsToShow.push({
        lat: currentArc.endLat,
        lng: currentArc.endLng,
        text: currentArc.label,
        color: "#ffffff",
        dotColor: destColor,
        size: 2,
      });
    }

    // Display labels immediately with white text for readability (no dots - using data points instead)
    globeRef.current
      .labelsData(labelsToShow)
      .labelColor(() => "#ffffff") // White text for all labels
      .labelSize(() => 1.8)
      .labelAltitude(0.025)
      .labelText((d: any) => d.text)
      .labelResolution(2)
      .labelIncludeDot(false); // No dots - the data points already show with region colors

    // Trigger ring at destination after arc completes - colors match regions
    const ringTimeout = setTimeout(() => {
      if (globeRef.current) {
        globeRef.current.ringsData([
          // Source point (India) - coral ring
          {
            lat: 20.5937,
            lng: 78.9629,
            color: sourceColor,
          },
          // Destination point ring - matches destination region
          {
            lat: currentArc.endLat,
            lng: currentArc.endLng,
            color: destColor,
          },
        ]);
      }
    }, defaultProps.arcTime * 0.85); // Trigger slightly before arc ends

    return () => {
      clearTimeout(ringTimeout);
    };
  }, [isInitialized, data, currentArcIndex, defaultProps.arcTime]);

  // Continuous pulsing ring on source (India) for premium beacon effect
  useEffect(() => {
    if (!globeRef.current || !isInitialized) return;

    // Set up ring color based on data - coral for source, teal for destinations
    globeRef.current.ringColor((d: any) => (t: number) => {
      const color =
        d.color === "#cd553b"
          ? `rgba(205, 85, 59, ${1 - t})` // Coral fade
          : `rgba(146, 190, 192, ${1 - t})`; // Teal fade
      return color;
    });
  }, [isInitialized]);

  return <group ref={groupRef} />;
}

export function WebGLRendererConfigPremium() {
  const { gl, size } = useThree();

  useEffect(() => {
    gl.setPixelRatio(window.devicePixelRatio);
    gl.setSize(size.width, size.height);
    gl.setClearColor(0xffaaff, 0);
  }, [gl, size]);

  return null;
}

export function WorldPremium(props: WorldProps) {
  const { globeConfig } = props;
  const scene = new Scene();
  scene.fog = new Fog(0xffffff, 400, 2000);

  return (
    <Canvas scene={scene} camera={new PerspectiveCamera(50, aspect, 180, 1800)}>
      <WebGLRendererConfigPremium />
      <ambientLight color={globeConfig.ambientLight} intensity={0.6} />
      <directionalLight
        color={globeConfig.directionalLeftLight}
        position={new Vector3(-400, 100, 400)}
      />
      <directionalLight
        color={globeConfig.directionalTopLight}
        position={new Vector3(-200, 500, 200)}
      />
      <pointLight
        color={globeConfig.pointLight}
        position={new Vector3(-200, 500, 200)}
        intensity={0.8}
      />
      <GlobePremium {...props} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={false}
        minDistance={cameraZ}
        maxDistance={cameraZ}
        autoRotateSpeed={globeConfig.autoRotateSpeed ?? 0.5}
        autoRotate={globeConfig.autoRotate ?? false}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </Canvas>
  );
}

export function hexToRgb(hex: string) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export function genRandomNumbers(min: number, max: number, count: number) {
  const arr: number[] = [];
  while (arr.length < count) {
    const r = Math.floor(Math.random() * (max - min)) + min;
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
}
