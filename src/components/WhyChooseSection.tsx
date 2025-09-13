import { Check, Clock, Users, Award } from "lucide-react";

const WhyChooseSection = () => {
  const benefits = [
    {
      icon: Check,
      title: "Facilidade Total",
      description: "Interface intuitiva que qualquer pessoa domina em minutos"
    },
    {
      icon: Clock,
      title: "Economia de Tempo",
      description: "Automatize tarefas repetitivas e foque no que realmente importa"
    },
    {
      icon: Users,
      title: "Colaboração Perfeita",
      description: "Trabalhe em equipe com sincronização em tempo real"
    },
    {
      icon: Award,
      title: "Resultados Comprovados",
      description: "Mais de 95% dos usuários relatam aumento de produtividade"
    }
  ];

  return (
    <section id="por-que-escolher" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20 animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Por que <span className="gradient-text">escolher</span> nosso app?
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada detalhe foi pensado para oferecer a melhor experiência possível
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`text-center group animate-fade-in-up animate-stagger-${index + 1}`}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;