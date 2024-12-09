import { Produto } from "@/types/produtos";
import { OfferProductCard } from "@/components/offer_product_card/product_card";
import { memorias } from "@/data/produtos";

//Construção do Card de Exibição dos Produtos
interface ProductCardProps {
  produtos: Produto[];
}



export default function Page() {
  return (
    <main className="flex flex-col">
      <div className="bg-bg1-carousel border rounded w-full h-64 flex flex-row justify-around">
        <OfferProductCard produtos={memorias} />
      </div>
      <div className="flex flex-col flex-1 justify-center items-center font-bold text-xl">
          ...
      </div>
    </main>
  );
}