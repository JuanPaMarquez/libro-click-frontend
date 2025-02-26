
import { ReactNode } from 'react';

function Button ({ 
  className='text-gray-950', 
  children 
}:{ 
  className?: string, 
  children: ReactNode 
}) {
  return (
    <button className={`px-2 py-1 text-2 font-bold cursor-pointer lg:px-5 ${className}`}>
      {children}
    </button>
  )
}

function ButtonMain ({ children, className }: { children: ReactNode, className?: string }) {
  return (
      <button className={`px-3 py-1 text-2 font-bold cursor-pointer lg:px-5 text-white bg-gray-900 border-gray-900 rounded-2xl hover:text-gray-900 hover:bg-white ${className}`}>
      {children}
    </button>
  )
}

function ButtonLogin ({ 
  children, 
  type='button', 
  className='bg-blue-500 hover:bg-blue-600 text-white'
}:{ 
  children: ReactNode, 
  type?: "button" | "submit" | "reset", 
  className?: string 
}) {
  return (
    <button 
      type={type} 
      className={`w-60 h-9 rounded-2xl cursor-pointer ${className}`}
    >
      {children}
    </button>
  ) 
}

export { Button, ButtonMain, ButtonLogin };