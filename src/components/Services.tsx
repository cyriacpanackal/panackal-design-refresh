import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      emojis: "🛂 ✅",
      title: "Migration Consulting",
      description: "Guidance through visas, permits, and relocation with clear strategies for smooth migration processes.",
    },
    {
      emojis: "👤 🤝 👤",
      title: "Integration Support",
      description: "Intercultural coaching, adaptation support, and workshops to build inclusive communities.",
    },
    {
      emojis: "🌍 ✈️",
      title: "International Recruitment",
      description: "Attract and onboard global talent with cross-cultural recruitment strategies and HR training.",
    },
    {
      emojis: "💬 🗨️ 💭",
      title: "Intercultural Training",
      description: "Interactive sessions on intercultural communication tailored to diverse teams and organizations.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What I <span className="text-primary">Offer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for migration, integration, and international talent management
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.emojis}
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
