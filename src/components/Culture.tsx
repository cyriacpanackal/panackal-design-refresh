import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Culture = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const culturalComparisons = [
    {
      title: "Architecture & Living",
      german: { label: "German Windows", emoji: "🪟", description: "Special tilting windows" },
      other: { label: "Other Countries", emoji: "🪟", description: "Standard windows" },
    },
    {
      title: "Food Culture",
      german: { label: "German Food", emoji: "🥨🌭🍺", description: "Pretzels, sausages, and beer" },
      other: { label: "International Food", emoji: "🍕🍣🌮", description: "Pizza, sushi, and tacos" },
    },
    {
      title: "Transportation",
      german: { label: "Bike Lanes Everywhere", emoji: "🚲", description: "Extensive cycling infrastructure" },
      other: { label: "Car-Dominated", emoji: "🚗", description: "Car-centric cities" },
    },
    {
      title: "Sustainability",
      german: { label: "Recycling System", emoji: "♻️", description: "Comprehensive waste separation" },
      other: { label: "Simple Waste", emoji: "🗑️", description: "Basic waste disposal" },
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % culturalComparisons.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + culturalComparisons.length) % culturalComparisons.length);
  };

  return (
    <section id="culture" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            German Culture: <span className="text-primary">Visual Differences</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Click through to explore unique aspects
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Card className="bg-card border-border shadow-xl animate-fade-in">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-primary">
                  {culturalComparisons[currentSlide].title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center space-y-4 p-6 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors duration-300">
                    <div className="text-6xl mb-4">{culturalComparisons[currentSlide].german.emoji}</div>
                    <h3 className="text-xl font-bold text-foreground">
                      {culturalComparisons[currentSlide].german.label}
                    </h3>
                    <p className="text-muted-foreground">
                      {culturalComparisons[currentSlide].german.description}
                    </p>
                  </div>

                  <div className="text-center space-y-4 p-6 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors duration-300">
                    <div className="text-6xl mb-4">{culturalComparisons[currentSlide].other.emoji}</div>
                    <h3 className="text-xl font-bold text-foreground">
                      {culturalComparisons[currentSlide].other.label}
                    </h3>
                    <p className="text-muted-foreground">
                      {culturalComparisons[currentSlide].other.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full hover:scale-110 transition-transform"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <div className="flex gap-2">
                {culturalComparisons.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "bg-primary w-8" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full hover:scale-110 transition-transform"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;
