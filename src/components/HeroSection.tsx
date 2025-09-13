import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroMockup from "@/assets/hero-mockup.jpg";

const HeroSection = () => {
  return (
    <section className="hero-background min-h-screen flex items-center justify-center pt-20 pb-16 lg:pt-24 lg:pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="animate-fade-in-up animate-stagger-1">
              <Badge variant="secondary" className="text-sm px-4 py-2 bg-secondary/50 text-secondary-foreground border border-border-muted">
                🏆 Aplicativo #1 de 2025
              </Badge>
            </div>

            {/* Headline */}
            <div className="animate-fade-in-up animate-stagger-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="gradient-text">Revolucione</span>
                <br />
                sua produtividade
                <br />
                <span className="text-foreground">hoje mesmo</span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className="animate-fade-in-up animate-stagger-3">
              <p className="text-lg lg:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
                O aplicativo que transforma sua rotina em resultados extraordinários. 
                Simples, poderoso e feito para você.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-stagger-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-8 py-4 text-lg glow"
              >
                Baixar para iOS
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-border hover:bg-secondary/50 text-foreground font-semibold px-8 py-4 text-lg"
              >
                Baixar para Android
              </Button>
            </div>

            {/* Social Proof */}
            <div className="animate-fade-in-up animate-stagger-4">
              <p className="text-muted-foreground text-sm">
                <span className="font-semibold text-foreground">200k+</span> downloads e crescendo
              </p>
            </div>
          </div>

          {/* Right Column - Mockup */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up animate-stagger-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl animate-float"></div>
              <img
                src={heroMockup}
                alt="App Preview"
                className="relative w-80 md:w-96 lg:w-full max-w-md h-auto object-contain animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;