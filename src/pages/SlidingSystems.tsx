import { Helmet } from "react-helmet-async";
import SlidingSystemsLayout from "@/components/layouts/SlidingSystemsLayout";

const SlidingSystems = () => {
  return (
    <>
      <Helmet>
        <title>Posuvné systémy - ARGO SNV</title>
        <meta
          name="description"
          content="Moderné a funkčné posuvné systémy pre terasy, balkóny a zimné záhrady. Získajte viac priestoru a svetla s našimi riešeniami."
        />
      </Helmet>
      <SlidingSystemsLayout />
    </>
  );
};

export default SlidingSystems;
