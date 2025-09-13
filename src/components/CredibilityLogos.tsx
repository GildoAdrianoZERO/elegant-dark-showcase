const CredibilityLogos = () => {
  const logos = [
    "TechCrunch", "Forbes", "Wired", "Fast Company", "Mashable"
  ];

  return (
    <section className="py-12 lg:py-16 border-b border-border-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-muted-foreground text-sm uppercase tracking-wider">
            Reconhecido por
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-60">
          {logos.map((logo, index) => (
            <div
              key={logo}
              className={`text-lg lg:text-xl font-semibold text-muted-foreground hover:text-foreground transition-colors duration-300 animate-fade-in-up animate-stagger-${index + 1}`}
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredibilityLogos;