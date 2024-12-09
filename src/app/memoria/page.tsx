import { Carrocel } from "@/components/carousel/page";
import { Header } from "@/components/header/page";
import { Navbar } from "@/components/navbar/page";
import { memorias } from "@/data/produtos";

export default function PlacaMaePage() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Carrocel produtos={memorias}/>
    </div>
  );
} 