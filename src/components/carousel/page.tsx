 
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Produto } from "@/types/produtos";

interface CarrocelProps {
  produtos: Produto[];
}
  
export function Carrocel({produtos}: CarrocelProps) {
  return (
    <Carousel className="w-full m-auto max-w-xs">
      <CarouselContent>
        {produtos.map((produto, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                    <span className="w-44"><img src={produto.image} alt="" /></span>
                    <span className="text-sm font-semibold">{produto.fabricante}</span>
                    <span className="text-xs font-semibold">{produto.modelo}</span>
                    <span className="text-lg font-semibold">R$ {(produto.valor).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}    
