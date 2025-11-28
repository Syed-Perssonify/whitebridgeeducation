declare module "react-simple-maps" {
  import { ComponentType, ReactNode, SVGProps } from "react";

  export interface ProjectionConfig {
    scale?: number;
    center?: [number, number];
    rotate?: [number, number, number];
  }

  export interface ComposableMapProps {
    projection?: string;
    projectionConfig?: ProjectionConfig;
    width?: number;
    height?: number;
    className?: string;
    style?: React.CSSProperties;
    children?: ReactNode;
  }

  export interface GeographyProps {
    geography: { id: string; rsmKey: string };
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    className?: string;
    style?: {
      default?: React.CSSProperties;
      hover?: React.CSSProperties;
      pressed?: React.CSSProperties;
    };
  }

  export interface MarkerProps {
    coordinates: [number, number];
    onMouseEnter?: (event: React.MouseEvent) => void;
    onMouseLeave?: (event: React.MouseEvent) => void;
    style?: React.CSSProperties;
    children?: ReactNode;
  }

  export interface SphereProps {
    stroke?: string;
    strokeWidth?: number;
    fill?: string;
  }

  export interface GeographiesProps {
    geography: string | object;
    children: (props: {
      geographies: Array<{ id: string; rsmKey: string }>;
    }) => ReactNode;
  }

  export const ComposableMap: ComponentType<ComposableMapProps>;
  export const Geography: ComponentType<GeographyProps>;
  export const Marker: ComponentType<MarkerProps>;
  export const Sphere: ComponentType<SphereProps>;
  export const Geographies: ComponentType<GeographiesProps>;
}
