import { Button } from "@/components/ui/button";
import heroMockup from "@/assets/hero-mockup.jpg";

const FinalCTASection = () => {
  return (
    <section className="py-20 lg:py-32 hero-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-6 lg:mb-8">
              Pronto para <span className="gradient-text">transformar</span>
              <br />
              sua produtividade?
            </h2>
            
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 lg:mb-10 max-w-lg mx-auto lg:mx-0">
              Junte-se a milhares de profissionais que já revolucionaram 
              sua forma de trabalhar. Comece hoje mesmo, grátis.
            </p>

            {/* Guarantee Badge */}
            <div className="mb-8 lg:mb-10">
              <div className="inline-flex items-center bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium">
                ✓ Garantia de 30 dias ou seu dinheiro de volta
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-8 py-4 text-lg glow"
              >
                Começar Grátis Agora
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-border hover:bg-secondary/50 text-foreground font-semibold px-8 py-4 text-lg"
              >
                Ver Demonstração
              </Button>
            </div>

            {/* Final social proof */}
            <div className="mt-8 text-center lg:text-left">
              <p className="text-muted-foreground text-sm">
                Sem cartão de crédito • Instalação instantânea • Suporte 24/7
              </p>
            </div>
          </div>

          {/* Right Column - Mockup */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up animate-stagger-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl animate-float"></div>
              <img
                src={heroMockup}
                alt="App Preview"
                className="relative w-64 md:w-80 lg:w-full max-w-sm h-auto object-contain animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;