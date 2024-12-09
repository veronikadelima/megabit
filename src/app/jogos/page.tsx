import { Header } from "@/components/header/page";
import { Navbar } from "@/components/navbar/page";
import { ProductCard } from "@/components/product_card/product_card";
import { jogos } from "@/data/produtos";

export default function Gamer() {
  return (
    <div className="w-screen h-screen">
      <Header/>
      <Navbar/>
      <ProductCard produtos={jogos}/> {/* Exibe o componente Carrocel apontando para os Produtos da Seção Jogos */}      
    </div>
  );
} 