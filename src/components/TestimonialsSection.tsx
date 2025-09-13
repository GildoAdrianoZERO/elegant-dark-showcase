import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ana Silva",
      country: "Brasil",
      avatar: avatar1,
      text: "Transformou completamente minha rotina de trabalho. Nunca fui tão produtiva!"
    },
    {
      name: "Carlos Santos",
      country: "Portugal",
      avatar: avatar2,
      text: "A facilidade de uso é impressionante. Minha equipe adotou em questão de dias."
    },
    {
      name: "Maria Costa",
      country: "Brasil",
      avatar: avatar3,
      text: "Resultados visíveis desde a primeira semana. Recomendo para qualquer profissional."
    },
    {
      name: "João Pereira",
      country: "Portugal",
      avatar: avatar4,
      text: "A melhor ferramenta que já usei. Interface linda e funcionalidades incríveis."
    }
  ];

  return (
    <section id="depoimentos" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20 animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            O que dizem nossos <span className="gradient-text">usuários</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Histórias reais de pessoas que transformaram sua produtividade
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className={`card-premium group hover:scale-[1.02] transition-transform duration-300 animate-fade-in-up animate-stagger-${index + 1}`}
            >
              <CardContent className="p-6 lg:p-8">
                {/* Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground/80 transition-colors duration-300">
                  "{testimonial.text}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.country}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;