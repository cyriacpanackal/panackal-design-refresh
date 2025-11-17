import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Users, Building2, MessageSquare } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Migration Consulting",
      description: "Guidance through visas, permits, and relocation with clear strategies for smooth migration processes.",
    },
    {
      icon: Users,
      title: "Integration Support",
      description: "Intercultural coaching, adaptation support, and workshops to build inclusive communities.",
    },
    {
      icon: Globe,
      title: "International Recruitment",
      description: "Attract and onboard global talent with cross-cultural recruitment strategies and HR training.",
    },
    {
      icon: MessageSquare,
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
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
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
