import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
