/* eslint-disable react-hooks/exhaustive-deps */
import { Libro } from "@/utils/schemas"
import { useEffect } from "react";

interface MostrarLibroProps {
  showBook: (value: boolean) => void;
  libro: Libro | null;
}

export default function MostrarLibro({ showBook, libro }: MostrarLibroProps) {
  
  useEffect(() => {
    const imgContent = document.getElementById("imgContent")
    const imagen = document.getElementById(`imagen-${libro?.id}`);
    
    if (imagen && imgContent && !imgContent.querySelector(`#clon-${libro?.id}`)) {
      const clon = imagen.cloneNode(true) as HTMLImageElement;
      clon.className = "flex-1 w-78 h-88 max-[358px]:h-58 max-[358px]:w-48 object-cover rounded-t-md"
      clon.id = `clon-${libro?.id}`
      imgContent.appendChild(clon);
    }
    document.body.style.overflowY = "hidden"
    return () => {
      document.body.style.overflowY = "auto"
      const imagenClonada = document.getElementById(`clon-${libro?.id}`);
      if (imagenClonada) {
        imagenClonada.remove();
      }
    }
  },[])

  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-6  max-w-[90%] max-h-[90vh] overflow-auto rounded-lg shadow-lg">
        <div id="cabezero" className="flex justify-between mb-3">
          <h1 className="text-2xl font-bold">{libro?.titulo}</h1>
          <button className="cursor-pointer" onClick={() => showBook(false)}><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg></button>
        </div>
        <div id="content" className="flex justify-between gap-4 max-[684px]:flex-col max-[684px]:items-center">
          <div id="textContent" className="flex-1 min-h-[200px] max-w-[500px] overflow-hidden">
            <p>Autor: {libro?.autor}</p>
            <p>Fecha de publicacion: {libro?.publicacion}</p>
            <p>RESUMEN: {libro?.resumen}</p>
            <div className="flex items-center gap-2 p-1 mt-2 justify-center">
              <button className="bg-green-300 size-auto border rounded-full flex justify-center cursor-pointer"><svg className="size-8" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg></button>
              <button className="border rounded-full bg-red-400 px-3 text-2xl font-bold cursor-pointer">Descargar</button>
            </div>
          </div>
          <div id="imgContent"></div>
        </div>
      </div>
    </div>
  );
}