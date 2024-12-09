import { Header } from "@/components/header/page";
import { Navbar } from "@/components/navbar/page";

export default function Page() {
  return (
    <div className="w-screen h-screen">
      <Header/> {/* Exibe o componente Header (Cabeçalho) */}
      <Navbar/> {/* Exibe o componente Navbar (Barra de Menu ou Navegação ) */}
    </div>
  );
}