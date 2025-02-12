"use client"

import Image from "next/image"
import useInterval from "./useInterval"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { AnimatePresence } from "motion/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MotionImage = motion.create(Image);

export default function Carrusel() {
  const [loading, setLoading] = useState(true);
  const { count, carruselImg, nextImage, prevImage } = useInterval();

  useEffect(() => {
    setLoading(true);
  }, [count]);

  return (
    <div className="flex-3 relative h-auto w-auto max-w-[600px] aspect-[3/2] flex items-center justify-center">
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
          src={carruselImg[count]} width="2000" height="10" alt={`Carrusel ${count}`} />
      </AnimatePresence>
      <div className="absolute inset-0">
        <button onClick={prevImage}><FaArrowLeft className="size-12 text-black hover:text-white hover:stroke-black stroke-white stroke-20 absolute left-0 top-[45%]" /></button>
        <button onClick={nextImage}><FaArrowRight className="size-12 text-black hover:text-white hover:stroke-black stroke-white stroke-20 absolute right-0 top-[45%]"/></button>
      </div>
    </div>
  )
}