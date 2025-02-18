/* eslint-disable @next/next/no-img-element */
"use client"

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Libro {
  id: number;
  titulo: string;
  autor: string;
  publicacion: number;
  genero: string;
  resumen: string;
  portada: string;
  descarga: string;
}

export default function LibrosPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [libros, setLibros] = useState<Libro[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const page = Number(searchParams.get("page")) || 1;
  const categoria = searchParams.get("genero") || null;
  const limit = 20;

  const handlePageChange = (newPage: number) => {
    const queryParams = new URLSearchParams();
    queryParams.set("page", newPage.toString());
    if (categoria) {
      queryParams.set("genero", categoria);
    }
    router.push(`/?${queryParams.toString()}`);
  }

  useEffect(() => {
    async function fetchLibros() {
      setIsLoading(true);
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      let url = `${apiUrl}/api/libros?page=${page}&limit=${limit}`;
      if (categoria) {
        url += `&genero=${categoria}`;
      }
      console.log(url)
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setLibros(data.libros);
      setTotalPages(data.totalPages);
      setIsLoading(false);
    }
    fetchLibros();
  }, [page, categoria]);

  if (isLoading) {
    return <p className="flex justify-center">Cargando...</p>;
  }

  return (
    <div className="pt-2">
      <ul className="grid grid-cols-[repeat(auto-fill,_minmax(192px,192px))] gap-4 place-content-center">
        {libros.map((libro) => (
          <li key={libro.id} className="w-fit flex flex-col items-center border rounded-md">
            <img src={libro.portada} alt={libro.titulo} className="w-48 h-68 object-cover rounded-t-md" />
            <div className="flex items-center gap-2 p-1">
              <button className="bg-green-300 w-8 border rounded-full flex justify-center cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg></button>
              <button className="border rounded-full bg-red-400 px-3 font-bold cursor-pointer">Descargar</button>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex justify-center items-center gap-2 my-4">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page <= 1}
          style={{ marginRight: "10px", opacity: page <= 1 ? 0.5 : 1 }}
          className={page <= 1 ? "cursor-not-allowed" : "cursor-pointer"}
        >
          <svg className="size-10" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M5 12l4 4" /><path d="M5 12l4 -4" /></svg>
        </button>
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page >= totalPages}
          style={{ marginLeft: "10px", opacity: page >= totalPages ? 0.5 : 1 }}
          className={page >= totalPages ? "cursor-not-allowed" : "cursor-pointer"}
        >
          <svg className="size-10" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
        </button>
      </div>
    </div>
  )
}