import { categorias } from "@/utils/generos";
import { notFound } from "next/navigation";

// async function getProduct(id: string) {
//   const res = await fetch(`https://api.example.com/products/${id}`);
//   if (!res.ok) return notFound();
//   return res.json();
// }

export default async function GeneroPage({ params }: { params: { genero: string } }) {

  const { genero } = await params;
  console.log("path: ", genero)

  if (categorias.every((categoria) => categoria.link !== `/${genero}`) && genero !== "login") {
    console.log("not found")
    return notFound();
  }

  return (
    <div className="main flex flex-col justify-center items-center gap-6">
      <h1 className="text-2xl text-gray-950 font-bold">{genero}</h1>
    </div>
  );
}