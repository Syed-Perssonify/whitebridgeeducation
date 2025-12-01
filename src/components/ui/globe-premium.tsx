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
      new(): ThreeGlobe;
    };
  }
}

extend({ ThreeGlobe: ThreeGlobe });

const RING_PROPAGATION_SPEED = 4;
const aspect = 1.2;
const cameraZ = 300;

type Position = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
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

export function GlobePremium({ globeConfig, data }: WorldProps) {
  const globeRef = useRef<ThreeGlobe | null>(null);
  const groupRef = useRef<any>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [currentArcIndex, setCurrentArcIndex] = useState(0);

  // Store base rotation for oscillation
  const baseRotationY = useRef(Math.PI * 1.65);
  const oscillationTime = useRef(0);

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

      // Position globe to show South Asia, Middle East, and Africa region
      (groupRef.current as any).rotation.y = baseRotationY.current;
      (groupRef.current as any).rotation.x = -0.45;

      setIsInitialized(true);
    }
  }, []);

  // Gentle oscillating rotation - rocks back and forth ~12 degrees
  useFrame((_, delta) => {
    if (groupRef.current && isInitialized) {
      oscillationTime.current += delta;
      // Oscillate with ~12 degrees amplitude (0.21 radians), 5 second period
      const oscillation = Math.sin(oscillationTime.current * 0.4) * 0.21;
      (groupRef.current as any).rotation.y = baseRotationY.current + oscillation;
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

  // Setup static elements (hex polygons and points) - only once
  useEffect(() => {
    if (!globeRef.current || !isInitialized || !data) return;

    const arcs = data;
    const points: any[] = [];

    // India (source) - special styling with brand coral color
    const indiaPoint = {
      lat: 20.5937,
      lng: 78.9629,
      size: 1.8,
      color: "#cd553b", // Brand coral color
      isSource: true,
    };
    points.push(indiaPoint);

    // Destination points with brand teal color
    for (let i = 0; i < arcs.length; i++) {
      const arc = arcs[i];
      points.push({
        size: 1.2,
        color: "#92bec0", // Brand teal color
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

    globeRef.current
      .hexPolygonsData(countries.features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.7)
      .showAtmosphere(defaultProps.showAtmosphere)
      .atmosphereColor(defaultProps.atmosphereColor)
      .atmosphereAltitude(defaultProps.atmosphereAltitude)
      .hexPolygonColor(() => defaultProps.polygonColor);

    // Premium points with brand colors and differentiated sizing
    globeRef.current
      .pointsData(filteredPoints)
      .pointColor((d: any) => d.color)
      .pointsMerge(false)
      .pointAltitude((d: any) => d.isSource ? 0.025 : 0.015)
      .pointRadius((d: any) => d.isSource ? 3.5 : 2.5);

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

  // Cycle through arcs one at a time
  useEffect(() => {
    if (!isInitialized || !data || data.length === 0) return;

    const arcDuration = defaultProps.arcTime;
    const pauseBetween = 400; // Brief pause between arcs

    const interval = setInterval(() => {
      setCurrentArcIndex((prev) => (prev + 1) % data.length);
    }, arcDuration + pauseBetween);

    return () => clearInterval(interval);
  }, [isInitialized, data, defaultProps.arcTime]);

  // Update arc and ring based on current index
  useEffect(() => {
    if (!globeRef.current || !isInitialized || !data || data.length === 0) return;

    const currentArc = data[currentArcIndex];

    // Set the single current arc with growing trail effect
    globeRef.current
      .arcsData([currentArc])
      .arcStartLat((d) => (d as Position).startLat)
      .arcStartLng((d) => (d as Position).startLng)
      .arcEndLat((d) => (d as Position).endLat)
      .arcEndLng((d) => (d as Position).endLng)
      .arcColor(() => "#ffffff")
      .arcAltitude((d) => (d as Position).arcAlt)
      .arcStroke(() => 1.2)
      .arcDashLength(0.9)
      .arcDashInitialGap(1)
      .arcDashGap(0)
      .arcDashAnimateTime(() => defaultProps.arcTime);

    // Trigger ring at destination after arc completes, plus continuous pulse on source
    const ringTimeout = setTimeout(() => {
      if (globeRef.current) {
        globeRef.current.ringsData([
          // Source point (India) - continuous pulse in coral
          {
            lat: 20.5937,
            lng: 78.9629,
            color: "#cd553b",
          },
          // Destination point ring in teal
          {
            lat: currentArc.endLat,
            lng: currentArc.endLng,
            color: "#92bec0",
          },
        ]);
      }
    }, defaultProps.arcTime * 0.85); // Trigger slightly before arc ends

    return () => clearTimeout(ringTimeout);
  }, [isInitialized, data, currentArcIndex, defaultProps.arcTime]);

  // Continuous pulsing ring on source (India) for premium beacon effect
  useEffect(() => {
    if (!globeRef.current || !isInitialized) return;

    // Set up ring color based on data - coral for source, teal for destinations
    globeRef.current.ringColor((d: any) => (t: number) => {
      const color = d.color === "#cd553b"
        ? `rgba(205, 85, 59, ${1 - t})`  // Coral fade
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
