import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

type Testimonial = {
  name: string;
  role: string;
  image: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Darren Wagner",
    role: "Rowan University",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    quote:
      "My time working with the team at White Bridge Education has been a genuine pleasure. They are not only professional and reliable but also incredibly thoughtful partners who bring insight, warmth, and consistency to our collaboration. Our interactions are always productive and enjoyable, and their strong communication ensures we're aligned and proactive in our recruitment efforts. The team providing our in-country representative is highly engaged, responsive, and represents Rowan University with great care, integrity, and amazing energy. White Bridge Education has become an essential part of Rowan's international presence, and I deeply value the partnership we've built together.",
  },
  {
    name: "John White",
    role: "Wake Forest University School of Business",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    quote:
      "White Bridge is a valued and respected partner to the Wake Forest University School of Business, working to expand our brand presence and graduate program awareness in the highly competitive Indian market. They take the time to deeply understand our strategic priorities and convey them effectively to an Indian audience. Their data-driven insights have been instrumental in guiding how we engage with a complex and dynamic graduate student population. We value White Bridge as a thoughtful, collaborative, and data-centric partner.",
  },
  {
    name: "Jordan Aird",
    role: "University of Salford",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    quote:
      "Here at the University of Salford, we are delighted with the services provided by White Bridge Education and are proud to be their first UK university partner. The vast amount of expertise, insight, and network across the continent support us daily in our student recruitment and partnership development goals. The team are extremely personable and always work collaboratively with us to find a solution to any problem faced, no matter what. Working with White Bridge Education has also allowed us to explore opportunities to build on our undergraduate student recruitment, through their alignment with The Red Pen, and we see both organisations as real assets to work with. Approaching one year of our working relationship, we are already looking to expand on the work we do together and are setting even more ambitious targets for the future.",
  },
  {
    name: "Director of International Admissions",
    role: "La Salle University",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    quote:
      "As the Director of International Admissions at La Salle University, I recently had the privilege of visiting India alongside our trusted partners at White Bridge Education. The trip, which included visits to several top-tier private high schools in Mumbai and Delhi, was an exceptional experience that showcased White Bridge's professionalism, hospitality, and deep commitment to educational engagement.",
  },
  {
    name: "Event Participant",
    role: "Summer Programs Fair",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    quote:
      "As an educator and participant in the summer programs fair this January, I was extremely happy and impressed with the event in terms of the extent and quality of outreach, footfalls, internal arrangements and handling, variety of participating programs and the overall experience for students and parents at all levels. The event served well what it set out to do - It was a dynamic platform for educational institutes and students looking to enrich their academic and non academic skills.",
  },
  {
    name: "Education Partner",
    role: "South Asia Region",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    quote:
      "Possibly the highest quality bespoke student counselling service we have seen in South Asia. They understand cultural nuances and educational variations of schools and colleges in USA, Europe and developed Asia, thereby delivering the right match for their students with a high-touch guidance through the entire admissions process. Their thought leadership can be seen in their book, Acing Admissions.",
  },
];

const chunkArray = (
  array: Testimonial[],
  chunkSize: number
): Testimonial[][] => {
  const result: Testimonial[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const testimonialChunks = chunkArray(
  testimonials,
  Math.ceil(testimonials.length / 3)
);

export default function Testimonial3() {
  return (
    <section>
      <div className="pt-4 md:pt-6 pb-8 md:pb-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">
              Trusted By Leading Universities Worldwide
            </h2>
            <p className="mt-4 text-gray-600">
              Partnering with prestigious institutions to expand global
              education opportunities and student success
            </p>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 md:mt-8 lg:grid-cols-3">
            {testimonialChunks.map((chunk, chunkIndex) => (
              <div key={chunkIndex} className="space-y-3">
                {chunk.map(({ name, role, quote, image }, index) => (
                  <Card key={index}>
                    <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
                      <Avatar className="size-9">
                        <AvatarImage
                          alt={name}
                          src={image}
                          loading="lazy"
                          width="120"
                          height="120"
                        />
                        <AvatarFallback>
                          {name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>

                      <div>
                        <h3 className="font-medium">{name}</h3>

                        <span className="text-muted-foreground block text-sm tracking-wide">
                          {role}
                        </span>

                        <blockquote className="mt-3">
                          <p className="text-gray-700 dark:text-gray-300">
                            {quote}
                          </p>
                        </blockquote>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
