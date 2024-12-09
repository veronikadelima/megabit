import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Produto } from "@/types/produtos";

//Construção do Card de Exibição dos Produtos
interface ProductCardProps {
  produtos: Produto[];
}

export const OfferProductCard = ({produtos}: ProductCardProps) => {
  return (
    <div className="container m-auto flex flex-wrap px-4">
      {produtos.map((produto, index) => (
        <Card key={index} className="w-40 h-52 mt-2 mr-2">
          <CardHeader>
            <img src={produto.image}/>
          </CardHeader>
          <CardContent className="flex flex-col justify-center items-center">
            <CardTitle className="text-center text-xs">{produto.modelo}</CardTitle>
            <CardDescription className="text-center text-xs">{produto.fabricante}</CardDescription>
            <span className="text-sm text-center font-semibold">R$ {(produto.valor).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
} 