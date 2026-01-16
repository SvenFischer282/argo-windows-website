import { Helmet } from "react-helmet-async";
import DoorsLayout from "@/components/layouts/DoorsLayout";

const Doors = () => {
  return (
    <>
      <Helmet>
        <title>Dvere - ARGO SNV</title>
        <meta
          name="description"
          content="Bezpečnostné, interiérové a vchodové dvere pre váš domov. Objavte našu ponuku dverí z rôznych materiálov a v moderných dizajnoch."
        />
      </Helmet>
      <DoorsLayout />
    </>
  );
};

export default Doors;
