import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSidebar from "@/components/ContactSidebar";
import ProductBreadcrumb from "@/components/product/ProductBreadcrumb";
import ProductHero from "@/components/product/ProductHero";
import TechnologyGrid from "@/components/product/TechnologyGrid";
import { AnimatedSection } from "@/components/AnimatedSection";

const WindowsLayout = () => {
  const title = "Okná";

  const features = [
    "Plastové okná",
    "Drevené okná",
    "Hliníkové okná",
    "Energeticky úsporné okná",
  ];

  const technologies = [
    {
      name: "WDS 5S",
      description: "60 mm | Klasické okná s optimálnou komfortnou výbavou",
      descriptionDetailed:
        "Klasické okná s optimálnou kompletáciou. Päť komôr v profile zaisťuje vysoké tepelnoizolačné vlastnosti pre konštrukcie danej triedy.",
      image:
        "https://dgvswatqmbvaqfznixyg.supabase.co/storage/v1/object/public/okna/WDS_5S.png",
    },
    {
      name: "WDS 6S",
      description: "70 mm | Vyššia tepelná izolácia a úspora energie",
      descriptionDetailed:
        "6-komorový profilový systém WDS 6S má menšiu výšku a prepúšťa viac svetla. Je vyvinutý na zasklenie obytných budov. Šesť vzduchových komôr zaisťuje spoľahlivú tepelnú izoláciu.",
      image:
        "https://dgvswatqmbvaqfznixyg.supabase.co/storage/v1/object/public/okna/WDS_6S.png",
    },
    {
      name: "WDS 7S",
      description: "76 mm | Prémiová tepelná a zvuková izolácia",
      descriptionDetailed:
        "6-komorový profilový systém pre výrobu okien a dverí s vysokými tepelnoizolačnými parametrami. Umožňuje výrobu klasických aj neštandardných konštrukcií (trojuholníkové, oblúkové, kruhové).",
      image:
        "https://dgvswatqmbvaqfznixyg.supabase.co/storage/v1/object/public/okna/WDS_7S.png",
    },
    {
      name: "WDS 8S",
      description: "82 mm | Najvyššia energetická účinnosť",
      descriptionDetailed:
        "6-komorový profilový systém s tromi tesniacimi okruhmi a bezchybným dizajnom – je jedným z najúspornejších okenných systémov. Vhodný pre budovy so zvýšenými nárokmi na úsporu tepla.",
      image:
        "https://dgvswatqmbvaqfznixyg.supabase.co/storage/v1/object/public/okna/WDS_8S.png",
    },
    {
      name: "WDS 76 AD",
      description: "76 mm | Maximálne presvetlenie interiéru",
      descriptionDetailed:
        "WDS 76 AD má komory na armovanie väčšie ako iné systémy WDS. Okná prepúšťajú viac svetla a umožňujú vytvárať veľkorozmerné konštrukcie. Ideálny na zasklenie domov, terás, veránd.",
      image:
        "https://dgvswatqmbvaqfznixyg.supabase.co/storage/v1/object/public/okna/WDS_76_AD.png",
    },
    {
      name: "WDS 76 MD",
      description: "90 mm | Pre pasívne a nízkoenergetické domy",
      descriptionDetailed:
        "WDS 76 MD má komory na armovanie väčšie ako iné systémy WDS. Okná prepúšťajú viac svetla, umožňujú veľkorozmerné konštrukcie a sú ideálne pre panoramatické zasklenie. Má vysokú úroveň energetickej úspornosti.",
      image:
        "https://dgvswatqmbvaqfznixyg.supabase.co/storage/v1/object/public/okna/WDS_76_MD.png",
    },
  ];

  const images = [
    "https://dgvswatqmbvaqfznixyg.supabase.co/storage/v1/object/public/okna/okno.jpg",
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
                  <h2 className="text-foreground">Okná</h2>

                  <div className="space-y-4">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Plastové okná sú veľmi obľúbené vďaka svojmu modernému
                      dizajnu a vysokej praktickosti. Nie je ich potrebné natierať
                      a zároveň pôsobia esteticky a elegantne.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Spolupracujeme s výrobcom profilových systémov{" "}
                      <span className="text-foreground font-medium">WDS</span>
                      , ktorého produkty prechádzajú dôslednou kontrolou kvality v
                      každom kroku výroby.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Profilové systémy{" "}
                      <span className="text-foreground font-medium">WDS</span>{" "}
                      sú vyrábané podľa medzinárodných a slovenských štandardov
                      kvality, priamo pre klimatické podmienky Slovenska a
                      slovenské domácnosti.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <TechnologyGrid technologies={technologies} />
              </AnimatedSection>

              <AnimatedSection delay={400}>
                <div className="space-y-8">
                  <h3 className="text-foreground">Technické špecifikácie</h3>
                  {technologies.map((tech, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="text-foreground">{tech.name}</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {tech.descriptionDetailed}
                      </p>
                    </div>
                  ))}
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

export default WindowsLayout;
