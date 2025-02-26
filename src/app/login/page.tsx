/* eslint-disable @next/next/no-img-element */
"use client";
import { FiUser, FiLock } from "react-icons/fi";
import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { ButtonLogin } from "@/components/Buttons";
import { InputLogin } from "@/components/Inputs"

export default function LoginPage () {

  const [inputUser, setInputUser] = useState('')
  const [inputLock, setInputLock] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("usuario: ",inputUser ,"contraseña: ", inputLock); 
  }
  
  return (
    <div id="loginBackground" className="flex flex-col items-center justify-center bg-blue-400 h-screen">
      <div id="loginComponent" className="max-w-200 max-[560px]:max-w-80 w-full flex bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="flex-1 max-[560px]:hidden">
          <img className="w-full h-full object-cover" src="/imgLogin.webp" alt="image login" />
        </div>
        <div id="loginForm" className="flex-1 flex flex-col items-center justify-center gap-2 my-4">
          <img className="size-30" src="/accountLogo.webp" alt="" />
          <h1 className="text-2xl font-bold text-center m-4">Inicio Sesion</h1>
          <form action="" className="flex flex-col items-center gap-4" onSubmit={handleSubmit}>
            <div className="relative">
              <InputLogin 
                inputElement={inputUser}
                setInputElement={setInputUser}
                placeholder="Usuario"
                Icon={FiUser} 
              />
            </div>
            <div className="relative">
              <InputLogin 
                inputElement={inputLock}
                setInputElement={setInputLock}
                placeholder="Contraseña"
                type={showPassword ? "text" : "password"}
                Icon={FiLock} 
              />
              {inputLock !== '' && ( 
              <button 
                type='button'
                className='absolute top-2 right-2 cursor-pointer' 
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IoMdEye className="size-5" /> : <IoMdEyeOff className="size-5" /> }
              </button>)}
            </div>
            <ButtonLogin 
              type="submit"  
            >
              Ingresar
            </ButtonLogin>
          </form>
          <h2>¿No tienes Cuenta?</h2>
          <ButtonLogin 
            type="button"
            className="bg-blue-300 hover:bg-blue-200 text-black"
          >
            Crear Cuenta
          </ButtonLogin>
        </div>
      </div>
    </div>
  )
}