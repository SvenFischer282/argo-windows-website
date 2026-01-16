import { Helmet } from "react-helmet-async";
import AluminumLayout from "@/components/layouts/AluminumLayout";

const Aluminum = () => {
  return (
    <>
      <Helmet>
        <title>Hliníkové konštrukcie - ARGO SNV</title>
        <meta
          name="description"
          content="Realizujeme hliníkové konštrukcie na mieru - zimné záhrady, prístrešky, a presklené fasády. Vysoká kvalita a dlhá životnosť."
        />
      </Helmet>
      <AluminumLayout />
    </>
  );
};

export default Aluminum;
