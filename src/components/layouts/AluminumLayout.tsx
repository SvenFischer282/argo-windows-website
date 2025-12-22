import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSidebar from "@/components/ContactSidebar";
import ProductBreadcrumb from "@/components/product/ProductBreadcrumb";
import ProductHero from "@/components/product/ProductHero";
import TechnologyGrid from "@/components/product/TechnologyGrid";
import { AnimatedSection } from "@/components/AnimatedSection";

const AluminumLayout = () => {
  const title = "Hliník";

  const technologies1 = [
    {
      name: "Framex 38",
      description:
        "Montážna hĺbka rámu: 38 mm. Inštalačná (montážna) hĺbka krídla: 46 mm",
      image:
        "https://dgvswatqmbvaqfznixyg.supabase.co/storage/v1/object/public/okna/framex_38.png",
    },
  ];

  const technologies2 = [
    {
      name: "Framex FT 72",
      description: "Montážna hĺbka 72 mm.",
      image:
        "https://dgvswatqmbvaqfznixyg.supabase.co/storage/v1/object/public/okna/framex_ft72.png",
    },
  ];

  const images = [
    "https://vesnyanka.com.ua/wp-content/uploads/2025/03/DALL%C2%B7E-2025-03-31-21.43.31-A-modern-aluminum-and-glass-door-designed-for-contemporary-homes-and-commercial-spaces.-The-door-features-a-sleek-minimalistic-frame-with-a-large-gla.webp",
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
                  <h2 className="text-foreground">Hliníkové Konštrukcie</h2>

                  <div className="space-y-4">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      <span className="text-foreground font-medium">
                        Ľahké hliníkové systémy
                      </span>{" "}
                      sú ideálnou voľbou, ak potrebujete zabezpečiť maximálne
                      prirodzené osvetlenie a nemáte prísne požiadavky na tepelnú
                      izoláciu.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div className="space-y-6">
                  <h3 className="text-foreground">
                    Náš Sortiment Hliníkových Produktov
                  </h3>

                  <ul className="text-lg text-muted-foreground leading-relaxed ml-6 space-y-2 list-disc">
                    <li>Fasády</li>
                    <li>Kancelárske priečky</li>
                    <li>Okná</li>
                    <li>Dvere a iné hliníkové výrobky</li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={350}>
                <div className="space-y-6">
                  <h3 className="text-foreground">Hliníkové Okná</h3>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Hliníkové okná patria k najobľúbenejším typom okenných
                    konštrukcií. Vyznačujú sa vysokou odolnosťou proti korózii, sú
                    trvácne a praktické.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={400}>
                <div className="space-y-6">
                  <h3 className="text-foreground">
                    Rozdiel medzi „Studeným" a „Teplým" Hliníkom
                  </h3>

                  <ul className="text-lg text-muted-foreground leading-relaxed ml-6 space-y-4 list-disc">
                    <li>
                      <span className="text-foreground font-medium">
                        „Studený" hliník
                      </span>{" "}
                      – Ideálny pre balkóny, verandy, altánky a terasy. Cenovo
                      dostupné klasické posuvné systémy.
                    </li>
                    <li>
                      <span className="text-foreground font-medium">
                        „Teplý" hliník
                      </span>{" "}
                      – Vysoké tepelno- a zvukovoizolačné vlastnosti. Najlepšie
                      riešenie pre vykurované miestnosti.
                    </li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={450}>
                <div className="space-y-6">
                  <h3 className="text-foreground">Hliníkové Dvere a Priečky</h3>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Hliníkové dvere majú množstvo výhod: odolnosť proti poškodeniu,
                    minimalistický vzhľad, nenáročnosť na údržbu a možnosť
                    farebného spracovania.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={500}>
                <div className="space-y-6">
                  <h3 className="text-foreground">Hliníkový Profil Framex</h3>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Pracujeme s hliníkovým profilom{" "}
                    <span className="text-foreground font-medium">Framex</span> –
                    kvalitný konštrukčný profil certifikovaný podľa európskych
                    noriem.
                  </p>

                  <ul className="text-lg text-muted-foreground leading-relaxed ml-6 space-y-2 list-disc">
                    <li>
                      <span className="text-foreground font-medium">
                        Ľahkosť a pevnosť
                      </span>{" "}
                      – Ideálne pre trvanlivé a ľahké konštrukcie
                    </li>
                    <li>
                      <span className="text-foreground font-medium">
                        Odolnosť proti korózii
                      </span>{" "}
                      – Eloxácia alebo práškové lakovanie
                    </li>
                    <li>
                      <span className="text-foreground font-medium">
                        Estetický vzhľad
                      </span>{" "}
                      – Rozmanitosť farieb a textúr
                    </li>
                    <li>
                      <span className="text-foreground font-medium">
                        Ekologickosť
                      </span>{" "}
                      – Plne recyklovateľný materiál
                    </li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={550}>
                <div className="space-y-6">
                  <h3 className="text-foreground">
                    Framex 38 – Studený Hliníkový Systém
                  </h3>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Studený hliníkový systém určený pre konštrukcie s nízkymi
                    požiadavkami na tepelnú izoláciu – nevykurované miestnosti,
                    interiérové priečky alebo výklady.
                  </p>

                  <TechnologyGrid technologies={technologies1} />
                </div>
              </AnimatedSection>

              <AnimatedSection delay={600}>
                <div className="space-y-6">
                  <h3 className="text-foreground">
                    Framex FT 72 – Teplý Hliníkový Systém
                  </h3>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    <span className="text-foreground font-medium">
                      Framex FT 72
                    </span>{" "}
                    je spoľahlivý a energeticky účinný teplý hliníkový okenný a
                    dverový systém s vysokou tepelnou a zvukovou izoláciou.
                  </p>

                  <TechnologyGrid technologies={technologies2} />
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

export default AluminumLayout;
