"use client"

import Image from "next/image"
import useInterval from "./useInterval"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { AnimatePresence } from "motion/react";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

export default function Carrusel() {
  const { count, carruselImg, nextImage, prevImage } = useInterval();

  return (
    <div className="flex-3 relative h-auto w-auto max-w-[600px]">
      <AnimatePresence mode="wait">
        <MotionImage 
          key={count} 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
          transition={{ duration: 0.5 }}
          src={carruselImg[count]} width="2000" height="10" alt={`Carrusel ${count}`} />
      </AnimatePresence>
      <div className="absolute inset-0">
        <button onClick={prevImage}><FaArrowLeft className="size-12 text-black hover:text-white hover:stroke-black stroke-white stroke-20 absolute left-0 top-[45%]" /></button>
        <button onClick={nextImage}><FaArrowRight className="size-12 text-black hover:text-white hover:stroke-black stroke-white stroke-20 absolute right-0 top-[45%]"/></button>
      </div>
    </div>
  )
}