import { ProductCard } from "@/components/product_card/product_card";
import { jogos } from "@/data/produtos";

export default function Gamer() {
  return (
    <main>
      <ProductCard produtos={jogos}/> {/* Exibe o componente Carrocel apontando para os Produtos da Seção Jogos */}      
    </main>
  );
} 