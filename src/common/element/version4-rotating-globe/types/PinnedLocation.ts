export interface PinnedLocation {
  name: string;
  coordinates: [number, number];
  countries: string[]; // ISO country codes
  flagColor: string; // Primary flag color for outline
  description?: string;
}
