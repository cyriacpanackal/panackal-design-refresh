import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://panackal.de/profilepic.jpg"
                alt="Cyriac Panackal"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10"></div>
          </div>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Hello, I'm <span className="text-primary">Cyriac Panackal</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              A freelance consultant specializing in migration, integration, and international recruitment.
            </p>
            
            <p className="text-base text-muted-foreground leading-relaxed">
              I support individuals and organizations in navigating complex migration processes, adapting to new cultural environments, and attracting and retaining international talent.
            </p>
            
            <p className="text-base text-muted-foreground leading-relaxed">
              Drawing on experience across both public and private sectors, I provide tailored consulting, workshops, and training focused on intercultural communication, integration strategies, and effective international recruitment practices.
            </p>
            
            <Button variant="default" size="lg" className="mt-4" asChild>
              <a href="#services">Explore My Services</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
