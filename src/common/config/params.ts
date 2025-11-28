import { route } from "./route";

export const params = {
  name: "Perssonify",
  tagline: "We bring Growth and Scale to life.",
  domain: "https://perssonify.com",

  header: {
    links: [
      { label: "Home", href: route.home.path },
      { label: "Growth Marketing", href: route.growthMarketing.path },
      { label: "Product & Web", href: route.productAndWeb.path },
      { label: "Business Solutions", href: route.businessSolutions.path },
    ],
  },

  footer: {
    quickLinks: [
      { label: "Home", href: route.home.path },
      { label: "Growth Marketing", href: route.growthMarketing.path },
      { label: "Product & Web", href: route.productAndWeb.path },
      { label: "Business Solutions", href: route.businessSolutions.path },
    ],
  },
};
