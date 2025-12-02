"use client";

import Link from "next/link";
import { CtaCard } from "@/components/cta-card";

export default function CtaCardDemo() {
  return (
    <section className="w-full py-6 md:py-8 lg:py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <CtaCard
          title=""
          subtitle="Work with Us"
          description="Join our dynamic team and help shape the future of international education. We're looking for passionate individuals who want to make a real impact in connecting students with world-class universities across South Asia and the Middle East."
          buttonText="Explore Career Opportunities"
          imageSrc="https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          imageAlt="A young professional woman in a yellow shirt, holding books and smiling."
          onButtonClick={() => {
            window.location.href = "/careers";
          }}
        />
      </div>
    </section>
  );
}
