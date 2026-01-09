import { AnimatedSection } from "./AnimatedSection";

function Advantages({ advantages = [], title }) {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <AnimatedSection delay={200}>
          <h2 className="text-center mb-16 text-foreground">{title}</h2>
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {advantages.map((item, index) => (
            <AnimatedSection key={index} delay={250 + index * 50}>
              <div className="text-center">
                <h3 className="text-foreground mb-2">{item.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Advantages;
