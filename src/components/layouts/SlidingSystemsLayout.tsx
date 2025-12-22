import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSidebar from "@/components/ContactSidebar";
import ProductBreadcrumb from "@/components/product/ProductBreadcrumb";
import ProductHero from "@/components/product/ProductHero";
import TechnologyGrid from "@/components/product/TechnologyGrid";
import { AnimatedSection } from "@/components/AnimatedSection";

const SlidingSystemsLayout = () => {
  const title = "Posuvné systémy";

  const technologies = [
    {
      name: "WDS 60SL okná",
      description: "",
      image:
        "https://dgvswatqmbvaqfznixyg.supabase.co/storage/v1/object/public/okna/wds_60sl_window.png",
    },
    {
      name: "WDS 60SL dvere",
      description: "",
      image:
        "https://dgvswatqmbvaqfznixyg.supabase.co/storage/v1/object/public/okna/wds_60sl_door.png",
    },
    {
      name: "WDS 76SL okná",
      description: "",
      image:
        "https://dgvswatqmbvaqfznixyg.supabase.co/storage/v1/object/public/okna/wds_76sl_window.png",
    },
    {
      name: "WDS 76SL dvere",
      description: "",
      image:
        "https://dgvswatqmbvaqfznixyg.supabase.co/storage/v1/object/public/okna/wds_76sl_door.png",
    },
  ];

  const images = [
    "https://vesnyanka.com.ua/wp-content/uploads/2025/03/83d2470a-7357-4e2a-a0fc-3524bcc91433.webp",
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
                  <h2 className="text-foreground">Posuvné Systémy</h2>

                  <div className="space-y-4">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Posuvné systémy predstavujú estetický a zároveň mimoriadne
                      praktický spôsob zasklenia budov a miestností. Tieto
                      konštrukcie sa ľahko otvárajú a zatvárajú, pričom si
                      zachovávajú relatívne nízku hmotnosť aj pri rozsiahlej
                      zasklenej ploche.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div className="space-y-6">
                  <h3 className="text-foreground">Materiály a Profily WDS</h3>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Naša spoločnosť vyrába posuvné systémy z{" "}
                    <span className="text-foreground font-medium">PVC</span> a{" "}
                    <span className="text-foreground font-medium">
                      hliníkových
                    </span>{" "}
                    profilov. Ponúkame predovšetkým posuvné PVC systémy{" "}
                    <span className="text-foreground font-medium">WDS 60SL</span>{" "}
                    a{" "}
                    <span className="text-foreground font-medium">WDS 76SL</span>.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={350}>
                <div className="space-y-6">
                  <h3 className="text-foreground">
                    WDS 60SL – Optimálne riešenie pre ľahké konštrukcie
                  </h3>

                  <ul className="text-lg text-muted-foreground leading-relaxed ml-6 space-y-2 list-disc">
                    <li>Montážna hĺbka: 60 mm</li>
                    <li>Počet komôr profilu: 3</li>
                    <li>Maximálna hrúbka izolačného skla: do 24 mm</li>
                    <li>Určenie: Loggie, balkóny, interiérové priečky</li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={400}>
                <div className="space-y-6">
                  <h3 className="text-foreground">
                    WDS 76SL – Vylepšená Energetická Účinnosť
                  </h3>

                  <ul className="text-lg text-muted-foreground leading-relaxed ml-6 space-y-2 list-disc">
                    <li>Montážna hĺbka: 76 mm</li>
                    <li>Počet komôr profilu: 5</li>
                    <li>Maximálna hrúbka izolačného skla: do 42 mm</li>
                    <li>Možnosť laminácie: Rôzne farebné varianty</li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={450}>
                <TechnologyGrid technologies={technologies} />
              </AnimatedSection>

              <AnimatedSection delay={500}>
                <div className="space-y-6">
                  <h3 className="text-foreground">
                    Hlavné Výhody Posuvných Systémov
                  </h3>

                  <ul className="text-lg text-muted-foreground leading-relaxed ml-6 space-y-2 list-disc">
                    <li>
                      <span className="text-foreground font-medium">
                        Úspora priestoru
                      </span>{" "}
                      – Krídla sa posúvajú pozdĺž seba
                    </li>
                    <li>
                      <span className="text-foreground font-medium">
                        Moderný vzhľad
                      </span>{" "}
                      – Elegantný a súčasný dizajn
                    </li>
                    <li>
                      <span className="text-foreground font-medium">
                        Spoľahlivé kovanie
                      </span>{" "}
                      – Ľahký chod a dlhá životnosť
                    </li>
                    <li>
                      <span className="text-foreground font-medium">
                        Vysoká tesnosť
                      </span>{" "}
                      – Špeciálne tesnenie
                    </li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={550}>
                <div className="space-y-6">
                  <h3 className="text-foreground">Hliníkové Posuvné Systémy</h3>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Hliníkové posuvné systémy sú estetickým a pohodlným riešením
                    pre zasklenie. Vyznačujú sa mimoriadnou ľahkosťou, jednoduchým
                    používaním a dobrou zvukovou izoláciou.
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

export default SlidingSystemsLayout;
