"use client";

import { Suspense } from "react";
import { Button } from "@/components/Buttons";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { categorias } from "@/utils/generos";

function CategoriasContent() {
  const searchParams = useSearchParams();
  const genero = searchParams.get("genero");
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    if (genero) {
      setCurrentPath(genero);
    } else if (pathname === "/login") {
      setCurrentPath("");
    } else if (pathname === "/") {
      setCurrentPath("Inicio");
    } else {
      setCurrentPath(pathname);
    }
    console.log(pathname);
  }, [pathname, genero]);

  return (
    <>
      {categorias.map((categoria) => (
        <Link href={categoria.link} key={categoria.nombre}>
          <Button className={`${currentPath === categoria.nombre ? `underline decoration-2 underline-offset-6` : ``} shadow-cyan-500/50 text-black`}>
            {categoria.nombre}
          </Button>
        </Link>
      ))}
    </>
  );
}

export default function Categorias() {
  return (
    <Suspense fallback={<p className="flex justify-center">Cargando...</p>}>
      <CategoriasContent />
    </Suspense>
  );
}