import { Carrocel } from "@/components/carousel/page";
import { memorias } from "@/data/produtos";

export default function PlacaMaePage() {
  return (
    <main>
      <Carrocel produtos={memorias}/>{/* Exibe o componente Carrocel apontando para os Produtos da Seção Memória Ram */}
    </main>
  );
} 