import { Carrocel } from "@/components/carousel/page";
import { placas_mae } from "@/data/produtos";

export default function PlacaMaePage() {
  return (
    <main>
      <Carrocel produtos={placas_mae}/> {/* Exibe o componente Carrocel apontando para os Produtos da Seção Placa Mãe */}
    </main>
  );
} 