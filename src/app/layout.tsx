import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header/page";
import { Navbar } from "@/components/navbar/page";

export const metadata: Metadata = {
  title: "Loja Online",
  description: "Um prototipo de Loja Online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="container mx-auto w-screen h-screen">
          <header>
            <Header/> {/* Exibe o componente Header (Cabeçalho) */}
            <Navbar/> {/* Exibe o componente Navbar (Barra de Menu ou Navegação ) */}
          </header>
          {children}
        </div>        
      </body>
    </html>
  );
}
