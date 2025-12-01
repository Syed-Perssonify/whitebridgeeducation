import HeroPremium from "./home";
import OurServices from "./Our Services";
import { OurClients } from "./_ourClients";
import Testimonial2 from "./testimonial";
import ResearchInsights from "./Research";
import CTASection from "../(home5)/callback";
import WorldMapPage4 from "./wolrdmap";
import Header from "@/common/element/layout/header";

export default function Hero2() {
  return (
    <>
      <Header />
      <HeroPremium />
      <OurServices />
      <OurClients />
      <ResearchInsights />
      <Testimonial2 />
      <WorldMapPage4 />
      <CTASection />
    </>
  );
}
