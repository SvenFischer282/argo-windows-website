import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSidebar from "@/components/ContactSidebar";
import ProductBreadcrumb from "@/components/product/ProductBreadcrumb";
import ProductHero from "@/components/product/ProductHero";
import { AnimatedSection } from "@/components/AnimatedSection";

const FacadesLayout = () => {
  const title = "Fasády";

  const images = [
    "https://dgvswatqmbvaqfznixyg.supabase.co/storage/v1/object/public/okna/luxury-holiday-home.jpg",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background pt-16">
      <Navigation />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <AnimatedSection>
            <ProductBreadcrumb title={title} />
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2 space-y-16">
              <AnimatedSection delay={100}>
                <ProductHero image={images[0]} alt={title} />
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="space-y-6">
                  <h2 className="text-foreground">Fasádne Zasklenie</h2>

                  <div className="space-y-4">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Pri výstavbe budov sa{" "}
                      <span className="text-foreground font-medium">
                        fasádne zasklenie
                      </span>{" "}
                      používa čoraz častejšie.
                    </p>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Dôvodom je, že fasáda nielenže umožňuje dosiahnuť{" "}
                      <span className="text-foreground font-medium">
                        krásny vonkajší vzhľad
                      </span>{" "}
                      stavby, ale je aj praktická zvnútra:{" "}
                      <span className="text-foreground font-medium">
                        vizuálne zväčšuje priestor
                      </span>
                      , lepšie prepúšťa svetlo do miestnosti a{" "}
                      <span className="text-foreground font-medium">
                        šetrí elektrickú energiu
                      </span>
                      .
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div className="space-y-6">
                  <h3 className="text-foreground">Široké Uplatnenie</h3>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Takéto zasklenie sa široko používa ako v{" "}
                    <span className="text-foreground font-medium">
                      obytných domoch
                    </span>
                    , tak aj v{" "}
                    <span className="text-foreground font-medium">
                      biznis centrách
                    </span>
                    ,{" "}
                    <span className="text-foreground font-medium">verejných</span>{" "}
                    a{" "}
                    <span className="text-foreground font-medium">
                      administratívnych budovách
                    </span>
                    , ako aj v podnikoch.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Vysoké okná a{" "}
                    <span className="text-foreground font-medium">
                      sklené strechy
                    </span>{" "}
                    úplne menia budovu zvonka i zvnútra a premieňajú ju na{" "}
                    <span className="text-foreground font-medium">
                      unikátnu a neopakovateľnú stavbu
                    </span>
                    .
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={350}>
                <blockquote className="border-l-2 border-primary pl-8 my-8 italic text-xl text-foreground/80">
                  Výberom fasádneho zasklenia majitelia nehnuteľností dosahujú
                  dvojitý výsledok – originalitu budovy navonok a exkluzivitu
                  interiéru zvnútra.
                </blockquote>
              </AnimatedSection>

              <AnimatedSection delay={400}>
                <div className="space-y-6">
                  <h3 className="text-foreground">Materiály a Alternatívy</h3>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    <span className="text-foreground font-medium">
                      Hliníkové fasádne systémy
                    </span>{" "}
                    sú vynikajúcou alternatívou k oceľovým konštrukciám.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Taktiež vyrábame{" "}
                    <span className="text-foreground font-medium">
                      panely z plastu
                    </span>{" "}
                    – špeciálne{" "}
                    <span className="text-foreground font-medium">PVC panely</span>
                    , ktoré sa používajú pre{" "}
                    <span className="text-foreground font-medium">
                      súkromné domy
                    </span>
                    .
                  </p>
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <AnimatedSection delay={200} direction="right">
                  <ContactSidebar />
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FacadesLayout;
