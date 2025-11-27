import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronRight, RectangleHorizontal, DoorOpen, ArrowRightLeft, Box, Building2, Warehouse, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-windows.jpg";

const Index = () => {
  const products = [
    { title: "Okná", icon: RectangleHorizontal, path: "/windows" },
    { title: "Dvere", icon: DoorOpen, path: "/doors" },
    { title: "Posuvné systémy", icon: ArrowRightLeft, path: "/sliding-systems" },
    { title: "Hliník", icon: Box, path: "/aluminum" },
    { title: "Fasády", icon: Building2, path: "/facades" },
    { title: "Garážové brány a žalúzie", icon: Warehouse, path: "/garage-systems" },
    { title: "Doplnkové prvky", icon: Plus, path: "/additional-elements" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt
          </p>
          <Link to="/windows">
            <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold animate-fade-in">
              Zistite viac o našich produktoch
              <ChevronRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gradient">O nás</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Naše produkty</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.path}
                title={product.title}
                icon={product.icon}
                path={product.path}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Často kladené otázky</h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left hover:no-underline">
                  Aké typy okien ponúkate?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Ponúkame širokú škálu okien vrátane plastových, hliníkových a drevených okien. 
                  Každý typ má svoje špecifické výhody a je vhodný pre rôzne typy budov a klimatické podmienky.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left hover:no-underline">
                  Aká je záruka na vaše produkty?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Poskytujeme 5-ročnú záruku na všetky naše výrobky. Záruka pokrýva výrobné chyby 
                  a defekty materiálu. Montáž vykonávaná našimi certifikovanými technikmi je zaručená na 2 roky.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left hover:no-underline">
                  Ako dlho trvá montáž?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Montáž štandardných okien alebo dverí trvá zvyčajne 1-2 dni v závislosti od počtu kusov. 
                  Väčšie projekty ako fasády alebo garážové brány môžu trvať dlhšie. Presný časový rámec 
                  vám poskytneme pri obhliadke.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left hover:no-underline">
                  Poskytujete bezplatnú obhliadku a cenový odhad?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Áno, ponúkame bezplatnú obhliadku a vypracovanie cenovej ponuky. Náš technik príde 
                  na miesto, vykoná potrebné merania a poradí vám s výberom najvhodnejšieho riešenia 
                  pre vaše potreby.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left hover:no-underline">
                  Aké certifikáty majú vaše produkty?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Všetky naše produkty spĺňajú európske normy kvality a bezpečnosti vrátane STN EN 14351-1, 
                  ISO 9001 a ďalších relevantných certifikácií. Detailné informácie o certifikátoch nájdete 
                  na stránkach jednotlivých produktov, kde si môžete aj stiahnuť potrebnú dokumentáciu.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left hover:no-underline">
                  Ponúkate financovanie alebo platbu na splátky?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Áno, spolupracujeme s viacerými finančnými inštitúciami a ponúkame rôzne možnosti 
                  financovania vrátane splátok s výhodným úročením. Kontaktujte nás pre viac informácií 
                  o aktuálnych možnostiach financovania.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
