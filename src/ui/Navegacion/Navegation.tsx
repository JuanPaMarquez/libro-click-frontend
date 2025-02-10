/* eslint-disable @next/next/no-img-element */
"use client"
import Link from "next/link";
import { ButtonMain } from "@/components/Buttons";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react"
import Categorias from "@/ui/Navegacion/Categorias";

export default function Navegation() {
  const [navOpen, setNavOpen] = useState(false);

  function handleNav() {
    setNavOpen(!navOpen);
  }
  
  return (
    <>
      <nav className="flex justify-between h-15 p-2 bg-blue-200">
          <div id="main" className="flex items-center">
            <Link href="/" className="flex items-center w-50">
              <button className="cursor-pointer">
                <img src="/logoNav.webp" className="rounded-2xl" width="200" height="43.72" alt=""/>
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
                onClick={handleNav}
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