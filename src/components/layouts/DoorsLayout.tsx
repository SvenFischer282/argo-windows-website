import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSidebar from "@/components/ContactSidebar";
import ProductBreadcrumb from "@/components/product/ProductBreadcrumb";
import ProductHero from "@/components/product/ProductHero";
import TechnologyGrid from "@/components/product/TechnologyGrid";
import { AnimatedSection } from "@/components/AnimatedSection";

const DoorsLayout = () => {
  const title = "Dvere";

  const technologies = [
    {
      name: "WDS 60mm",
      description: "Montážna šírka - 60mm",
      image:
        "https://dgvswatqmbvaqfznixyg.supabase.co/storage/v1/object/public/okna/wds_60mm.png",
    },
    {
      name: "WDS 70mm",
      description: "Montážna šírka - 70mm",
      image:
        "https://dgvswatqmbvaqfznixyg.supabase.co/storage/v1/object/public/okna/wds_70mm.png",
    },
    {
      name: "WDS 76mm",
      description: "Montážna šírka - 76mm",
      image:
        "https://dgvswatqmbvaqfznixyg.supabase.co/storage/v1/object/public/okna/wds_76mm.png",
    },
  ];

  const images = [
    "https://dgvswatqmbvaqfznixyg.supabase.co/storage/v1/object/public/okna/dvere.jpg",
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
                  <h2 className="text-foreground">Dverové Systémy</h2>

                  <div className="space-y-4">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Dvere vytvárajú{" "}
                      <span className="text-foreground font-medium">
                        prvý dojem
                      </span>{" "}
                      o budove. Rozmanitá ponuka dverí z profilov{" "}
                      <span className="text-foreground font-medium">WDS</span>{" "}
                      – vrátane vchodových, interiérových, balkónových a posuvných
                      dverí – dokáže uspokojiť požiadavky aj tých najnáročnejších
                      majiteľov domov.
                    </p>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Naši klienti sa môžu spoľahnúť na{" "}
                      <span className="text-foreground font-medium">
                        vynikajúcu kvalitu
                      </span>{" "}
                      a{" "}
                      <span className="text-foreground font-medium">
                        optimálnu tepelnú izoláciu
                      </span>{" "}
                      dverí vyrobených z profilov{" "}
                      <span className="text-foreground font-medium">WDS</span>.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div className="space-y-6">
                  <h3 className="text-foreground">
                    Profily WDS – Široký Výber pre Každý Priestor
                  </h3>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Portfólio dverových systémov{" "}
                    <span className="text-foreground font-medium">WDS</span>{" "}
                    zahŕňa systémy s montážnou hĺbkou{" "}
                    <span className="text-foreground font-medium">60 mm</span> a{" "}
                    <span className="text-foreground font-medium">70 mm</span>.
                    Tieto systémy poskytujú skvelú zvukovú izoláciu, vyznačujú sa
                    vysokou energetickou účinnosťou a sú určené na inštaláciu v
                    bytoch, rodinných domoch a kancelárskych priestoroch.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={350}>
                <div className="space-y-6">
                  <h3 className="text-foreground">
                    WDS 76 – Nový Štandard Plastových Dverí
                  </h3>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Okrem štandardných systémov ponúkame aj novú dverovú radu{" "}
                    <span className="text-foreground font-medium">WDS 76</span>,
                    ktorá predstavuje moderný štandard plastových dverí.
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Moderné vchodové dvere{" "}
                    <span className="text-foreground font-medium">WDS 76</span>{" "}
                    zabezpečujú špičkovú tepelnú a zvukovú izoláciu vďaka:
                  </p>

                  <ul className="text-lg text-muted-foreground leading-relaxed ml-6 space-y-2 list-disc">
                    <li>5-komorovému profilu</li>
                    <li>Trom kontúram tesnenia</li>
                    <li>Pevnej kovovej výstuži (armovacej vložke)</li>
                  </ul>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    S montážnou hĺbkou 76 mm a možnosťou 4-krídlového riešenia sú
                    ideálne pre rodinné domy, byty a kancelárie.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={400}>
                <TechnologyGrid technologies={technologies} />
              </AnimatedSection>

              <AnimatedSection delay={450}>
                <div className="space-y-6">
                  <h3 className="text-foreground">
                    Typy Dverí WDS v Našej Ponuke
                  </h3>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Vyrábame dvere rôznych typov, aby sme pokryli všetky vaše
                    potreby, od jednoduchého prístupu na balkón až po robustné
                    vchodové systémy.
                  </p>

                  <ul className="text-lg text-muted-foreground leading-relaxed ml-6 space-y-4 list-disc">
                    <li>
                      <span className="text-foreground font-medium">
                        Balkónové plastové dvere
                      </span>{" "}
                      – Vyrábajú sa z okenného PVC profilu. Odporúčajú sa do
                      vnútorných priestorov alebo na oddelenie interiéru od
                      balkóna.
                    </li>
                    <li>
                      <span className="text-foreground font-medium">
                        Vchodové plastové dvere
                      </span>{" "}
                      – Spoľahlivé dvere pre zabezpečenie obytných a komerčných
                      priestorov.
                    </li>
                    <li>
                      <span className="text-foreground font-medium">
                        Interiérové plastové dvere
                      </span>{" "}
                      – Ideálne do kancelárií a priestorov vyžadujúcich zvýšenú
                      zvukovú izoláciu.
                    </li>
                    <li>
                      <span className="text-foreground font-medium">
                        Posuvné plastové dvere
                      </span>{" "}
                      – Vybavené spoľahlivým mechanizmom, šetria úžitkovú plochu v
                      miestnosti.
                    </li>
                  </ul>
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

export default DoorsLayout;
