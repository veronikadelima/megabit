import { Carrocel } from "@/components/carousel/page";
import { Header } from "@/components/header/page";
import { Navbar } from "@/components/navbar/page";
import { memorias } from "@/data/produtos";

export default function PlacaMaePage() {
  return (
    <div className="w-screen h-screen">
      <Header/>
      <Navbar/>
      <Carrocel produtos={memorias}/>{/* Exibe o componente Carrocel apontando para os Produtos da Seção Memória Ram */}
    </div>
  );
} 