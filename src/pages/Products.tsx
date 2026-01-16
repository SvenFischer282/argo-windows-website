import { Helmet } from "react-helmet-async";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import OurProducts from "@/components/OurProducts";

const Products = () => {
  return (
    <div>
      <Helmet>
        <title>Naše produkty - ARGO SNV</title>
        <meta
          name="description"
          content="Prezrite si náš kompletný sortiment produktov - okná, dvere, posuvné systémy, hliníkové konštrukcie a fasádne systémy."
        />
      </Helmet>
      <Navigation />
      <OurProducts />
      <Footer />
    </div>
  );
};

export default Products;
