"use client"
import Link from "next/link";
import Image from "next/image";
import { ButtonMain } from "@/ui/components/Buttons";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react"
import Categorias from "@/utils/Categorias";

export default function Navegation() {
  const [navOpen, setNavOpen] = useState(false);

  function handleNav() {
    setNavOpen(!navOpen);
  }
  
  return (
    <>
      <nav className="flex justify-between p-2 bg-blue-200">
          <div id="main" className="flex items-center">
            <Link href="/" className="flex items-center w-50">
              <button className="cursor-pointer">
                <Image src="/logoNav.webp" className="rounded-2xl" width={230} height={20} alt="" />
              </button>
            </Link>
          </div>
          <div id="nav" className="flex items-center max-[820]:hidden">
            <Categorias />
          </div>
          <div id="login" className="flex items-center max-[820]:hidden">
            <Link href="/login">
              <ButtonMain>Iniciar Sesión</ButtonMain>
            </Link>
          </div>
          <button className="min-[820px]:hidden cursor-pointer px-1" onClick={handleNav}>
            <TiThMenu className="size-7 text-black"/>
          </button>
          <AnimatePresence>
            {navOpen &&
              <motion.div key="modal" id="buttonNav"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}  
                className="p-3 bg-blue-200 flex flex-col gap-2 absolute top-13 right-0 min-[820px]:hidden"
              >
                <Categorias />
                <Link href="/login">
                  <ButtonMain>Iniciar Sesión</ButtonMain>
                </Link>
              </motion.div>
            }
          </AnimatePresence>
        </nav>
    </>
  )
}