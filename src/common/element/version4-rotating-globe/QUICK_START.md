# Quick Start Guide

## 1. Copy the Folder
Copy the entire `version4-rotating-globe` folder into your Next.js project (e.g., into `components/` or `lib/`).

## 2. Install Dependencies
```bash
npm install react-simple-maps lucide-react
```

## 3. Add CSS
Add this to your global CSS file (e.g., `app/globals.css`):
```css
@import '../version4-rotating-globe/styles/rotating-globe.css';
```

Or copy the content from `styles/rotating-globe.css` into your global CSS.

## 4. Use the Component
```tsx
import { RotatingGlobeMap, PinnedLocation } from '@/version4-rotating-globe';

const locations: PinnedLocation[] = [
  {
    name: "India",
    coordinates: [78.9629, 20.5937],
    countries: ["IND"],
    flagColor: "#FF9933",
    description: "Market Entry Services Available",
  },
];

export default function Page() {
  return (
    <div className="w-full h-[600px] bg-gray-900">
      <RotatingGlobeMap pinnedLocations={locations} />
    </div>
  );
}
```

That's it! See `example-usage.tsx` for a complete example.

