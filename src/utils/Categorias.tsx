"use client"

import { Button } from "@/ui/components/Buttons"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export const categorias = [
  {
    link: "/",
    nombre: "Inicio"
  },
  {
    link: "/aventura",
    nombre: "Aventura"
  },
  {
    link: "/ciencia",
    nombre: "Ciencia"
  },
  {
    link: "/educacion",
    nombre: "Educacion"
  },
  {
    link: "/ficcion",
    nombre: "Ficcion"
  },
  {
    link: "/literatura",
    nombre: "Literatura"
  },
]

export default function Categorias () {
  const pathname = usePathname()
  const [currentPath, setCurrentPath] = useState("");
  
  useEffect(() => {
    if (pathname) {
      setCurrentPath(pathname);
    }
  }, [pathname]);

  return (
    <>
      {categorias.map((categoria) => (
        <Link href={categoria.link} key={categoria.nombre}>
          <Button className={`${currentPath === categoria.link ? `underline decoration-2 underline-offset-6`: ``} shadow-cyan-500/50 text-black`}>{categoria.nombre}</Button>
        </Link>
      ))}
    </>
  )
};