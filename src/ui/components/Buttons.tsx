
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

function ButtonMain ({ children }: { children: ReactNode }) {
  return (
      <button className="px-3 py-1 text-2 font-bold cursor-pointer lg:px-5 text-white bg-gray-900 border-gray-900 rounded-2xl hover:text-gray-900 hover:bg-white">
      {children}
    </button>
  )
}

export { Button, ButtonMain };