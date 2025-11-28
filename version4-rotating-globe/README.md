# Version 4 - Rotating Globe Map

A beautiful rotating 3D globe component for Next.js that displays pinned locations with graduation cap markers.

## Features

- 🌍 Rotating 3D globe visualization
- 📍 Customizable pinned locations with graduation cap markers
- 🎨 Country highlighting with animated borders
- 💬 Interactive tooltips on hover
- 🎯 Fully typed with TypeScript

## Installation

1. Copy the `version4-rotating-globe` folder to your Next.js project (you can place it in your `components` or `lib` directory)
2. Install the required dependencies:

```bash
npm install react-simple-maps lucide-react
# or
yarn add react-simple-maps lucide-react
# or
pnpm add react-simple-maps lucide-react
```

### TypeScript Note

If you encounter TypeScript errors for `react-simple-maps`, the type declaration file is included in `types/react-simple-maps.d.ts`. Make sure your `tsconfig.json` includes the types directory, or you can add this to your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "typeRoots": ["./node_modules/@types", "./version4-rotating-globe/types"]
  }
}
```

## Setup

### 1. Import the CSS

Add the styles to your global CSS file (e.g., `app/globals.css` or `styles/globals.css`):

```css
@import '../version4-rotating-globe/styles/rotating-globe.css';
```

Or copy the CSS content directly into your global CSS file.

### 2. Use the Component

```tsx
import { RotatingGlobeMap } from '@/version4-rotating-globe/components/RotatingGlobeMap';
import { PinnedLocation } from '@/version4-rotating-globe/types/PinnedLocation';

const locations: PinnedLocation[] = [
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
  // Add more locations...
];

export default function GlobePage() {
  return (
    <div className="w-full h-[600px] bg-gray-900 rounded-xl overflow-hidden">
      <RotatingGlobeMap
        pinnedLocations={locations}
        capColor="#ffffff"
        showTooltip={true}
      />
    </div>
  );
}
```

## Props

### RotatingGlobeMap

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `pinnedLocations` | `PinnedLocation[]` | **Required** | Array of locations to display on the globe |
| `showTooltip` | `boolean` | `true` | Whether to show tooltips on hover |
| `className` | `string` | `""` | Additional CSS classes |
| `capColor` | `string` | `"#ffffff"` | Color of the graduation cap markers |

### PinnedLocation

```typescript
interface PinnedLocation {
  name: string;                    // Display name
  coordinates: [number, number];   // [longitude, latitude]
  countries: string[];             // ISO country codes (e.g., ["IND", "USA"])
  flagColor: string;               // Hex color for country highlighting
  description?: string;            // Optional description for tooltip
}
```

## Example Usage

See `example-usage.tsx` for a complete example with sample data.

## Styling

The component uses Tailwind CSS classes. Make sure you have Tailwind CSS configured in your Next.js project.

The component is designed to work with dark backgrounds. The default styling uses:
- Dark background: `#0a0a0a`
- Dark land: `#1a1a1a`
- Dark borders: `#2a2a2a`

You can customize colors by modifying the component or wrapping it in a styled container.

## Notes

- The component uses `"use client"` directive for Next.js App Router
- The globe rotates automatically at 0.2 degrees per 50ms
- Countries are highlighted based on the `countries` array in each location
- The component fetches world map data from a CDN (world-atlas)

## License

Free to use in your projects.

