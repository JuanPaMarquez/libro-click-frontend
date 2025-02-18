"use client"

import { AnimatePresence, motion } from "motion/react";
import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";

const textDiv = (
  <>
    <h1 className="text-2xl font-bold text-center max-[590px]:text-[20px]">Libro-Click</h1>
    <p className="text-md max-[590px]:text-sm">Libro-Click es una plataforma desarrollada con Next.js en el frontend y Node.js en el backend, con el objetivo de demostrar mis habilidades en el desarrollo web full-stack. Este proyecto no tiene fines comerciales ni de lucro; su propósito principal es servir como una muestra práctica de mis capacidades en el desarrollo de aplicaciones web modernas, optimizadas y escalables.</p>
    <p className="text-md max-[590px]:text-sm">El desarrollo de Libro-Click responde a la necesidad de contar con un proyecto realista en mi portafolio, que refleje mi dominio en el uso de tecnologías como React (Next.js), API REST con Node.js, manejo de bases de datos, autenticación de usuarios y despliegue en entornos productivos. A través de este proyecto, busco evidenciar mi capacidad para diseñar, implementar y optimizar soluciones tecnológicas siguiendo buenas prácticas y estándares de la industria.</p>
  </>
);

function InfoProjectContent() {
  const [infoOpen, setInfoOpen] = useState(false);

  const handleInfo = () => {
    setInfoOpen(!infoOpen);
  };

  const url = useSearchParams().get("genero");

  if (url) {
    return null;
  }

  return (
    <>
      <button 
        onClick={handleInfo} 
        className="min-[1054px]:hidden cursor-pointer bg-gray-900 text-center font-bold text-white h-6 w-full max-w-[600px]"
      >
        Libro-Click ...
      </button>
      <AnimatePresence>
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          key={infoOpen.toString()}
          className={`flex-1 w-auto max-w-[600px] min-[1054px]:hidden ${infoOpen ? 'block' : 'hidden'}`}
        >
          {textDiv}
        </motion.div>
      </AnimatePresence>
      <div className="flex-1 w-auto max-w-[600px] max-[1054px]:hidden">
        {textDiv}
      </div>
    </>
  );
}

export default function InfoProject() {
  return (
    <Suspense fallback={<p className="flex justify-center">Cargando...</p>}>
      <InfoProjectContent />
    </Suspense>
  );
}