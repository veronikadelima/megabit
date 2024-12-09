import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Produto } from "@/types/produtos";

interface ProductCardProps {
  produtos: Produto[];
}

export const ProductCard = ({produtos}: ProductCardProps) => {
  return (
    <div className="container m-auto flex flex-wrap">
      {produtos.map((produto, index) => (
      <Card key={index} className="w-60 h-96">
        <CardHeader className="">
          <img src={produto.image}/>
        </CardHeader>
        <CardContent className="flex flex-col justify-center items-center">
          <CardTitle className="text-center">{produto.modelo}</CardTitle>
          <CardDescription className="text-center">{produto.fabricante}</CardDescription>
          <span className="text-lg text-center font-semibold">R$ {(produto.valor).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
        </CardContent>
      </Card>
      ))}
    </div>
  );
} 