import { Helmet } from "react-helmet-async";
import FacadesLayout from "@/components/layouts/FacadesLayout";

const Facades = () => {
  return (
    <>
      <Helmet>
        <title>Fasádne systémy - ARGO SNV</title>
        <meta
          name="description"
          content="Dodávame a montujeme moderné fasádne systémy, ktoré zlepšujú tepelnú izoláciu a estetiku budov. Pre novostavby aj rekonštrukcie."
        />
      </Helmet>
      <FacadesLayout />
    </>
  );
};

export default Facades;
