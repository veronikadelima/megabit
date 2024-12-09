import { Header } from "@/components/header/page";
import { Navbar } from "@/components/navbar/page";
import { ProductCard } from "@/components/product_card/product_card";
import { jogos } from "@/data/produtos";

export default function Gamer() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <ProductCard produtos={jogos}/>      
    </div>
  );
} 