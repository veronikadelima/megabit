import Link from "next/link";

// Cabeçalho com a logo marca da empresa

export const Header = () => {
  return (
    <div className="container m-auto flex flex-col items-center justify-center h-32">
      <Link href={"/"}><img src="/images/megabit-logo.png" className="w-60" alt="Imagem da Logomarca - Mega Bit"/></Link>
    </div>
  );
}