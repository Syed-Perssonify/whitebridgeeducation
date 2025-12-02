export default function Partners() {
  const partners = [
    {
      title: "Clarkson University",
      image: "/clarkson.avif",
    },
    {
      title: "Rowan University",
      image: "/rowan.avif",
    },
    {
      title: "Wake Forest University School of Business",
      image: "/wake.avif",
    },
    {
      title: "University of Salford",
      image: "/hero/University of Salford.jpg",
    },
    {
      title: "Brandeis University",
      image: "/hero/Brandeis University.png",
    },
    {
      title: "La Salle University",
      image: "/lasalle.avif",
    },
    {
      title: "East Tennessee State University",
      image: "/hero/East Tennessee State University.webp",
    },
    {
      title: "Scranton University",
      image: "/hero/Scranton University.png",
    },
  ];

  return (
    <section className="bg-background pt-4 md:pt-6 pb-8 md:pb-12">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-medium mb-8 md:mb-12">
          Our University Partners
        </h2>
        <p className="text-center text-gray-600 text-sm md:text-base max-w-3xl mx-auto mb-8 md:mb-12">
          Trusted by leading institutions worldwide to connect students with
          quality education opportunities.
        </p>
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-16 gap-y-10 sm:gap-x-20 sm:gap-y-12 md:gap-x-24 md:gap-y-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-20 w-48 md:h-24 md:w-56"
            >
              <img
                src={partner.image}
                alt={partner.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
