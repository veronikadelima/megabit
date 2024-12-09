import { Carrocel } from "@/components/carousel/page";
import { Header } from "@/components/header/page";
import { Navbar } from "@/components/navbar/page";
import { placas_mae } from "@/data/produtos";

export default function PlacaMaePage() {
  return (
    <div className="w-screen h-screen">
      <Header/>
      <Navbar/>
      <Carrocel produtos={placas_mae}/> {/* Exibe o componente Carrocel apontando para os Produtos da Seção Placa Mãe */}
    </div>
  );
} 