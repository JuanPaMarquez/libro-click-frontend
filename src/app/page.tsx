import Carrusel from "@/ui/Carrusel/Carrusel";
import InfoProject from "@/ui/InfoProject";

export default function Home() {
  

  return (
    <div className="flex justify-center items-start gap-5 px-2 pt-3 max-[1054px]:flex-col max-[1054px]:items-center max-[1054px]:gap-1">
      <Carrusel />
      <InfoProject />
    </div>
  );
}
