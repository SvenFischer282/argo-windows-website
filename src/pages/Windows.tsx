import { Helmet } from "react-helmet-async";
import WindowsLayout from "@/components/layouts/WindowsLayout";

const Windows = () => {
  return (
    <>
      <Helmet>
        <title>Okná - ARGO SNV</title>
        <meta
          name="description"
          content="Ponúkame široký sortiment kvalitných okien pre novostavby aj rekonštrukcie. Zistite viac o našich plastových, hliníkových a drevených oknách."
        />
      </Helmet>
      <WindowsLayout />
    </>
  );
};

export default Windows;
