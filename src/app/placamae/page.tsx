import { Carrocel } from "@/components/carousel/page";
import { Header } from "@/components/header/page";
import { Navbar } from "@/components/navbar/page";
import { placas_mae } from "@/data/produtos";

export default function PlacaMaePage() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Carrocel produtos={placas_mae}/>
    </div>
  );
} 