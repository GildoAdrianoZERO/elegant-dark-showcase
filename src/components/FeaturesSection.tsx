import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Target } from "lucide-react";
import feature1 from "@/assets/feature-1.jpg";
import feature2 from "@/assets/feature-2.jpg";
import feature3 from "@/assets/feature-3.jpg";

const FeaturesSection = () => {
  const mainFeature = {
    title: "Inteligência Artificial Avançada",
    description: "Nossa IA aprende com seus hábitos e otimiza automaticamente sua experiência, sugerindo ações inteligentes que economizam tempo e aumentam resultados.",
    image: feature1,
    icon: Target
  };

  const secondaryFeatures = [
    {
      title: "Segurança Total",
      description: "Criptografia de ponta a ponta e proteção de dados garantem que suas informações estejam sempre seguras.",
      image: feature2,
      icon: Shield
    },
    {
      title: "Performance Extrema",
      description: "Velocidade incomparável com sincronização instantânea entre todos os seus dispositivos.",
      image: feature3,
      icon: Zap
    }
  ];

  return (
    <section id="funcionalidades" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20 animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Funcionalidades</span> que transformam
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada recurso foi pensado para elevar sua produtividade a um novo patamar
          </p>
        </div>

        {/* Main Feature Card */}
        <div className="mb-12 lg:mb-16 animate-fade-in-up animate-stagger-1">
          <Card className="card-premium overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <mainFeature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold">{mainFeature.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {mainFeature.description}
                  </p>
                </div>
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={mainFeature.image}
                    alt={mainFeature.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Secondary Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {secondaryFeatures.map((feature, index) => (
            <Card
              key={feature.title}
              className={`card-premium overflow-hidden group hover:scale-[1.02] transition-transform duration-300 animate-fade-in-up animate-stagger-${index + 2}`}
            >
              <CardContent className="p-0">
                <div className="relative h-48 lg:h-56 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 lg:p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;