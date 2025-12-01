# Consalt - Next.js Business Consulting Template

A modern, high-performance business consulting website built with Next.js 16, TypeScript, and Tailwind CSS.

## 🚀 Features

- ✅ **Next.js 16** - Latest App Router with Server & Client Components
- ✅ **TypeScript** - Type-safe development
- ✅ **Tailwind CSS** - Modern utility-first CSS framework
- ✅ **Optimized Images** - Next.js Image component with automatic optimization
- ✅ **Smooth Animations** - AOS, GSAP, and Lenis for butter-smooth scrolling
- ✅ **Responsive Design** - Mobile-first, fully responsive layout
- ✅ **SEO Optimized** - Built-in SEO with Next.js metadata API
- ✅ **Fast Performance** - Optimized for Core Web Vitals

## 📦 Included Sections

### Homepage Components:
1. **Banner** - Hero section with video lightbox
2. **Brand** - Client logos carousel
3. **Feature** - Service features showcase
4. **Service** - Service cards
5. **Content Slider** - Animated text marquee
6. **About** - Company information
7. **Counter** - Animated statistics
8. **Work** - Working process steps
9. **Pricing** - Pricing plans
10. **Latest Work** - Portfolio showcase
11. **Team Member** - Team section
12. **Testimonial** - Client reviews
13. **Blog** - Latest articles

### Layout Components:
- Responsive Navigation with mobile menu
- Footer with newsletter
- Back to top button
- Preloader

## 🛠️ Installation & Setup

### Prerequisites:
- Node.js 18+ 
- npm or pnpm

### Install Dependencies:

```bash
npm install
# or
pnpm install
```

## 🎯 Development

Run the development server:

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
nextjs/
├── src/
│   ├── app/
│   │   ├── (home-2)/        # Homepage sections
│   │   │   ├── banner/
│   │   │   ├── brand/
│   │   │   ├── feature/
│   │   │   ├── service/
│   │   │   ├── about/
│   │   │   ├── counter/
│   │   │   ├── work/
│   │   │   ├── pricing/
│   │   │   ├── latest-work/
│   │   │   ├── team-member/
│   │   │   ├── testimonial/
│   │   │   ├── blog/
│   │   │   └── content-slider/
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Homepage
│   │   └── globals.css      # Global styles
│   └── common/
│       └── element/
│           └── layout/
│               ├── header/  # Navigation
│               ├── footer/  # Footer
│               ├── back-to-top/
│               └── client-init/ # Client-side libs
├── public/
│   └── images/             # All 199 images
├── tailwind.config.ts      # Tailwind configuration
└── next.config.ts          # Next.js configuration
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize colors:
```typescript
colors: {
  PrimaryColor: ["#0c6e6d"],    // Teal
  Secondarycolor: ["#0b4b4b"],  // Dark teal
  HeadingColor: ["#063232"],    // Dark green
  // ... more colors
}
```

### Fonts
The template uses **Fira Sans** from Google Fonts. Change in `src/app/layout.tsx`:
```typescript
import { Fira_Sans } from "next/font/google";
```

### Content
Edit content directly in component files under `src/app/(home-2)/[section]/index.tsx`

## 📊 Performance Optimizations

- ✅ Image optimization with Next.js Image
- ✅ Code splitting and lazy loading
- ✅ Font optimization
- ✅ CSS optimization with Tailwind
- ✅ Automatic static optimization
- ✅ Server Components for better performance

## 🌐 Deployment

### Vercel (Recommended)

```bash
vercel
```

### Other Platforms
Build the project and deploy the `.next` folder:
```bash
npm run build
```

## 📝 Environment Variables

Create `.env.local` for environment variables:
```env
NEXT_PUBLIC_SITE_URL=https://yoursite.com
```

## 🔧 Technologies Used

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** GSAP, AOS, Lenis
- **Slider:** Swiper.js
- **Icons:** React Icons
- **Lightbox:** FSLightbox React
- **Counter:** React CountUp

## 📄 License

This project is licensed under the terms specified by the original template purchase.

## 🤝 Support

For support, please contact the original template author or create an issue in your repository.

## ✨ Credits

- Original React Template: Consalt by Dream-IT
- Converted to Next.js with optimizations
