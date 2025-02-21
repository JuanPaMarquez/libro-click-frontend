/* eslint-disable @next/next/no-img-element */
"use client"

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Paginacion from "../Paginacion/Paginacion";
import MostrarLibro from "./MostrarLibro";
import { Libro } from "@/utils/schemas"

function LibrosPageContent() {
  const searchParams = useSearchParams();


  const [libros, setLibros] = useState<Libro[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [showBook, setShowBook] = useState(false);
  const [libro, setLibro] = useState<Libro | null>(null);

  const page = Number(searchParams.get("page")) || 1;
  const categoria = searchParams.get("genero") || null;
  const limit = 18;

  const handleShowBook = (libro: Libro) => {
    setShowBook(!showBook);
    setLibro(libro)
  }

  useEffect(() => {
    async function fetchLibros() {
      setIsLoading(true); // Establece isLoading en true antes de iniciar la solicitud
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      let url = `${apiUrl}/api/libros?page=${page}&limit=${limit}`;
      if (categoria) {
        url += `&genero=${categoria}`;
      }
      // console.log(url)
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setLibros(data.libros);
      setTotalPages(data.totalPages);
      setIsLoading(false); // Establece isLoading en false después de recibir los datos
    }
    fetchLibros();
  }, [page, categoria]);

  if (isLoading) {
    return <p className="flex justify-center">Cargando...</p>;
  }

  return (
    <div className="pt-2 max-w-[1900px] mx-auto">
      <ul className="grid grid-cols-[repeat(auto-fill,_minmax(300px,300px))] max-[358px]:grid-cols-[auto] gap-4 place-content-center">
        {libros.map((libro) => (
          <li key={libro.id} className="w-full flex flex-col items-center border rounded-md">
            <img id={`imagen-${libro.id}`} src={libro.portada} alt={libro.titulo} onClick={() => handleShowBook(libro)} className="w-78 h-88 max-[358px]:h-58 max-[358px]:w-48 object-cover rounded-t-md" />
            <div className="flex items-center gap-2 p-1">
              <button className="bg-green-300 size-auto border rounded-full flex justify-center cursor-pointer"><svg className="size-8" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg></button>
              <button className="border rounded-full bg-red-400 px-3 text-2xl font-bold cursor-pointer">Descargar</button>
            </div>
          </li>
        ))}
      </ul>
      { showBook && <MostrarLibro showBook={setShowBook} libro={libro}/>}
      <Paginacion page={page} totalPages={totalPages} categoria={categoria}/>
    </div>
  );
}

export default function LibrosPage() {
  return (
    <Suspense fallback={<p className="flex justify-center">Cargando...</p>}>
      <LibrosPageContent />
    </Suspense>
  );
}