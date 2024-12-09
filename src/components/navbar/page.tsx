import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@/components/ui/menubar";
import Link from "next/link";

//Construção do Navbar ou Barra de Menu ou Menu de Navegação

export const Navbar = () => {
  return (
    <div className="flex justify-center items-center">
      <Menubar className="container flex items-center margin-auto h-30 bg-slate-900 text-neutral-50">
        <MenubarMenu>
          <MenubarTrigger>Hardware</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Processadores</MenubarItem>
            <MenubarItem><Link href="/placamae">Placa Mãe</Link></MenubarItem>
            <MenubarItem><Link href="/memoria">Memória Ram</Link></MenubarItem>
            <MenubarItem>HDD / SSD</MenubarItem>
            <MenubarItem>Gabinetes</MenubarItem>
            <MenubarItem>Periféricos</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarSeparator/>
        <MenubarMenu>
          <MenubarTrigger>Software</MenubarTrigger>
          <MenubarContent>
            <MenubarItem><Link href="/jogos">Jogos</Link></MenubarItem>
            <MenubarItem>Aplicativos</MenubarItem>
            <MenubarItem>Sistemas Operacionais</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarSeparator/>
        <MenubarMenu>
          <MenubarTrigger>Mobília Gamer</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Messa Gamer</MenubarItem>
            <MenubarItem>Cadeira Gamer</MenubarItem>
            <MenubarItem>Sistemas Operacionais</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}