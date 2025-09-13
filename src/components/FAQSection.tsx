import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Como funciona o período de teste gratuito?",
      answer: "Oferecemos 14 dias de teste gratuito com acesso completo a todas as funcionalidades. Não é necessário cartão de crédito para começar."
    },
    {
      question: "O app funciona offline?",
      answer: "Sim! Muitas funcionalidades estão disponíveis offline. Quando você se reconectar à internet, todos os dados são sincronizados automaticamente."
    },
    {
      question: "Posso usar em múltiplos dispositivos?",
      answer: "Absolutamente! Sua conta funciona em smartphones, tablets e computadores com sincronização instantânea entre todos os dispositivos."
    },
    {
      question: "Como funciona o suporte ao cliente?",
      answer: "Oferecemos suporte 24/7 via chat, email e telefone. Nossa equipe responde em média em menos de 2 horas durante dias úteis."
    }
  ];

  return (
    <section id="faqs" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20 animate-fade-in-up">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Perguntas <span className="gradient-text">Frequentes</span>
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground">
              Esclarecemos suas principais dúvidas
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="animate-fade-in-up animate-stagger-1">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border-muted rounded-lg px-6 py-2 bg-card/50"
                >
                  <AccordionTrigger className="text-left text-lg lg:text-xl font-semibold hover:text-primary transition-colors duration-200">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base lg:text-lg leading-relaxed pt-2 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;