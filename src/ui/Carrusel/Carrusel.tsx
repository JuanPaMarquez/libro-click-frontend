"use client"

import Image from "next/image"
import useInterval from "./useInterval"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { AnimatePresence } from "motion/react";
import { motion } from "framer-motion";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const MotionImage = motion.create(Image);

function CarruselContent() {
  const [loading, setLoading] = useState(true);
  const { 
    count, 
    carruselImg, 
    nextImage, 
    prevImage, 
    moveImage 
  } = useInterval();

  const url = useSearchParams().get("genero");

  if (url) {
    return null;
  }

  return (
    <div className="flex-3 relative h-auto w-auto max-w-[600px] aspect-[3/2] flex items-center justify-center overflow-hidden">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="animate-spin rounded-full h-10 w-10 border-4 border-black border-t-transparent"></span>
        </div>
      )}
      <AnimatePresence mode="wait">
        <MotionImage 
          key={count} 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
          transition={{ duration: 0.5 }}
          onLoad={() => setLoading(false)}
          // className="max-w-full h-auto object-cover"
          src={carruselImg[count]} width="2000" height="10" alt={`Carrusel ${count}`} />
      </AnimatePresence>
      <div className="absolute inset-0">
        <button onClick={prevImage}><FaArrowLeft className="size-12 max-[400px]:size-8 text-black hover:text-white hover:stroke-black stroke-white stroke-20 absolute left-0 top-[45%]" /></button>
        <button onClick={nextImage}><FaArrowRight className="size-12 max-[400px]:size-8 text-black hover:text-white hover:stroke-black stroke-white stroke-20 absolute right-0 top-[45%]"/></button>
      </div>
      <div id="indicador" className="absolute bottom-4 w-full flex justify-center">
        {
          carruselImg.map((_, i) => (
          <div 
            key={i} 
            onClick={() => moveImage(i)}
            className={`size-4 max-[400px]:size-3 rounded-full mx-1 cursor-pointer ${i === count ? "bg-blue-300 scale-125" : "bg-[rgb(151,151,151)]"}`}>
          </div>) ) 
        }
      </div>
    </div>
  )
}

export default function Carrusel() {
  return (
    <Suspense fallback={<p className="flex justify-center">Cargando...</p>}>
      <CarruselContent />
    </Suspense>
  );
}