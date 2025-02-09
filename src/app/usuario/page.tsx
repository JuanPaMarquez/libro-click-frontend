import { Button } from "@/ui/components/Buttons";
import Link from "next/link";

export default function UsuarioPage() {
  return (
    <div className="main flex flex-col justify-center items-center gap-6">
      <h1 className="text-blue-600 text-6xl font-bold text-center mt-5">Usuario</h1>
      <Link href="/">
        <Button>Atras</Button>
      </Link>
    </div>
  );
}