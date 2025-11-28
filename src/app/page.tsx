import About from "./(home5)/about";
import Hero from "./(home5)/hero";
import CallBack from "./(home5)/callback";
import CallTo from "./(home5)/callto";
import Counter from "./(home5)/counter";
import Markets from "./(home5)/markets";
import { OurClients } from "./(home5)/_ourClients";
import Service from "./(home5)/service";
import Testimonial from "./(home5)/testimonial";
import TeamMember from "./(home5)/team-member";
import CTASection from "./(home5)/callback";
import { Gallery6 } from "@/components/gallery6";

export default function Home() {
  return (
    <>
      <Hero />
      <Counter />
      <Service />
      {/* <About /> */}
      <OurClients />
      {/* <Gallery6 /> */}
      <Testimonial />

      {/* <Markets /> */}
      {/* <Skill /> */}
      {/* <TeamMember /> */}
      {/* <CallTo />
      <WorldMap /> */}
      {/* <Pricing /> */}
      <CTASection />
      {/* <Blog /> */}
    </>
  );
}
