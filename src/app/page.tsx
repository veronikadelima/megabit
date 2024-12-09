import { Header } from "@/components/header/page";
import { Navbar } from "@/components/navbar/page";
import Gamer from "./jogos/page";

export default function Page() {
  return (
    <div className="w-screen h-screen">
      <Header/>
      <Navbar/>
      <Gamer />
    </div>
  );
}